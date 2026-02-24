import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { realizarLogin } from '../authentication/login.helper';

test('Motivo Encerramento', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.locator('a').filter({ hasText: 'Ocorrência' }).first().click();
  await page.locator('a').filter({ hasText: 'Motivos de encerramento' }).first().click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Motivo de encerramento' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Motivo de encerramento' }).fill('Pendente');
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#field-field-conclusiontext1555336638140').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#field-field-conclusiontext1555336638140').fill('Texto encerramento');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByText('O registro foi incluído com').click();
  });