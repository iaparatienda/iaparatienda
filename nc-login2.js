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
  
  await page.goto('https://www.namecheap.com/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  console.log('Landed:', page.url(), await page.title());
  
  // Click "Sign In" to reveal the login form
  const signIn = page.locator('a:has-text("Sign In"), a:has-text("Sign in"), button:has-text("Sign In")').first();
  const count = await signIn.count();
  console.log('Sign In elements:', count);
  
  if (count > 0) {
    await signIn.click();
    await page.waitForTimeout(3000);
    console.log('After click:', page.url(), await page.title());
  }
  
  // Now fill the ASP.NET login form fields
  await page.evaluate(() => {
    const user = document.querySelector('input[name="LoginUserName"]');
    const pass = document.querySelector('input[name="LoginPassword"]');
    if (user) {
      user.value = 'iaparatienda';
      user.dispatchEvent(new Event('input', {bubbles: true}));
      user.dispatchEvent(new Event('change', {bubbles: true}));
      console.log('Set username');
    }
    if (pass) {
      pass.value = '9#FS3tJ8Q=W_mrS';
      pass.dispatchEvent(new Event('input', {bubbles: true}));
      pass.dispatchEvent(new Event('change', {bubbles: true}));
      console.log('Set password');
    }
  });
  
  // Submit the form (ASP.NET form with __VIEWSTATE)
  await page.evaluate(() => {
    const form = document.querySelector('form');
    if (form) {
      form.submit();
    }
  });
  
  await page.waitForTimeout(8000);
  console.log('Post-submit URL:', page.url());
  console.log('Post-submit title:', await page.title());
  
  const body = await page.locator('body').innerText().catch(() => '');
  console.log('Body:', body.substring(0, 500));
  
  await page.screenshot({ path: '/tmp/nc-final.png' });
  await browser.close();
  console.log('DONE');
})().catch(e => console.error('ERR:', e.message));
