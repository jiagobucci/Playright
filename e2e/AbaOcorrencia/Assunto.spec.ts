import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { realizarLogin } from '../authentication/login.helper';

test('Assunto', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.locator('a').filter({ hasText: 'Ocorrência' }).first().click();
  await page.locator('a').filter({ hasText: 'Assuntos' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: ' Novo' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#select2-field-casereasoncategoryid-container').getByText('Nenhuma opção selecionada').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('option', { name: 'QA' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Nenhuma opção selecionada').getByText('Nenhuma opção selecionada').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('option', { name: 'QA' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Assunto' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Assunto' }).fill('QA');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'save', exact: true }).click();
});