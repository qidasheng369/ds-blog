export const Friends: Friend[] = [
  {
    title: '愧怍',
    description: '道阻且长，行则将至',
    website: 'https://kuizuo.cn',
    avatar: 'https://kuizuo.cn/img/logo.webp',
  },
  {
    title: 'Pincman',
    description: '中年老码农,专注于全栈开发与教学',
    website: 'https://pincman.com',
    avatar: '/img/friend/pincman.png',
  },
  {
    title: '峰华前端工程师',
    description: '致力于帮助你以最直观、最快速的方式学会前端开发',
    website: 'https://zxuqian.cn',
    avatar: '/img/friend/zxuqian.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
