import { Page } from '@playwright/test';
import { loginConfig } from './login.config';

export async function realizarLogin(page: Page) {
  await page.goto(loginConfig.url);

  await page.getByRole('textbox', { name: ' Login' }).fill(loginConfig.usuario);
  await page.getByRole('textbox', { name: ' Senha' }).fill(loginConfig.senha);
  await page.getByRole('button', { name: 'login' }).click();

   
  await page.waitForLoadState('networkidle');
}
