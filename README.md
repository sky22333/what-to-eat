## 今天吃什么

微信小程序 · Taro 4 + Vite + React + TypeScript

## 环境要求

- Node.js >= 18
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

## 快速开始

```bash
npm install
npm run dev:weapp
```

用微信开发者工具打开**项目根目录**（`what-to-eat/`，非 `dist/`）。

## 构建命令

| 命令 | 说明 |
|------|------|
| `npm run dev:weapp` | 开发模式，监听文件变化 |
| `npm run build:weapp` | 生产构建，输出到 `dist/` |

## 部署上线

### 1. 配置 AppID

编辑 `project.config.json`，将 `appid` 改为你的小程序 AppID：

```json
"appid": "wx你的AppID"
```

### 2. 生产构建

```bash
npm run build:weapp
```

### 3. 上传代码

1. 微信开发者工具打开项目根目录
2. 点击右上角 **上传**
3. 填写版本号与备注

### 4. 提交审核

登录 [微信公众平台](https://mp.weixin.qq.com/) → 版本管理 → 提交审核 → 审核通过后发布。

## 开发者工具设置

项目设置中建议关闭以下选项（避免与 Taro 编译冲突）：

- ES6 转 ES5：**关**
- 上传时样式自动补全：**关**
- 上传时压缩代码：**关**（已在构建阶段压缩）

## 目录说明

```
/
├── src/          源码
├── dist/         构建产物（小程序运行目录）
├── config/       Taro 配置
└── project.config.json
```
