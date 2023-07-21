## Actual Output

The output of esbuild-inline-sass will look similar to this:


output.js
```js
// style-helper:index.js
function inject_style(text) {
  if (typeof document !== "undefined") {
    var style = document.createElement("style");
    var node = document.createTextNode(text);
    style.appendChild(node);
    document.head.appendChild(style);
  }
}

// ../src/stylesheet.scss
inject_style('@import"https://cdn.jsdelivr.net/npm/modern-normalize";div#game-wrapper{font-family:Sen,sans-serif}div#game-wrapper div#pxpo-menu-wrapper{height:465px;background-color:#eeeb;padding:2px;position:absolute}');

// ../src/index.ts
console.log("Hello, World!");
```

index.ts
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
