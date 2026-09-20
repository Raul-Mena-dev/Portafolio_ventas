import { realpathSync } from "node:fs";
import { createServer } from "vite";
process.chdir(realpathSync(process.cwd()));
const server = await createServer({
  server: { host: "127.0.0.1", port: 5175, strictPort: true },
});
await server.listen();
server.printUrls();
