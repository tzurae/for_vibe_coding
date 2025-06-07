// 使用 type 關鍵字明確地只導入類型
import type { ThemeConfig } from 'antd';

// 自定義Ant Design主題配置
export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 4,
    // 你可以在這裡添加更多自定義主題設置
  },
  // 組件級別的主題設置
  components: {
    Button: {
      colorPrimary: '#1677ff',
      algorithm: true, // 啟用新的色彩算法
    },
    // 可以為其他組件添加自定義配置
  },
};

export default theme;