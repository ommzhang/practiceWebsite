import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// PostgreSQL 連線設定
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "backendProject",
  password: "aaaa",
  port: 5432,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err.stack);
  } else {
    console.log("Connected to the database");
  }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

// 設定模板引擎和視圖目錄
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");








//天氣API
const API_URL1 = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-075";
const API_URL2 = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-073";
const API_KEY = "CWA-3A0A1A18-F8F9-41CF-9462-4DC18F916CF8"; // 你的 API 金鑰


// ✅ 獲取 API 資料
async function fetchWeatherData() {
  try {
    const response1 = await axios.get(API_URL1, {
      params: {
        Authorization: API_KEY,
        format: "JSON",
        LocationName: "太平區",

      },
    });

    const response2 = await axios.get(API_URL2, {
      params: {
        Authorization: API_KEY,
        format: "JSON",
        

      },
    });
    /*
  這兩種寫法都ok 
  #多行寫法

    // ✅ 直接根據 index 存取 "臺中市"
    const taichungData = response.data.records.Locations[0];

    // ✅ 直接根據 index 存取 "太平區" (Location[26])
    const taipingData = taichungData.Location[26];

    // ✅ 直接根據 index 存取 "天氣現象" (WeatherElement[0])
    const weatherElement = taipingData.WeatherElement[0];

    // ✅ 直接根據 index 存取 "最新的天氣現象"
    const latestWeather = weatherElement.Time[0].ElementValue[0].Weather;

    console.log("✅ 太平區的最新天氣：", latestWeather);
    return latestWeather;

*/



   // ✅ 直接存取 "太平區" 的 "最新天氣現象"
   const taipingWeatherCondition = response1.data.records.Locations[0].Location[0].WeatherElement[12].Time[0].ElementValue[0].Weather;


   const taipingMaxTemperature = response1.data.records.Locations[0].Location[0].WeatherElement[1].Time[0].ElementValue[0].MaxTemperature;

   
   const taipingMinTemperature = response1.data.records.Locations[0].Location[0].WeatherElement[2].Time[1].ElementValue[0].MinTemperature;
 

   const taipingPresentTemperature = response2.data.records.Locations[0].Location[26].WeatherElement[0].Time[1].ElementValue[0].Temperature;

   const taipingWeatherPack = [
    taipingWeatherCondition,
    taipingMaxTemperature,
    taipingMinTemperature,
    taipingPresentTemperature,
   ]

  
 
   
   console.log("太平區最高溫度", taipingMaxTemperature);
   console.log("✅ 太平區的最新天氣：", taipingWeatherCondition);
   console.log("太平區目前溫度", taipingPresentTemperature);
   return taipingWeatherPack; // 🔹 這裡要 return 正確的變數名稱



  } catch (error) {
    console.error("❌ API 請求失敗：", error.response1?.data || error.message);
    return null;
  }
}


// ✅ 伺服器首頁：取得天氣數據並渲染 EJS
app.get("/", async (req, res) => {
  const 太平區天氣 = await fetchWeatherData();
  const 太平區天氣現象 = 太平區天氣[0];
  const 太平區最高溫度 = 太平區天氣[1];
  const 太平區最低溫度 = 太平區天氣[2];
  const 太平區當前溫度 = 太平區天氣[3];
  res.render("index",{
    太平區天氣現象:太平區天氣現象, 
    太平區最高溫度:太平區最高溫度, 
    太平區最低溫度:太平區最低溫度,
    太平區當前溫度:太平區當前溫度,
  }, );
});










// 渲染 taskPage.ejs 並傳遞數據
app.get("/taskPage", async (req, res) => {
  try {
    console.log("進入 taskPage 路由");

    // 查詢 2025 年 1 月的數據
    const result = await db.query(`
      SELECT task_date, completed
      FROM task_progress
      WHERE task_date BETWEEN '2025-02-01' AND '2025-02-28';
    `);

    console.log("SQL 查詢結果:", result.rows);

    // 整理數據
    const taskData = {};
    result.rows.forEach((row) => {
      const formattedDate = new Date(row.task_date).toISOString().split("T")[0];
      taskData[formattedDate] = row.completed;
    });

    console.log("處理後的 taskData:", taskData);

    res.render("taskPage", { taskData });

  } catch (err) {
    console.error("路由執行錯誤:", err);
    res.status(500).send("伺服器錯誤");
  }
});

// 更新任務完成狀態
app.post("/update-task", async (req, res) => {
  const { taskDate, completed } = req.body;


  console.log(`接收到請求: taskDate=${taskDate}, completed=${completed}`);

  try {
    // 檢查當天的資料是否已存在
    const checkTask = await db.query(
      "SELECT * FROM task_progress WHERE task_date = $1",
      [taskDate]
    );

    if (checkTask.rows.length > 0) {
      // 如果當天的資料已存在，更新 `completed` 狀態
      await db.query(
        "UPDATE task_progress SET completed = $1 WHERE task_date = $2",
        [completed, taskDate]
      );
    } else {
      // 如果當天的資料不存在，插入新的資料
      await db.query(
        "INSERT INTO task_progress (task_date, completed) VALUES ($1, $2)",
        [taskDate, completed]
      );
    }

    res.status(200).json({ message: "Task updated successfully" });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Failed to update task in the database" });
  }
});


// 倒數計時器頁面
app.get('/timer', (req, res) => {
  res.render('倒數計時器_字彙'); // 渲染 倒數計時器_字彙.ejs
});

// 倒數計時器-閱讀1頁面
app.get('/readingTimer1', (req, res) => {
  res.render('倒數計時器_閱讀1'); // 渲染 倒數計時器_字彙.ejs
});

// 倒數計時器-閱讀1頁面
app.get('/readingTimer2', (req, res) => {
  res.render('倒數計時器_閱讀2'); // 渲染 倒數計時器_字彙.ejs
});


// 倒數計時器-寫作頁面
app.get('/writing', (req, res) => {
  res.render('寫作引導介面'); // 渲染 寫作引導介面.ejs
});


// 倒數計時器-讀經進度單
app.get('/BibleReading', (req, res) => {
  res.render('倒數計時器_讀經進度單'); // 渲染 倒數計時器_字彙.ejs
});













// 啟動伺服器
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
