# webpack5-react-ts

## 一、初始化项目

```tsx
pnpm init
```

### **1、安装依赖**

```bash
# webpack依赖
pnpm add webpack webpack-cli -D
pnpm add -D typescript ts-node @types/webpack @types/node

# react依赖
pnpm add react react-dom

# react类型依赖
pnpm add @types/react @types/react-dom -D

# babel
pnpm add -D babel-loader @babel/core @babel/preset-react @babel/preset-typescript

# html-webpack-plugin
pnpm add -D html-webpack-plugin

# dev
pnpm add -D webpack-dev-server webpack-merge

# cross-env
pnpm add cross-env -D

# css
pnpm add style-loader css-loader -D

# 3.3、less sass,二选一
pnpm add less-loader less -D
pnpm add node-sass sass-loader -D

# 3.4、css3前缀兼容
pnpm add postcss-loader autoprefixer -D

# 3.5、babel预设处理js兼容
pnpm add @babel/preset-env core-js -D

# 3.6、装饰器
pnpm add @babel/plugin-proposal-decorators -D

# 3.7、copy
pnpm add copy-webpack-plugin -D

# 4 热更新
pnpm add @pmmmwh/react-refresh-webpack-plugin react-refresh -D

# 5.1 构建耗时分析
pnpm add speed-measure-webpack-plugin -D

# 5.3 loader多线程
pnpm add thread-loader -D

# 6.1 打包依赖分析
pnpm add webpack-bundle-analyzer -D

# 6.2 css 抽离
pnpm add mini-css-extract-plugin -D

# 6.3 css 压缩
pnpm add css-minimizer-webpack-plugin -D

# 6.4 js 压缩
pnpm add terser-webpack-plugin -D

# 6.7 tree-shaking清理未使用css
pnpm add purgecss-webpack-plugin glob-all -D

# 6.9 gzip
pnpm add compression-webpack-plugin -D

# 7.1  eslint
pnpm add eslint -D

# 7.1 airbnb 规范
npm info "eslint-config-airbnb@latest" peerDependencies

# airbnb是版本强依赖，有版本兼容问题..使用selint最新版的默认方案
pnpm add -D eslint-config-airbnb eslint-config-airbnb-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
pnpm add eslint-config-airbnb eslint-config-airbnb-typescript -D

# 7.2
pnpm add prettier -D

# eslint和prettier冲突的解决方法
pnpm add eslint-config-prettier eslint-plugin-prettier -D

# 7.3 安装 stylelint
pnpm add stylelint stylelint-config-standard -D

# 7.3 安装 stylelint-prettier
pnpm add stylelint-prettier -D

# 7.6 build:prod 清空dist
pnpm add -D rimraf

# 7.7 Husky
pnpm add -D husky @commitlint/cli @commitlint/config-conventional
pnpm add -D commitizen cz-conventional-changelog

# 空项目
pnpm dlx husky-init
pnpm install

# 已有项目
pnpm i husky -D
pnpx husky install

# 7.8 lint-staged
pnpm i lint-staged -D

```

### 2、目录结构

```bash
├── build
| ├── webpack.base.ts # 公共配置 
| ├── webpack.dev.ts # 开发环境配置 
| └── webpack.prod.ts # 打包环境配置 
├── public
│ └── index.html # html模板 
├── src
| ├── App.tsx
│ └── index.tsx # react应用入口页面 
├── tsconfig.json # ts配置 
└── package.json

```

### 3、添加内容

- **`tsconfig.json`**
    
    ```bash
    {  
    "compilerOptions": {  
    "target": "es5",  
    // 指定要包含在编译中的 library  
    "lib": [  
    "dom",  
    "dom.iterable",  
    "esnext"  
    ],  
    // 允许 ts 编译器编译 js 文件  
    "allowJs": true,  
    // 跳过类型声明文件的类型检查  
    "skipLibCheck": true,  
    // es 模块 互操作，屏蔽 ESModule 和 CommonJS 之间的差异  
    "esModuleInterop": true,  
    // 允许通过 import x from 'y' 即使模块没有显式指定 default 导出  
    "allowSyntheticDefaultImports": true,  
    // 开启严格模式  
    "strict": true,  
    // 对文件名称强制区分大小写  
    "forceConsistentCasingInFileNames": true,  
    // 为 switch 语句启用错误报告  
    "noFallthroughCasesInSwitch": true,  
    // 生成代码的模块化标准  
    "module": "esnext",  
    // 模块解析（查找）策略  
    "moduleResolution": "node",  
    // 允许导入扩展名为.json的模块  
    "resolveJsonModule": true,  
    // 是否将没有 import/export 的文件视为旧（全局而非模块化）脚本文件  
    "isolatedModules": true,  
    // 编译时不生成任何JS文件（只进行类型检查）  
    "noEmit": true,  
    // 指定将 JSX 编译成什么形式  
    "jsx": "react-jsx"  
    },  
    // 指定允许ts处理的文件目录  
    "include": [  
    "src"  
    ]  
    }
    
    ```
    
- **`public/index.html`**
    
    ```bash
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>webpack5-react-ts</title>
    </head>
    <body>
      <!-- 容器节点 -->
      <div id="root"></div>
    </body>
    </html>
    
    ```
    
- **`src/App.tsx`**
    
    ```bash
    import React from 'react'  
      
    function App() {  
    return (  
    <div>  
    <h2>template_react_ts</h2>  
    </div>  
    )  
    }  
      
    export default App
    
    ```
    
- **`src/index.tsx`**
    
    ```bash
    import React from "react";  
    import ReactDOM from "react-dom/client";  
    import App from "./App";  
      
    const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);  
    root.render(  
    <React.StrictMode>  
    <App />,  
    </React.StrictMode>,  
    );
    
    ```
    

## **二、webpack配置**

### 1、**webpack公共配置**

- `build/webpack.base.js`
    
    ```tsx
    // webpack.base.js 
    const path = require('path') 
    
    module.exports = {
    		entry: path.join(__dirname, '../src/index.tsx'), // 入口文件 
    		// 打包文件出口  
    		output: {  
    				filename: 'static/js/[name].js', // 每个输出js的名称  
    				path: path.join(__dirname, '../dist'), // 打包结果输出路径  
    				clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了  
    				publicPath: '/' // 打包后文件的公共前缀路径  
    		},  
    }
    ```
    
- **`ts和jsx`的`loader` 推荐**`babel-loader`
    
    ```tsx
    // webpack.base.js
    module.exports = {
      // ...
      module: {
        rules: [
          {
            test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
            use: {
              loader: 'babel-loader',
              options: {
                // 预设执行顺序由右往左,所以先处理ts,再处理jsx
                presets: [
                  '@babel/preset-react', // 转换 JSX
                  '@babel/preset-typescript', // 转换 TypeScript
                ]
              }
            }
          }
        ]
      }
    }
    
    ```
    
- **`extensions`**
    
    ts不支持引入以`.ts`、`.tsx`为后缀的文件，所以要在`extensions`中要配置.
    
    注意要把高频出现的文件后缀放在前面。
    
    第三方库中里面很多引入js文件且没有带后缀，所以也要配置下js
    
    ```tsx
    // webpack.base.js
    module.exports = {
      // ...
      resolve: {
        extensions: [ '.tsx', '.js', '.ts'],
      }
    }
    
    ```
    
- **`html-webpack-plugin` 插件**
    
    ```tsx
    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    
    // webpack.base.js
    
    module.exports = {
      // ...
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
          inject: true, // 自动注入静态资源
        })
      ]
    }
    
    ```
    

### 2、**webpack开发环境配置**

- `build/webpack.dev.js`
    
    ```bash
    // webpack.dev.js
    const path = require('path')
    const { merge } = require('webpack-merge')
    const baseConfig = require('./webpack.base.js')
    
    // 合并公共配置,并添加开发环境配置
    module.exports = merge(baseConfig, {
      mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
      devtool: 'eval-cheap-module-source-map', // 源码调试模式,后面会讲
      devServer: {
        port: 3000, // 服务端口号
        compress: false, // gzip压缩,开发环境不开启,提升热更新速度
        hot: true, // 开启热更新，后面会讲react模块热替换具体配置
        historyApiFallback: true, // 解决history路由404问题
        static: {
          directory: path.join(__dirname, "../public"), //托管静态资源public文件夹
        },
      }
    })
    ```
    
    - 添加`start` 命令
        
        ```tsx
        // package.json
        "scripts": {
          "start": "webpack-dev-server -c build/webpack.dev.js"
        },
        ```
        

### 3、**webpack生产环境配置**

- `build/webpack.prod.js`
    
    ```tsx
    // webpack.prod.js
    
    const { merge } = require('webpack-merge')
    const baseConfig = require('./webpack.base.js')
    module.exports = merge(baseConfig, {
      mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
    })
    
    ```
    
    - 添加`build`命令
        
        ```tsx
        // package.json
        "scripts": {
          "build": "webpack -c build/webpack.prod.js"
        },
        ```
        

## **三、基础功能配置**

### **1、配置环境变量**

设置环境变量可以借助[cross-env](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcross-env)和[webpack.DefinePlugin](https://link.juejin.cn/?target=https%3A%2F%2Fwww.webpackjs.com%2Fplugins%2Fdefine-plugin%2F)来设置。

- `cross-env`：兼容各系统的设置环境变量的包
- `webpack.DefinePlugin`：`webpack`内置的插件,可以为业务代码注入环境变量

`process.env.NODE_ENV`：区分开发模式还是打包构建模式，这是开发约定。

`process.env.BASE_ENV`：区分项目接口环境，dev，test，prod

修改`package.json`的`scripts`脚本字段

```tsx
"scripts": {  
		"start:dev": "cross-env NODE_ENV=development BASE_ENV=development webpack-dev-server -c build/webpack.dev.js",  
		"start:pre": "cross-env NODE_ENV=development BASE_ENV=preRelease webpack-dev-server -c build/webpack.dev.js",  
		"start:prod": "cross-env NODE_ENV=development BASE_ENV=production webpack-dev-server -c build/webpack.dev.js",  
		"build:dev": "cross-env NODE_ENV=production BASE_ENV=development webpack -c build/webpack.prod.js",  
		"build:pre": "cross-env NODE_ENV=production BASE_ENV=preRelease webpack -c build/webpack.prod.js",  
		"build:prod": "cross-env NODE_ENV=production BASE_ENV=production webpack -c build/webpack.prod.js",  
		"test": "echo \"Error: no test specified\" && exit 1"  
},

```

`process.env.NODE_ENV`环境变量`webpack`会自动根据设置的`mode`字段来给业务代码注入对应的`development`和`prodction`，这里在命令中再次设置环境变量`NODE_ENV`是为了在`webpack`和`babel`的配置文件中访问到。

把`process.env.BASE_ENV`注入到业务代码，要借助`webpack.DefinePlugin`插件。

```tsx
// webpack.base.js
// ...
const webpack = require('webpack')
module.export = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
    })
  ]
}

```

测试一下，在`src/index.tsx`打印一下两个环境变量

```tsx
// src/index.tsx 
// ... 
console.log('NODE_ENV', process.env.NODE_ENV);  // NODE_ENV 默认注入
console.log('BASE_ENV', process.env.BASE_ENV);
```

### **2、处理css**

解析`css`的配置，在公共配置`webpack.base.js`中添加配置

```tsx
// webpack.base.js
// ...
module.exports = {
 // ...
 module: { 
   rules: [
     // ...
     {
       test: /.css$/, //匹配 css 文件
       use: ['style-loader','css-loader']
     }
   ]
 },
 // ...
}

```

`loader`执行顺序是从右往左,从下往上的,匹配到`css`文件后先用`css-loader`解析`css`, 最后借助`style-loader`把`css`插入到头部`style`标签中。

### **3、支持less或sass**

使用`css`超集`less`或者`scss`,对于这些超集也需要对应的`loader`来识别解析

- 使用`less-loader`解析为`css`
    
    ```tsx
    // webpack.base.js
    module.exports = {
      // ...
      module: {
        // ...
        rules: [
          // ...
          {
            test: /.(css|less)$/, //匹配 css和less 文件
            use: ['style-loader','css-loader', 'less-loader']
          }
        ]
      },
      // ...
    }
    
    ```
    
- 使用`sass-loader`解析为`css`
    
    ```tsx
    // webpack.base.js
    module.exports = {
      // ...
      module: {
        // ...
        rules: [
          // ...
          {
            test: /.(css|less)$/, //匹配 css和less 文件
            use: ['style-loader','css-loader', 'sass-loader']
          }
        ]
      },
      // ...
    }
    
    ```
    
- 增加类型声明：`@types/global.d.ts`
    
    ```less
    declare module "*.less" {
      const style: any;
      export default style;
    }
    declare module "*.scss" {
      const style: any;
      export default style;
    }
    declare module '*.svg'
    declare module '*.png'
    declare module '*.jpg'
    declare module '*.jpeg'
    declare module '*.gif'
    declare module '*.bmp'
    declare module '*.tiff'
    declare module '*.less'
    declare module '*.css'
    ```
    
- 简便写法
    
    ```tsx
    
    {
      test: /\.module\.(css|less|scss)$/,
      include: /\.module\.(css|less|scss)$/,
      exclude: /node_modules/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]_[hash:base64:5]',
              exportLocalsConvention: 'camelCase'
            },
            importLoaders: 2
          }
        },
        'postcss-loader',
        'less-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(css|less|scss)$/,
      include: /\.(css|less|scss)$/,
      exclude: /node_modules/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
        'css-loader',
        'postcss-loader',
        'less-loader',
        'sass-loader'
      ]
    },
    ```
    

测试一下,新增`src/app.less`

```less
#root {
  h2 {
    font-size: 20px;
  }
}
```

### **4、处理css3前缀兼容**

- `postcss-loader`：处理`css`时自动加前缀
- `autoprefixer`：决定添加哪些浏览器前缀到`css`中
- `postcss-loader`会自动读取, 根目下的配置文件 `postcss.config.js`

```jsx
// postcss.config.js
module.exports = {
  plugins: ['autoprefixer']
}
```

- `webpack.base.js`
    
    ```jsx
    
    {
        test: /.(css|less)$/, //匹配 css和less 文件
        use: [
          'style-loader',
          'css-loader',
          // 新增
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              }
            }
          },
          'less-loader'
        ]
    }
    
    // webpack.base.js
    // ...
    module.exports = {
      // ...
      module: { 
        rules: [
          // ...
          {
            test: /.(css|less)$/, //匹配 css和less 文件
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
              'less-loader'
            ]
          },
        ]
      },
      // ...
    }
    
    ```
    

### **5、babel预设处理js兼容**

- babel-loader: 使用 `babel` 加载最新js代码并将其转换为 `ES5`（上面已经安装过）
- @babel/corer: `babel` 编译的核心包
- @babel/preset-env: `babel` 编译的预设,可以转换目前最新的`js`标准语法
- core-js: 使用低版本`js`语法模拟高版本的库,也就是垫片
- 原来的`js loader`
    
    ```jsx
    test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
    use: {
        loader: 'babel-loader',
        options: {
            // 预设执行顺序由右往左,所以先处理ts,再处理jsx
            presets: [
                // '@babel/preset-env', // 转换 ES6+ 语法
                '@babel/preset-react', // 转换 JSX
                '@babel/preset-typescript', // 转换 TypeScript
            ]
        }
    }
    ```
    
- 修改后的`js loader`
    
    ```jsx
    // webpack.base.js
    module.exports = {
      // ...
      module: {
          rules: [
              {
                  test: /\.(js|mjs|jsx|ts|tsx)$/,
                  use: {
                      loader: 'babel-loader',
                      options: {
                         // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
                          "presets": [
                              [
    		                          "@babel/preset-env",
    		                          {
    		                              // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
    		                              // "targets": {
    		                              //  "chrome": 35,
    		                              //  "ie": 9
    		                              // },
    		                              "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
    		                              "corejs": 3, // 配置使用core-js使用的版本
    	                                modules: false // 保留 ES 语法，让 webpack 可以进行 tree-shaking, 有利于代码分割和优化
    		                          }
                              ],
                              "@babel/preset-react",
                              "@babel/preset-typescript"
                          ]
                      }
                  },
              },
          // ...
        ]
      }
    }
    
    ```
    
    ### **useBuiltIns: "usage" vs "entry"**
    
    1. **entry 模式**:
        - 需要在项目入口文件手动添加 `import "core-js"` 和 `import "regenerator-runtime/runtime"`
        - 会根据 browserslist 目标导入所有 polyfill
        - 会导入更多的 polyfill，包体积较大
        
        ```jsx
        // 入口文件需要手动导入
        import "core-js/stable";
        import "regenerator-runtime/runtime";
        ```
        
    2. **usage 模式**:
        - 不需要手动导入任何 polyfill
        - 根据代码中实际使用到的特性自动导入所需的 polyfill
        - 打包体积更小，按需加载
        
        ```jsx
        // 不需要手动导入，babel 会自动处理
        const arr = [1, 2, 3];
        arr.includes(2); // babel 会自动导入 Array.prototype.includes 的 polyfill
        ```
        
    
    ### **modules: "auto" vs false**
    
    1. **auto 模式**:
        - babel 会根据环境自动决定是否转换模块语法
        - 在 webpack 环境下会自动设置为 false
        - 适合多环境构建的项目
    2. **false 模式**:
        - 保留 ES 模块语法，不转换为其他模块系统
        - 让 webpack 可以进行 tree-shaking
        - 有利于代码分割和优化

### **6、babel处理class装饰器**

现在`react`主流开发都是函数组件和`react-hooks`,但有时也会用类组件,可以用装饰器简化代码。

新增`src/components/Class.tsx`组件, 在`App.tsx`中引入该组件使用

- class组件
    
    ```jsx
    // src/components/Class.tsx
    
    import React, { PureComponent } from "react";
    
    // 装饰器为,组件添加age属性
    function addAge(Target: Function) {
      Target.prototype.age = 111
    }
    // 使用装饰圈
    @addAge
    class Class extends PureComponent {
    
      age?: number
    
      render() {
        return (
          <h2>我是类组件---{this.age}</h2>
        )
      }
    }
    
    export default Class
    
    ```
    
- 修改配置
    
    ```jsx
    // babel.config.js
    module.exports = { 
      // ...
      "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
      ]
    }
    
    // tsconfig.json
    {
      "compilerOptions": {
        // ...
        // 开启装饰器使用
        "experimentalDecorators": true
      }
    }
    
    ```
    

### **7、复制public文件夹内容**

`public`文件夹都会放一些静态资源，可以直接根据绝对路径引入，比如`图片`,`css`,`js`文件等。

不需要`webpack`进行解析，只需要打包的时候把`public`下内容复制到构建出口文件夹中。

使用[copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin)插件。

开发环境已经在`devServer`中配置了`static`托管了`public`文件夹。

在开发环境使用绝对路径可以访问到`public`下的文件。

打包构建时不做处理会访问不到，所以现在需要在打包配置文件`webpack.prod.js`中新增`copy`插件配置。

```jsx
// webpack.prod.js
// ..
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    // 复制文件插件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'), // 复制public下文件
          to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
          filter: source => {
            return !source.includes('index.html') // 忽略index.html
          }
        },
      ],
    }),
  ]
})

```

### 8、**图片文件处理**

对于图片文件,`webpack4`使用`file-loader`和`url-loader`来处理的,但`webpack5`不使用这两个`loader`了,而是采用自带的[asset-module](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.js.org%2Fguides%2Fasset-modules%2F%23root)来处理;

修改`webpack.base.js`,添加图片解析配置

```jsx
module.exports = {
  module: {
    rules: [
      // ...
      {
        test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/images/[name][ext]', // 文件输出目录和命名
        },
      },
    ]
  }
}

```

### 9、**处理字体和媒体文件**

字体文件和媒体文件这两种资源处理方式和处理图片是一样的,只需要把匹配的路径和打包后放置的路径修改一下就可以了。修改`webpack.base.js`文件：

```jsx
// webpack.base.js
module.exports = {
  module: {
    rules: [
      // ...
      {
        test:/.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/fonts/[name][ext]', // 文件输出目录和命名
        },
      },
      {
        test:/.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/media/[name][ext]', // 文件输出目录和命名
        },
      },
    ]
  }
}

```

## **四、配置react模块热更新**

热更新，上面已经在`devServer`中配置`hot`为`true。`

在`webpack4`中,还需要在插件中添加了`HotModuleReplacementPlugin`。

在`webpack5`中该插件就已经内置。只要`devServer.hot`为`true`，即可开启

现在开发模式下修改`css`和`less`文件，页面样式可以在不刷新浏览器的情况实时生效，因为此时样式都在`style`标签里面，`style-loader`做了替换样式的热替换功能。

但是修改`App.tsx`,浏览器会自动刷新后再显示修改后的内容，但我们想要的不是刷新浏览器，而是在不需要刷新浏览器的前提下模块热更新,并且能够保留`react`组件的状态。

配置`react`热更新插件,修改`webpack.dev.js`

```jsx
// webpack.dev.js
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(baseConfig, {
  // ...
  plugins: [
    new ReactRefreshWebpackPlugin(), // 添加热更新插件
  ]
})

```

这里已经实现了，组件不刷新的热更新。但在babel也要增加这个

为`babel-loader`配置`react-refesh`刷新插件,修改`babel.config.js`文件

```jsx
const isDEV = process.env.NODE_ENV === 'development' // 是否是开发模式
module.exports = {
  // ...
  "plugins": [
    isDEV && require.resolve('react-refresh/babel'), // 如果是开发模式,就启动react热更新插件
  ].filter(Boolean) // 过滤空值
}
```

> 新增或者删除页面`hooks`时,热更新时组件状态不会保留。
> 

## **五、优化构建速度**

### **1、构建耗时分析**

当进行优化的时候,肯定要先知道时间都花费在哪些步骤上了,而[speed-measure-webpack-plugin](https://www.npmjs.com/package/speed-measure-webpack-plugin)插件可以帮我们做到,安装依赖：

- `build/webpack.analy.js`
    
    ```jsx
    const prodConfig = require('./webpack.prod.js') // 引入打包配置
    const SpeedMeasurePlugin = require('speed-measure-webpack-plugin'); // 引入webpack打包速度分析插件
    const smp = new SpeedMeasurePlugin(); // 实例化分析插件
    const { merge } = require('webpack-merge') // 引入合并webpack配置方法
    
    // 使用smp.wrap方法,把生产环境配置传进去,由于后面可能会加分析配置,所以先留出合并空位
    module.exports = smp.wrap(merge(prodConfig, {
    
    }))
    
    ```
    

### **2、开启持久化存储缓存**

在`webpack5`之前做缓存是使用`babel-loader`缓存解决`js`的解析结果，`cache-loader`缓存`css`等资源的解析结果，还有模块缓存插件`hard-source-webpack-plugin`，配置好缓存后第二次打包，通过对文件做哈希对比来验证文件前后是否一致，如果一致则采用上一次的缓存，可以极大地节省时间。

`webpack5` 较于 `webpack4`,新增了持久化缓存、改进缓存算法等优化,通过配置 `webpack 持久化缓存`，来缓存生成的 `webpack` 模块和 `chunk`,改善下一次打包的构建速度，可提速 `90%` 左右，配置也简单，修改`webpack.base.js`内容如下：

```jsx
// webpack.base.js
// ...
module.exports = {
  // ...
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
}

```

> 缓存的存储位置在`node_modules/.cache/webpack`,里面又区分了`development`和`production`缓存
> 

### **3、开启多线程loader**

`webpack`的`loader`默认在单线程执行，现代电脑一般都有多核`cpu`，可以借助多核`cpu`开启多线程`loader`解析，可以极大地提升`loader`解析的速度，[thread-loader](https://webpack.docschina.org/loaders/thread-loader/#root)就是用来开启多进程解析**loader**的。

在`webpack.base.js`文件内添加如下内容:

```jsx
// webpack.base.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: ['thread-loader', 'babel-loader']
      }
    ]
  }
}

```

> 由于`thread-loader`不支持抽离`css`插件`MiniCssExtractPlugin.loader`(下面会讲),所以这里只配置了多进程解析`js`,开启多线程也是需要启动时间,大约`600ms`左右,所以适合规模比较大的项目。
> 

### 4、配置alias别名

`webpack`支持设置别名`alias`,设置别名可以让后续引用的地方减少路径的复杂度。要添加别名在`webpack.base.js`添加以下内容：

```jsx
module.export = {
  // ...
   resolve: {
    // ...
    alias: {
      '@': path.join(__dirname, '../src')
    }
  }
}

```

同时也要修改`tsconfig.json`,添加`baseUrl`和`paths` 

实际上，我之前以及添加了，这里需要主要的是两个地方都要添加。

```jsx
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}

```

配置修改完成后,在项目中使用  `@/xxx.xx`,就会指向项目中`src/xxx.xx`,在`js/ts`文件和`css`文件中都可以用。

### **5、缩小loader作用范围**

一般第三库都是已经处理好的,不需要再次使用`loader`去解析,可以按照实际情况合理配置`loader`的作用范围,来减少不必要的`loader`解析,节省时间,通过使用 `include`和`exclude` 两个配置项,可以实现这个功能,常见的例如：

- `include`：只解析该选项配置的模块
- `exclude`：不解该选项配置的模块,优先级更高

修改`webpack.base.js`如下内容：

```jsx
// webpack.base.js
const path = require('path')
module.exports = {
  // ...
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, '../src')], // 只对项目src文件的ts,tsx进行loader解析
        exclude: /node_modules/,
        test: /.(ts|tsx)$/,
        use: ['thread-loader', 'babel-loader']
      }
    ]
  }
}

```

其实我已经配置了，`exclude: /node_modules/,` 这里在加上`include` ，可以灵活配置。

其他`loader`也是相同的配置方式，如果除`src`文件外也还有需要解析的，就把对应的目录地址加上就可以了。

比如需要引入`antd`的`css`，可以把`antd`的文件目录路径添加解析`css`规则到`include`里面。

### 6、精确使用loader

`loader`在`webpack`构建过程中使用的位置是在`webpack`构建模块依赖关系引入新文件时，会根据文件后缀来倒序遍历`rules`数组，如果文件后缀和`test`正则匹配到了，就会使用该`rule`中配置的`loader`依次对文件源代码进行处理，最终拿到处理后的`sourceCode`结果，可以通过避免使用无用的`loader`解析来提升构建速度，比如使用`less-loader`解析`css`文件。

可以拆分上面配置的`less`和`css`, 避免让`less-loader`再去解析`css`文件

- 修改前
    
    ```jsx
    // webpack.base.js
    // ...
    module.exports = {
      module: {
        // ...
        rules: [
          // ...
          { // css文件处理  
          test: /.(css|less)$/, //匹配 css 文件  
          use: [  
          'style-loader',  
          'css-loader',  
          'postcss-loader',  
          'less-loader'  
          ]  
          },
        ]
      }
    }
    
    // 这里我已经，加了。而且还加了，sass的
        // LESS Modules
        {
            test: /\.module\.less$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        },
                        sourceMap: true,
                        importLoaders: 1
                    }
                },
                'postcss-loader',
                'less-loader'
            ]
        },
    ```
    
- 修改后
    
    ```jsx
    // webpack.base.js
    // ...
    module.exports = {
      module: {
        // ...
        rules: [
          // ...
          {
            test: /.css$/, //匹配所有的 css 文件
            include: [path.resolve(__dirname, '../src')],
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader'
            ]
          },
          {
            test: /.less$/, //匹配所有的 less 文件
            include: [path.resolve(__dirname, '../src')],
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
              'less-loader'
            ]
          },
        ]
      }
    }
    
    ```
    

### **7、缩小模块搜索范围**

`node`里面模块有三种

- `node`核心模块
- `node_modules`模块
- 自定义文件模块

使用`require`和`import`引入模块时如果有准确的相对或者绝对路径，就会去按路径查询,如果引入的模块没有路径，会优先查询`node`核心模块，如果没有找到会去当前目录下`node_modules`中寻找，如果没有找到会查从父级文件夹查找`node_modules`，一直查到系统`node`全局模块。

这样会有两个问题

一个是当前项目没有安装某个依赖，但是上一级目录下`node_modules`或者全局模块有安装，就也会引入成功，但是部署到服务器时可能就会找不到造成报错。

另一个问题就是一级一级查询比较消耗时间。可以告诉`webpack`搜索目录范围,来规避这两个问题。

> `yarn`和`npm`就会有影子依赖（或者说是*幽灵依赖*），所以我用`pnpm`重新跑一遍。
> 

修改**webpack.base.js**

```jsx
// webpack.base.js
const path = require('path')
module.exports = {
  // ...
  resolve: {
     // ...
     // 如果用的是pnpm 就暂时不要配置这个，会有幽灵依赖的问题，访问不到很多模块。
     modules: [path.resolve(__dirname, '../node_modules')], // 查找第三方模块只在本项目的node_modules中查找
  },
}

```

### **8、devtool 配置**

开发过程中或者打包后的代码都是`webpack`处理后的代码,如果进行调试肯定希望看到源代码,而不是编译后的代码, [source map](https://link.juejin.cn/?target=http%253A%252F%252Fblog.teamtreehouse.com%252Fintroduction-source-maps)就是用来做源码映射的,不同的映射模式会明显影响到构建和重新构建的速度, [devtool](https://link.juejin.cn/?target=https%253A%252F%252Fwebpack.js.org%252Fconfiguration%252Fdevtool%252F)选项就是`webpack`提供的选择源码映射方式的配置。

`devtool`的命名规则为 `^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$`

| 关键字 | 描述 |
| --- | --- |
| inline | 代码内通过 dataUrl 形式引入 SourceMap |
| hidden | 生成 SourceMap 文件,但不使用 |
| eval | `eval(...)` 形式执行代码,通过 dataUrl 形式引入 SourceMap |
| nosources | 不生成 SourceMap |
| cheap | 只需要定位到行信息,不需要列信息 |
| module | 展示源代码中的错误位置 |

开发环境推荐：`eval-cheap-module-source-map`

- 本地开发首次打包慢点没关系,因为 `eval` 缓存的原因, 热更新会很快
- 开发中,我们每行代码不会写的太长,只需要定位到行就行,所以加上 `cheap`
- 我们希望能够找到源代码的错误,而不是打包后的,所以需要加上 `module`

修改`webpack.dev.js`

```jsx
// webpack.dev.js
module.exports = {
  // ...
  devtool: 'eval-cheap-module-source-map'
}
```

### 9、其他优化配置

除了上面的配置外，`webpack`还提供了其他的一些优化方式,本次搭建没有使用到，所以只简单罗列下:

- [`externals`](https://webpack.js.org/configuration/externals/): 外包拓展，打包时会忽略配置的依赖，会从上下文中寻找对应变量;
- [`module.noParse`](https://webpack.docschina.org/configuration/module/#modulenoparse): 匹配到设置的模块,将不进行依赖解析，适合`jquery`,`boostrap`这类不依赖外部模块的包;
- [`ignorePlugin`](https://webpack.docschina.org/plugins/ignore-plugin/#root): 可以使用正则忽略一部分文件，常在使用多语言的包时可以把非中文语言包过滤掉;

## **六、优化构建结果文件**

### 1、webpack包分析工具

[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)是分析`webpack`打包后文件的插件,使用交互式可缩放树形图可视化 `webpack` 输出文件的大小。通过该插件可以对打包后的文件进行观察和分析,可以方便我们对不完美的地方针对性的优化。

修改`webpack.analy.js`

```jsx
// webpack.analy.js
const prodConfig = require('./webpack.prod.js')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 引入分析打包结果插件
module.exports = smp.wrap(merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin() // 配置分析打包结果插件
  ]
}))

```

配置好后,执行`yarn build:analy`命令,打包完成后浏览器会自动打开窗口,可以看到打包文件的分析结果页面,可以看到各个文件所占的资源大小。

### 2、抽取css样式文件

在开发环境我们希望`css`嵌入在`style`标签里面,方便样式热替换,但打包时我们希望把`css`单独抽离出来,方便配置缓存策略。而插件[mini-css-extract-plugin](https://link.juejin.cn/?target=https%253A%252F%252Fgithub.com%252Fwebpack-contrib%252Fmini-css-extract-plugin)就是来帮我们做这件事的,安装依赖：

修改`webpack.base.js`, 根据环境变量设置开发环境使用`style-looader`,打包模式抽离`css`

```jsx
// webpack.base.js
// ...
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development' // 是否是开发模式
module.exports = {
  // ...
  module: { 
    rules: [
      // ...
      {
        test: /.css$/, //匹配所有的 css 文件
        include: [path.resolve(__dirname, '../src')],
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /.less$/, //匹配所有的 less 文件
        include: [path.resolve(__dirname, '../src')],
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
    ]
  },
  // ...
}

```

再修改`webpack.prod.js`, 打包时添加抽离css插件

```jsx
// webpack.prod.js
// ...
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    // ...
    // 抽离css插件
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css' // 抽离css的输出目录和名称
    }),
  ]
})

```

配置完成后,在开发模式`css`会嵌入到`style`标签里面,方便样式热替换,打包时会把`css`抽离成单独的`css`文件。

### 3、压缩css文件

上面配置了打包时把`css`抽离为单独`css`文件的配置,打开打包后的文件查看,可以看到默认`css`是没有压缩的,需要手动配置一下压缩`css`的插件。

可以借助[css-minimizer-webpack-plugin](https://www.npmjs.com/package/css-minimizer-webpack-plugin)来压缩css,安装依赖：

修改`webpack.prod.js`文件， 需要在优化项[optimization](https://webpack.js.org/configuration/optimization/)下的[minimizer](https://webpack.js.org/configuration/optimization/#optimizationminimizer)属性中配置

```jsx
// webpack.prod.js
// ...
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // ...
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 压缩css
    ],
  },
}

```

这时候再执行打包命令之后可以看见css文件已经被压缩

### 4、压缩js文件

设置`mode`为`production`时，`webpack`会使用内置插件[terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin)压缩`js`文件，该插件默认支持多线程压缩，但是上面配置`optimization.minimizer`压缩`css`后。

`js`压缩就失效了，需要手动再添加一下，`webpack`内部安装了该插件，由于`pnpm`解决了幽灵依赖问题，如果用的`pnpm`的话，需要手动再安装一下依赖。

**配置前，查看打包后的js，发现已经压缩了。**

还可选择UglifyJsPlugin：[**uglifyjs-webpack-plugin**](https://www.npmjs.com/package/uglifyjs-webpack-plugin)

[完成的webpack4配置](https://www.notion.so/webpack4-1be5b6e80ae6808ba6c4d056bf07430a?pvs=21) 

• `uglify-js` 不支持 ES6+ 语法，可能不适合现代项目。

**推荐使用 `terser`**：

- 默认情况下，`TerserPlugin` 使用 `terser`，它更现代化且支持 ES6+ 语法。
- [**`SWC`**](https://github.com/swc-project/swc) 是用 Rust 编写的超快速编译器;从现代标准和 TypeScript 生成广泛支持的 JavaScript。
- `extractComments` 选项不受支持，默认情况下将删除所有注释，将来会修复
- [**[Question] how do remove console.log #57**](https://github.com/webpack-contrib/terser-webpack-plugin/issues/57)

修改`webpack.prod.js`文件

```jsx
// ...
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // ...
  optimization: {
    minimizer: [
      // ...
      new TerserPlugin({ // 压缩js
        parallel: true, // 开启多线程压缩
        terserOptions: {
	        sourceMap: true, // 是否生成source map【生产环境中可禁用以提高性能】.  亲测设置 sourceMap: true, 并没有生成 sourceMap 
          compress: {
            // 删除 console
            pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
            // 删除 debugger 语句
            drop_debugger: true,
            // 删除无法访问的代码
            dead_code: true,
            // 移除未使用的变量
            unused: true,
            // 移除无法访问的分支
            conditionals: true,
            // 为警告选项
            warnings: false  // 这才是控制警告的正确选项
          },
          format: {
            comments: false // 移除注释
          }
        }
      }),
    ],
  },
}

// 常见的配置

new TerserPlugin({
  cache: true, // 启用缓存【性能优化：加快重复构建速度】
  parallel: true, // 并行运行【性能优化：利用多核CPU加速构建】
  sourceMap: false, // 是否生成source map【生产环境中可禁用以提高性能】
  terserOptions: {
    output: {
      comments: false, // 移除注释【性能优化：减小文件大小】
    },
  },
}),

// 设置还支持 uglifyJsMinify
new TerserPlugin({
  minify: TerserPlugin.uglifyJsMinify,
  // `terserOptions` options will be passed to `uglify-js`
  // Link to options - https://github.com/mishoo/UglifyJS#minify-options
  terserOptions: {},
}),
```

```tsx
terserOptions  ThirdOptions 第三选项
Type:  类型：

type terserOptions = {
  compress?: boolean | CompressOptions;
  ecma?: ECMA;
  enclose?: boolean | string;
  ie8?: boolean;
  keep_classnames?: boolean | RegExp;
  keep_fnames?: boolean | RegExp;
  mangle?: boolean | MangleOptions;
  module?: boolean;
  nameCache?: object;
  format?: FormatOptions;
  /** @deprecated */
  output?: FormatOptions;
  parse?: ParseOptions;
  safari10?: boolean;
  sourceMap?: boolean | SourceMapOptions;
  toplevel?: boolean;
};
```

### **5、合理配置打包文件hash**

项目维护的时候,一般只会修改一部分代码,可以合理配置文件缓存,来提升前端加载页面速度和减少服务器压力,而`hash`就是浏览器缓存策略很重要的一部分。`webpack`打包的`hash`分三种：

- `hash`：跟整个项目的构建相关,只要项目里有文件更改,整个项目构建的`hash`值都会更改,并且全部文件都共用相同的`hash`值;
- `chunkhash`：不同的入口文件进行依赖文件解析、构建对应的`chunk`,生成对应的哈希值,文件本身修改或者依赖文件修改,`chunkhash`值会变化;
- `contenthash`：每个文件自己单独的 `hash` 值,文件的改动只会影响自身的 `hash` 值;

`hash`是在输出文件时配置的,格式是`filename: "[name].[chunkhash:8][ext]"` , `[xx]`  格式是`webpack`提供的占位符,  `:8`是生成`hash`的长度。

| 占位符 | 解释 |
| --- | --- |
| ext | 文件后缀名 |
| name | 文件名 |
| path | 文件相对路径 |
| folder | 文件所在文件夹 |
| hash | 每次构建生成的唯一 hash 值 |
| chunkhash | 根据 chunk 生成 hash 值 |
| contenthash | 根据文件内容生成hash 值 |

因为`js`我们在生产环境里会把一些公共库和程序入口文件区分开,单独打包构建,采用`chunkhash`的方式生成哈希值,那么只要我们不改动公共库的代码,就可以保证其哈希值不会受影响,可以继续使用浏览器缓存,所以`js`适合使用`chunkhash`;

`css`和图片资源媒体资源一般都是单独存在的,可以采用`contenthash`,只有文件本身变化后会生成新`hash`值。

修改`webpack.base.js`,把`js`输出的文件名称格式加上`chunkhash`,把`css`和图片媒体资源输出格式加上`contenthash`。

```tsx
// webpack.base.js
// ...
module.exports = {
  // 打包文件出口
  output: {
    filename: 'static/js/[name].[chunkhash:8].js', // // 加上[chunkhash:8]
    // ...
  },
  module: {
    rules: [
      {
        test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        // ...
        generator:{ 
          filename:'static/images/[name].[contenthash:8][ext]' // 加上[contenthash:8]
        },
      },
      {
        test:/.(woff2?|eot|ttf|otf)$/, // 匹配字体文件
        // ...
        generator:{ 
          filename:'static/fonts/[name].[contenthash:8][ext]', // 加上[contenthash:8]
        },
      },
      {
        test:/.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        // ...
        generator:{ 
          filename:'static/media/[name].[contenthash:8][ext]', // 加上[contenthash:8]
        },
      },
    ]
  },
  // ...
}

```

再修改`webpack.prod.js`,修改抽离`css`文件名称格式

```tsx
// webpack.prod.js
// ...
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    // 抽离css插件
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css' // 加上[contenthash:8]
    }),
    // ...
  ],
  // ...
})

```

再次打包就可以看到文件后面的`hash`了

### 6、分割三方包和公共模块

一般第三方包的代码变化频率比较小，可以单独把`node_modules`中的代码单独打包,，当第三包代码没变化时，对应`chunkhash`值也不会变化，可以有效利用浏览器缓存。

还有公共的模块也可以提取出来，避免重复打包加大代码整体体积， `webpack`提供了代码分隔功能，需要我们手动在优化项 [optimization](https://webpack.js.org/configuration/optimization/) 中手动配置下代码分隔[splitChunks](https://webpack.js.org/configuration/optimization/#optimizationsplitchunks)规则。

修改`webpack.prod.js` 

```tsx
module.exports = {
  // ...
  optimization: {
    // ...
    splitChunks: { // 分隔代码
      cacheGroups: {
        vendors: { // 提取node_modules代码
          test: /node_modules/, // 只匹配node_modules里面的模块
          name: 'vendors', // 提取文件命名为vendors,js后缀和chunkhash会自动加
          minChunks: 1, // 只要使用一次就提取出来
          chunks: 'initial', // 只提取初始化就能获取到的模块,不管异步的
          minSize: 0, // 提取代码体积大于0就提取出来
          priority: 1, // 提取优先级为1
        },
        commons: { // 提取页面公共代码
          name: 'commons', // 提取文件命名为commons
          minChunks: 2, // 只要使用两次就提取出来
          chunks: 'initial', // 只提取初始化就能获取到的模块,不管异步的
          minSize: 0, // 提取代码体积大于0就提取出来
        }
      }
    }
  }
}

```

- 详细配置
    
    ```tsx
    module.exports = merge(baseConfig, {
      // ...existing code...
      optimization: {
        // ...existing code...
        splitChunks: {
          // 默认配置
          chunks: 'all', // 分割所有类型的代码，包括同步和异步
          minSize: 20000, // 生成 chunk 的最小大小（单位 bytes）
          // maxSize: 244000, // 生成 chunk 的最大大小（单位 bytes）// 添加最大尺寸限制
          // 常见设置值
          maxSize: {
            javascript: 244000,    // ≈ 238KB，适合普通JS文件
            style: 50000,         // ≈ 49KB，适合CSS文件
            image: 100000,        // ≈ 98KB，适合图片文件
          },
          minRemainingSize: 0, // 确保拆分后剩余的最小 chunk 体积超过限制来避免大量的小 chunk
          minChunks: 1, // 拆分前必须共享模块的最小块数
          maxAsyncRequests: 30, // 按需加载时的最大并行请求数
          maxInitialRequests: 30, // 入口点的最大并行请求数
          enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值
          
          cacheGroups: {
            // React 运行时核心
            'react-runtime': {
              name: 'chunk-react-runtime',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40, // 取值范围：-20 到 40，值越大，优先级越高
              chunks: 'all', // 同步和异步都进行分包
              minSize: 0, // 忽略最小体积限制
              minChunks: 1, // 被使用一次就分包
              reuseExistingChunk: true, // 复用已存在的 chunk
              maxSize: 488000, // 添加最大尺寸限制
            },
            // React 其他依赖
            'react-deps': {
              name: 'chunk-react-deps',
              test: /[\\/]node_modules[\\/](@emotion|@mui|react-router|redux)[\\/]/,
              priority: 30,
              chunks: 'all',
              minSize: 30000, // 体积大于30kb才会被分包
              reuseExistingChunk: true // 复用已存在的 chunk
            },
    
            // React 相关库单独分包
            // react: {
            //   name: 'chunk-react',
            //   priority: 20, // 优先级更高。范围是-20到20。默认为0。
            //   test: /[\\/]node_modules[\\/]react(.*)/,
            //   chunks: 'all',  // 默认只对异步代码进行分包，这里改为同步和异步都进行分包, 可选值有 all, async, initial
            //   minSize: 0, // 忽略最小体积限制
            //   minChunks: 1, // 被使用一次就分包
            //   reuseExistingChunk: true, // 复用已存在的 chunk
            // },
    
            // babel 核心依赖
            coreDeps: {
              test: /[\\/]node_modules[\\/](@babel|core-js)[\\/]/,
              name: 'chunk-core',
              priority: 20, // 优先级最高
              chunks: 'all', // 默认只对异步代码进行分包，这里改为同步和异步都进行分包
            },
    
            // 第三方库分包
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name(module, chunks, cacheGroupKey) {
                // 根据第三方包名动态生成包名
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1].replace('@', '');
                return `${cacheGroupKey}.${packageName}`;
              },
              priority: 10, // 优先级提高
              chunks: 'all', // 默认只对异步代码进行分包，这里改为同步和异步都进行分包
              minSize: 0, // 忽略最小体积限制
              minChunks: 1, // 被使用一次就分包
              reuseExistingChunk: true // 复用已存在的 chunk
            },
            
            // 业务基础包
            commons: {
              name: 'chunk-commons',
              minChunks: 2, // 最小共享模块数 被引用两次以上才会被分包
              priority: 0, // 优先级，数值越大优先级越高
              chunks: 'all',
              minSize: 0,
              reuseExistingChunk: true
            },
    
            // 异步加载的公共模块
            asyncCommons: {
              name: 'chunk-async',
              chunks: 'async',
              priority: -1,
              minChunks: 2,
              reuseExistingChunk: true
            }
          }
        },
      }
      // ...existing code...
    })
    ```
    

- 为什么`maxSize`设置244000 bytes
    
    让我解释一下为什么 webpack 建议将 JavaScript 文件的 `maxSize` 设置为 244000 bytes：
    
    ### 主要原因
    
    1. **网络性能考虑**
        - HTTP/1.1 的并发限制
        - 浏览器的并发连接数限制
        - 文件大小与加载时间的平衡点
    2. **具体数值说明**
        
        ```
        244000 bytes
        ≈ 238.28 KB
        ≈ 0.23 MB
        
        ```
        
    3. **最佳实践依据**
        - Google 推荐的首屏 JavaScript 大小在 170KB 左右（压缩后）
        - 考虑到 gzip 压缩（通常可以压缩到原大小的 30%），244KB 压缩后约为 73KB
        - HTTP/2 多路复用特性下，这个大小是一个比较好的平衡点
    
    ### 实际配置建议
    
    ```jsx
    // filepath: /Users/qidasheng/dev/web2/webpack-vite/bundler/pnpm-react-ts-webpack5/build/webpack.prod.js
    splitChunks: {
      maxSize: {
        javascript: 244000,    // ≈ 238KB
        style: 50000,         // ≈ 49KB
        image: 100000,        // ≈ 98KB
      }
    }
    
    ```
    
    ### 性能影响
    
    1. **太大的包（> 244KB）可能导致：**
        - 首屏加载时间变长
        - 解析和执行时间增加
        - 内存占用增加
    2. **太小的包（< 50KB）可能导致：**
        - HTTP 请求数量过多
        - 服务器连接压力增大
        - 浏览器并发限制影响
    3. **244KB 的优势：**
        - 良好的缓存效果
        - 合理的加载时间
        - 适中的解析成本
        - 符合现代网络环境
    
    ### 实际使用建议
    
    1. 根据你的具体场景调整这个值：
        - CDN 环境：可以适当增大
        - 弱网环境：建议减小
        - HTTP/2：可以适当减小分包大小
    2. 结合性能监控工具：
        - Chrome DevTools
        - Lighthouse
        - WebPageTest
    3. 考虑用户环境：
        - 网络条件
        - 设备性能
        - 浏览器类型

### **7、tree-shaking清理css**

`js`中会有未使用到的代码，`css`中也会有未被页面使用到的样式，可以通过[purgecss-webpack-plugin](https://www.npmjs.com/package/purgecss-webpack-plugin)插件打包的时候移除未使用到的`css`样式，这个插件是和[mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)插件配合使用的，在上面已经安装过,还需要[glob-all](https://www.npmjs.com/package/glob-all)来选择要检测哪些文件里面的类名和`id`还有标签名称，安装依赖:

> 作者使用的是4版本，我们最新的7版本，导入方式需要改为
> 
> 
> ```tsx
> const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
> ```
> 

修改`webpack.prod.js`

```tsx
// webpack.prod.js
// ...
const globAll = require('glob-all')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // ...
  plugins: [
    // 抽离css插件
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css'
    }),
    // 清理无用css
    new PurgeCSSPlugin({
      // 检测src下所有tsx文件和public下index.html中使用的类名和id和标签名称
      // 只打包这些文件中用到的样式
      paths: globAll.sync([
        `${path.join(__dirname, '../src')}/**/*.tsx`,
        path.join(__dirname, '../public/index.html')
      ]),
    }),
  ]
}

```

插件本身也提供了一些白名单`safelist`属性,符合配置规则选择器都不会被删除掉,比如使用了组件库[antd](https://link.juejin.cn/?target=https%3A%2F%2Fant.design%2F), `purgecss-webpack-plugin`插件检测`src`文件下`tsx`文件中使用的类名和`id`时,是检测不到在`src`中使用`antd`组件的类名的,打包的时候就会把`antd`的类名都给过滤掉,可以配置一下安全选择列表,避免删除`antd`组件库的前缀`ant`。

```tsx
new PurgeCSSPlugin({
  // ...
  safelist: {
    standard: [/^ant-/], // 过滤以ant-开头的类名，哪怕没用到也不删除
  }
})

```

### **8、资源懒加载**

像`react`，`vue`等单页应用打包默认会打包到一个`js`文件中，虽然使用代码分割可以把`node_modules`模块和`公共模块`分离，但页面初始加载还是会把整个项目的代码下载下来。

其实只需要公共资源和当前页面的资源就可以了，其他页面资源可以等使用到的时候再加载，可以有效提升首屏加载速度。

`webpack`默认支持资源懒加载，只需要引入资源使用`import`语法来引入资源，`webpack`打包的时候就会自动打包为单独的资源文件，等使用到的时候动态加载。

以懒加载组件和`css`为例，新建懒加载组件`src/components/LazyDemo.tsx`

```tsx
import React from "react";

function LazyDemo() {
  return <h3>我是懒加载组件</h3>
}

export default LazyDemo

```

- 修改`App.tsx`
    
    ```tsx
    import React, { lazy, Suspense, useState } from 'react'  
    const LazyDemo = lazy(() => import('@/components/LazyDemo')) // 使用import语法配合react的Lazy动态引入资源  
      
    function App() {  
    		const [ show, setShow ] = useState(false)  
      
        // 点击事件中动态引入css, 设置show为true  
        const onClick = () => {  
            import("./app1.css")  
            setShow(true)  
        }
        return (
    			<>  
    					<h2 onClick={onClick}>展示</h2>  
    					{/* show为true时加载LazyDemo组件 */}  
    					{ show && <Suspense fallback={<span>加载中</span>}><LazyDemo /></Suspense> }  
    			</>  
    		)  
    }  
      
    export default App
    
    ```
    
- `src/app1.css`
    
    ```tsx
    h2 {
        font-size: 48px;
    }
    
    .container {
      padding: 20px;
    }
    
    .title {
      color: #333;
      font-size: 24px;
    }
    ```
    
- 还有一个地方需要注意的是，sass不要和css匹配到，不然会报错
    
    

### **9、资源预加载**

上面配置了资源懒加载后，虽然提升了首屏渲染速度，但是加载到资源的时候会有一个去请求资源的延时，如果资源比较大会出现延迟卡顿现象，可以借助`link`标签的`rel`属性`prefetch`与`preload`，`link`标签除了加载`css`之外也可以加载`js`资源，设置`rel`属性可以规定`link`提前加载资源。但是加载资源后不执行,等用到了再执行。

`rel的属性值`

- `preload`是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源。
- `prefetch`是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源，会在空闲时加载。
- 
- **预获取（prefetch）**：将来某些导航下可能需要的资源
- **预加载（preload）**：当前导航下可能需要资源

对于当前页面很有必要的资源使用 `preload` ，对于可能在将来的页面中使用的资源使用 `prefetch`。

`webpack v4.6.0+`  增加了对[预获取和预加载](https://webpack.docschina.org/guides/code-splitting/#prefetchingpreloading-modules)的支持，使用方式也比较简单，在`import`引入动态资源时使用`webpack`的魔法注释;

```tsx
// 单个目标
import(
  /* webpackChunkName: "my-chunk-name" */ // 资源打包后的文件chunkname
  /* webpackPrefetch: true */ // 开启prefetch预加载
  /* webpackPreload: true */ // 开启preload预获取
  './module'
);

```

测试一下,在`src/components`目录下新建`PreloadDemo.tsx`, `PreFetchDemo.tsx`

```tsx
// src/components/PreloadDemo.tsx
import React from "react";
function PreloadDemo() {
  return <h3>我是PreloadDemo组件</h3>
}
export default PreloadDemo

// src/components/PreFetchDemo.tsx
import React from "react";
function PreFetchDemo() {
  return <h3>我是PreFetchDemo组件</h3>
}
export default PreFetchDemo

```

然后打包后查看效果，页面初始化时预加载了`PreFetchDemo.js`组件资源，但是不执行里面的代码，等点击展示按钮后从预加载的资源中直接取出来执行，不用再从服务器请求，节省了很多时间。

> 但是我实际测试中，发现`PreFetchDemo.js` 还是在点击的时候再次加载了。这样来说的话，并没有起到缓存的作用。
> 
> 
> 可能是设置的浏览器不缓存，导致会重复加载，关闭浏览器不缓存就会加载。但是是304。
> 
> 关闭不缓存，并清除缓存刷新就能看到效果，`PreFetchDemo.js` 会直接加载，点击展示就会304缓存
> 
- `webpackPrefetch` 和 `webpackPreload`
    
    [**预获取/预加载模块**](https://webpack.docschina.org/guides/code-splitting/#prefetchingpreloading-modules)
    
    | **特性** | **`webpackPrefetch`** | **`webpackPreload`** |
    | --- | --- | --- |
    | **加载时机** | 页面加载完成后，空闲时 | 当前页面加载的同时 |
    | **优先级** | 低 | 高 |
    | **适用情况** | 用户可能访问但非立即需要的资源 | 当前页面渲染所需的额外资源 |
    - **预获取（prefetch）**：将来某些导航下可能需要的资源
    - **预加载（preload）**：当前导航下可能需要资源
        - 预加载 chunk 会在父 chunk 加载时以并行方式开始加载；而预获取 chunk 会在父 chunk 加载结束后开始加载。
        - 预加载 chunk 具有中等优先级，并会立即下载；而预获取 chunk 则在浏览器闲置时下载。
        - 预加载 chunk 会在父 chunk 中立即请求，用于当下时刻；而预获取 chunk 则用于未来的某个时刻。

### **10、打包时生成gzip文件**

前端代码在浏览器运行，需要从服务器把`html`,`css`,`js`资源下载执行，下载的资源体积越小，页面加载速度就会越快。

一般会采用`gzip`压缩，现在大部分浏览器和服务器都支持`gzip`，可以有效减少静态资源文件大小，压缩率在 `70%` 左右。

`nginx`可以配置`gzip: on`来开启压缩，但是只在`nginx`层面开启，会在每次请求资源时都对资源进行压缩，压缩文件会需要时间和占用服务器`cpu`资源。

更好的方式是前端在打包的时候直接生成`gzip`资源，服务器接收到请求，可以直接把对应压缩好的`gzip`文件返回给浏览器，节省时间和`cpu`。

`webpack`可以借助[compression-webpack-plugin](https://www.npmjs.com/package/compression-webpack-plugin) 插件在打包时生成 `gzip` 文章,安装依赖;

添加配置,修改`webpack.prod.js` 

```tsx
const glob = require('glob')
const CompressionPlugin  = require('compression-webpack-plugin');

module.exports = {
  // ...
  plugins: [
     // ...
     new CompressionPlugin({
      test: /.(js|css)$/, // 只生成css,js压缩文件
      filename: '[path][base].gz', // 文件命名
      algorithm: 'gzip', // 压缩格式,默认是gzip
      test: /.(js|css)$/, // 只生成css,js压缩文件
      threshold: 10240, // 只有大小大于该值的资源会被处理。默认值是 10k
      minRatio: 0.8 // 压缩率,默认值是 0.8
    })
  ]
}

```

配置完成后再打包,可以看到打包后js的目录下多了一个  `.gz` 结尾的文件

## **七、项目规范**

### 1、安装eslint

详情[eslint+prettier](https://juejin.cn/post/7007765819870412831) 首先通过命令创建`.eslintrc.js`文件。

安装`eslint`

使用`eslint`命令安装相关依赖

```bash
npx eslint --init

devDependencies:
+ @eslint/js 9.23.0
+ eslint-plugin-react 7.37.4
+ globals 16.0.0
+ typescript-eslint 8.28.0
```

- `eslint.config.mjs`
    
    ```bash
    import { defineConfig } from "eslint/config";
    import globals from "globals";
    import js from "@eslint/js";
    import tseslint from "typescript-eslint";
    import pluginReact from "eslint-plugin-react";
    
    export default defineConfig([
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ]);
    ```
    

**安装typescript相关依赖。因为我认为**`npx eslint --init` 在初始化的时候，已经选择了，react，我就没有单独去处理react。

**使用`airbnd`代码风格**

使用到一些第三方的`eslint`规范，当前我们项目使用`airbnd`, `airbnd`也是当前`github`star 最多的， 具体可以参考[airbnb](https://github.com/airbnb/javascript)，如果不需要就省略这一步，首先需要安装`airbnd`相关配置，安装依赖之前我们需要先简单了解一下相关依赖

- `eslint-config-airbnb`是`Airbnb JavaScript`风格的 eslint 共享配置库，检测规则包括`ES6+` 和 `React`，它依赖于`eslint-plugin-import`、`eslint-plugin-react`、`eslint-plugin-react-hooks`、`eslint-plugin-jsx-a11y`包。
- `eslint-config-airbnb-base`，如果我们不需要`React`，可以安装这个包代替`eslint-config-airbnb`
- `eslint-config-airbnb-typescript`，支持 typescript，依赖于`eslint-config-airbnb`

由于我们现在的项目是React+Ts，所以要安装`eslint-config-airbnb`和`eslint-config-airbnb-typescript`这两个包。

我们先执行`npm info "eslint-config-airbnb@latest" peerDependencies`，了解`eslint-config-airbnb`的依赖包版本;

```bash
npm info "eslint-config-airbnb@latest" peerDependencies
{
  eslint: '^7.32.0 || ^8.2.0',
  'eslint-plugin-import': '^2.25.3',
  'eslint-plugin-jsx-a11y': '^6.5.1',
  'eslint-plugin-react': '^7.28.0',
  'eslint-plugin-react-hooks': '^4.3.0'
}
```

[**eslint-config-airbnb**](https://www.npmjs.com/package/eslint-config-airbnb)

本来是打算使用官方推荐的npx安装，安装完我把node_modules删除了，重新用pnpm安装，但是报错了，只能手动安装了

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

按照[eslint-config-airbnb-typescript 配置步骤](https://github.com/iamturns/eslint-config-airbnb-typescript#3-configure-eslint), 修改`.eslintrc.js`文件

- `eslint.config.mjs` 默认配置
    
    ```bash
    import { defineConfig } from "eslint/config";
    import globals from "globals";
    import js from "@eslint/js";
    import tseslint from "typescript-eslint";
    import pluginReact from "eslint-plugin-react";
    
    export default defineConfig([
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ]);
    ```
    
- copilot给出的梦幻`eslint.config.mjs` 各种报错
    
    ```bash
    import js from '@eslint/js';
    import globals from 'globals';
    import tseslint from 'typescript-eslint';
    import react from 'eslint-plugin-react';
    import reactHooks from 'eslint-plugin-react-hooks';
    import importPlugin from 'eslint-plugin-import';
    import jsxA11y from 'eslint-plugin-jsx-a11y';
    
    export default [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          parser: tseslint.parser,
          parserOptions: {
            project: './tsconfig.json'
          },
          globals: {
            ...globals.browser
          }
        },
        plugins: {
          '@typescript-eslint': tseslint.plugin,
          'react': react,
          'react-hooks': reactHooks,
          'import': importPlugin,
          'jsx-a11y': jsxA11y
        },
        settings: {
          react: {
            version: 'detect'
          },
          'import/resolver': {
            typescript: {},
            node: {
              extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
          }
        },
        rules: {
          // React 相关规则
          'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
          'react/jsx-props-no-spreading': 'error',
          'react/no-unescaped-entities': 'error',
          'react/react-in-jsx-scope': 'off',
          'react-hooks/rules-of-hooks': 'error',
          'react-hooks/exhaustive-deps': 'warn',
    
          // TypeScript 相关规则
          '@typescript-eslint/no-unused-vars': 'warn',
          '@typescript-eslint/explicit-function-return-type': 'off',
    
          // 导入相关规则
          'import/prefer-default-export': 'off',
          'import/extensions': [
            'error',
            'ignorePackages',
            {
              'js': 'never',
              'jsx': 'never',
              'ts': 'never',
              'tsx': 'never'
            }
          ]
        }
      }
    ];
    ```
    
- 去掉`Airbnb` **代码风格**
    
    ```bash
    import { defineConfig } from "eslint/config";
    import globals from "globals";
    import js from "@eslint/js";
    import tseslint from "typescript-eslint";
    import pluginReact from "eslint-plugin-react";
    import pluginReactHooks from "eslint-plugin-react-hooks";
    import pluginImport from "eslint-plugin-import";
    import pluginJsxA11y from "eslint-plugin-jsx-a11y";
    
    export default defineConfig([
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
       // 基础配置
      {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        ignores: ['node_modules/**', 'dist/**', 'build/**', '*.config.{js,mjs,cjs}'],
        languageOptions: {
          globals: {
            ...globals.browser,
            ...globals.es2021
          },
          parser: tseslint.parser,
          parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            project: './tsconfig.json',
            ecmaFeatures: {
              jsx: true
            }
          }
        },
        plugins: {
          '@typescript-eslint': tseslint.plugin,
          'react': pluginReact,
          'react-hooks': pluginReactHooks,
          'import': pluginImport,
          'jsx-a11y': pluginJsxA11y
        },
        settings: {
          react: {
            version: 'detect'
          },
          'import/resolver': {
            typescript: {},
            node: {
              extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
          }
        }
      },
      // Airbnb 依赖的版本低，先不配置Airbnb规则
      // // Airbnb 规则
      // { 
        
      //   files: ["**/*.{js,jsx,ts,tsx}"],
      //   extends: [
      //     'airbnb',
      //     'airbnb-typescript',
      //     'airbnb/hooks'
      //   ],
      //   plugins: {
      //     '@typescript-eslint': tseslint.plugin,
      //     'react': pluginReact,
      //     'react-hooks': pluginReactHooks,
      //     'import': pluginImport,
      //     'jsx-a11y': pluginJsxA11y
      //   },
      // },
      
      // 自定义规则
      { 
        rules: {
            // TypeScript 相关规则
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-expressions': 'error',
            
            // React 相关规则
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
            'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
    
            // 导入相关规则
            'import/prefer-default-export': 'off',
            'import/extensions': [
              'error',
              'ignorePackages',
              {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
              }
            ],
    
            // 其他规则
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        }
      }
    ]);
    ```
    
- ignore files
    
    ```bash
                '**/node_modules/**',
                '**/dist/**',
                '**/build/**',
                '**/.git/**',
                '**/.vscode/**',
                '**/.husky/**',
                '.eslintrc.js',
                '.prettierrc.js',
                '.stylelintrc.js',
                'commitlint.config.js',
                'scripts/**/*.js',
                '*.config.{js,mjs,cjs}',
                '.idea/**/*',
                'README.md',
                '.gitignore',
    
                '**/.*copy*.*',
                '**/*copy*.*',
    ```
    

### **2、安装prettier**

根目录新增`.prettier.js` 文件，添加我们常用的代码风格

```jsx
module.exports = {
    printWidth: 120,         // 每行代码最大长度
    tabWidth: 4,            // 缩进空格数
    useTabs: false,         // 使用空格缩进，而不是 tab
    semi: true,             // 在语句末尾添加分号
    singleQuote: true,      // 使用单引号而不是双引号
    quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
    jsxSingleQuote: false,   // JSX中使用双引号
    trailingComma: 'es5',    // ES5中允许的尾随逗号（数组、对象等）
    bracketSpacing: true,    // 在对象字面量中的括号之间添加空格
    bracketSameLine: false,  // 将>放在最后一行的末尾，而不是单独放一行
    arrowParens: 'avoid',    // 当箭头函数只有一个参数时，省略括号
    rangeStart: 0,          // 格式化的起始位置
    rangeEnd: Infinity,     // 格式化的结束位置
    requirePragma: false,    // 是否要求文件顶部有特殊的注释才格式化
    insertPragma: false,     // 是否在文件顶部插入@format标记
    proseWrap: 'preserve',   // 不对markdown等文本进行换行
    htmlWhitespaceSensitivity: 'css', // HTML空白敏感度遵循CSS display属性
    endOfLine: 'lf'         // 使用 Linux 风格的换行符
};
```

- **`.prettierignore`**
    
    项目目录添加`.prettierignore`，忽略一些不需要 `prettier` 格式化的文件
    
    ```jsx
    package.json  
    .idea  
    README.md  
    .gitignore
    
    # 构建输出
    dist
    build
    
    # 依赖目录
    node_modules
    
    # copy
    *copy*.*
    **/*copy*.*
    
    # 资源文件
    *.mp3
    *.mp4
    *.woff2
    *.jpeg
    *.jpg
    *.png
    *.gif
    *.ico
    ```
    

**配置执行命令**

至此，我们可以在`package.json`添加命令

```json
{
  "script": {
    "lint:prettier": "prettier -c --write \"src/**/*\""
  }
}

```

执行`yarn lint:prettier`就可以格式化我们项目的代码了

**解决`eslint` 和 `prettier` 冲突**

避免 eslint 和 prettier 冲突，我们需要再安装两个包`eslint-config-prettier`、`eslint-plugin-prettier`。

`eslint-config-prettier`的作用是关闭 eslint 中所有不必要的或可能与 prettier 冲突的规则，让 eslint 检测代码时不会对这些规则报错或告警。比如 eslint 规定是双引号，而我们用 prettier 格式化代码时是用单引号，会存在冲突。我们在[eslint-config-prettier 代码](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-config-prettier%2Fblob%2Fmain%2Findex.js)可以看到，例如缩进、引号等格式规则都被关闭了。关闭后，我们可以完全自定义 prettier 来格式化我们的代码，而不受 eslint 影响。

`eslint-plugin-prettier` 是一个 ESLint 插件。上面我们说关闭了一些 eslint 的代码格式规则。假设我们约定 prettier 规则使用双引号，然而敲代码写成单引号，我还是希望能够按 prettier 的规则给我一些代码不规范的报错或警告提示。那么`eslint-config-prettier`是关闭了 eslint 中与 prettier 冲突的规则，`eslint-plugin-prettier`就是开启了以 prettier 为准的规则，并将报告错误给 eslint。

`.eslintrc.js`文件添加一行即可

```jsx
{
  extends: [
    // ...
    'plugin:prettier/recommended'
  ]
}

```

### 3、安装 stylelint

检测 css 样式代码质量，其实很多项目都是不检测的，如果不做这步可以忽略。

- **新建`.stylelintrc.js`**
    
    在项目根目录创建`.stylelintrc.js`文件，添加如下内容：
    
    ```jsx
    module.exports = {
      extends: ['stylelint-config-standard'],
    };
    
    module.exports = {
        extends: ['stylelint-config-standard'],
        rules: {
            // 类名允许使用驼峰命名
            'selector-class-pattern': [
                '^[a-zA-Z][a-zA-Z0-9]*$',
                {
                    message: '类名应该使用驼峰命名法'
                }
            ],
            // ID 选择器允许使用驼峰命名
            'selector-id-pattern': [
                '^[a-zA-Z][a-zA-Z0-9]*$',
                {
                    message: 'ID 应该使用驼峰命名法'
                }
            ],
            // 动画名称允许使用驼峰命名
            'keyframes-name-pattern': [
                '^[a-zA-Z][a-zA-Z0-9]*$',
                {
                    message: '动画名称应该使用驼峰命名法'
                }
            ]
        }
    };
    ```
    
- 至此，我们可以在`package.json`添加命令
    
    ```jsx
    {
      "script": {
        "lint:style": "stylelint \"**/*.css\""
      }
    }
    ```
    

**同样的，我们统一用 prettier 来格式化 css 代码。** 需要安装`stylelint`插件来避免与prettier冲突。

- `stylelint-config-prettier`，和`eslint-config-prettier`类似，作用是关闭 `stylelint` 所有不必要的或可能与 prettier 冲突的规则。但是在 Stylelint v15 版本之后，Stylelint 默认关闭了所有与 prettier 相冲突的风格规则，所以不需要安装`stylelint-config-prettier`了。
- `stylelint-prettier`，和`eslint-plugin-prettier`类似，开启了以 `prettier` 为准的规则，并将报告错误给 `stylelint`。

上面了解后，我们只需要安装`stylelint-prettier`。

`.stylelintrc.js`文件内容如下：

```jsx
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
};

```

**新建`.stylelintignore`**

有时候有些目录或者文件我们不想进行检测这时候我们就可以在项目的根目录新建`.stylelintignore`文件，在文件内添加我们想要`stylelint`忽略的内容,例如：

```jsx
dist
public
env
build
.vscode
.DS_Store
README.md
node_modules
.idea

```

- 配置 .vscode/settings.json
    
    最后记得在 `.vscode/settings.json` 中加入：
    
    ```jsx
    {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.codeActionsOnSave": {
            "source.fixAll": "explicit",
            "source.fixAll.eslint": "explicit",
            "source.fixAll.stylelint": "explicit",
        },
        "stylelint.validate": [
            "css",
            "less",
            "scss",
            "sass",
            "postcss"
        ],
        "[javascript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[typescript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[json]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        }
    }
    ```
    

### **4、editorconfig**

在项目中引入 `editorconfig` 是为了在多人协作开发中保持代码的风格和一致性。不同的开发者使用不同的编辑器或IDE，可能会有不同的缩进（比如有的人喜欢4个空格，有的喜欢2个空格）、换行符、编码格式等。甚至相同的编辑器因为开发者自定义配置的不同也会导致不同风格的代码，这会导致代码的可读性降低，增加代码冲突的可能性，降低了代码的可维护性。

> EditorConfig 使不同编辑器可以保持同样的配置。因此，我们得以无需在每次编写新代码时，再依靠 Prettier 来按照团队约定格式化一遍（出现保存时格式化突然改变的情况） 。当然这需要在你的 IDE 上安装了必要的 EditorConfig 插件或扩展。
> 

**EditorConfig for VS Code**

目前主流的编辑器或者 IDE 基本上都有对应的 `EditorConfig` 插件，有的是内置支持的（比如，`WebStorm` 不需要独立安装 `EditorConfig` 的插件），有的需要独立安装。

然后在插件的介绍页上点击**设置的齿轮**，并且选择**Add to Workspace Recommendations**，就可以将其加入清单。也可以直接开启 `.vscode/extensions.json` 进行编辑：

新建 `.editorconfig`

在项目的根目录新建`.editorconfig`文件

```yaml
# https://editorconfig.org
root = true # 设置为true表示根目录，控制配置文件 .editorconfig 是否生效的字段

[*] # 匹配全部文件，匹配除了 `/` 路径分隔符之外的任意字符串
charset = utf-8                  # 设置字符编码，取值为 latin1，utf-8，utf-8-bom，utf-16be 和 utf-16le，当然 utf-8-bom 不推荐使用
end_of_line = lf                 # 设置使用的换行符，取值为 lf，cr 或者 crlf
indent_size = 4                  # 设置缩进的大小，即缩进的列数，当 indexstyle 取值 tab 时，indentsize 会使用 tab_width 的值
indent_style = space             # 缩进风格，可选space｜tab
insert_final_newline = true      # 设为true表示使文件以一个空白行结尾
trim_trailing_whitespace = true  # 删除一行中的前后空格

[*.md] # 匹配全部 .md 文件
trim_trailing_whitespace = false

```

上面的配置可以规范本项目中文件的缩进风格，和缩进空格数等，会覆盖 `vscode` 的配置，来达到不同编辑器中代码默认行为一致的作用。

### 5、导出顺序自动关格式化

- `eslint.config.mjs`
    
    ```jsx
    import { defineConfig } from 'eslint/config';
    import globals from 'globals';
    import js from '@eslint/js';
    import tseslint from 'typescript-eslint';
    import pluginReact from 'eslint-plugin-react';
    import pluginReactHooks from 'eslint-plugin-react-hooks';
    import pluginImport from 'eslint-plugin-import';
    import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
    import pluginPrettier from 'eslint-plugin-prettier';
    import configPrettier from 'eslint-config-prettier';
    
    export default defineConfig([
        { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
        { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.browser } },
        { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
        tseslint.configs.recommended,
        pluginReact.configs.flat.recommended,
        // 基础配置
        {
            files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
            ignores: [
                // 系统文件
                '.eslintrc.js',
                'node_modules/**/*',
                'dist/**/*',
                '.idea/**/*',
                'README.md',
                '.gitignore',
    
                // 配置文件
                '.prettierrc.js',
                'eslint.config.mjs',
                'babel.config.js',
                '*.config.js',
                'build/**/*.js',
    
                // copy 文件
                '**/.*copy*.*',
                '**/*copy*.*',
            ],
            languageOptions: {
                globals: {
                    ...globals.browser,
                    ...globals.es2021,
                },
                parser: tseslint.parser,
                parserOptions: {
                    ecmaVersion: 'latest',
                    sourceType: 'module',
                    project: './tsconfig.json',
                    ecmaFeatures: {
                        jsx: true,
                    },
                },
            },
            plugins: {
                '@typescript-eslint': tseslint.plugin,
                react: pluginReact,
                'react-hooks': pluginReactHooks,
                import: pluginImport,
                'jsx-a11y': pluginJsxA11y,
                prettier: pluginPrettier,
            },
            extends: [configPrettier],
            settings: {
                react: {
                    version: 'detect',
                },
                'import/resolver': {
                    typescript: {},
                    node: {
                        extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    },
                },
            },
        },
        // Airbnb 依赖的版本低，先不配置Airbnb规则
        // // Airbnb 规则
        // {
    
        //   files: ["**/*.{js,jsx,ts,tsx}"],
        //   extends: [
        //     'airbnb',
        //     'airbnb-typescript',
        //     'airbnb/hooks'
        //   ],
        //   plugins: {
        //     '@typescript-eslint': tseslint.plugin,
        //     'react': pluginReact,
        //     'react-hooks': pluginReactHooks,
        //     'import': pluginImport,
        //     'jsx-a11y': pluginJsxA11y
        //   },
        // },
    
        // 自定义规则
        {
            rules: {
                'prettier/prettier': 'error', // 添加 Prettier 规则
    
                // TypeScript 相关规则
                '@typescript-eslint/no-unused-vars': 'warn',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unused-expressions': 'error',
    
                // React 相关规则
                'react/react-in-jsx-scope': 'off',
                'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
                'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
    
                // 导入相关规则
                'import/prefer-default-export': 'off',
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        jsx: 'never',
                        ts: 'never',
                        tsx: 'never',
                    },
                ],
    						
    						// 导入顺序
                'import/order': [
                    'error',
                    {
                        groups: [
                            'builtin', // Node.js 内置模块
                            'external', // 第三方库
                            'internal', // 内部模块
                            'parent', // 父级目录
                            'sibling', // 同级目录
                            'index', // 当前目录
                            'object', // 对象导入
                            'type', // 类型导入
                        ],
                        pathGroups: [
                            {
                                pattern: 'react',
                                group: 'external',
                                position: 'before',
                            },
                            {
                                pattern: '@/**',
                                group: 'internal',
                                position: 'before',
                            },
                        ],
                        pathGroupsExcludedImportTypes: ['react'], // 排除某些类型以避免冲突
                        'newlines-between': 'always', // 在不同组之间添加空行
                        alphabetize: {
                            order: 'asc', // 按字母顺序排序
                            caseInsensitive: true, // 忽略大小写
                        },
                    },
                ],
    
                // 其他规则
                'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
                'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            },
        },
    ]);
    
    ```
    

### 6、build时清空dist

然后修改 `package.json` 中的脚本：

```jsx
{
  "scripts": {
    // ...existing code...
    "clean": "rimraf dist",
    "build:prod": "npm run clean && cross-env NODE_ENV=production BASE_ENV=production webpack -c build/webpack.prod.js",
    // ...existing code...
  }
}
```

### 7、git commit msg lint

创建一个 hook:

```bash
husky add <file> [cmd]
```

- file: 指定保存命令的文件，通常是在 `.husky` 目录下
- cmd: 指定 git hooks 的名字，最常使用的是 `pre-commit`

```bash
# 创建一个 pre-commit 的 hooks 文件

npx husky add .husky/pre-commit "npm test" # npm
pnpx husky add .husky/pre-commit "npm test" # pnpm
git add .husky/pre-commit

# 创建好这个文件之后，你就可以根据你的需要去编写这个 shell 脚本了

```

### 8、**lint-staged**

**1、介绍**

通过这个工具诞生的背景，我们可以知道， `lint-staged` 是一个专门用于在通过 `git` 提交代码之前，对暂存区的代码执行一系列的格式化。当 `lint-staged` 配合 git hooks 使用时，可以在 git 提交前的 hook 中加入 `lint-staged` 命令，这样就能在提交代码之前，对即将提交的代码进行格式化，成功之后就会提交代码。

2. 引入 lint-staged

直接执行下面的脚本来安装 `lint-staged` 即可。

```bash
npm i lint-staged -D # npm
yarn add lint-staged -D # yarn
pnpm i lint-staged -D # pnpm
```

3. lint-staged 的使用

配置方式：

- `package.json` 中的 `lint-staged` 配置项
- JSON 风格或 YML 风格的 `.lintstagedrc`
    - `.lintstagedrc.json`
    - `.lintstagedrc.yaml`
    - `.lintstagedrc.yml`
- `.lintstagedrc.mjs` 或 `.lintstagedrc.config.mjs`
- `.lintstagedrc.cjs` 或 `.lintstagedrc.config.cjs`
- `lint-staged.js` 或 `lint-staged.config.js`

以 `package.json` 为例：

```json
{
  "lint-staged": {
    "<glob-pattern>": <command>
  }
}

```

- `<command>` 可以是单个命令的字符串，也可以多个命令组成的数组。使用 js 作为配置文件时，还可以是导出一个如下类型的函数：
    
    ```tsx
      (filenames: string[]) => string | string[] | Promise<string | string[]>
    ```
    

虽然配置好了 `lint-staged`，但目前还不能自动地使用它，因为通常它是放在 Git 的 pre-commit 阶段去执行，因此要在 *.husky/pre-commit* 文件中增加执行 `lint-staged` 的命令

```bash
# 如果使用的是 npm/yarn 且 npm 版本为 v8 及以下，就加下面的命令
npx lint-staged

# 如果使用的是 npm/yarn 且 npm 版本为 v9 及以上，就加下面的命令
npm exec lint-staged

# 如果使用的是 pnpm，就加下面的命令
pnpm exec lint-staged
```

- `.husky/commit-msg`
    
    ```bash
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"
    
    npx --no -- commitlint --edit $1
    
    ```
    
- `.husky/pre-commit`
    
    ```bash
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"
    
    pnpm exec lint-staged
    ```
    
- `scripts/cz-config.js`
    
    ```bash
    /*
     * @Author: 齐大胜 782395122@qq.com
     * @Date: 2025-03-28 10:35:46
     * @LastEditors: 齐大胜 782395122@qq.com
     * @LastEditTime: 2025-03-28 10:35:53
     * @FilePath: /pnpm-react-ts-webpack5/scripts/cz-config.js
     * @Description:
     *
     * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
     */
    module.exports = {
        // type 类型
        types: [
            { value: 'feat', name: '✨ 新功能: 添加新功能' },
            { value: 'fix', name: '🐛 修复: 修复bug' },
            { value: 'docs', name: '📝 文档: 文档变更' },
            { value: 'style', name: '💄 格式: 代码格式(不影响代码运行的变动)' },
            { value: 'refactor', name: '♻️ 重构: 重构代码' },
            { value: 'perf', name: '⚡️ 性能: 性能优化' },
            { value: 'test', name: '✅ 测试: 增加测试' },
            { value: 'chore', name: '🔨 工具: 构建过程或辅助工具的变动' },
            { value: 'revert', name: '⏪️ 回退: 回退代码' },
            { value: 'build', name: '📦️ 打包: 打包发布' },
        ],
    
        // scope 类型
        scopes: [
            ['components', '组件相关'],
            ['hooks', 'hook 相关'],
            ['utils', 'utils 相关'],
            ['styles', '样式相关'],
            ['deps', '项目依赖'],
            ['other', '其他修改'],
            ['custom', '以上都不是？我要自定义'],
        ].map(([value, description]) => {
            return {
                value,
                name: `${value.padEnd(30)} (${description})`,
            };
        }),
    
        // 交互提示信息
        messages: {
            type: '请选择提交类型:',
            scope: '请选择修改范围(可选):',
            customScope: '请输入修改范围(可选):',
            subject: '请简要描述提交(必填):',
            body: '请输入详细描述(可选):',
            breaking: '列出任何BREAKING CHANGES(可选):',
            footer: '请输入要关闭的issue(可选):',
            confirmCommit: '确认提交？',
        },
    
        // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
        allowBreakingChanges: ['feat', 'fix'],
    
        // 跳过要询问的步骤
        skipQuestions: ['footer'],
    
        // subject 限制长度
        subjectLimit: 100,
    
        // 允许自定义范围
        allowCustomScopes: true,
    };
    
    ```
    
- `package.json`
    
    ```bash
      "scripts": {
        "prepare": "husky install && chmod ug+x .husky/*",
        "commit": "git add . && git-cz"
      },
    	{
    	  "config": {
    	    "commitizen": {
    	      "path": "cz-customizable"
    	    },
    	    "cz-customizable": {
    	      "config": "scripts/cz-config.js"
    	    }
    	  },
    	  "lint-staged": {
    	    "*.{js,jsx,ts,tsx}": [
    	      "eslint --fix",
    	      "prettier --write"
    	    ],
    	    "*.{css,less,scss}": [
    	      "stylelint --fix",
    	      "prettier --write"
    	    ],
    	    "*.{json,md}": [
    	      "prettier --write"
    	    ]
    	  },
    	}
    ```
    

## 八、路由+redux+请求

### 1、路由配置

路由是前端开发中不可或缺的一个重要概念，它允许我们根据 `URL` 的不同来显示不同的内容和 `UI`。在 `react` 开发中，我们通常会使用第三方库来实现路由功能。最常用的就是 `react-router`

安装依赖

在使用 `react-router` 之前，我们需要先安装它。依赖安装命令如下：

```bash
pnpm add react-router-dom -D
pnpm add @types/react-router-dom -D

pnpm add react-router-dom @types/react-router-dom -D
```

定义路由配置文件

为了方便维护我们的路由信息，我们在实际项目开发中一般是定义一个路由配置文件，单独维护路由信息，在项目的`src`目录下创建一个`router`目录，在该目录下再定义一个路由配置文件`index.tsx`，内容如下：

- `RoutersConfig`
    
    ```bash
    // router/index.tsx
    import React, { lazy, Suspense } from "react";
    import { Route, Routes, Navigate } from "react-router-dom";
    
    const Home = lazy(() => import("../pages/Home"));
    const Class = lazy(() => import("../components/Class"));
    const LazyDemo = lazy(() => import("../components/LazyDemo"));
    
    type RouteObject = {
     path: string;
     element?: React.ReactElement | React.FC;
     permissions?: Array<string>;
     children?: Array<RouteObject>;
    };
    
    // 全局路径
    const globalRoutes: RouteObject[] = [
     {
       path: "/", // 路径
       element: <Home />,
       permissions: ["add"], // 权限
     },
    ];
    
    // 主路由->后续接口中动态获取
    const mainRoutes: RouteObject[] = [
     {
       path: "/class",
       permissions: ["add", "edit"], // 权限
       children: [
         {
           path: "",
           element: <Class />
         },
         {
           path: "lazy",
           element: <LazyDemo />,
         },
       ],
     },
    ];
    
    // 路由错误重定向
    const NotFound = () => {
     return <div>你所访问的页面不存在！</div>;
    };
    
    let routes: RouteObject[] = globalRoutes.concat(mainRoutes);
    
    // 路由路径处理函数
    const transformRoutes = (routeList: RouteObject[]) => {
     return (
       <>
         {routeList.map((route: any) => {
           return route.children && route.children.length ? (
               <Route key={route.path} path={route.path} element={route.element}>
                 {transformRoutes(route.children)}
               </Route>
           ) : (
             <Route
               key={route.path}
               path={route.path}
               element={route.element}
             ></Route>
           );
         })}
       </>
     );
    };
    
    console.log("transformRoutes", transformRoutes(routes));
    
    const RoutersConfig = () => {
     return (
       <Suspense fallback={<div>loading...</div>}>
         <Routes>{transformRoutes(routes)}</Routes>
       </Suspense>
     );
    };
    
    export default RoutersConfig;
    
    ```
    
- **全局注册路由`src/App.tsx`**
    
    ```bash
    // 使用 lazy 加载组件
    const Class = lazy(() => import('./components/Class'));
    
    const LazyDemo = lazy(() => import('@/components/LazyDemo')); // 使用import语法配合react的Lazy动态引入资源
    
    // 备份之前的app
    export const App1 = () => {
    
    };
    
    const App = () => {
        return (
            <BrowserRouter>
                <RoutersConfig />
            </BrowserRouter>
        );
    };
    
    export default App;
    
    ```
    

### 2、redux配置

安装依赖

`redux`也是我们实际项目开发中常用的配置项，`react`中的`props`需要安装`redux`、`react-redux`、`redux-thunk`、`redux-persist`、`redux-promise`、`@types/redux-promise`、`@reduxjs/toolkit`等依赖，依赖安装命令如下：

```bash
pnpm add redux react-redux redux-thunk redux-persist redux-promise @types/redux-promise @reduxjs/toolkit -D
```

- **总结：各包的作用与关系**
    
    
    | **包名** | **作用** | **是否必须** |
    | --- | --- | --- |
    | `redux` | 核心库，提供状态管理功能。 | 必须 |
    | `react-redux` | React 与 Redux 的绑定库，用于将 Redux 集成到 React 应用中。 | 必须 |
    | `redux-thunk` | 中间件，用于处理异步操作（推荐替代品：`@reduxjs/toolkit`）。 | 可选 |
    | `redux-persist` | 持久化 Redux 状态到本地存储。 | 可选 |
    | `redux-promise` | 中间件，用于处理 Promise 类型的 Action。 | 可选 |
    | `@types/redux-promise` | 为 `redux-promise` 提供 TypeScript 类型定义。 | 可选 |
    | `@reduxjs/toolkit` | 官方工具集，简化 Redux 的开发流程，推荐替代手动配置 Redux。 | 推荐 |

**定义redux配置文件**

依赖安装完成之后,我们在`src`目录下创建一个`redux`目录用来创建`redux`相关配置，目录结构如下：

```
├─ redux 
│ ├─ interface # ts 接口声明 
│ │ ├─ index.ts # 声明文件
│ ├─ moudles # 模块文件目录
│ │ ├─ home.ts # redux 模块
│ ├─ index.ts # 入口文件 

```

`interface/index.ts`文件主要是用来放置`redux`目录下文件模块使用到的`ts`接口声明；例如下面的内容：

```tsx
// interface/index.ts

// HomeState
export interface HomeState {
 userInfo: any;
}

```

`moudles`目录主要用来放置`redux`的模块文件，例如：

```tsx
// modules/home.ts

import { HomeState } from "@/redux/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const homeState: HomeState = {
 userInfo: null,
};

const homeSlice = createSlice({
 name: "home",
 initialState: homeState,
 reducers: {
   // 设置用户信息
   setUserInfo: (state: HomeState, { payload }: PayloadAction<object>) => {
     state.userInfo = payload;
   },
 },
});

export const { setUserInfo } = homeSlice.actions;

export default homeSlice.reducer;

```

`index.ts`则是`redux`配置目录的入口文件，内容如下：

`src/redux/index.ts`

```tsx
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

import home from "./modules/home";

// create reducer
const reducer = combineReducers({
  home
});

// redux persist
const persistConfig = {
	key: "redux-state",
	storage: storage
};
const persistReducerConfig = persistReducer(persistConfig, reducer);

// redux middleWares
const middleWares = [reduxThunk, reduxPromise];

// store
export const store = configureStore({
	reducer: persistReducerConfig,
	middleware: middleWares,
	devTools: true
});

// create persist store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();

```

使用`redux`如下：

`src/pages/Home.tsx`

```tsx
import React from "react";
import { useSelector, useDispatch, RootState } from "@/redux/index";
import { setUserInfo } from "@/redux/modules/home";

const Home = () => {
  console.log("NODE_ENV", process.env.NODE_ENV);
  console.log("BASE_ENV", process.env.BASE_ENV);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.home);
  const but = () => {
    console.log("执行");
    dispatch(setUserInfo({ age: 1, name: "Home", email: "2095034789@qq.com" }));
  };
  return (
      <div>
          <div>Home组件</div>
          <button onClick={handleSetUserInfo}>赋值</button>
          <div>name：{userInfo?.name || '--'}</div>
          <div>age：{userInfo?.age || '--'}</div>
          <div>email：{userInfo?.email || '--'}</div>
      </div>
  );
};

export default Home;

```

至此`redux`的配置以及持久化配置就都已经基本完成了，但是这时候你在页面里面使用`useSelector`你会发现页面报错，这是因为我们要想在页面中使用`redux`还需要对`src/index.ts`进行改造：

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>
);

```

### **3、axios 封装**

`axios`也是我们项目中常用的配置项来着,我们通常都是将`axios`请求统一封装，然后调用的，该节主要介绍我在项目中是如何封装`axios`,大家可以借鉴一下根据你们项目的实际情况去调整；

**依赖安装**

```bash
pnpm add axios nprogress @types/nprogress qs @types/qs -D
```



##  参考
> 
> [**webpack5从零搭建完整的react18+ts项目模板**](https://juejin.cn/post/7236383034559529017)
> 
> [**webpack5从零搭建完整的react18+ts项目模板（二）**](https://juejin.cn/post/7241057970707152956)
> 
> [**2024年webpack5最佳实践**](https://juejin.cn/post/7312294489220677632#heading-31)
> 
> [**模块化样式 classNames css-in-js**](https://blog.csdn.net/Charissa2017/article/details/105595550)
> 
> [**CSS Modules 用法教程**](https://www.ruanyifeng.com/blog/2016/06/css_modules.html)
> 
> [**CSS Module is not working. #628**](https://github.com/webpack-contrib/style-loader/issues/628)
> 
> [**前端规范落地，团队级的解决方案**](https://cloud.tencent.com/developer/article/1983295)
> 
> [**template_react_ts**](https://gitee.com/imzhoudj/template_react_ts)
> 