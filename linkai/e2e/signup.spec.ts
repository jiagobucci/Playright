import { test } from '@playwright/test'

import { getToast } from '../support/actions/components/Toast'

import { getAuthActions } from '../support/actions/auth'

import { removeUserByEmail, insertUser, removeUserByUserName } from '../support/database'

import { User, getNewUser, getDuplicateUser, getDuplicateEmail } from '../support/fixtures/User'

test('deve cadastrar um novo usuário com sucesso', async ({ page }) => {

    const auth = getAuthActions(page)
    const toast = getToast(page)

    const user: User = getNewUser()
    await removeUserByEmail(user.email)

    await auth.navigateToSignup()
    await auth.fillSignupForm(user)
    await auth.submitSignupForm()
    await auth.verifyUserLogin(user)

    await toast.haveText(
        'Conta criada com sucesso!',
        'Bem-vindo ao Linkaí. Agora você pode criar seu perfil.'
    )
})

test('não deve cadastrar quando o email já estiver em uso', async ({ page }) => {

    const auth = getAuthActions(page)
    const toast = getToast(page)

    const user: User = getDuplicateEmail()
    await removeUserByEmail(user.email)
    await insertUser(user)

    await auth.navigateToSignup()
    await auth.fillSignupForm({ ...user, username: 'bruno123' })
    await auth.submitSignupForm()

    await toast.haveText(
        'Oops!',
        'Parece que esse e-mail ou nome de usuário já foi cadastrado. Tente outro, por favor.'
    )
})

test('não deve cadastrar quando o username já estiver em uso', async ({ page }) => {

    const auth = getAuthActions(page)
    const toast = getToast(page)

    const user: User = getDuplicateUser()
    await removeUserByUserName(user.username)
    await insertUser(user)

    await auth.navigateToSignup()
    await auth.fillSignupForm({ ...user, email: 'bruno@teste.com.br' })
    await auth.submitSignupForm()

    await toast.haveText(
        'Oops!',
        'Parece que esse e-mail ou nome de usuário já foi cadastrado. Tente outro, por favor.'
    )
})

test('não deve cadastrar quando nenhum campo é informando', async ({ page }) => {
    const auth = getAuthActions(page)
    const toast = getToast(page)

    await auth.navigateToSignup()
    await auth.submitSignupForm()

    await toast.haveText(
        'Campos obrigatórios',
        'Por favor, preencha todos os campos.'
    )
})

test('não deve cadastrar quando o email for incorreto', async ({ page }) => {
    const auth = getAuthActions(page)

    const user: User = {
        name: 'Fernando',
        username: 'fernando',
        email: 'www.teste.com.br',
        password: 'abc123',
        confirmPassword: 'abc123'
    }

    await auth.navigateToSignup()
    await auth.fillSignupForm(user)
    await auth.submitSignupForm()

    await auth.validateEmailFieldType()
})

test('não deve cadastrar quando o username é incorreto', async ({ page }) => {
    const auth = getAuthActions(page)
    const toast = getToast(page)

    const user: User = {
        name: 'Fernando',
        username: 'fernando&papito',
        email: 'papito@papito.com.br',
        password: 'abc123',
        confirmPassword: 'abc123'
    }

    await auth.navigateToSignup()
    await auth.fillSignupForm(user)
    await auth.submitSignupForm()

    await toast.haveText(
        'Username inválido',
        'O username deve conter apenas letras, números e underscores.'
    )
})

test('não deve cadastrar as senhas não são iguais', async ({ page }) => {
    const auth = getAuthActions(page)
    const toast = getToast(page)

    const user: User = {
        name: 'Fernando',
        username: 'fernando_papito',
        email: 'papito@papito.com.br',
        password: 'pwd123',
        confirmPassword: '123pwd'
    }

    await auth.navigateToSignup()
    await auth.fillSignupForm(user)
    await auth.submitSignupForm()

    await toast.haveText(
        'Senhas não coincidem',
        'A confirmação de senha deve ser igual à senha.'
    )
})
