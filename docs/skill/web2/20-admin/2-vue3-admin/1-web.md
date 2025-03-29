# Vue3 Admin项目文档

## 项目概述

这是一个基于Vue3、Vite5、TypeScript、Ant Design Vue和UnoCSS的现代化后台管理系统模板。

## 技术栈

- 前端框架：Vue 3.5.4

- 构建工具：Vite 5.3.3

- UI框架：Ant Design Vue 4.2.3

- CSS框架：UnoCSS

- 状态管理：Pinia 2.1.7

- 路由管理：Vue Router 4.4.0

- 国际化：Vue I18n 9.13.1

- TypeScript：版本 5.5.3

## 主要功能模块

### 1. 系统核心功能

- 用户中心 (user-center)

- 系统管理 (system-manage)

- 首页仪表盘 (home)

- 行政管理 (administrative)

### 2. 特色功能 (features)

- 数据可视化（整合 @antv/g2plot）

- 富文本编辑器（集成 @wangeditor/editor）

- 甘特图功能（使用 dhtmlx-gantt）

- 流程图（使用 @vue-flow/core）

- 文件预览（支持PDF、Word、Excel等）

- 图片处理（包括裁剪、水印等）

- 拖拽功能（vue-draggable-plus）

- 组织架构树（vue3-tree-org）

### 3. 系统功能

- 多语言支持（i18n）

- 主题定制

- 权限管理

- 路由管理

- 组件封装

## 项目特点

### 1. 开发体验

- 完整的TypeScript支持

- ESLint + Prettier代码规范

- 自动路由生成

- 组件自动导入

- 开发工具优化

### 2. 性能优化

- 按需加载

- 代码分割

- 静态资源优化

- 缓存策略

### 3. 工程化特性

- Monorepo工程结构（使用pnpm workspace）

- 模块化设计

- 统一的代码风格

- 完善的开发工具链

### 4. 安全特性

- 请求封装（基于axios）

- 数据加密

- 权限控制

- XSS防护

## 项目结构
```bash
src/
├── assets/        # 静态资源
├── components/    # 公共组件
├── constants/     # 常量定义
├── directives/    # 自定义指令
├── hooks/         # 组合式函数
├── layouts/       # 布局组件
├── locales/       # 国际化资源
├── plugins/       # 插件配置
├── router/        # 路由配置
├── service/       # API服务
├── store/         # 状态管理
├── styles/        # 全局样式
├── theme/         # 主题配置
├── utils/         # 工具函数
└── views/         # 页面视图
```

## 开发环境要求

- Node.js >= 18.12.0

- PNPM >= 8.7.0

## 项目特色

1. 现代化的技术栈
2. 完善的功能模块
3. 优秀的开发体验
4. 灵活的主题配置
5. 国际化支持
6. 完整的类型支持
7. 丰富的组件库
8. 可扩展的架构设计