# Javadoop

一个简洁的静态博客模板，基于 [Astro](https://astro.build) 构建。

参考 https://javadoop.com

## 功能

- Markdown / MDX 文章支持
- 代码高亮（亮色 / 暗色主题自动切换）
- 文章目录侧边栏
- 字体大小调节
- Markdown 文件下载
- 响应式设计
- 可配置的站点信息（名称、导航、版权等）

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建静态站点
npm run build

# 预览构建结果
npm run preview
```

开发服务器默认运行在 `http://localhost:4321`。

## 配置

编辑 `src/config.ts` 自定义站点信息：

```typescript
export const siteConfig = {
  siteName: 'My Blog',        // 站点名称
  siteUrl: 'https://example.com',
  description: 'A personal blog',
  author: 'Your Name',
  lang: 'zh-CN',              // HTML lang 属性
  copyright: '© {siteName} {year}, Created by {author}',
  navLinks: [
    { text: '文章列表', href: '/post' },
  ],
};
```

## 写文章

在 `src/content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: 文章标题
date: 2024-01-01
description: 可选的文章描述
---

文章内容...
```

必须的 frontmatter 字段：
- `title` — 文章标题
- `date` — 发布日期

## 首页

- 如果存在 `src/content/posts/index.md`，首页会渲染该文件内容
- 如果不存在，首页会自动跳转到文章列表页 `/post`

## 部署

构建产物在 `dist/` 目录，可以部署到任何静态托管服务：

```bash
npm run build
```

常见部署平台：
- [Netlify](https://docs.astro.build/en/guides/deploy/netlify/)
- [Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Cloudflare Pages](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

## 项目结构

```
src/
├── config.ts              # 站点配置
├── content/
│   ├── config.ts          # 内容集合 schema
│   └── posts/             # 博客文章
├── components/
│   └── TableOfContent.astro
├── layouts/
│   ├── BaseLayout.astro   # 基础布局
│   └── PostLayout.astro   # 文章布局
├── pages/
│   ├── index.astro        # 首页
│   └── post/
│       ├── index.astro    # 文章列表
│       └── [...slug].astro # 文章详情
└── styles/
    └── global.css         # 全局样式
```

## License

MIT
