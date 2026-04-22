import type { ThemeConfig } from 'antd';

export const antTheme: ThemeConfig = {
  token: {
    colorPrimary: '#245c4e',
    colorInfo: '#245c4e',
    colorSuccess: '#2f7b66',
    colorWarning: '#b7742f',
    colorText: '#11231c',
    colorTextSecondary: '#41524b',
    colorBgBase: '#f4f1e8',
    colorBgContainer: 'rgba(255, 255, 255, 0.76)',
    colorBorderSecondary: 'rgba(17, 35, 28, 0.08)',
    borderRadius: 22,
    borderRadiusLG: 30,
    fontFamily: '"Manrope", sans-serif',
  },
  components: {
    Layout: {
      bodyBg: 'transparent',
      headerBg: 'transparent',
      footerBg: 'transparent',
      siderBg: 'transparent',
      triggerBg: 'transparent',
      triggerColor: '#ffffff',
    },
  },
};
