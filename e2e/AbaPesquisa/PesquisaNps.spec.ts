import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { realizarLogin } from '../authentication/login.helper';


test('Criando Pesquisa NPS', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.locator('a').filter({ hasText: 'Pesquisa' }).first().click();
  await page.locator('a').filter({ hasText: 'Pesquisa NPS' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: ' Novo' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Descrição da Pesquisa' }).fill('Pesquisa NPS');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: ' Salvar' }).click();
  await page.waitForTimeout(1000)
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByText('Editar Pergunta').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('iframe[title="Editor de Rich Text, editor1"]').contentFrame().locator('html').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('iframe[title="Editor de Rich Text, editor1"]')
    .contentFrame().locator('body').fill('Pergunta NPS');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('iframe[title="Editor de Rich Text, editor1"]').contentFrame().locator('html').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: ' Salvar' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('#dtStartDetail').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('cell', { name: '22' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('#dtEndDetail').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByTitle('Next Month').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('cell', { name: '28' }).nth(1).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('.col-xs-6.col-sm-3').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('radio').nth(1).check();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: ' Salvar' }).click();
    await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('gridcell', { name: 'Código: Ordenar colunas de' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('gridcell', { name: 'Código: Ordenar colunas de' }).click();
  await page.frameLocator('iframe[name="frame_middle"]').locator( '#btn-edit' ).nth(1).click()
  await page.getByText('As informações foram salvas com sucesso.').click()
  await page.waitForTimeout(2000);
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'Publicar' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: ' Confirmar' }).click();
  await expect(page.getByText('Script de catálogo finalizado')).toBeVisible();
  await page.getByText('Script de entidades').click();
  await page.getByText('Iniciando procedimentos de').click();
  await page.locator('div').filter({ hasText: 'Script de catálogo finalizado' }).nth(3).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: ' Salvar' }).click();
});
