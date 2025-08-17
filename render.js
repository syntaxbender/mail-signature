const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file://${path.resolve('signature.html')}`, {
    waitUntil: 'networkidle0'
  });

  await page.screenshot({
    path: 'output.png',
    omitBackground: true
  });

  await browser.close();
})();
