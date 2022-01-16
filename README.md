# expense-tracker
使用 Node.js + Express 打造的家庭記帳本，方便使用者管理個人日常支出。能夠登入系統，確保個人隱私。可以對自己建立的支出紀錄進行瀏覽、新增、修改、刪除，也可以分類來查看收支狀況。

## 產品功能
### 紀錄系統
1. **首頁可以看到支出明細**
2. **可以修改、刪除資料**

### 使用者認證系統
1. **需使用Email註冊使用者資料才可登入**
2. **密碼經加密存入資料庫**
3. **可以使用FB帳號登入**
5. **登入、註冊頁面有提示訊息**

## 環境建置與需求
*   Node.js
*   Express
*   MongoDB
*   Mongoose

## 安裝流程

1. 打開終端機，複製此專案至本機電腦
```
git clone https://github.com/Yung-Che/expense-tracker.git
```
2. 進入專案資料夾
```
cd expense-tracker
```
3. 安裝所需套件
```
npm install
```
4. 種子資料
```
npm run seed
```
5.使用Express 或 Node.js 執行伺服器
```
npm run dev
```
使用者登入資訊

"name": 廣志  
"email": root@toot.com  
"password": 1234567  

"name": 美牙  
"email": root2@toot.com  
"password": 7654321  

## Heroku
https://young-hamlet-46862.herokuapp.com/users/login

# 專案開發人員
>[Yung-Che](https://github.com/Yung-Che)
