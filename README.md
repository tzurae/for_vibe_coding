# React + TypeScript + Ant Design 專案

這個專案使用了 React 19、TypeScript 和 Ant Design 構建，透過 Vite 作為建構工具。

## 技術棧
- React 19
- TypeScript 5.8
- Ant Design 5.x
- Vite 7.x

## 安裝指南

### 1. 安裝相依套件
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn

# 或使用 pnpm
pnpm install
```

### 2. 安裝 Ant Design 相依套件
```bash
# 使用 npm
npm install antd @ant-design/icons

# 或使用 yarn
yarn add antd @ant-design/icons

# 或使用 pnpm
pnpm add antd @ant-design/icons
```

## 啟動開發服務器
```bash
# 使用 npm
npm run dev

# 使用 yarn
yarn dev

# 使用 pnpm
pnpm dev
```

## 目錄結構
```
/src
  /assets        - 靜態資源文件（圖片、字體等）
  /components    - 可重用組件
    /common      - 通用基礎組件
    /feature     - 功能特定組件
    /layout      - 佈局相關組件
  /config        - 應用配置文件
  /contexts      - React 上下文
  /hooks         - 自定義 React Hooks
  /pages         - 頁面組件
  /services      - API 服務和數據獲取
  /utils         - 工具函數
```

## 主要特點

### Ant Design 集成
- 已完成 Ant Design 的基本配置和主題設置
- 創建了示例組件和頁面，展示 Ant Design 的使用方式
- 包含示例表單組件，展示了常用的表單控件和驗證

### 專案結構
- 按功能劃分的清晰目錄結構
- 組件化設計，便於維護和擴展
- 配置文件集中管理

## 自定義主題
您可以在 `src/config/theme.ts` 文件中自定義 Ant Design 的主題設置。

## 構建生產版本
```bash
# 使用 npm
npm run build

# 使用 yarn
yarn build

# 使用 pnpm
pnpm build
```

## 相關資源
- [React 文檔](https://react.dev/)
- [Ant Design 文檔](https://ant.design/)
- [TypeScript 文檔](https://www.typescriptlang.org/)
- [Vite 文檔](https://vitejs.dev/)