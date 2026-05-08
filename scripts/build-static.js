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

const stylesPath = path.join(outputDir, "assets", "css", "styles.css");
const layoutFixesPath = path.join(outputDir, "assets", "css", "layout-fixes.css");
const layoutFixesMarker = "/* layout-fixes.css */";

if (fs.existsSync(stylesPath) && fs.existsSync(layoutFixesPath)) {
  const styles = fs.readFileSync(stylesPath, "utf8");
  const layoutFixes = fs.readFileSync(layoutFixesPath, "utf8").trim();

  if (layoutFixes && !styles.includes(layoutFixesMarker)) {
    fs.writeFileSync(stylesPath, `${styles.trimEnd()}\n\n${layoutFixesMarker}\n${layoutFixes}\n`);
  }
}

console.log(`Static app built in ${path.relative(root, outputDir)}`);
