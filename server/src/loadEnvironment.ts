import fs from "node:fs";

if (fs.existsSync(".env")) {
  process.loadEnvFile();
}
