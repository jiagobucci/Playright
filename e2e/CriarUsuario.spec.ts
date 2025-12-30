import { test, expect } from '@playwright/test';

test('Criar Usuário', async ({ page }) => {
  await page.goto('https://omni-qa-automacao.plusoftomni.com.br/');
  await page.getByRole('textbox', { name: ' Login' }).fill('qa');
  await page.getByRole('textbox', { name: ' Senha' }).fill('QA@123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.waitForTimeout(2000)
  await page.getByRole('link', { name: ' qa ' }).click();
  await page.getByRole('link', { name: ' Administrador' }).click();
  await page.getByRole('listitem', { name: 'Usuário', exact: true }).getByLabel('menu.group').click();
  await page.locator('a').filter({ hasText: 'Usuários' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: ' Novo' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Nome Completo' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Nome Completo' }).fill('Usuário Novo');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'Nome Completo' }).fill('Usuário Novo');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('#input-authentication-type').selectOption('B');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'E-Mail' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('textbox', { name: 'E-Mail' }).fill('teste@usuario8.com');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('#input-core_user-ds_loginname').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('#input-core_user-ds_loginname').fill('usernew8');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('#input-passwd').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('#input-passwd').fill('123456');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('#input-passwd-confirmation').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('#input-passwd-confirmation').fill('123456');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('select[name="f90457-t377922126501194"]').selectOption('1');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: ' Salvar' }).click();
  await page.waitForTimeout(3000)
  // Editando Usuário
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('input[name="c33543cb-c704-44d0-a20a-ed621aed7966"]').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('input[name="c33543cb-c704-44d0-a20a-ed621aed7966"]').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('input[name="f22471-t12883979411034032"]')
    .fill('Usuário Novo');
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: ' Buscar' }).click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('gridcell', { name: 'Usuário Novo' }).first().click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: '' }).first().click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    // Adicionar Time
    .locator('#id_new_team').click();
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .getByRole('button', { name: 'Nenhuma opção selecionada' }).click();
  // Selecionar os 3 primeiros
  //em loop
  await page.waitForTimeout(2000)
  for (let i = 0; i < 2; i++) {
    await page.frameLocator('iframe[name="frame_middle"]')
      .locator('li a label.checkbox input[type="checkbox"]').nth(i).click();
  }
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('label[for="input-crm_teamusers-id_teamusers"]').click()
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('#input-crm_teamusers-do_opportunityview').check()
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('#input-crm_teamusers-do_opportunityedit').check()
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('#input-crm_teamusers-do_resolve').check()
  await page.frameLocator('iframe[name="frame_middle"]')
    .locator('#input-crm_teamusers-do_opportunityadmin').check()
  // Salvar adição do time
  await page.locator('iframe[name="frame_middle"]').contentFrame()
    .locator('button[class="btn btn-sm btn-primary"]').click();

});


