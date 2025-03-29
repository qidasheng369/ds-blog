# 开始vite

> 官方文档：[Vite 官方中文文档](https://cn.vite.dev/config/)


## vite模版

```bash
pnpm create vite my-vue-app --template vue
```

### 官方模版：[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

1. [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
2. [template-react](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
3. [template-vue-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts)
4. [template-vue](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue)
5. [template-svelte](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-svelte)

### 社区模板： [Awesome Vite](https://github.com/vitejs/awesome-vite#templates)

#### Vue 2

- [vite-vue2-windicss-starter](https://github.com/lstoeferle/vite-vue2-windicss-starter) - Vue 2, Vue Router, Composition API, VueUse, Windi CSS and TypeScript.
- [vite-vue2-ts-starter](https://github.com/logue/vite-vue2-ts-starter) - Vue2 TypeScript starter template using vue-property-decorator, vue-router, Vuex.
- [vite-vue2-ts-vuetify-starter](https://github.com/logue/vite-vue2-vuetify-ts-starter) - It is the above vite-vue2-ts-starter with Vuetify and its optimized settings. Includes basic templates.

#### Vue 3

- [Vitesse](https://github.com/antfu/vitesse) - Opinionated starter template.
- [vite-ts-tailwind-starter](https://github.com/Uninen/vite-ts-tailwind-starter) - TypeScript, Tailwind CSS, Cypress.io e2e tests + CI.
- [vue-vben-admin](https://github.com/anncwb/vue-vben-admin) - Background management template based on Vue3, Ant-Design-Vue, TypeScript.
- [vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin) - Background management template based on Vue3, TypeScript, Tailwind CSS, element-plus.
- [vue3-vant-mobile](https://github.com/easy-temps/vue3-vant-mobile) - Vite5 + Vue3 + Vant4 + Pinia + Vue-Router4 + TypeScript Mobile Template.
- [vite-vue3-tailwind4-daisyui5-starter-template](https://github.com/martinille/starter-template-vite-vue3-sass-tailwind4-daisyui5) - Starter template with Vue 3 + Vite + Tailwind CSS 4 + DaisyUI 5 + Sass.
- [vue3-quick-start](https://github.com/wforguo/vue3-quick-start) - Building an engineered Vue 3 project, integrated with `Vite` + `Vue3` + `TypeScript` + `ESLint` + `Prettier` + `Commitizen` + `Husky` + `LintStaged` + `CommitLint` + `AutoImport` + `ReleaseIt`.

#### React

- [Vitamin](https://github.com/wtchnm/Vitamin) - React TypeScript, TailwindCSS, SPA + PWA, Cypress and CI.
- [template-vite-react](https://github.com/lzm0x219/template-vite-react) - A minimal React Vite starter template.
- [reactjs-vite-tailwindcss-boilerplate](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate) - React 18, TypeScript, Vitest, Testing Library, TailwindCSS 3, Eslint and Prettier.
- [vite-react-ts-tailwind-firebase-starter](https://github.com/TeXmeijin/vite-react-ts-tailwind-firebase-starter) - Starter using Vite + React + TypeScript + Tailwind CSS (daisyUI) + Firebase (v9) + Prettier + ESLint.
- [chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite) - React + TypeScript + SASS + Prettier + ESLint + GitHub Actions + HMR(Hot Module Reload) + Turborepo + Chrome Extension Manifest v3.
- [vite-rtk-query](https://github.com/laststance/vite-rtk-query) - React, TypeScript, Redux Toolkit, RTK Query, TailwindCSS, MSW, Jest, React Testing Library, ESLint, Prettier.
- [React-PWA](https://github.com/suren-atoyan/react-pwa) - React v18, TypeScript, Vite, React Router v6, MUI v5, Recoil, PWA, Eslint, Prettier, Husky, lint-staged, https localhost and more.
- [vite-react-universal-template](https://github.com/laoer536/vite-react-TypeScript-router-dom6-zustand-Eslint-prettier-template) - React18 + TypeScript + `react-router-dom` + Zustand + ESlint + Prettier + Stylelint + Husky + Docker, and APIs auto importing.
- [React Dapp Starter](https://github.com/Manta-Network/react-dapp-starter) - Enterprise-ready Web3 DApp starter with `TypeScript`, `TailwindCSS`, `Web3Modal`, `Wagmi`, `Shadcn UI`, `Zustand`, and `TanStack Query` for scalable decentralized applications.

#### Electron

- [electron-vite-vue](https://github.com/electron-vite/electron-vite-vue) - Electron + Vite + Vue template.
- [electron-vite-react](https://github.com/electron-vite/electron-vite-react) - Electron + Vite + React template.
- [Vutron](https://github.com/jooy2/vutron) - Electron + Vite + Vue 3 + Pinia (TypeScript) template.

#### Tauri

- [HuLa](https://github.com/HuLaSpark/HuLa) - is a desktop instant messaging app built on `Vite 5` + `Vue 3` + `TypeScript` + `Tauri` (not just instant messaging).

## Vite相比Webpack的优势？

Vite和Webpack都是JavaScript应用程序的构建工具，它们的主要作用是将所需的模块打包成一份或多份文件，以便在浏览器中运行。它们有很多相似之处，例如两者都支持代码拆分、模块热替换、压缩等功能。

不过，Vite与Webpack相比，有以下几点优势：

1. 更快的开发服务器：Vite开发服务器可以利用现代浏览器的原生ES模块加载，从而避免了Webpack热替换机制中常见的模块重编译导致的性能损耗。这意味着Vite可以提供更快的开发服务器，并且支持即时刷新，可以大大提高开发效率。
2. 更快的构建速度：由于Vite只需要针对修改的内容进行重新编译，而不是像Webpack一样把整个项目打包起来，因此，Vite的构建速度比Webpack更快，特别是在大型项目中。
3. 原生ES模块支持：Vite能够利用原生ES模块的特性，在浏览器中实现更快的模块加载速度，在减少代码大小方面也能够比Webpack更加有效。
4. 容易配置：Vite的配置相对简单，不需要像Webpack那样用户必须拥有深入的配置知识才能对其进行定制。

总之，Vite相对于Webpack更快、更轻量，性能表现更佳，同时也具备更加容易配置的特点，这些都使得开发者更加方便快捷地实现高效的开发和构建。

