# 长图管理系统

一个现代化的全栈网站解决方案，支持PC和移动端访问，提供完整的前后端管理功能。

## 技术栈

### 前端
- **框架**: React + Next.js 14 (App Router)
- **样式**: TailwindCSS 4.0
- **UI组件**: Shadcn UI
- **状态管理**: React Context + useReducer
- **API请求**: Axios

### 后端
- **框架**: Next.js API Routes
- **认证**: JWT + NextAuth.js
- **数据库**: MySQL
- **ORM**: Prisma

### 部署
- **平台**: Vercel
- **数据库**: PlanetScale (托管MySQL)

## 项目结构

```
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── users/
│   │   └── ...
│   ├── dashboard/
│   ├── login/
│   ├── register/
│   └── ...
├── components/
│   ├── ui/
│   ├── layout/
│   └── ...
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   └── ...
├── public/
├── prisma/
├── package.json
└── tailwind.config.js
```

## 核心功能

### 1. 用户认证系统
- 注册/登录
- 密码重置
- JWT令牌管理
- 会话保护

### 2. 响应式设计
- 移动端优先布局
- 断点适配 (sm, md, lg, xl)
- 触摸友好的交互
- 自适应内容展示

### 3. 管理后台
- 仪表盘
- 用户管理
- 内容管理
- 数据分析

### 4. 前端界面
- 首页
- 产品/服务展示
- 联系表单
- 动态内容

## 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd changtu
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制 `.env` 文件并填写相应的配置：

```bash
cp .env.example .env
```

### 4. 数据库配置

运行数据库迁移：

```bash
npx prisma migrate dev
```

### 5. 启动开发服务器

```bash
npm run dev
```

### 6. 构建生产版本

```bash
npm run build
```

## 部署

### Vercel 部署

1. 登录 [Vercel](https://vercel.com/)
2. 导入项目
3. 配置环境变量
4. 部署项目

### 数据库部署

推荐使用 [PlanetScale](https://planetscale.com/) 作为托管MySQL数据库：

1. 创建PlanetScale项目
2. 复制数据库连接字符串到 `.env` 文件
3. 运行数据库迁移

### 使用Navicat连接数据库

1. 打开Navicat
2. 点击"连接" -> "MySQL"
3. 填写连接信息：
   - 连接名：changtu
   - 主机：localhost
   - 端口：3306
   - 用户名：root
   - 密码：123456
4. 点击"测试连接"，确认连接成功
5. 连接成功后，您可以在Navicat中查看和管理数据库结构

## 开发指南

### 添加新组件

使用Shadcn UI CLI添加新组件：

```bash
npx shadcn-ui add <component-name>
```

### 数据库操作

使用Prisma Studio查看和管理数据库：

```bash
npx prisma studio
```

### 代码规范

项目使用ESLint和Prettier保持代码规范：

```bash
npm run lint
```

## 许可证

MIT License
