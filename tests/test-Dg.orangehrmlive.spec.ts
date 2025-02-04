import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Username').fill('admin');
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Password').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').press('CapsLock');
  await page.getByPlaceholder('First Name').fill('Dixon');
  await page.getByPlaceholder('Middle Name').click();
  await page.getByPlaceholder('Middle Name').fill('');
  await page.getByPlaceholder('Middle Name').press('CapsLock');
  await page.getByPlaceholder('Middle Name').fill('Q');
  await page.getByPlaceholder('Middle Name').press('CapsLock');
  await page.getByPlaceholder('Middle Name').fill('Qa');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('');
  await page.getByPlaceholder('Last Name').press('CapsLock');
  await page.getByPlaceholder('Last Name').fill('P');
  await page.getByPlaceholder('Last Name').press('CapsLock');
  await page.getByPlaceholder('Last Name').fill('Prueba');
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first().click();
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first().fill('8484585');
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').nth(1).click();
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').nth(1).fill('969696');
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByRole('textbox').first().click();
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByRole('textbox').first().fill('3333333');
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByPlaceholder('yyyy-dd-mm').click();
  await page.getByText('18').click();
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button').click();
  await page.waitForTimeout(3000);



  await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[1]/div/div[2]/div/div[2]/input').clear();
  await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[1]/div/div[2]/div/div[2]/input').fill('04144875454');
  await page.waitForTimeout(1000);
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button').click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.waitForTimeout(3000);
  await page.locator('span').filter({ hasText: 'Dixon Prueba' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});