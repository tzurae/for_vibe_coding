import React from 'react';
import { 
  Form, 
  Input, 
  Button, 
  Select, 
  DatePicker, 
  Switch, 
  Checkbox, 
  Radio, 
  Card, 
  message 
} from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Option } = Select;

const ExampleForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('表單提交成功:', values);
    message.success('表單提交成功！');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('表單提交失敗:', errorInfo);
    message.error('表單提交失敗，請檢查輸入！');
  };

  const onReset = () => {
    form.resetFields();
    message.info('表單已重置');
  };

  return (
    <Card title="用戶信息表單" style={{ maxWidth: 800, margin: '0 auto' }}>
      <Form
        form={form}
        name="userForm"
        layout="vertical"
        initialValues={{ 
          remember: true,
          gender: 'male',
          notification: ['email']
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: '請輸入您的姓名！' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="請輸入姓名" />
        </Form.Item>

        <Form.Item
          label="電子郵件"
          name="email"
          rules={[
            { required: true, message: '請輸入您的電子郵件！' },
            { type: 'email', message: '請輸入有效的電子郵件格式！' }
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="請輸入電子郵件" />
        </Form.Item>

        <Form.Item
          label="電話號碼"
          name="phone"
          rules={[{ required: true, message: '請輸入您的電話號碼！' }]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="請輸入電話號碼" />
        </Form.Item>

        <Form.Item label="性別" name="gender">
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
            <Radio value="other">其他</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="部門" name="department">
          <Select placeholder="請選擇您的部門">
            <Option value="development">研發部</Option>
            <Option value="marketing">市場部</Option>
            <Option value="operations">運營部</Option>
            <Option value="hr">人力資源部</Option>
            <Option value="finance">財務部</Option>
          </Select>
        </Form.Item>

        <Form.Item label="入職日期" name="joinDate">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="通知方式" name="notification">
          <Checkbox.Group>
            <Checkbox value="email">電子郵件</Checkbox>
            <Checkbox value="sms">短信</Checkbox>
            <Checkbox value="app">應用內通知</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="active" label="是否啟用賬戶" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>我已閱讀並同意服務條款</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ExampleForm;