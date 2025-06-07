# 專案開發規範 (Conventions)

## 1. 簡介

本文件旨在定義此專案的開發規範與最佳實踐，特別是作為使用大型語言模型 (LLM) 輔助開發新功能時的指導原則。遵循這些規範有助於維持程式碼庫的品質、可讀性、可維護性，並確保新產生的程式碼符合專案的架構標準。

所有開發者，包括 LLM，在貢獻程式碼時都應遵循本文件所述的規則。

## 2. 核心技術棧

*   **框架 (Framework):** React 18+
*   **語言 (Language):** TypeScript 5+
*   **建構工具 (Build Tool):** Vite
*   **UI 函式庫 (UI Kit):** Ant Design 5+
*   **路由 (Routing):** React Router DOM 6+
*   **程式碼檢查 (Linting):** ESLint (遵循 `eslint.config.js` 設定)
*   **狀態管理 (State Management):**
    *   優先使用 React 內建 Hooks (`useState`, `useReducer`, `useContext`)。
    *   對於複雜跨元件狀態，可考慮使用 Zustand 或 Redux Toolkit (待評估)。

## 3. 目錄結構

請遵循現有的目錄結構，並將新檔案放置於適當的位置：

*   `src/`: 包含所有原始碼。
*   `src/pages/`: 頁面級元件，通常對應一個路由。
*   `src/components/`: 可重用的 UI 元件。
    *   `src/components/feature/`: 特定功能相關的、可能較少重用的元件。
    *   `src/components/layout/`: 頁面佈局相關元件 (如 `MainLayout`)。
    *   `src/components/common/` (建議新增): 可以在多個功能或頁面中重用的通用基礎元件。
*   `src/hooks/` (建議新增): 自訂 React Hooks。
*   `src/services/` (建議新增): API 請求相關的邏輯。
*   `src/store/` (建議新增): 狀態管理相關程式碼 (若使用 Zustand/Redux)。
*   `src/types/` (建議新增): 共用的 TypeScript 型別定義。
*   `src/utils/` (建議新增): 共用的工具函式。
*   `src/config/`: 專案設定檔 (如 `theme.ts`, `app.config.ts`)。
*   `src/assets/`: 靜態資源 (圖片、字型等)。

## 4. 元件設計 (Component Design)

*   **函數式元件 (Functional Components):** **必須** 使用函數式元件搭配 Hooks，禁止使用 Class Components。
*   **命名規範 (Naming Conventions):**
    *   元件檔名與元件名稱：使用 `PascalCase` (例如 `MyComponent.tsx`)。
    *   變數、函式、Hooks：使用 `camelCase` (例如 `const [count, setCount] = useState(0);`)。
    *   常數：使用 `UPPER_SNAKE_CASE` (例如 `const MAX_ITEMS = 10;`)。
*   **Props:**
    *   **必須** 使用 TypeScript `interface` 或 `type` 為 Props 定義型別。型別應盡可能精確，避免使用 `any`。
    *   Props Interface/Type 名稱建議為 `ComponentNameProps` (例如 `interface MyComponentProps { ... }`)。
    *   保持 Props 介面簡潔，遵循介面隔離原則 (ISP)。
    *   布林類型的 Props 命名應清晰表達其作用 (例如 `isLoading`, `isDisabled`, `isOpen`)。
*   **單一職責原則 (Single Responsibility Principle - SRP):**
    *   每個元件應專注於做好一件事。避免建立過於龐大、處理過多邏輯的元件。
    *   將複雜元件拆分為更小、更易於管理和測試的子元件。
    *   將 UI 邏輯、狀態管理邏輯、副作用邏輯 (如 API 請求) 分離。
*   **自訂 Hooks (Custom Hooks):** 將可重用的狀態邏輯或副作用邏輯抽取到自訂 Hooks 中 (放置於 `src/hooks/`)。
*   **避免預設匯出 (Avoid Default Exports):** 優先使用具名匯出 (`export const MyComponent = ...`) 以利於搜尋和重構。

## 5. 樣式 (Styling)

*   **優先使用 Ant Design:**
    *   **首選** 使用 Ant Design 提供的元件及其 Props 來實現 UI 和樣式。
    *   利用 Ant Design 的 `theme` 設定 (`src/config/theme.ts`) 進行全域樣式調整。
*   **自訂樣式:**
    *   若 AntD 無法滿足，可透過 `className` 或 `style` prop 進行微調。
    *   對於元件特定的複雜樣式，**建議** 使用 CSS Modules (`*.module.css`) 或 Styled Components / Emotion (若未來引入)。
    *   避免直接修改 AntD 元件的內部 class name，優先使用其提供的 API。
    *   減少使用全域 CSS (`App.css`, `index.css`)，僅用於設定基礎樣式或全域覆蓋。

## 6. 狀態管理 (State Management)

*   **本地狀態 (Local State):** 預設使用 `useState` 管理元件內部狀態。
*   **狀態提升 (Lifting State Up):** 當多個元件需要共享狀態時，將狀態提升到它們最近的共同父元件。
*   **全域狀態 (Global State):**
    *   對於簡單的全域狀態 (如主題、使用者資訊)，可使用 `useContext`。
    *   若應用狀態變得複雜，評估引入 Zustand 或 Redux Toolkit。狀態管理邏輯應放在 `src/store/` 目錄。

## 7. API 互動 (API Interaction)

*   **分離原則:** API 請求邏輯**不應**直接寫在 UI 元件中。
*   **服務層 (Service Layer):** 建立獨立的服務函式 (放置於 `src/services/`) 來處理 API 請求。這些函式應回傳 Promise 或處理過後的資料。
*   **錯誤處理:** 在服務層或呼叫服務的地方進行適當的 API 錯誤處理。
*   **型別定義:** 為 API 的請求參數和回應資料定義 TypeScript 型別 (放置於 `src/types/` 或相關 service 檔案)。

## 8. 程式碼品質與格式化

*   **Linting:** **必須** 遵循 `eslint.config.js` 中定義的規則。在提交程式碼前執行 `npm run lint` 並修復所有錯誤和警告。
*   **TypeScript:**
    *   **嚴格使用型別:** 充分利用 TypeScript 的型別系統，**禁止** 使用 `any`，除非有絕對必要且有註解說明。使用 `unknown` 作為更安全的替代方案。
    *   利用 `utility types` (如 `Partial`, `Pick`, `Omit`) 提高型別複用性。
*   **註解 (Comments):**
    *   只在必要時添加註解，解釋複雜的邏輯、演算法或 *為什麼* 這樣做，而不是 *做了什麼*。
    *   保持註解簡潔、清晰且最新。
*   **可讀性:** 編寫易於理解的程式碼。使用有意義的變數和函式名稱。保持函式和元件的簡短。

## 9. 設計原則 (Design Principles)

除了上述規範，LLM 在產生程式碼時應力求遵循以下原則：

*   **SOLID:**
    *   **SRP (Single Responsibility Principle):** 已在元件設計中強調。
    *   **OCP (Open/Closed Principle):** 元件應對擴展開放，對修改關閉。多利用 Props、組合、Context API 或自訂 Hooks 來擴充功能，而非直接修改現有元件內部邏輯。
    *   **LSP (Liskov Substitution Principle):** 在 React 元件繼承較少見，但在設計 Hooks 或共用邏輯時，確保衍生類型可替代基礎類型。
    *   **ISP (Interface Segregation Principle):** 保持 Props 介面小而專注。元件不應被迫依賴它不需要的 Props。
    *   **DIP (Dependency Inversion Principle):** 依賴抽象而非具體實現。例如，元件應依賴傳入的 Props (抽象) 或 Context (抽象)，而不是直接依賴某個具體的 Service 或子元件的內部實現。API 呼叫應透過抽象的 Service 函式進行。
*   **DRY (Don't Repeat Yourself):** 避免重複的程式碼。將共用邏輯抽取到函式、元件或 Hooks 中。
*   **KISS (Keep It Simple, Stupid):** 保持解決方案簡單直接。避免過度工程化。

## 10. 測試 (Testing)

*   (待定義) 雖然目前尚未建立完整的測試策略，但鼓勵為核心邏輯、複雜元件和 Hooks 編寫單元測試 (Unit Tests) 或整合測試 (Integration Tests)。未來可考慮使用 Vitest 和 React Testing Library。

## 11. 依賴管理 (Dependency Management)

*   在新增依賴項之前，請先確認是否有現有依賴項或內建 API 可以達成相同目的。
*   謹慎評估新增依賴項對專案大小和複雜度的影響。
*   保持 `package.json` 的整潔。

## 12. 給 LLM 的特別指示

*   **閱讀並遵循本文件:** 在產生任何程式碼之前，請務必完整閱讀並理解本 `CONVENTIONS.md` 文件。
*   **提問:** 如果對任何規範或需求有疑問，請提出澄清。
*   **優先使用 Ant Design:** 在處理 UI 相關任務時，優先尋找 Ant Design 提供的解決方案。
*   **嚴格 TypeScript:** 產生的所有程式碼都必須是型別安全的 TypeScript 程式碼，避免使用 `any`。
*   **遵循設計原則:** 產生的程式碼應體現 SOLID、DRY、KISS 等設計原則。
*   **程式碼結構:** 確保新檔案放置在正確的目錄下，並遵循命名規範。
*   **解釋:** 對於複雜或重要的程式碼段，請提供簡要的註解或說明。
