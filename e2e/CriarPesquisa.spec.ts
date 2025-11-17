import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('test', async ({ page }) => {
  await page.goto('https://omni-qa-automacao.plusoftomni.com.br/#!/');
  await page.getByRole('textbox', { name: ' Login' }).click();
  await page.getByRole('textbox', { name: ' Login' }).fill('qa');
  await page.getByRole('textbox', { name: ' Login' }).press('Tab');
  await page.getByRole('textbox', { name: ' Senha' }).fill('QA@123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.waitForTimeout(2000)
  await page.locator('a').filter({ hasText: 'Pesquisa' }).first().click();
  await page.locator('a').filter({ hasText: 'Pesquisa' }).nth(1).click();
  await page.waitForTimeout(1000)

  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: ' Novo' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('textbox', { name: 'Descrição da Pesquisa' }).fill('Pesquisa QA');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: ' Salvar' }).click();
  await page.waitForTimeout(2000)
  
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('link', { name: 'Detalhes' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#dtStartDetail').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('cell', { name: '14' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#dtEndDetail').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('cell', { name: '28' }).nth(1).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#dtEndDetail').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#dtEndDetail').fill('28/11/2029');
  await page.frameLocator('iframe[name="frame_middle"]')
  .locator('input[name="multiple_answers"]').click()
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: ' Salvar' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: 'Preview' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading')).toContainText('Pesquisa QA');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('link', { name: 'Detalhes' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: ' Salvar' }).click();
});

