import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { realizarLogin } from '../authentication/login.helper';

test('Tipo Ocorrencia', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.locator('a').filter({ hasText: 'Ocorrência' }).first().click();
  await page.locator('a').filter({ hasText: 'Tipos de ocorrência' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Tipo de ocorrência' }).fill('QA');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByText('O registro foi incluído com').click();
});