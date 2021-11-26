import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const pkg = require("./package.json");

// Array of extensions to be handled by babel
const EXTENSIONS = [".ts", ".tsx"];

// Excluded dependencies - dev dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist", // Directory where rollup.js will put the built files
      sourcemap: true, // We want a source map to trace the original code
      format: "esm", // Built files will follow ES Module format
      preserveModules: true, // This one is important for treeshaking features of our library
    },
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()],
  external: EXTERNAL, // https://rollupjs.org/guide/en/#peer-dependencies
};
