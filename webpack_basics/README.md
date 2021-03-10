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

https://caniuse.com/es6
You must use ES2015 imports to load Lodash

但是 IE11 不支持 ECMc205, ES6

https://webpack.docschina.org/guides/getting-started/

    ES2015 中的 import 和 export 语句已经被标准化。虽然大多数浏览器还无法支持它们，但是 webpack 却能够提供开箱即用般的支持。

    事实上，webpack 在幕后会将代码 “转译”，以便旧版本浏览器可以执行。如果你检查 dist/main.js，你可以看到 webpack 具体如何实现，这是独创精巧的设计！除了 import 和 export，webpack 还能够很好地支持多种其他模块语法，更多信息请查看 模块 API。

    注意，webpack 不会更改代码中除 import 和 export 语句以外的部分。如果你在使用其它 ES2015 特性，请确保你在 webpack loader 系统 中使用了一个像是 Babel 或 Bublé 的 transpiler(转译器)。

IE 不兼容 ES6 箭头函数的解决方法（在浏览器中使用）

    (() => {
        "use strict";
        console.log("hell 222 index.js sum: " + new Date()),
            (document.body.innerHTML += `<h1>2+4=${(2, 4, 6)}</h1>`);
    })();

Loader 主要是用来对文件资源进行转换打包，例如：我们 js 中运用了 es6 的语法，而有的浏览器不支持，我们就可以用 babel 将 es6 的语法转换成浏览器支持的 es5 语法。

babel-loader https://webpack.docschina.org/loaders/babel-loader/

此 package 允许你使用 Babel 和 webpack 转译 JavaScript 文件。
yarn add -D babel-loader @babel/core @babel/preset-env webpack

什么是 babel-env-preset https://www.cnblogs.com/chyingp/archive/2018/06/05/9137849.html
https://babeljs.io/docs/en/babel-preset-env/#how-it-works

package.json 参考了 ant design pro: ELC client

    "browserslist": [
        "> 1%",
        "last 2 versions",
        "not ie <= 10"
    ],

-   懒加载 lazy loading: https://webpack.js.org/guides/lazy-loading/
    https://webpack.docschina.org/guides/lazy-loading/

> Warning
> 注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。

https://webpack.docschina.org/guides/code-splitting/#dynamic-imports

    动态导入(dynamic import)
    当涉及到动态代码拆分时，webpack 提供了两个类似的技术。第一种，也是推荐选择的方式是，使用符合 ECMAScript 提案 的 import() 语法 来实现动态导入。第二种，则是 webpack 的遗留功能，使用 webpack 特定的 require.ensure。让我们先尝试使用第一种……

    Warning
    import() 调用会在内部用到 promises。如果在旧版本浏览器中（例如，IE 11）使用 import()，记得使用一个 polyfill 库（例如 es6-promise 或 promise-polyfill），来 shim Promise。
    在我们开始之前，先从上述示例的配置中移除掉多余的 entry 和 optimization.splitChunks，因为接下来的演示中并不需要它们：

### npx webpack --profile --json > stats.json

npx webpack --profile --json > stats.json

http://webpack.github.io/analyse/#modules
