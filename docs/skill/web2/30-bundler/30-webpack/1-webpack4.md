# webpack4

## webpack4

docs

1. [Webpack-v4-zh](https://v4.webpack.docschina.org/concepts/)
2. [webpack-v4-en](https://v4.webpack.js.org/concepts/)

```bash
# 版本，2025-3-22
npm view webpack versions
'4.46.0',         '4.47.0',
'5.97.1',         '5.98.0'

# 开发模式编译，默认是production，会压缩
webpack ./src/index.js --mode development

```

## 核心概念

1. 入口(Entry)
2. 输出(Output)
3. 加载器(Loaders)
4. 插件(Plugins)
5. 模式(Mode)
6. 解析(Resolve)

### 核心配置框架

```jsx
module.exports = {
    mode: 'development', // 模式配置,webpack4.0新增
    entry: '', // 入口文件
    output: {}, // 出口文件
    module: { // 配置modules，包括loader
        rules: [/*loader setting*/]
    },
    plugins: [], // 对应的插件
    devServer: {}, // 开发服务器配置
    optimization: {}, // 最佳实践
    devtool: '',
    resolve: { alias: {}},
}
```

### 最简核心配置示例

```jsx
const path = require('path');

module.exports = {
    // 模式配置：development 或 production。
    // development 模式下会启用调试工具，
    // production 模式下会进行代码压缩等优化。
    mode: 'development',

    // 入口起点：指定从哪个文件开始构建依赖图。
    entry: './src/index.js',

    // 出口配置：定义输出文件的位置和名称。
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist') // 输出路径
    },

    // Loader 配置：用于处理不同类型的文件（如 CSS、图片等）并将其转换为模块。
    // style-loader
    // css-loader
    // postcss-loader
    // sass-loader
    module: {
        rules: [
            {
                test: /\\.css$/, // 匹配文件类型
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'] // 使用的 loader 列表
            }
        ]
    },

    // 插件配置：执行范围更广的任务，包括打包优化、资源管理和环境变量注入等。
    plugins: [
      	new HtmlWebpackPlugin({template: './src/index.html'}) // 示例插件
    ],

    // 开发服务器配置：提供一个简单的 web 服务器，并且具备实时重新加载功能。
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // 服务内容的基础目录
        compress: true, // 启用 gzip 压缩
        port: 9000 // 端口号
    },

    // 优化配置：可以对如何优化 bundle 进行细粒度控制。
    // optimization.minimize 是否自动压缩,mode = production时，为true。
    // 默认使用uglifyjs-webpack-plugin插件
    // optimization.splitChunks, 根据不同的策略来分割打包出来的bundle
    optimization: {},

    // Source map 配置：帮助开发人员追踪错误和日志的实际来源。
    devtool: 'inline-source-map',

    // 解析配置：设置模块如何被解析。
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, 'src/utilities/'), // 创建路径别名
            Templates: path.resolve(__dirname, 'src/templates/')
        },
        extensions: ['.js', '.json'], // 自动解析确定的扩展名
    },
};
```

## 模块规范

```jsx
// 示例代码：展示如何在同一个文件中使用ES6、CommonJS和AMD规范

// =================== ES6 模块 ===================
// 环境：现代浏览器和Node.js（支持ES6模块）
export default function es6Hello() {
    console.log('es6: hello world!');
}

// =================== CommonJS 模块 ===================
// 环境：主要用于Node.js，但也可以通过Webpack等工具在前端使用
function commonHello() {
    console.log('common: hello world!');
}
module.exports = commonHello;

// =================== AMD 模块 ===================
// 环境：适合于浏览器端的应用程序，特别是需要动态加载模块或依赖项的情况
define(function () { // 注意这里不需要require和factory参数
    'use strict';
    return function amdHello() {
        console.log('amd: hello world!');
    };
});

// =================== 使用示例 ===================
// 以下代码展示了如何在同一个项目中同时使用这三种模块系统。
// 注意：实际运行时，这些模块的导入方式取决于打包工具（如Webpack）的配置。

// ES6 导入
import es6Hello from './path/to/hello-es6'; // 根据实际情况调整路径
es6Hello();

// CommonJS require
const commonHello = require('./path/to/hello-common'); // 根据实际情况调整路径
commonHello();

// AMD require
require(['./path/to/hello-amd'], function (helloAmd) { // 根据实际情况调整路径
    helloAmd();
});
```

## 模块解释

### 1. mode

值可以是 development 或者 production。 设置了 mode 之后会把 process.env.NODE_ENV 也设置为 development 或者 production。然后在 production 模式下，会默认开启 UglifyJsPlugin 等一堆插件。

> webpack4支持ES6的方式导入JSON文件，并且支持Tree-shaking
> 

### 2. entry/output

默认的入口为'./src/'和默认出口'./dist'。

### 3. mudule-rules-loader配置

webpack4中移除loaders配置，必须使用rules。rules 配置模块的读取和解析规则， 通常用来配置loader， 其类型是一个数组， 数组里每一项都描述了如何去处理部分文件。

1. 条件匹配： 通过test、include、exclude三个配置来命中Loader要应用的规则文件。(三个配置都可以是正则，也支持数组)
2. 应用规则： 对选中后的文件通过use配置项来应用loader，可以应用一个loader或者按照从后往前的顺序应用一组loader。同时还可以分别给loader传入参数。
3. 重置顺序： 一组`loader`的执行顺序默认是从右到左执行，通过`enforce`选项可以让其中一个loader的执行顺序放到最前或者是最后。Rule.enforce，值有：`"pre" | "post"`.
    
    ```jsx
    module: {
        rules: [
            {
                test: /\\.m?js$/,
                exclude: /node_modules/,
                enforce: 'pre', // 强制作为前置 loader
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\\.scss$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
    
    ```
    
**loaders**

#### 3.1 CSS loader

1. style-loader - 将 JS 字符串生成为 style 标签注入到 DOM 中
2. css-loader - 解析 CSS 文件中的 `@import` 和 `url()`，并处理它们
3. postcss-loader - 使用 PostCSS 插件来转换 CSS，支持自动添加厂商前缀等功能
4. sass-loader - 加载并编译 Sass/SCSS 文件为 CSS

#### 3.2 Js loader

1. babel-loader - 使用 Babel 编译 ES6+ 代码至向后兼容的版本
2. ts-loader - 加载 TypeScript 文件，并通过 TypeScript 编译器进行编译
3. eslint-loader - 在构建过程中运行 ESLint 检查代码风格和潜在错误

#### 3.3 文件loader

1. file-loader - 处理文件并将它们移动到输出目录，返回最终文件的 URL
2. url-loader - 类似于 file-loader，但可以将小文件转为 base64 的 URL 内联到 bundle 中
3. image-webpack-loader - 压缩图片文件以减小其大小
4. svg-inline-loader - 将 SVG 文件内联为字符串直接嵌入到代码中

#### 3.4 HTML loader

1. html-loader - 导出 HTML 为字符串，并且可以通过 require 语句引入静态资源
2. pug-loader - 加载 Pug 模板并将其编译为 HTML

#### 3.5 其他loader

1. json5-loader - 支持加载 JSON5 文件格式
2. yaml-loader - 加载 YAML 文件并解析为 JSON
3. worker-loader - 让 Web Workers 可以作为模块导入使用

这些 loader 分类展示了在 Webpack 4 项目中常见的几种类型，用于处理不同类型的资源或执行特定的任务。根据项目的具体需求选择合适的 loader 进行配置。


### 4. optimization

在Webpack4中引入，根据mode（production/development）的不同，配置项默认值不同，具体有以下：

1. `optimization.minimize`： 是否自动压缩打包后的代码。mode = production时，为true。压缩默认使用`uglifyjs-webpack-plugin`插件，如果想要使用别的压缩插件，可以使用`optimization.minimizer`设置。
2. `optimization.splitChunks`: 根据不同的策略来分割打包出来的bundle。配置基于[SplitChunksPlugin (opens new window)](https://webpack.js.org/plugins/split-chunks-plugin/)
    - optimization.splitChunks.chunks: async/all/initial
        1. **async** 只有异步加载的 chunks（如动态 `import()` 加载的模块）会被考虑拆分。
        2. **all** 所有的 chunks（包括初始加载的和异步加载的）都将参与拆分。
        3. **initial** 仅对非异步（同步）的 chunks 进行拆分，不包括通过动态 `import()` 引入的模块。
3. 零配置
    - `optimization.nodeEnv`: 告诉webpack process.env.NODE_ENV的值，值来自于mode的取值。
        
        告知 webpack 将 `process.env.NODE_ENV` 设置为一个给定字符串。如果 `optimization.nodeEnv` 不是 `false`，则会使用 [DefinePlugin](https://www.webpackjs.com/plugins/define-plugin/)，`optimization.nodeEnv` **默认值**取决于 [mode](https://www.webpackjs.com/concepts/mode/)，如果为 false 值，则会回退到 `"production"`。
        

### 5. plugins

- 常用插件
    1. `HtmlWebpackPlugin` 自动在html中加载打包后的js文件
    2. `DLLPlugin/DllReferencePlugin`
        
        提高打包速度
        
        - DLLPlugin：创建一个只有dll的bundle
        - DllReferencePlugin： 打包生成的dll文件引用到需要的预编译依赖上来
    3. happyPack 多进程打包，加快打包速度。
    4. `webpack.DefinePlugin` webpack4设置mode会自动使用
    5. `uglifyjs-webpack-plugin` webpack4 mode = production默认使用

### 6. devServer

详见[Webpack4 devServer配置详解](https://lq782655835.github.io/blogs/project/webapck4-2.devServer.html)

## 完成的webpack4配置

```jsx
const path = require('path');
const webpack = require('webpack');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包HTML文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取CSS到单独的文件中
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩打包后的JS文件
const HappyPack = require('happypack'); // 多线程构建插件
const happyThreadPool = HappyPack.ThreadPool({ size: 5 }); // 构造出共享进程池，包含5个子进程
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 最大化压缩CSS

console.log('process.env.NODE_ENV------->', process.env.NODE_ENV);

// 解决css 分离后图片引入路径不正确问题
let website = {
    publicPath: process.env.type === 'build' ? '/' : '/', // 根据环境变量设置publicPath
};

module.exports = {
    mode: 'development', // 模式配置, 可选值有 'development', 'production'

    entry: {
        main: './src/index.js', // 入口文件配置
    },

    output: {
        filename: 'bundle.[chunkhash:6].js', // 使用chunkhash来实现长期缓存【性能优化】
        path: path.resolve(__dirname, 'dist'), // 输出目录
        publicPath: website.publicPath, // 设置资源引用的公共路径，解决分离后的css或图片路径问题
    },

    module: {
        rules: [
            // CSS处理规则
            {
                test: /\\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // 使用MiniCssExtractPlugin提取css, css-loader解析css 【性能优化：提取CSS减少渲染阻塞】
            },
            // LESS处理规则
            {
                test: /\\.less$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'], // less-loader将less编译为css
            },
            // 图片处理规则
            {
                test: /\\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000, // 小于10KB的图片会被转成base64编码直接嵌入代码中【性能优化：减少HTTP请求】
                        name: '[name]_[hash:7].[ext]', // 文件名格式
                        outputPath: 'static/images/' // 输出目录
                    }
                }]
            },
            // HTML图片加载规则
            {
                test: /\\.(htm|html)$/,
                use: 'html-withimg-loader' // 支持HTML中的图片加载
            },
            // JS/JSX处理规则
            {
                test: /\\.(jsx|js)$/,
                include: [path.resolve(__dirname, 'src')], // 包含src目录下的文件【性能优化：缩小搜索范围】
                use: ['babel-loader'], // 使用babel-loader进行ES6+语法转换
                exclude: /node_modules/
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 指定模板文件
            hash: true, // 添加hash到所有包含的脚本和CSS文件【性能优化：防止浏览器缓存旧版本资源】
            minify: {
                collapseWhitespace: true, // 删除空格以缩小HTML体积【性能优化：减小文件大小】
                removeAttributeQuotes: true, // 删除属性的引号【性能优化：减小文件大小】
                minifyCSS: true, // 压缩HTML内的CSS【性能优化：减小文件大小】
                minifyJS: true, // 压缩HTML内的JS【性能优化：减小文件大小】
            },
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[chunkhash:8].css", // 提取出的CSS文件名【性能优化：使用chunkhash实现长期缓存】
            chunkFilename: "[id].css" // 对应的chunk文件名
        }),
        new UglifyJsPlugin({
            parallel: true, // 开启并行压缩【性能优化：加快构建速度】
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'DEV') // 定义环境变量
        }),
        // 如果需要启用多线程构建，请取消下面的注释【性能优化：加速构建过程】
        /*
        new HappyPack({
            id: 'js',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool, // 使用共享进程池中的子进程去处理任务
        }),
        */
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true, // 启用缓存【性能优化：加快重复构建速度】
                parallel: true, // 并行运行【性能优化：利用多核CPU加速构建】
                sourceMap: false, // 是否生成source map【生产环境中可禁用以提高性能】
                extractComments: false, // 移除注释【性能优化：减小文件大小】
                uglifyOptions: {
                    compress: {
                        unused: true, // 移除未使用的代码【性能优化：减小文件大小】
                        warnings: false, // 关闭警告信息【性能优化：减小文件大小】
                        drop_debugger: true // 移除debugger语句【性能优化：减小文件大小】
                    },
                    output: {
                        comments: false // 移除注释【性能优化：减小文件大小】
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\\.css$/g, // 正则匹配要压缩的CSS文件
                cssProcessorOptions: {
                    safe: true, // 安全模式
                    autoprefixer: { disable: true }, // 禁用autoprefixer
                    mergeLonghand: false, // 不合并长属性
                    discardComments: {
                        removeAll: true // 移除所有注释【性能优化：减小文件大小】
                    }
                },
                canPrint: true // 是否打印日志
            })
        ],
        splitChunks: {
            cacheGroups: {
                vendor: { // 抽离第三方插件
                    test: /[\\\\/]node_modules[\\\\/]/, // 匹配node_modules下的模块
                    chunks: 'initial', // 只对初始chunks进行拆分【性能优化：抽取公共库，减少重复加载】
                    name: 'vendor', // 打包后的文件名
                    priority: 10 // 设置优先级，防止被其他规则覆盖
                },
            }
        }
    },

    devServer: {
        historyApiFallback: true, // 当找不到页面时返回index.html
        inline: true // 实时重新加载
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'app/component') // 别名配置，方便导入组件【性能优化：加快查找速度】
        },
        extensions: ['.js', '.jsx', '.less', '.json', '.css'], // 自动解析确定的扩展名【性能优化：减少不必要的扩展名尝试】
    },

    performance: {
        hints: false // 禁用性能提示【根据需求调整，可能需要开启以监控性能瓶颈】
    }
};

```

## 参考文章

- [webpack optimization(opens new window)](https://webpack.js.org/configuration/optimization/)
- [Upgrade to Webpack 4(opens new window)](https://dev.to/flexdinesh/upgrade-to-webpack-4---5bc5)
- [webpack编译速度提升之DllPlugin(opens new window)](https://juejin.im/post/5b3e22e3f265da0f4b7a72df)
- [webpack4.0打包优化策略系列](https://juejin.im/post/5abbc2ca5188257ddb0fae9b)