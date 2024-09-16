import Mustache from "mustache";
import fs from "fs";
import path from "path";

const templateFile = path.join(__dirname, "templates/index.html");
const template = fs.readFileSync(templateFile, "utf-8");
const outputDir = path.join(path.dirname(__dirname), "dist");
const outputFile = path.join(outputDir, "index.html");

const output = Mustache.render(template, { name: "wow" });

fs.mkdir(path.dirname(outputFile), { recursive: true }, (err) => {});
fs.writeFileSync(outputFile, output, { flag: "a" });
