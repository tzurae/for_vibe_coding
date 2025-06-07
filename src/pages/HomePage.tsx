import React from 'react';
import { Typography, Row, Col, Card, Statistic, Alert, Tabs, Divider } from 'antd';
import { UserOutlined, ShoppingOutlined, DollarOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import ExampleForm from '../components/feature/ExampleForm';

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  return (
      <div>
        <Typography>
          <Title level={2}>儀表板</Title>
          <Paragraph>
            歡迎使用本系統。這裡是您的個人儀表板，您可以在這裡查看重要資訊和執行常見任務。
          </Paragraph>
        </Typography>

        <Alert
            message="系統公告"
            description="我們系統將於 2025 年 7 月 1 日進行例行維護，屆時系統將暫時無法使用。請提前安排您的工作。"
            type="info"
            showIcon
            icon={<ExclamationCircleOutlined />}
            style={{ marginBottom: 24 }}
        />

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card>
              <Statistic
                  title="使用者總數"
                  value={1128}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card>
              <Statistic
                  title="本月訂單數"
                  value={893}
                  prefix={<ShoppingOutlined />}
                  valueStyle={{ color: '#0050b3' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card>
              <Statistic
                  title="營業額 (元)"
                  value={568200}
                  precision={0}
                  prefix={<DollarOutlined />}
                  valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
        </Row>

        <Divider />

        <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: '1',
                label: '用戶管理',
                children: <ExampleForm />
              },
              {
                key: '2',
                label: '數據分析',
                children: (
                    <Card>
                      <Typography>
                        <Title level={4}>數據分析模組</Title>
                        <Paragraph>
                          這裡將展示數據分析的內容，包括圖表、趨勢和關鍵指標。
                          在實際應用中，您可以集成各種圖表庫，如 AntV、ECharts 等。
                        </Paragraph>
                      </Typography>
                    </Card>
                )
              },
              {
                key: '3',
                label: '系統設置',
                children: (
                    <Card>
                      <Typography>
                        <Title level={4}>系統設置</Title>
                        <Paragraph>
                          在這裡您可以管理系統的各項設置，包括用戶權限、通知配置和顯示偏好等。
                        </Paragraph>
                      </Typography>
                    </Card>
                )
              }
            ]}
        />
      </div>
  );
};

export default HomePage;