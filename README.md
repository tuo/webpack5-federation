ws

http://localhost:8888/public/

> > index.js:2 Uncaught SyntaxError: Cannot use import statement outside a module

yarn add -D webpack webpack-cli

add png
https://juejin.cn/post/6844903648237977614

add css/scss/less

> You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

https://webpack.docschina.org/loaders/#files

Loaders
https://webpack.docschina.org/loaders/#files

yarn add -D css-loader style-loader

require("!style-loader!css-loader!./style.css");

//addvanced

yarn add -D less less-loader

-   add bundle analzyer

http://127.0.0.1:8888

-   added dev server

yarn add -D webpack-dev-server

出现 404

> localhost/:11 GET http://localhost:9000/dist/main.js
