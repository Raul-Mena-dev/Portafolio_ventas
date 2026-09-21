import {build} from 'vite';
import react from '@vitejs/plugin-react';
import {realpathSync,existsSync,cpSync,mkdirSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {demos} from './demos.mjs';
const root=realpathSync(fileURLToPath(new URL('..',import.meta.url)));
process.chdir(root);
await build({configFile:false,root:resolve(root,'portal'),plugins:[react()],build:{outDir:resolve(root,'dist'),emptyOutDir:false},logLevel:'warn'});
if(!process.argv.includes('--portal'))for(const [slug,folder]of demos){
 const base=`/demo/${slug}/`;
 const adapter={name:'portfolio-demo-adapter',enforce:'pre',transform(code,id){if(!id.includes('/src/')&&!id.includes('\\src\\'))return;if(!/\.[jt]sx?$/.test(id))return;return code.replace(/<BrowserRouter>/g,`<BrowserRouter basename="${base.slice(0,-1)}">`).replace(/(["'`])\/images\//g,`$1${base}images/`);},transformIndexHtml(html){return html.replace('</body>',`<script type="module" src="/demo-bar.js" data-demo="${slug}"></script></body>`);}};
 await build({configFile:false,root:resolve(root,folder),base,plugins:[adapter,react()],define:{__MENU_SLUG__:JSON.stringify(slug)},build:{outDir:resolve(root,'dist/demo',slug),emptyOutDir:true},logLevel:'warn'});
 console.log(`Demo preparada: ${slug}`);
}
mkdirSync(resolve(root,'dist'),{recursive:true});cpSync(resolve(root,'portal/public/demo-bar.js'),resolve(root,'dist/demo-bar.js'));
console.log('Portal y demos listos en dist/');
