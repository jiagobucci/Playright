import { test, expect } from '@playwright/test';
import { test as setup } from '@playwright/test';
import path from 'path';

// // Caminho do arquivo correto para o storageState JSON
// const authFile = path.join(__dirname, 'auth.json');

// setup('autenticando o login manualmente', async ({ page }) => {
//   await page.goto('https://plusoft-itsm.inpaas.com');
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Acessar com conta Office 365' }).click();

//   // Login Microsoft
//   await page.fill('#i0116', 'jonathaniagobucci@plusoft.com');
//   await page.click('#idSIButton9');
//   await page.fill('#i0118', 'Jbi@srp%25');
//   await page.click('#idSIButton9');

//   await page.waitForTimeout(4000);

//   // Pause para aprovar 2FA manualmente
//   await page.pause();

//   // Espera a URL final aparecer (ajuste o timeout maior, caso necessário)
//   await page.waitForURL('**/dynamiciframe**', { timeout: 30000 });

//   // Salva o contexto autenticado em formato JSON
//   await page.context().storageState({ path: authFile });
//   console.log('Autenticacao realizada com sucesso!');
// });


// Passa o storageState para todos os testes deste arquivo

test('Acesso autenticado', async ({ page, context }) => {
  // Já vai abrir autenticado!
  await page.goto('https://plusoft-itsm.inpaas.com');

  await page.getByRole('button', { name: 'Acessar com conta Office 365' }).click();
  await page.waitForTimeout(1000)
  await page.locator('a >> text=Gestão de acessos').first().click();
  await page.waitForLoadState('networkidle');
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('button.btn.btn-lg.btn-success.btn-labeled.ng-scope')
    .click();
  await page.waitForLoadState('networkidle');
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('#field-title').fill('Acesso GDA');
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('#field-field_string_454707').fill('omni-qa4');
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



