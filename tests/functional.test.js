const puppeteer = require('puppeteer');

test('should create an element with text and correct class', async () => {
    const browser = await puppeteer.launch({
      headless: true,
      // slowMo: 80,
      // args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(
      'file://///media/ibad/BE2858D72858906F/Tutorials/tests-demo/demo/js-tests-demo/index.html'
    );
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Anna (28 years old)');
}, 10000);