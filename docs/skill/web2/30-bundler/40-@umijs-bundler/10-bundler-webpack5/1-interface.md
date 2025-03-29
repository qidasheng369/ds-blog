# interface

<details>
  <summary>Toggle me!</summary>

</details>

# 接口说明

### `src/config/config.ts`

<details>
    <summary>点击展开详情!</summary>

    ```tsx
    export interface IOpts {
        // 当前工作目录的绝对路径
        cwd: string;
        // 项目根目录，通常用于 monorepo 项目
        rootDir?: string;
        // 环境变量，development 或 production
        env: Env;
        // 入口文件配置，key 为入口名，value 为入口文件路径
        entry: Record<string, string>;
        // 额外的 babel preset 配置
        extraBabelPresets?: any[];
        // 额外的 babel 插件配置
        extraBabelPlugins?: any[];
        // 需要执行 babel 转换的额外包含文件
        extraBabelIncludes?: Array<string | RegExp>;
        // 额外的 esbuild loader 处理器
        extraEsbuildLoaderHandler?: any[];
        // babel preset 配置
        babelPreset?: any;
        // 用于修改 webpack 链式配置的函数
        chainWebpack?: Function;
        // 用于修改最终 webpack 配置的函数
        modifyWebpackConfig?: Function;
        // 是否开启文件名 hash
        hash?: boolean;
        // 是否启用热更新
        hmr?: boolean;
        // 静态资源路径前缀
        staticPathPrefix?: string;
        // 用户配置对象
        userConfig: IConfig;
        // webpack-bundle-analyzer 配置
        analyze?: any;
        // 配置名称，用于多配置场景
        name?: string;
        // 缓存相关配置
        cache?: {
            // node_modules 的绝对路径
            absNodeModulesPath?: string;
            // 构建依赖的文件列表，这些文件变化会使缓存失效
            buildDependencies?: string[];
            // 缓存目录路径
            cacheDirectory?: string;
        };
        // package.json 内容
        pkg?: Record<string, any>;
        // 是否禁用文件拷贝
        disableCopy?: boolean;
        // 开发服务器主机名
        host?: string;
        // 开发服务器端口号
        port?: number;
    }
    ```
</details>

### `src/dev.ts`

<details>
  <summary>点击展开详情!</summary>

    ```tsx
    import type { IOpts as IConfigOpts } from './config/config';

    type IOpts = {
        // 后置中间件列表
        afterMiddlewares?: any[];
        // 前置中间件列表
        beforeMiddlewares?: any[];
        // 开发环境编译完成的回调函数
        onDevCompileDone?: Function;
        // 编译进度的回调函数
        onProgress?: Function;
        // MFSU 编译进度的回调函数
        onMFSUProgress?: Function;
        // 开发服务器端口号
        port?: number;
        // 开发服务器主机名
        host?: string;
        // 开发服务器 IP 地址
        ip?: string;
        // babel 预设配置
        babelPreset?: any;
        // webpack 链式配置函数
        chainWebpack?: Function;
        // 修改最终 webpack 配置的函数
        modifyWebpackConfig?: Function;
        // babel 插件前置配置
        beforeBabelPlugins?: any[];
        // babel 预设前置配置
        beforeBabelPresets?: any[];
        // 额外的 babel 插件配置
        extraBabelPlugins?: any[];
        // 额外的 babel 预设配置
        extraBabelPresets?: any[];
        // 当前工作目录的绝对路径
        cwd: string;
        // 项目根目录，用于 monorepo 项目
        rootDir?: string;
        // 用户配置对象
        config: IConfig;
        // 入口文件配置，key 为入口名，value 为入口文件路径
        entry: Record<string, string>;
        // MFSU 策略，可选 'eager' 或 'normal'
        mfsuStrategy?: 'eager' | 'normal';
        // MFSU 包含的模块列表
        mfsuInclude?: string[];
        // 源代码缓存配置
        srcCodeCache?: any;
        // 启动构建 worker 的函数
        startBuildWorker?: (deps: any[]) => Worker;
        // 中间件配置前的回调函数
        onBeforeMiddleware?: Function;
        // 是否禁用文件拷贝
        disableCopy?: boolean;
    } & Pick<IConfigOpts, 'cache' | 'pkg'>;  // 继承配置选项中的 cache 和 pkg 字段
    ```
</details>



### `src/build.ts`

<details>
  <summary>点击展开详情!</summary>

    ```tsx
    import type { IOpts as IConfigOpts } from './config/config';

    type IOpts = {
        // 当前工作目录的绝对路径
        cwd: string;
        // 项目根目录，用于 monorepo 项目
        rootDir?: string;
        // 入口文件配置，key 为入口名，value 为入口文件路径
        entry: Record<string, string>;
        // 用户配置对象
        config: IConfig;
        // 构建完成时的回调函数，接收构建结果和统计信息
        onBuildComplete?: Function;
        // babel 预设配置
        babelPreset?: any;
        // webpack 链式配置函数，用于定制 webpack 配置
        chainWebpack?: Function;
        // 修改最终 webpack 配置的函数
        modifyWebpackConfig?: Function;
        // babel 插件前置配置，在其他插件之前执行
        beforeBabelPlugins?: any[];
        // babel 预设前置配置，在其他预设之前执行
        beforeBabelPresets?: any[];
        // 额外的 babel 插件配置
        extraBabelPlugins?: any[];
        // 额外的 babel 预设配置
        extraBabelPresets?: any[];
        // 构建前是否清理输出目录
        clean?: boolean;
        // 是否启用监听模式（开发环境）
        watch?: boolean;
        // 是否禁用文件拷贝
        disableCopy?: boolean;
    } & Pick<IConfigOpts, 'cache' | 'pkg'>;  // 继承配置选项中的 cache 和 pkg 字段
    ```
</details>