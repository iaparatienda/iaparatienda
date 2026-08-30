const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'] 
  });
  const ctx = await browser.newContext({ 
    viewport: { width: 1280, height: 800 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  });
  const page = await ctx.newPage();
  
  // Go directly to login page
  await page.goto('https://www.namecheap.com/my-account/login/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  console.log('Login page:', page.url(), await page.title());
  
  // Fill credentials via JS (bypass visibility)
  await page.evaluate(() => {
    const user = document.querySelector('input[name="LoginUserName"]');
    const pass = document.querySelector('input[name="LoginPassword"]');
    if (user) { user.value = 'iapa
</think>

<tool_call>
<function=bash>
<parameter=command>
ssh iaparatienda "cd ~/iaparatienda && timeout 60 node nc-full.js" 2>&1