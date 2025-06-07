import { ConfigProvider } from 'antd';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import theme from './config/theme';
import './App.css';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </ConfigProvider>
  );
}

// @ts-ignore
export default App;