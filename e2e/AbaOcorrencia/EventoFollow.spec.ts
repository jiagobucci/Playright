import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { realizarLogin } from '../authentication/login.helper';

test('Evento Follow up', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.locator('a').filter({ hasText: 'Ocorrência' }).first().click();
  await page.locator('a').filter({ hasText: 'Eventos de follow-up' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'new', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Evento de follow-up' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Evento de follow-up' }).fill('Evento QA');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Time').selectOption('number:1');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Responsável').selectOption('number:3');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Prazo' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Tipo de prazo').selectOption('string:D');
  await page.frameLocator('iframe[name="frame_middle"]').locator('#field-timetablekey').first().click;
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Texto padrão').selectOption('number:1');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Texto padrão').selectOption('number:2');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByText('O registro foi incluído com').click();
});