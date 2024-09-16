import browserify from "browserify";
import fs from "fs";
import path from "path";
import tsify from "tsify";

const inputFile = path.join(__dirname, "index.ts");
const outputFile = path.join(__dirname, "bundle.js");

const b = browserify({ entries: [inputFile], standalone: "MyPackage" }).plugin(
  tsify,
);

b.bundle().pipe(fs.createWriteStream(outputFile));
