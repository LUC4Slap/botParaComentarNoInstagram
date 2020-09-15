const puppeteer = require('puppeteer');
/**
 * 
 */
let arr = [] // lista dos comentarios

// Ler pagina do Insta
async function start() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // await page.goto('https://www.instagram.com/p/CChMVvQgYKK/');
    await page.goto('https://www.instagram.com/')
    await page.waitFor('input[name="username"]');
    await page.type('input[name="username"]', 'seuemail', { delay: 200 });
    await page.type('input[name="password"]', 'sua senha', { delay: 200 });
    await page.keyboard.press('Enter');
    await page.waitFor(4000)
    await page.goto('url do post para ser comentado ');
    for(let i = 0; i <= arr.length; i++) {
        await page.type('textarea[class="Ypffh"]', arr[i], { delay: 400 });
        await page.waitFor(3000);
        await page.click('button[type="submit"]');
        await page.waitFor(10000);
    }
}

start()