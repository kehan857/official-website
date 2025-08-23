# 熵变智元官网 GitHub Pages 部署指南

## 🚀 快速部署步骤

### 1. 创建GitHub仓库
1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称建议: `entropy-ai-official-website` 或 `官网`
4. 设置为 Public（GitHub Pages 需要）
5. 不要初始化README（我们已有代码）

### 2. 推送代码到GitHub
```bash
# 添加远程仓库（替换为您的GitHub用户名和仓库名）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到main分支
git branch -M main
git push -u origin main
```

### 3. 配置GitHub Pages
1. 进入仓库页面
2. 点击 "Settings" 标签
3. 在左侧菜单找到 "Pages"
4. 在 "Source" 部分选择 "GitHub Actions"
5. 保存设置

### 4. 启用GitHub Actions权限
1. 在仓库 Settings 页面
2. 找到 "Actions" → "General"
3. 确保 "Allow all actions and reusable workflows" 被选中
4. 在 "Workflow permissions" 部分选择 "Read and write permissions"
5. 保存设置

## 🔧 技术配置说明

### Vite配置优化
- **base路径**: 自动根据仓库名设置
- **构建优化**: 代码分割和资源优化
- **生产环境**: 自动压缩和优化

### GitHub Actions工作流
- **触发条件**: push到main分支时自动部署
- **构建环境**: Ubuntu latest + Node.js 18
- **部署目标**: GitHub Pages
- **构建产物**: `dist` 目录

### 部署流程
1. **代码检出**: 获取最新代码
2. **环境准备**: 安装Node.js和依赖
3. **项目构建**: 执行 `npm run build`
4. **资源上传**: 上传构建产物到Pages
5. **自动部署**: 发布到GitHub Pages

## 🌐 访问地址
部署成功后，网站将在以下地址可访问：
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 📋 部署检查清单

### ✅ 已完成配置
- [x] Git仓库初始化
- [x] GitHub Actions工作流配置
- [x] Vite构建优化设置
- [x] 响应式设计和移动端适配
- [x] SEO基础配置
- [x] 代码质量检查

### 🔲 需要手动完成
- [ ] 创建GitHub仓库
- [ ] 推送代码到GitHub
- [ ] 配置GitHub Pages设置
- [ ] 启用Actions权限
- [ ] 验证部署成功

## 🛠 本地开发和测试

### 开发模式
```bash
npm run dev
```
本地开发服务器: http://localhost:5173

### 生产构建测试
```bash
npm run build
npm run preview
```
本地预览服务器: http://localhost:4173

### 代码检查
```bash
npm run lint
```

## 🔍 常见问题解决

### 1. 构建失败
- 检查Node.js版本（推荐18+）
- 确保所有依赖正确安装: `npm ci`
- 检查代码语法错误: `npm run lint`

### 2. 页面无法访问
- 确认GitHub Pages已启用
- 检查仓库是否为Public
- 等待几分钟让部署生效

### 3. 样式或资源加载失败
- 检查Vite配置中的base路径
- 确认构建产物正确生成

### 4. Actions权限问题
- 在仓库Settings > Actions中启用必要权限
- 确保选择了"Read and write permissions"

## 📊 性能优化特性

### 已集成优化
- **代码分割**: Vendor和Icons独立打包
- **资源压缩**: 自动压缩JS/CSS/图片
- **缓存策略**: 优化的文件命名和缓存
- **懒加载**: 组件和资源按需加载

### SEO和可访问性
- **语义化HTML**: 正确的标签结构
- **Meta标签**: 完整的页面元信息
- **响应式设计**: 移动端适配
- **无障碍访问**: ARIA标签和键盘导航

## 🔄 持续部署

每次推送到main分支时，GitHub Actions会自动：
1. 运行代码检查
2. 构建生产版本
3. 部署到GitHub Pages
4. 更新线上网站

这确保了网站始终保持最新状态。

## 📞 技术支持

如果在部署过程中遇到问题，请检查：
1. GitHub Actions运行日志
2. 浏览器开发者工具控制台
3. 网络连接和DNS解析

---

🎉 **部署完成后，您的熵变智元官网将展示最新优化的企业级AI解决方案内容！**
