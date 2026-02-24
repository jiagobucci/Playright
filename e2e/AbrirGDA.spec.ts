import { test, expect } from '@playwright/test';

// test('gera auth.json', async ({ page }) => {
//   await page.goto('https://plusoft-itsm.inpaas.com');

//   // 2. Preencha o login (ajuste para seu caso real)
//   await page.getByRole('button', { name: 'Acessar com conta Office 365' }).click();
//   await page.fill('#i0116', 'jonathaniagobucci@plusoft.com');
//   await page.fill('#i0118', 'Jbi@srp%2025');
//   await page.waitForTimeout(2000)
//   await page.click('#idSIButton9');

//   // 👇 IMPORTANTE: aguarde a aplicação carregar autenticada
//   await page.waitForURL('https://plusoft-itsm.inpaas.com/**', {
//     timeout: 45000,
//   });

//   // 👇 Dê um tempo para os scripts criarem a sessão
//   await page.waitForLoadState('networkidle');

//   // Agora sim, a sessão da aplicação existe
//   await page.context().storageState({ path: 'e2e/auth.json' });
// });


test('Acesso autenticado', async ({ page }) => {
  await page.goto('https://plusoft-itsm.inpaas.com');
  await page.getByRole('button', { name: 'Acessar com conta Office 365' }).click();
  await page.waitForTimeout(3000)
  await page.frameLocator('iframe[name="frame_middle"]')
  await page.getByText('Gestão de acessos').click();
  await page.waitForLoadState('networkidle');
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('button.btn.btn-lg.btn-success.btn-labeled.ng-scope').click();
  await page.waitForLoadState('networkidle');
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('#field-title').fill('Acesso GDA');
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('#field-field_string_454707').fill('assurant-preprod');
  await page.waitForTimeout(2000);
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('a.dropdown-toggle[data-uib-dropdown-toggle=""]').click();
  await page.waitForTimeout(500);
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('#fieldForm-field-5935611485485').fill('omni');
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('a:has-text("OMNI")').click();
  await page.waitForTimeout(2000);
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('button#saveBtnDeskSave').first().click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByText('O registro foi incluído com sucesso').click();
  console.log('✅ GDA criado com sucesso!');
});



