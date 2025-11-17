import { test, expect } from '@playwright/test';

test('Criar Grade de horário', async ({ page }) => {
  await page.goto('https://omni-qa-automacao.plusoftomni.com.br/#!/');
  await page.getByRole('textbox', { name: ' Login' }).fill('omni');
  await page.getByRole('textbox', { name: ' Senha' }).fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('link', { name: ' OMNI - Admin ' }).click();
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