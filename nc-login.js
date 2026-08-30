const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'] 
  });
  const ctx = await browser.newContext({ 
    viewport: { width: 1280, height: 800 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  });
  const page = await ctx.newPage();
  
  await page.goto('https://www.namecheap.com/my-account/login/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(5000);
  
  // List visible inputs for debugging
  const inputs = await page.locator('input:visible').all();
  console.log('--- Visible inputs ---');
  for (const inp of inputs) {
    const type = await inp.getAttribute('type');
    const name = await inp.getAttribute('name');
    const id = await inp.getAttribute('id');
    const ph = await inp.getAttribute('placeholder');
    console.log(`  type=${type} name=${name} id=${id} ph=${ph}`);
  }
  
  // Try filling email/username
  let filled = false;
  const selectors = [
    '#gb-signin-username-input',
    'input[name="LoginEmail"]',
    'input[name*="mail" i]',
    'input[name*="user" i]',
    'input[type="email"]',
  ];
  for (const sel of selectors) {
    const el = page.locator(sel).first();
    if (await el.count() > 0) {
      await el.fill('iaparatienda').catch(() => {});
      filled = true;
      console.log('Filled email with selector:', sel);
      break;
    }
  }
  if (!filled) {
    // Force via JS
    await page.evaluate(() => {
      const inputs = document.querySelectorAll('input');
      for (const i of inputs) {
        if (i.type === 'email' || (i.name && i.name.includes('mail'))) {
          i.value = 'iaparatienda';
          i.dispatchEvent(new Event('input', {bubbles: true}));
          i.dispatchEvent(new Event('change', {bubbles: true}));
        }
      }
    });
    console.log('Force-filled email via JS');
  }
  
  // Fill password
  await page.evaluate(() => {
    const p = document.querySelector('input[type="password"]');
    if (p) {
      p.value = '9#FS3tJ8Q=W_mrS';
      p.dispatchEvent(new Event('input', {bubbles: true}));
      p.dispatchEvent(new Event('change', {bubbles: true}));
    }
  });
  console.log('Force-filled password via JS');
  
  // Click submit
  await page.evaluate(() => {
    const btn = document.querySelector('button[type="submit"]') || 
                document.querySelector('input[type="submit"]') ||
                [...document.querySelectorAll('button')].find(b => b.textContent.includes('Sign'));
    if (btn) btn.click();
  });
  console.log('Clicked submit');
  
  await page.waitForTimeout(6000);
  
  console.log('Final URL:', page.url());
  console.log('Final title:', await page.title());
  
  // Check if we landed somewhere useful
  const body = await page.locator('body').innerText().catch(() => '');
  console.log('Body excerpt:', body.substring(0, 400));
  
  await page.screenshot({ path: '/tmp/nc-result.png' });
  await browser.close();
  console.log('DONE');
})().catch(e => console.error('ERR:', e.message));
