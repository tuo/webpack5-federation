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

const HtmlWebpackPlugin = require('html-webpack-plugin')
https://webpack.docschina.org/plugins/html-webpack-plugin/

> HtmlWebpackPlugin 简化了 HTML 文件的创建，以便为你的 webpack 包提供服务。这对于那些文件名中包含哈希值，并且哈希值会随着每次编译而改变的 webpack 包特别有用。你可以让该插件为你生成一个 HTML 文件，使用 lodash 模板提供模板，或者使用你自己的 loader。

> 该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle。 只需添加该插件到你的 webpack 配置中，如下所示：

可以删除 Public 下面的 html

import \_ from "lodash";
import { camelCase } from "lodash";
都会整个加载 js

main.js 从 226K 变成

import \* as camelCase from "lodash/camelCase"; 162KK

因为整个 lodash 用的是 module.exports - 也就是 commonJS 规范； 同步加载，需要加载所有的进来；

问题： 太慢

https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark

解决用 ES module, 支持异步，可以先分析整个依赖再加载
id -> where the file is
'cammerCamerl' -> /node_nndiyes/ecan,so

然后 import(`{file_id}`) =>

而不用直接加载所有的 没有办法异步
比如 require('./${file_name}.js')

比如

`Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).`
就出现在了 lodash.js 和 camelCase.js 中 两次

> > When using Lodash-es, the build size is a little bigger: 143 KB.
> > Unfortunately, this method also has restrictions:
> > You must use ES2015 imports to load Lodash
> > Babel < 6 & Node.js < 4 aren’t supported
> > Chain sequences aren’t supported

Looking for Lodash modules written in ES6 or smaller bundle sizes? Check out lodash-es.

https://stackoverflow.com/questions/35250500/correct-way-to-import-lodash

> If you are using webpack 4, the following code is tree shakable.

> > CommonJS modules are not tree shakable so you should definitely use lodash-es, which is the Lodash library exported as ES Modules, rather than lodash (CommonJS).

    lodash-es's package.json contains "sideEffects": false, which notifies webpack 4 that all the files inside the package are side effect free (see https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free).

    This information is crucial for tree shaking since module bundlers do not tree shake files which possibly contain side effects even if their exported members are not used in anywhere.
