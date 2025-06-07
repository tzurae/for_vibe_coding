// 應用程序全局配置文件

// API 基礎URL配置
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.example.com' 
  : 'http://localhost:8000';

// 應用程序基本設置
export const APP_CONFIG = {
  // 應用名稱
  appName: '企業管理系統',
  
  // 版本號
  version: '1.0.0',
  
  // 默認分頁大小
  defaultPageSize: 10,
  
  // 分頁選項
  pageSizeOptions: ['10', '20', '50', '100'],
  
  // 日期格式
  dateFormat: 'YYYY-MM-DD',
  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
  
  // 默認語系
  defaultLocale: 'zh-TW',
  
  // 上傳文件大小限制 (單位: MB)
  maxUploadSize: 10,
  
  // 允許上傳的文件類型
  allowedFileTypes: ['.jpg', '.jpeg', '.png', '.pdf', '.doc', '.docx', '.xls', '.xlsx'],
  
  // 是否啟用開發工具 (僅開發環境)
  enableDevTools: process.env.NODE_ENV === 'development',
  
  // 是否顯示日誌
  enableLogging: process.env.NODE_ENV === 'development',
};

// 請求超時設置 (毫秒)
export const REQUEST_TIMEOUT = 30000;

// 本地存儲鍵名
export const STORAGE_KEYS = {
  authToken: 'auth_token',
  refreshToken: 'refresh_token',
  userInfo: 'user_info',
  theme: 'app_theme',
  language: 'app_language',
};

export default APP_CONFIG;