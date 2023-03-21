# esbuild-inline-sass

The missing inline SASS/SCSS loader for esbuild.

## Usage

```js
const { inlineScss } = require("esbuild-inline-sass");

require("esbuild").build({
  entryPoints: ["app.js"],
  bundle: true,
  outfile: "out.js",
  plugins: [inlineScss()],
}).catch(() => process.exit(1));
```

Given such app.js and style.css:

```js
import "./style.scss";
console.log(1);
```

```scss
@import "https://cdn.jsdelivr.net/npm/modern-normalize";

div#game-wrapper {
  font-family: "Sen", sans-serif;

  div#pxpo-menu-wrapper {
    height: 465px;
    background-color: #eeeb;
    padding: 2px;
    position: absolute;
  }
}
```

Outputs (things like):

```js
let style = document.createElement("style");
style.append('@import"https://cdn.jsdelivr.net/npm/modern-normalize";div#game-wrapper{font-family:Sen,sans-serif}div#game-wrapper div#pxpo-menu-wrapper{height:465px;background-color:#eeeb;padding:2px;position:absolute}');
document.head.append(style);
console.log(1);
```

### Options
```ts
export function style({ minify = true, charset = "utf8" }): Plugin;
```