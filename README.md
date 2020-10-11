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

### 收集資料欄位 : 
- 平均氣溫 : 過濾掉地理位置太高的地方氣象觀測站，並取平均計算。
- 最高溫 : 取偵測到最高氣溫的地方氣象觀測站。
- 最低溫 : 取偵測到最低氣溫的地方氣象觀測站。
- 平均濕度 : 取所有地方氣象觀測站的濕度平均。
- 平均風速 : 取所有地方氣象觀測站的風速平均。

平台DEMO : [即時天氣查詢APP](http://ec2-35-172-194-119.compute-1.amazonaws.com)