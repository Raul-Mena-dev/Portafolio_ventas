import {chromium} from 'playwright';import{mkdirSync,copyFileSync}from'node:fs';import{demos}from'./demos.mjs';
mkdirSync('portal/public/projects',{recursive:true});mkdirSync('dist/projects',{recursive:true});
const browser=await chromium.launch();const page=await browser.newPage({viewport:{width:1440,height:960},deviceScaleFactor:1});
await page.goto('http://127.0.0.1:5183/');await page.evaluate(()=>{localStorage.setItem('novadent_admin_session','demo');localStorage.setItem('eduflow_session','demo')});
for(const[slug]of demos){const path=slug==='novadent'?'admin':slug==='eduflow'?'dashboard':slug==='motofix'?'admin':'';await page.goto(`http://127.0.0.1:5183/demo/${slug}/${path}`,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.locator('mecha-demo-bar').evaluate(e=>e.style.visibility='hidden');await page.screenshot({path:`portal/public/projects/${slug}.jpg`,type:'jpeg',quality:82});copyFileSync(`portal/public/projects/${slug}.jpg`,`dist/projects/${slug}.jpg`);console.log('Captura:',slug);}
await browser.close();
