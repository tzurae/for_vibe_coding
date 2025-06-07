import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 在 Ant Design v5 中，不再需要顯式導入 reset.css
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)