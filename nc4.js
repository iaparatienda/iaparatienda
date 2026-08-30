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

  // Go to homepage (login form is embedded)
  await page.goto('https://www.namecheap.com/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  console.log('Home:', page.url());

  // Fill embedded login form
  await page.evaluate(([u, p]) => {
    const user = document.querySelector('input[name="LoginUserName"]');
    const pass = document.querySelector('input[name="LoginPassword"]');
    if (user) { user.value = u; user.dispatchEvent(new Event('input', {bubbles:true})); }
    if (pass) { pass.value = p; pass.dispatchEvent(new Event('input', {bubbles:true})); }
  }, [USER, PASS]);
  console.log('Credentials filled');

  // Submit
  await page.evaluate(() => {
    const form = document.querySelector('form');
    if (form) form.submit();
  });
  await page.waitForTimeout(8000);
  console.log('After submit:', page.url());

  // Handle 2FA
  const body1 = await page.locator('body').innerText().catch(() => '');
  if (body1.includes('Verification Code') || body1.includes('verification code') || page.url().includes('twofa') || page.url().includes('device')) {
    console.log('2FA detected, entering code');
    await page.evaluate((c) => {
      // Find the verification code input
      const all = document.querySelectorAll('input');
      for (const i of all) {
        if (i.type === 'hidden' || i.type === 'password') continue;
        if (i.name && (i.name.toLowerCase().includes('code') || i.name.toLowerCase().includes('otp'))) {
          i.value = c;
          i.dispatchEvent(new Event('input', {bubbles:true}));
          return;
        }
      }
      // Fallback: visible text/tel input that isn't the search bar
      const vis = [...document.querySelectorAll('input')].filter(i => 
        (i.type === 'text' || i.type === 'tel') && i.offsetParent !== null && !i.placeholder?.includes('domain')
      );
      if (vis.length > 0) {
        vis[0].value = c;
        vis[0].dispatchEvent(new Event('input', {bubbles:true}));
      }
    }, CODE);
    
    // Click Submit
    await page.evaluate(() => {
      const btns = [...document.querySelectorAll('button, input[type=submit], a')];
      const sub = btns.find(b => (b.textContent || b.value || '').trim().startsWith('Submit'));
      if (sub) sub.click();
    });
    await page.waitForTimeout(6000);
    console.log('After 2FA:', page.url(), await page.title());
  }

  // Navigate to DNS
  await page.goto('https://www.namecheap.com/my-account/domains/iaparatienda.com/dns/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  console.log('DNS:', page.url(), await page.title());
  const body2 = await page.locator('body').innerText().catch(() => '');
  console.log('DNS body:', body2.substring(0, 600));

  fs.writeFileSync('/tmp/nc-cookies.json', JSON.stringify(await ctx.cookies(), null, 2));
  await page.screenshot({ path: '/tmp/nc-dns.png' });
  await browser.close();
  console.log('DONE');
})().catch(e => console.error('ERR:', e.message));
