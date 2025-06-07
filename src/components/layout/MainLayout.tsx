import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { UserOutlined, HomeOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh'}}>
            <Header style={{ display: 'flex', alignItems: 'center', paddingInline: '24px' }}>
                <div className="logo" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginRight: '20px' }}>
                    專案名稱
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ flex: 1, minWidth: 0 }}
                    items={[
                        { key: '1', icon: <HomeOutlined />, label: '首頁' },
                        { key: '2', icon: <AppstoreOutlined />, label: '功能一' },
                        { key: '3', icon: <UserOutlined />, label: '使用者' },
                    ]}
                />
            </Header>
            <Content style={{ padding: '24px' }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        // maxWidth: '1200px',
                        // margin: '0 auto',
                        width: '100%'
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                ©{new Date().getFullYear()} 公司名稱 - 使用 Ant Design 開發
            </Footer>
        </Layout>
    );
};

export default MainLayout;