import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
   import { realizarLogin } from '../authentication/login.helper'; // caminho relativo correto

test('Cadastrar Time', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.getByRole('listitem', { name: 'Usuário', exact: true }).getByLabel('menu.group').click();
  await page.locator('a').filter({ hasText: 'Times' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Time' }).fill('TIME QA');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('checkbox', { name: 'Time destinatário' }).check();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('checkbox', { name: 'Agrupador' }).check();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'save', exact: true }).click();
  await page.waitForTimeout(3000)
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Buscar' }).fill('time qa');
  await page.waitForTimeout(3000)
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'edit' }).first().click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'new', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Usuário').selectOption('number:2');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('checkbox', { name: 'Resolvedor' }).check();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('checkbox', { name: 'Ver' }).check();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('checkbox', { name: 'Editar' }).check();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('checkbox', { name: 'Responsável' }).check();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('dialog').getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByText('O registro foi incluído com').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByText('O registro foi atualizado com').click();
});