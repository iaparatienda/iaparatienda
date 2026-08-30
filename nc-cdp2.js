const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const ctx = browser.contexts()[0];
  const page = await ctx.newPage();
  
  // Check cookies for namecheap
  const cookies = await ctx.cookies('https://www.namecheap.com');
  console.log('Namecheap cookies:', cookies.length);
  for (const c of cookies.slice(0, 10)) {
    console.log(' ', c.name, c.domain, c.value?.substring(0, 20));
  }
  
  // Try navigating with shorter timeout
  await page.goto('https://www.namecheap.com/my-account/domains/iaparatienda.com/dns/', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(3000);
  console.log('URL:', page.url());
  console.log('Title:', await page.title());
  const body = await page.locator('body').innerText().catch(() => '');
  console.log('Body:', body.substring(0, 500));
  
  await page.screenshot({ path: '/tmp/nc-cdp2.png' });
  await page.close();
  await browser.close();
  console.log('DONE');
})().catch(e => console.error('ERR:', e.message));
