import { test, expect } from '@playwright/test';

test('Apple Taiwan iPhone Shopping Flow', async ({ page }) => {
  // 1. 前往 Apple 官網
  await page.goto('https://www.apple.com/tw/');
  await expect(page).toHaveTitle(/Apple/);

  // 2. 點擊導覽列上的 "iPhone"
  await page.locator('.globalnav-link-iphone').click();
  
  // 驗證是否到達 iPhone 產品頁面
  await expect(page).toHaveURL(/iphone/);

  // 3. 尋找並點擊"購買" 按鈕
  await page.getByRole('link', { name: '購買' }).first().click();

  // 4. 驗證進入購買選擇頁面
  await expect(page).toHaveURL(/buy/);

  // 驗證測試流程是否成功到達了預期的頁面
  await expect(page.getByRole('heading', { name: /購買 iPhone/ }).first()).toBeVisible();
});
