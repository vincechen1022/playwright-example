# Playwright 自動化測試學習專案

這是一個使用 [Playwright](https://playwright.dev/) 進行網頁自動化測試的學習專案。本專案旨在幫助初學者了解 Playwright 的基本架構、測試撰寫與執行方式。

## 📋 前置準備

在開始之前，請確保您的電腦已安裝以下軟體：
- [Node.js](https://nodejs.org/) (建議安裝 LTS 版本)
- [pnpm](https://pnpm.io/) (本專案使用 pnpm 作為套件管理器)

## VS Code 擴充套件推薦

建議安裝官方的 VS Code 擴充套件，它提供了強大的功能：
- **Playwright Test for VSCode**: 由 Microsoft 開發。
  - ✅ **直接執行測試**：在測試程式碼旁顯示綠色播放按鈕。
  - ✅ **除錯 (Debug)**：可設定斷點並逐步執行。
  - ✅ **錄製測試 (Record New)**：操作瀏覽器自動產生測試程式碼。
  - ✅ **選取器 (Pick Locator)**：快速選取網頁元素。

在 VS Code 擴充套件市場搜尋 `Playwright Test for VSCode` 即可安裝。

## �🚀 快速開始

### 1. 安裝依賴
在專案根目錄執行以下指令，安裝專案所需的套件：
```bash
pnpm install
```

### 2. 安裝瀏覽器
Playwright 需要下載特定的瀏覽器執行檔才能運作：
```bash
pnpm exec playwright install
```

## 🛠 常用指令

### 執行測試
執行 `tests` 資料夾下的所有測試：
```bash
pnpm exec playwright test
```

### 介面模式 (UI Mode)
啟動互動式的 UI 介面，可以視覺化地查看測試執行過程、除錯與時光機功能：
```bash
pnpm exec playwright test --ui
```

### 檢視測試報告
測試執行完成後，開啟 HTML 報告查看詳細結果：
```bash
pnpm exec playwright show-report
```

### 執行特定測試檔案
```bash
pnpm exec playwright test tests/example.spec.ts
```

## 📂 專案結構說明

- **`tests/`**: 存放測試腳本 (Test files)。例如 `example.spec.ts`。
- **`playwright.config.ts`**: Playwright 的主要設定檔 (瀏覽器設定、測試目錄、網頁伺服器設定等)。
- **`package.json`**: 專案依賴與腳本定義。
- **`.github/workflows/`**: GitHub Actions 設定，用於自動化整合測試 (CI)。
- **`playwright-report/`**: (自動產生) 存放測試執行後的 HTML 報告。
- **`test-results/`**: (自動產生) 存放測試執行過程中的截圖、影片等產物。

## 📚 學習資源

- [Playwright 官方文件](https://playwright.dev/docs/intro)
- [Playwright 部落格文章](https://chimapp.com/blogs/)
