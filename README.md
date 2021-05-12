# Middleware

Middleware debug 的小工具，檢查是否有成功連線，以及所花費的時間

# Features：功能列表

- 檢查路由的 time stamp、request method＆url 和 req-->res 所花的時間

# Environment Setup：環境安裝

[Node.js](https://nodejs.org/en/)
[Express](https://expressjs.com/)

# Installing Procedure：專案安裝

1.開啟終端機，新建資料夾後，並 cd 到預計要儲存的專案位置，執行：

```
mkdir Middleware //建立專案資料夾
```

```
cd Middleware //切換到專案資料夾
```

```
git clone https://github.com/DennisWei9898/Middleware
```

2.安裝套件和種子資料：

```
npm install //安裝 npm 套件
```

3.啟動伺服器，執行 app.js 檔案

```
npm run dev //成功啟動後，終端機會顯示：This server is running on http://localhost:3000
            //mongodb connected!
```

4.打開網址和 terminal，透過 server log 來檢查確認 time stamp、 收到請求的路由以及方法

- http://localhost:3000 //列出全部 Todo

- http://localhost:3000/new //新增 Todo 頁面

- http://localhost:3000/:id //顯示一筆 Todo

- http://localhost:3000 (post) //新增一筆 Todo

# 作業過程

觀看https://expressjs.com/zh-tw/guide/using-middleware.html來學習middleware的概要，以及顯示使用URL和method的方法。

找到一篇不錯的文章，可以更方便的顯示當地或著全球時區：https://noob.tw/js-timezone/，不需要用到在另外設定date的format ，真的相當方便！！
在 server log 時，第二段都會跳出 Request URL: GET /favicon.ico |total tine: 4 ms，上網看了一下，因為網站都會需要有個預設的 ico 圖標，因此切換到不同路由時，進行方式都如下：

- 第一次回傳 localhost 所要到的路由 ex: http://localhost:3000/
- 第二次回傳網站的 ico，且 url 都來自 http://localhost:3000/favicon.ico
