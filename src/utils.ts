import Mustache from "mustache";
import fs from "fs";
import path from "path";

const templateFile = path.join(__dirname, "templates/index.html");
const template = fs.readFileSync(templateFile, "utf-8");
const outputDir = path.join(path.dirname(__dirname), "dist");
const outputFile = path.join(outputDir, "index.html");

fs.rmdirSync(outputDir, { recursive: true });

const output = Mustache.render(template, { name: "hello world" });

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, output, { flag: "w" });
