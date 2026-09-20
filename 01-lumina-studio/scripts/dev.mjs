import { realpathSync } from "node:fs";
import { createServer } from "vite";
// Normalize Windows redirected folders before Vite resolves dependency outputs.
process.chdir(realpathSync(process.cwd()));
const server = await createServer({ server: { host: "127.0.0.1" } });
await server.listen();
server.printUrls();
