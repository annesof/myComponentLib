import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const pkg = require("./package.json");

// Array of extensions to be handled by babel
const EXTENSIONS = [".ts", ".tsx"];

export default {
  input: "src/index.ts",
  output: {
    file: pkg.main,
    format: "cjs",
  },
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()],
  external: EXTERNAL, // https://rollupjs.org/guide/en/#peer-dependencies
};
