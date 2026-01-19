import { test, expect } from '@playwright/test';
import { realizarLogin } from './authentication/login.helper';

test('Criar Grade de horário', async ({ page }) => {
  await realizarLogin(page);
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.waitForTimeout(5000)
  await page.getByRole('listitem', { name: 'Calendário' }).getByLabel('menu.group').click();
  await page.locator('a').filter({ hasText: 'Grade de Horários' }).click();
  await page.waitForTimeout(4000)
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: ' Novo' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Descrição' }).fill('Grade de Horário');
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#week-id').selectOption('1');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora final' }).fill('1800');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: '' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#week-id').selectOption('2');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora Inicial' }).fill('0900');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora final' }).fill('1800');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: '' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#week-id').selectOption('3');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora Inicial' }).fill('0900');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora final' }).fill('1800');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: '' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#week-id').selectOption('4');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora Inicial' }).fill('0900');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora Inicial' }).press('Tab');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora final' }).fill('1800');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: '' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#week-id').selectOption('5');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora Inicial' }).fill('0900');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora final' }).fill('1800');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: '' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().locator('#week-id').selectOption('6');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora Inicial' }).fill('0900');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('textbox', { name: 'Hora final' }).fill('1800');
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: '' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame().getByRole('button', { name: ' Salvar' }).click();
});