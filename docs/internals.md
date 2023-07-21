# How it works

1. Minifies and transpiles SASS into minified CSS using `esbuild-sass-plugin`.
2. Adds a function called `style-helper` to the output. style-helper applies some CSS to the DOM by writing it to the head.
3. Adds an invocation of `style-helper` for every minified CSS created.