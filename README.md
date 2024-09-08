# vue3-web-template

基于 Vue3 + Vite + TypeScript 的 Web 开发项目模板

## 特点

无需项目开发前的各类繁琐规范约束配置，开箱即用，快速搭建项目开发环境。

- 集成了常用的代码规范配置，ESLint + Prettier + Stylelint
- 集成了代码提交校验配置，Commitlint + Husky + cz-git
  ![commitlint](https://cc-web-1313504415.cos.ap-shanghai.myqcloud.com/a88ca76e9fe4a1e81a93fba900f705f.png)
- 集成了tailwind , 支持使用 vw 自适应布局 （使用postcss-px-to-viewport插件，基于 1920px 设计稿换算）
  ![tailwind](https://cc-web-1313504415.cos.ap-shanghai.myqcloud.com/2efa7da532ab353c41d245975a9493a.png)

## VSCode 插件要求

ESLint + Prettier + Stylelint

## 环境要求

- Node.js = 18.20.4
- Pnpm = 9.7.1

### 安装依赖

```sh
pnpm install
```

### 开发调试

```sh
pnpm run dev
```

### 打包

```sh
pnpm run build
```

### 测试

```sh
pnpm run test:unit
```

### 提交代码

```sh
pnpm commit
```
