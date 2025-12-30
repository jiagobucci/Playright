import { faker } from '@faker-js/faker'

export interface User {
    name: string
    username: string
    email: string
    password: string
    confirmPassword: string,
    links?: Link[]
}

export interface Link {
    title: string
    url: string
}

export function getFakeUser() {
    const defaultPassword = 'pwd123'

    return {
        name: faker.person.fullName(),
        username: faker.internet.username().replace('.', ''),
        email: faker.internet.email(),
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}

export function getNewUser() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Papito Fernando',
        username: 'fernando',
        email: 'fernando@papito.dev',
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}

export function getDuplicateUser() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Bruno',
        username: 'bruno',
        email: 'bruno@bruno.dev',
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}

export function getDuplicateEmail() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Augusto Smith',
        username: 'augustosmith',
        email: 'smith@augusto.dev',
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}

export function getLoginUser() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Fernando Papito',
        username: 'papito',
        email: 'papito@link.ai',
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}

export function getUserWithLink() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Camila dos Santos',
        username: 'camila',
        email: 'camila@link.ai',
        password: defaultPassword,
        confirmPassword: defaultPassword,
        links: [{
            title: 'Meus Cursos', url: 'https://camila.dev/cursos'
        }]
    }
}

export function getUserWithLinks() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Papito Fernando',
        username: 'papitofernando',
        email: 'eu@papito.dev',
        password: defaultPassword,
        confirmPassword: defaultPassword,
        links: [
            { title: 'Meus Cursos', url: 'https://papito.dev/cursos', },
            { title: 'Meu Blog', url: 'https://papito.dev/blog', },
            { title: 'Fale Comigo', url: 'https://papito.dev/contato', },
            { title: 'Minhas Musicas', url: 'https://papito.dev/playlist', },
            { title: 'Outro Link', url: 'https://papito.dev/outro-link', }
        ]
    }
}

export function getUserWithSocialMedia() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Jon Bon Jovi',
        username: 'bonjovi',
        email: 'jon@bonjovi.com',
        password: defaultPassword,
        confirmPassword: defaultPassword,
        socialMedia: {
            github: 'bonjovi',
            linkedin: 'bonjovi',
            instagram: 'bonjovi'
        }
    }
}