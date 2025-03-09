export const projects: Project[] = [
  {
    title: '大胜的小站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://ds-blog-prod.vercel.app',
    source: 'https://github.com/daShengeng369/blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
  {
    title: 'nest-vben-admin',
    description: ' NestJs + Vben Admin 编写的一款前后端分离的权限管理系统',
    preview: '/img/project/nest-vben-admin.png',
    website: 'https://admin.kuizuo.cn',
    source: 'https://github.com/kuizuo/nest-vben-admin',
    tags: ['opensource', 'favorite', 'product', 'large'],
    type: 'web',
  },
  {
    title: 'api-server',
    description: '🔗 基于 Nuxt 搭建的 API 接口服务网站',
    preview: '/img/project/kz-api.png',
    website: 'https://api.kuizuo.cn',
    source: 'https://github.com/kuizuo/api-service',
    tags: ['opensource', 'favorite', 'product'],
    type: 'web',
  },
  {
    title: 'Hoppx',
    description: '👽 仿 Hoppscotch 风格的网站模板',
    preview: '/img/project/hoppx.png',
    website: 'https://hoppx.vercel.app',
    source: 'https://github.com/kuizuo/hoppx',
    tags: ['opensource'],
    type: 'toy',
  },
  {
    title: 'Link Maker',
    description: '🍋 一个用于将链接转换为卡片样式的预览网站',
    preview: '/img/project/link-maker.png',
    website: 'https://link-maker.deno.dev',
    source: 'https://github.com/kuizuo/link-maker',
    tags: ['opensource'],
    type: 'toy',
  },
  {
    title: 'Nuxt-Naive-Admin',
    description: '🎁 一站式管理系统，融合 Nuxt、Naive UI 和 Supabase',
    preview: '/img/project/nuxt-naive-admin.png',
    website: 'https://nuxt-naive-admin.vercel.app',
    source: 'https://github.com/kuizuo/nuxt-naive-admin',
    tags: ['opensource'],
    type: 'toy',
  },

  // personal
  {
    title: 'vscode-extension',
    description: '自写 vscode 插件，提供了光标移动快捷键',
    preview: '/img/project/vscode-extension.png',
    website: 'https://marketplace.visualstudio.com/items?itemName=kuizuo.vscode-extension-sample',
    source: 'https://github.com/kuizuo/vscode-extension',
    tags: ['opensource'],
    type: 'personal',
  },
  {
    title: '前端示例代码库',
    description: '📦 整理前端样式和功能的实现代码，可以用来寻找灵感或直接使用示例中的代码',
    preview: '/img/project/example-website.png',
    website: 'https://example.kuizuo.cn',
    source: 'https://github.com/kuizuo/example',
    tags: ['opensource', 'design'],
    type: 'personal',
  },
  // other
  {
    title: '@kuizuo/http',
    description: '基于 Axios 封装的 HTTP 类库',
    website: 'https://www.npmjs.com/package/@kuizuo/http',
    tags: ['opensource', 'personal'],
    type: 'other',
  },
  {
    title: 'browser-rpc',
    description: 'WebSocket 远程调用浏览器函数',
    website: 'https://github.com/kuizuo/rpc-browser',
    tags: ['opensource'],
    type: 'other',
  },
  {
    title: 'ocr-server',
    description: '使用 nestjs 通过 grpc 与 python ddddocr 库搭建的验证码图像识别服务',
    website: 'https://github.com/kuizuo/ocr',
    tags: ['opensource'],
    type: 'other',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '🖥️ 网站',
  app: '💫 应用',
  commerce: '商业项目',
  personal: '👨‍💻 个人',
  toy: '🔫 玩具',
  other: '🗃️ 其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
