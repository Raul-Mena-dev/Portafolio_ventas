import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {existsSync,realpathSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {demos} from './demos.mjs';
import {projects} from '../portal/src/portfolio/data/projects.js';
const root=realpathSync(fileURLToPath(new URL('..',import.meta.url)));const dist=resolve(root,'dist');
if(!existsSync(resolve(dist,'demo/flora-market/index.html'))){const r=spawnSync(process.execPath,[resolve(root,'scripts/build.mjs')],{cwd:root,stdio:'inherit'});if(r.status)process.exit(r.status);}
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.woff':'font/woff','.woff2':'font/woff2','.json':'application/json'};
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost'),path=decodeURIComponent(url.pathname);const match=path.match(/^\/demo\/([^/]+)(?:\/|$)/);const demo=match&&demos.find(d=>d[0]===match[1]);if(match&&!demo){res.writeHead(404);res.end('Demo no encontrada');return;}if(demo&&path===`/demo/${demo[0]}`){res.writeHead(302,{Location:path+'/'+url.search});res.end();return;}
 let file=resolve(dist,'.'+path);if(file!==dist&&!file.startsWith(dist+sep)){res.writeHead(403);res.end();return;}
 let info=await stat(file).catch(()=>null);if(info?.isDirectory()){file=resolve(file,'index.html');info=await stat(file).catch(()=>null);}
 if(!info){if(extname(path)){res.writeHead(404);res.end();return;}file=demo?resolve(dist,'demo',demo[0],'index.html'):resolve(dist,'index.html');}
 let data=await readFile(file);let status=200;
 if(extname(file)==='.html'&&!demo){const p=projects.find(p=>path===`/portafolio/${p.slug}`);const titles={'/':'Desarrollo web y sistemas para negocios','/servicios':'Servicios de desarrollo web','/portafolio':'Portafolio de soluciones web','/contacto':'Cuéntame sobre tu proyecto'};if(!p&&!titles[path])status=404;const title=`${p?.name||titles[path]||'Página no encontrada'} | Mecha Station Lab`;const desc=p?.shortDescription||'Desarrollo de páginas web, sistemas administrativos, catálogos y aplicaciones web para negocios.';const origin=`http://${req.headers.host}`;data=data.toString().replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`).replace('</head>',`<meta name="description" content="${escape(desc)}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(desc)}"><meta property="og:type" content="website"><meta property="og:image" content="${escape(origin+(p?.image||'/projects/novadent.jpg'))}"></head>`);}
 res.writeHead(status,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);
 }catch{res.writeHead(500);res.end('No fue posible abrir esta página.');}}).listen(5183,'127.0.0.1',()=>console.log('Mecha Station Lab: http://127.0.0.1:5183'));
