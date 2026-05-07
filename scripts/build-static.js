const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "public");
const entries = ["index.html", "assets"];

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

for (const entry of entries) {
  const source = path.join(root, entry);
  const destination = path.join(outputDir, entry);

  if (!fs.existsSync(source)) {
    throw new Error(`Missing static entry: ${entry}`);
  }

  fs.cpSync(source, destination, { recursive: true });
}

console.log(`Static app built in ${path.relative(root, outputDir)}`);
