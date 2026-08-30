const { chromium } = require('playwright');
const fs = require('fs');
const USER = 'iaparatienda';
const PASS = '9#FS3tJ8Q=W_mrS';
const CODE = '96b7e4';

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  });
  const page = await ctx.newPage();

  await page.goto('https://www.namecheap.com/my-account/login/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  console.log('Page:', page.url());

  await page.evaluate(([u, p]) => {
    const user = document.querySelector('input[name="LoginUserName"]');
    const pass = document.querySelector('input[name="LoginPassword"]');
    if (user) { user.value = u; user.dispatchEvent(new Event('input', {bubbles:true})); }
    if (pass) { pass.value = p; pass.dispatchEvent(new Event('input', {bubbles:true})); }
  }, [USER, PASS]);

  await page.evaluate(() => document.querySelector('form')?.submit());
  await page.waitForTimeout(6000);
  console.log('After login:', page.url());

  if (page.url().includes('twofa') || page.url().includes('device')) {
    await page.evaluate((c) => {
      const inputs = document.querySelectorAll('input[type="text"], input[type="tel"], input:not([type="hidden"]):not([type="password"])');
      for (const i of inputs) {
        if (i.name && (i.name.includes('code') || i.name.includes('Code'))) {
          i.value = c; i.dispatchEvent(new Event('input', {bubbles:true}));
        }
      }
      // fallback: first visible text input
      const vis = [...document.querySelectorAll('input:visible')].find(i => i.type === 'text' || i.type === 'tel');
      if (vis) { vis.value = c; vis.dispatchEvent(new Event('input', {bubbles:true})); }
    }, CODE);
    await page.evaluate(() => {
      const btn = [...document.querySelectorAll('button, input[type=submit]')].find(b => (b.textContent||b.value||'').includes('Submit'));
      if (btn) btn.click();
    });
    await page.waitForTimeout(5000);
    console.log('After 2FA:', page.url());
  }

  // Try to get to DNS page
  await page.goto('https://www.namecheap.com/my-account/domains/iaparatienda.com/dns/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  console.log('DNS page:', page.url(), await page.title());
  const body = await page.locator('body').innerText().catch(() => '');
  console.log('Body:', body.substring(0, 500));

  fs.writeFileSync('/tmp/nc-cookies.json', JSON.stringify(await ctx.cookies(), null, 2));
  await page.screenshot({ path: '/tmp/nc-result.png' });
  await browser.close();
  console.log('DONE');
})().catch(e => console.error('ERR:', e.message));
