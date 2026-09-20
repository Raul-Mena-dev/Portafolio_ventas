import {chromium} from 'playwright';
const browser=await chromium.launch();const page=await browser.newPage();
for(const width of [1440,375]){await page.setViewportSize({width,height:900});await page.goto('http://127.0.0.1:5182/',{waitUntil:'networkidle'});await page.screenshot({path:`qa/viewport-${width}.jpg`,type:'jpeg',quality:80});}
await browser.close();
