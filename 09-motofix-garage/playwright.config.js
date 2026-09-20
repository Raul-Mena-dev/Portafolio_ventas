import{defineConfig,devices}from"@playwright/test";
export default defineConfig({testDir:"./tests",fullyParallel:false,reporter:"line",use:{baseURL:"http://127.0.0.1:5181",trace:"retain-on-failure"},webServer:{command:"npm run dev",url:"http://127.0.0.1:5181",reuseExistingServer:true,timeout:120000},projects:[{name:"chromium",use:{...devices["Desktop Chrome"]}}]});
