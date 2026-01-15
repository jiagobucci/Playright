import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { realizarLogin } from './authentication/login.helper';

test('Cadastrar Itens Aba Pessoa ADM', async ({ page }) => {
  await realizarLogin(page);
  // await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.waitForTimeout(2000)
  await page.locator('a').filter({ hasText: 'Pessoa' }).first().click();
  await page.waitForTimeout(1000)
  await page.locator('a').filter({ hasText: 'Cargos' }).click();
  await page.waitForTimeout(2000)
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Cargo' }).fill('Cargo');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Profissões' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Profissão' }).fill('Profissão');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Estado Civil' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Estado civil' }).fill('Estado Civil');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Relações entre as pessoas' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Relação entre as pessoas' }).fill('Boa');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Formas de tratamento' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Tratamento' }).fill('Sr');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Tratamento' }).fill('Sra');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Segmentos empresarial' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Segmento empresarial' }).fill('Segmento');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Tipos de público' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Tipo de público' }).fill('Tipo de Público');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('checkbox', { name: 'Visível em pessoa' }).check();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('checkbox', { name: 'Visível em contato' }).check();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Pessoas não identificadas' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Pessoa não identificada' }).fill('1');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Pessoa', exact: true }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Pessoa', exact: true }).fill('Pessoa')
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Tipos de origem' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Tipo de origem' }).fill('Novo');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Status' }).first().click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Status' }).fill('Status');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Status' }).press('Enter');
  await page.locator('a').filter({ hasText: 'Classificações' }).first().click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Classificação' }).fill('Classificação');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Classificação' }).fill('Classificação');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Portes' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'new' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Porte' }).fill('Porte');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'save', exact: true }).click();
});