// prettier-ignore
require("esbuild").build({
  entryPoints: ["./app.js"],
  bundle: true,
  outfile: "./out.js",
  plugins: [require("..").inlineSass()],
  target: 'es5',
  sourcemap: true
}).catch(() => process.exit(1))
