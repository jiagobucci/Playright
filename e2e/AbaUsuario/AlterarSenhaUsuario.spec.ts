import { test, expect } from '@playwright/test';
   import { realizarLogin } from '../authentication/login.helper'; // caminho relativo correto

test('AlterarUsuário', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.getByRole('listitem', { name: 'Usuário', exact: true })
  .getByLabel('menu.group').click();
  await page.locator('a').filter({ hasText: 'Usuários' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('input[name="f22471-t12883979411034032"]').fill('omni');
  await page.waitForTimeout(2000)
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: ' Buscar' }).click();
  await page.waitForTimeout(2000)
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: '' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .getByRole('button', { name: 'Definir senha' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#input-passwd').fill('123456');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#input-passwd-confirmation').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#input-passwd-confirmation').fill('123456');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('#input-passwd-expired').check();
  await page.waitForTimeout(3000)
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('button.btn.btn-sm.btn-primary[role="savepass"][accesskey="s"]').click();
  await page.waitForTimeout(2000)
  // await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: ' Salvar' }).nth(1).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
  .locator('button.btn.btn-primary[form-target="plusoftcrm.utils.forms.crm_user.list"][role="save"][accesskey="s"]')
  .click();

});