import { test, expect } from '@playwright/test';

test('Bater ponto', async ({ page }) => {
  await page.goto('https://plusoft-prd-197741.rm.cloudtotvs.com.br/FrameHTML/web/app/RH/PortalMeuRH/#/login');
  await page.getByRole('textbox', { name: 'Informe o seu usuário' }).click();
  await page.getByRole('textbox', { name: 'Informe o seu usuário' }).fill('jonathaniagobucci@plusoft.com');
  await page.getByRole('textbox', { name: 'Informe sua senha' }).click();
  await page.getByRole('textbox', { name: 'Informe sua senha' }).fill('Jbi@srp%25');
  await page.getByRole('button', { name: 'Entrar' }).click();

  // Navegar para bater ponto
  await page.getByRole('navigation').getByText('Ponto', { exact: true }).click();
  await page.getByRole('link', { name: 'Bater ponto' }).click();
  await page.getByRole('button', { name: 'Fechar' }).click();

  // Aguardar carregamento
  await page.waitForLoadState('networkidle');

  // Clicar no botão de bater ponto
  await page.locator('#btn-app-swipe-clocking-register').waitFor({ state: 'visible' });
  await page.waitForTimeout(1500);
  await page.locator('#btn-app-swipe-clocking-register').dblclick();

  // Aguardar confirmação
  await page.waitForSelector('text=Batida realizada', { timeout: 5000 });

  console.log('✓ Ponto registrado com sucesso!');
});


