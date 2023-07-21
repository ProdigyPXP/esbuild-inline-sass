# esbuild-inline-sass

The missing inline SASS/SCSS loader for esbuild.
Full TypeScript, EMCAScript, and CommonJS compatibility.

## Usage

build.js
```javascript
import { inlineSass } from "esbuild-inline-sass";
// or
const { inlineScss } = require("esbuild-inline-sass");

await esbuild.build({
  ...arguments,
  plugins: [inlineSass()],
});
```

index.mjs
```js
import "./style.scss";
console.log("Hello, World!");
```

style.scss
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

### Output:

This is merley an approximation- see [this document](/docs/real_output.md) to see the actual output.

output.js
```js
let style = document.createElement("style");
style.append(`
  @import"https://cdn.jsdelivr.net/npm/modern-normalize";div#game-wrapper{font-family:Sen,sans-serif}div#game-wrapper div#pxpo-menu-wrapper{height:465px;background-color:#eeeb;padding:2px;position:absolute}
`);
document.head.append(style);
console.log("Hello, World!");
```

### Options

```ts
export function inlineSass({ minify = true, charset = "utf8" }): Plugin;
```
