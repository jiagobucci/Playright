import { test, expect, Page, Frame } from '@playwright/test';
import { realizarLogin } from './authentication/login.helper';



test('Automação de Atendimento', async ({ page }) => {
    await realizarLogin(page);
    await page.waitForTimeout(4000);


    // Frame do botão "Novo Atendimento"
    await page.frameLocator('iframe[name="frame_middle"]')
        .locator('#btn-new-ticket').click();
    await page.waitForTimeout(4000);

    // Selecionando frame de identificação
    await page.frameLocator('#f_rt_0').locator('#btn-person-identification').click();
    await page.waitForTimeout(3000);
    await page.frameLocator('#f_rt_0')
        .locator('#txt-person-description').fill('Jonathan');
    await page.frameLocator('#f_rt_0')
        .locator('#btn-search-person').click();
    await page.waitForTimeout(3000);
    await page.frameLocator('#f_rt_0')
        .locator('tr:nth-of-type(1) > .sorting_1').click();
    await page.waitForTimeout(3000);
    await page.locator('iframe[name="f_rt_0"]').contentFrame().getByRole('button', { name: 'btn-save-ticket' }).click();
    await page.locator('iframe[name="f_rt_0"]').contentFrame().getByRole('button', { name: 'btn-more' }).click();
    await page.locator('iframe[name="f_rt_0"]').contentFrame().getByLabel('Ocorrência').click();
    await page.waitForTimeout(2000);
    await page.locator('iframe[name="f_rt_0"]').contentFrame().locator('iframe[name="iframe_tab_1"]')
        .contentFrame().getByRole('link', { name: 'Dados da ocorrência' }).click();
    await page.waitForTimeout(2000);
    await page.locator('iframe[name="f_rt_0"]').contentFrame().locator('iframe[name="iframe_tab_1"]')
        .contentFrame().locator('#select2-input-crm_case-id_casereasoncategory-container').click();
    await page.locator('iframe[name="f_rt_0"]').contentFrame().locator('iframe[name="iframe_tab_1"]')
        .contentFrame().getByRole('option', { name: 'Categoria de assunto' }).click();
    await page.locator('iframe[name="f_rt_0"]').contentFrame().locator('iframe[name="iframe_tab_1"]')
        .contentFrame().locator('#select2-cmb-case-casetypemain-container').getByText('Nenhuma opção selecionada').click();
    await page.waitForTimeout(1000);
    await page.locator('iframe[name="f_rt_0"]').contentFrame().locator('iframe[name="iframe_tab_1"]')
        .contentFrame().getByRole('option', { name: 'Tipo de ocorrência' }).click();
    await page.locator('iframe[name="f_rt_0"]').contentFrame().locator('iframe[name="iframe_tab_1"]')
        .contentFrame().getByRole('button', { name: 'btn-save-auto' }).click();
    await page.locator('iframe[name="f_rt_0"]').contentFrame().getByRole('button', { name: 'btn-stop-ticket' }).click();
    await page.locator('iframe[name="f_rt_0"]').contentFrame().getByRole('button', { name: ' Confirmar' }).click();
});    
