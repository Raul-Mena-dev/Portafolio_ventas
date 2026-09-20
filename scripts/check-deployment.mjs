import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {demos} from './demos.mjs';

const root=fileURLToPath(new URL('..',import.meta.url));
const config=JSON.parse(readFileSync(resolve(root,'vercel.json'),'utf8'));
assert.equal(config.installCommand,'npm ci && node scripts/setup.mjs');
assert.equal(config.buildCommand,'npm run build');
assert.equal(config.outputDirectory,'dist');
assert.deepEqual(config.rewrites.at(-1),{source:'/:path*',destination:'/index.html'});
for(const [slug,folder] of demos){
  assert.ok(existsSync(resolve(root,folder,'package-lock.json')),`Falta lockfile: ${folder}`);
  const rule=config.rewrites.find(r=>r.source===`/demo/${slug}/:path*`);
  assert.equal(rule?.destination,`/demo/${slug}/index.html`);
  const html=readFileSync(resolve(root,'dist',rule.destination.slice(1)),'utf8');
  for(const match of html.matchAll(/(?:src|href)="(\/[^"?#]+)"/g)){
    assert.ok(existsSync(resolve(root,'dist',match[1].slice(1))),`Recurso faltante: ${match[1]}`);
  }
}
assert.ok(existsSync(resolve(root,'dist/index.html')));
console.log('Verificado: instalación, diez lockfiles, rewrites y recursos de las once aplicaciones.');
