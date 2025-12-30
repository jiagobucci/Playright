import { Page, expect } from '@playwright/test'

import { Link } from '../../support/fixtures/User'

export function getLinkActions(page: Page) {
    return {
        openModal: async () => {
            await page
                .getByRole('button', { name: 'Adicionar' })
                .first()
                .click()

            // Checkpoint para Garantir que o Modal foi exibido
            const modalTitle = page.getByRole('heading', { name: 'Adicionar Novo Link' })
            await expect(modalTitle).toBeVisible()
        },
        submitLinkForm: async (link: Link) => {
            await page
                .getByRole('textbox', { name: 'Nome do Link' })
                .fill(link.title)

            await page
                .getByRole('textbox', { name: 'URL' })
                .fill(link.url)

            await page
                .getByRole('button', { name: 'Adicionar Link' })
                .click({ force: true })
        }
    }
}