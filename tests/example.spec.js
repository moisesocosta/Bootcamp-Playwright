// @ts-check
const { test, expect } = require('@playwright/test');

test('Teste de login com sucesso @login', async ({ page }) => {
  test.setTimeout(200000);
  await page.goto('https://automationpratice.com.br/');
  await page.screenshot({path: 'screenshot1.png'});
  await page.getByRole('link', { name: ' Login'}).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({path: 'screenshot2.png'});
  await page.getByRole('button', { name: 'Login'}).click();
  await page.getByRole('button', { name: 'OK'}).click();
});

test('Teste de login com sucesso 2 @cadastro', async ({ page }) => {
  test.setTimeout(20000);
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login'}).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'Login'}).click();
  await page.getByRole('button', { name: 'OK'}).click();
});

test('Teste de login com sucesso 3 @home', async ({ page }) => {
  test.setTimeout(20000);
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login'}).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'Login'}).click();
  await page.getByRole('button', { name: 'OK'}).click();
});
