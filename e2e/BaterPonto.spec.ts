import { test, expect } from '@playwright/test';


// test('gera auth1.json', async ({ page }) => {
//   await page.goto('https://cliente.apdata.com.br/PLUSOFT/apdist/auth/login');

//   // 2. Preencha o login (ajuste para seu caso real)
//   await page.getByRole('button', { name: 'Aceitar todos' }).click();
//   await page.getByRole('button', { name: 'Entrar no portal' }).click();
//   await page.getByRole('textbox', { name: 'Insira o seu email, telefone' }).click();
//   await page.getByRole('textbox', { name: 'Insira o seu email, telefone' }).fill('jonathaniagobucci@plusoft.com');
//   await page.getByRole('textbox', { name: 'Insira o seu email, telefone' }).press('Tab');
//   await page.getByRole('button', { name: 'Avançar' }).click();
//   await page.getByRole('button', { name: 'Avançar' }).click();
//   await page.getByRole('textbox', { name: 'Insira a senha para' }).click();
//   await page.getByRole('textbox', { name: 'Insira a senha para' }).fill('Jbi@srp%2025');
//   await page.getByRole('button', { name: 'Entrar' }).click();

//   // 👇 IMPORTANTE: aguarde a aplicação carregar autenticada
//   await page.waitForURL('https://cliente.apdata.com.br/PLUSOFT/apdist/', {
//     timeout: 2000,
//   });

//   // 👇 Dê um tempo para os scripts criarem a sessão
//   await page.waitForLoadState('networkidle');

//   // Agora sim, a sessão da aplicação existe
//   await page.context().storageState({ path: 'e2e/auth1.json' });
// });

test('Bater Ponto', async ({ page }) => {
  await page.goto('https://cliente.apdata.com.br/PLUSOFT/apdist/auth/login');
  await page.getByRole('button', { name: 'Aceitar todos' }).click();
  await page.getByRole('button', { name: 'Entrar no portal' }).click();
  await page.getByRole('button', { name: 'Ponto & Escala' }).click();
  await page.getByRole('button', { name: 'Efetuar marcação' }).click();

});