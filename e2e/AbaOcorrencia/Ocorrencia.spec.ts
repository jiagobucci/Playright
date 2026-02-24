import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { realizarLogin } from '../authentication/login.helper';

test('Ocorrencia', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.locator('a').filter({ hasText: 'Ocorrência' }).first().click();
  await page.locator('a').filter({ hasText: 'Ocorrências' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: ' Novo' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#select2-field-casetypemainid-container').getByText('Nenhuma opção selecionada').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('option', { name: 'QA', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Nenhuma opção selecionada').getByText('Nenhuma opção selecionada').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('option', { name: 'QA', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Ocorrência' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Ocorrência' }).fill('QA');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Time').selectOption('number:1');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Responsável').selectOption('number:3');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Evento de follow-up').selectOption('number:2');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Tempo de resolução' }).fill('2');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Tempo de resolução' }).click()
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Período').selectOption('string:D');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByLabel('Grade de horários').selectOption('string:0101b19d-1472-e5be-ee18-042099ccb9aa');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: 'save', exact: true }).click();
});