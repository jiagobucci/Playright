import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { realizarLogin } from '../authentication/login.helper';

test('Grau de Satisfacão', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.locator('a').filter({ hasText: 'Ocorrência' }).first().click();
  await page.locator('a').filter({ hasText: 'Grau de satisfação' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Grau de satisfação' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Grau de satisfação' }).fill('Calmo');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'save', exact: true }).click();
});

