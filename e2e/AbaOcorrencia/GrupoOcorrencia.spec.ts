import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { realizarLogin } from '../authentication/login.helper';

test('Grupo tipo de Ocorrencia', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.locator('a').filter({ hasText: 'Ocorrência' }).first().click();
  await page.locator('a').filter({ hasText: 'Grupos de tipo de ocorrência' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: ' Novo' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Nenhuma opção selecionada').getByText('Nenhuma opção selecionada').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('option', { name: 'QA' }).first().click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Grupo de tipo de ocorrência' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Grupo de tipo de ocorrência' }).fill('QA');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'save', exact: true }).click();
  });