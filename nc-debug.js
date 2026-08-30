const { chromium } = require('playwright');

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
  
  // Try the direct login URL
  await page.goto('https://www.namecheap.com/member/login/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  console.log('URL:', page.url());
  console.log('Title:', await page.title());
  
  // Check for login form
  const form = await page.evaluate(() => {
    const forms = document.querySelectorAll('form');
    return [...forms].map(f => ({
      action: f.action,
      method: f.method,
      inputs: [...f.querySelectorAll('input')].map(i => ({
        type: i.type, name: i.name, id: i.id, visible: i.offsetParent !== null
      }))
    }));
  });
  console.log('Forms:', JSON.stringify(form, null, 2));
  
  // Also check all visible inputs on the page
  const allInputs = await page.evaluate(() => {
    return [...document.querySelectorAll('input')].map(i => ({
      type: i.type, name: i.name, id: i.id, 
      visible: i.offsetParent !== null,
      ph: i.placeholder
    }));
  });
  console.log('All inputs:', JSON.stringify(allInputs, null, 2));
  
  await page.screenshot({ path: '/tmp/nc-debug.png' });
  await browser.close();
  console.log('DONE');
})().catch(e => console.error('ERR:', e.message));
