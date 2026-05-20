const fs = require("fs");
const path = require("path");

const root = __dirname;
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "app.js"), "utf8");

const standalone = html
  .replace(/  <link rel="stylesheet" href="styles\.css[^"]*">\r?\n/, `  <style>\n${css}\n  </style>\n`)
  .replace(/  <script src="app\.js[^"]*"><\/script>\r?\n/, `  <script>\n${js}\n  </script>\n`);

fs.writeFileSync(path.join(root, "home-science-field-lab.html"), standalone);
console.log("Built home-science-field-lab.html");
