import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

import typescriptEngine from "typescript";

const pkg = require("./package.json");

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript({
      typescript: typescriptEngine,
      include: ["*.ts+(|x)", "**/*.ts+(|x)"],
      exclude: [
        "dist",
        "node_modules/**",
        "*.test.{js+(|x), ts+(|x)}",
        "*.stories.{js+(|x), ts+(|x)}",
        "**/*.test.{js+(|x), ts+(|x)}",
      ],
    }),
    resolve(),
    terser(),
  ],
};
