import{spawnSync}from'node:child_process';import{resolve}from'node:path';import{fileURLToPath}from'node:url';import{demos}from'./demos.mjs';
const root=fileURLToPath(new URL('..',import.meta.url));
for(const[,folder]of demos){console.log(`Instalando ${folder}`);const r=spawnSync(process.platform==='win32'?'npm.cmd':'npm',['ci'],{cwd:resolve(root,folder),stdio:'inherit',shell:process.platform==='win32'});if(r.status)process.exit(r.status);}
