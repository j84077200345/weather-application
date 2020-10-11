## 天氣查詢APP

#### 技術介紹 : 
- 前端CSS框架 : Bootstrap
- 後端框架 : Nodejs Express
- 資料庫 : Firebase Realtime Database

此應用程式會於每小時從氣象局opendata api獲取最新縣市的天氣狀況，並回傳至Firebase資料庫中。另外，定時排程使用node-cron套件完成。最後將整個nodejs application建置於AWS EC2的主機中。

### 安裝 : 
1. 使用```git clone```將專案下載來。
2. 執行```npm install```安裝相關套件。
3. 在專案根目錄建立一個.env檔案，加入firebase資料庫的相關環境變數。

平台DEMO : [即時天氣查詢APP](http://ec2-35-172-194-119.compute-1.amazonaws.com/taipei)