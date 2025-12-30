import { test, expect } from '@playwright/test';

import { getAuthActions } from '../support/actions/auth'
import { getLinkActions } from '../support/actions/link';
import { getToast } from '../support/actions/components/Toast'

import { User, getUserWithLink, getUserWithLinks } from '../support/fixtures/User';

import { removeUserByUserName, insertUser, removeLinks } from '../support/database';

test('deve cadastrar um novo link', async ({ page }) => {

    const auth = getAuthActions(page)
    const link = getLinkActions(page)
    const toast = getToast(page)

    const user: User = getUserWithLink()
    await removeUserByUserName(user.username)
    await insertUser(user)

    await removeLinks('camila.dev')

    await auth.navigateToLogin()
    await auth.doLogin(user)

    if (user.links) {
        for (const l of user.links) {
            await link.openModal()
            await link.submitLinkForm(l)
            await toast.haveText('Sucesso!', 'Link adicionado com sucesso.')
        }
    }
})

test('deve cadastrar múltiplos links', async ({ page }) => {

    const auth = getAuthActions(page)
    const link = getLinkActions(page)
    const toast = getToast(page)

    const user: User = getUserWithLinks()
    await removeUserByUserName(user.username)
    await insertUser(user)

    await removeLinks('papito.dev')

    await auth.navigateToLogin()
    await auth.doLogin(user)

    if (user.links) {
        for (const l of user.links) {
            await link.openModal()
            await link.submitLinkForm(l)
            await toast.haveText('Sucesso!', 'Link adicionado com sucesso.')
            await page.press('body', 'Escape')
        }
    }

})