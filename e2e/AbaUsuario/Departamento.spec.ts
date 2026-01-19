import { test, expect } from '@playwright/test';
   import { realizarLogin } from '../authentication/login.helper'; // caminho relativo correto

test('Departamento', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.waitForTimeout(2000)
  await page.getByRole('listitem', { name: 'Usuário', exact: true }).getByLabel('menu.group').click();
  await page.locator('a').filter({ hasText: 'Departamentos' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('textbox', { name: 'Departamento' }).fill('Departamento');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('textbox', { name: 'Buscar' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('textbox', { name: 'Buscar' }).fill('');
  await page.locator('iframe[name="frame_middle"]')
  .contentFrame().locator('#cmb-finder-key').selectOption('b4fe505e-0cb4-4b8d-8ace-6860e1cacde2');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#cmb-finder-key').selectOption('e534b534-9a08-450a-abca-a6a8d4f5d6dd');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#cmb-finder-key').selectOption('4887ff34-ef9b-4bb8-8a49-0a087c9b08c1');
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#cmb-finder-key')
  .selectOption('e534b534-9a08-450a-abca-a6a8d4f5d6dd');
});