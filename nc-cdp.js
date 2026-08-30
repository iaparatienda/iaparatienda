const { chromium } = require('playwright');

(async () => {
  // Connect to existing Chrome via CDP
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const ctx = browser.contexts()[0];
  const page = await ctx.newPage();
  
  // Navigate to Namecheap DNS management
  await page.goto('https://www.namecheap.com/my-account/domains/iaparatienda.com/dns/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  console.log('URL:', page.url());
  console.log('Title:', await page.title());
  
  const body = await page.locator('body').innerText().catch(() => '');
  console.log('Body:', body.substring(0, 800));
  
  await page.screenshot({ path: '/tmp/nc-cdp.png' });
  await page.close();
  await browser.close();
  console.log('DONE');
})().catch(e => console.error('ERR:', e.message));
