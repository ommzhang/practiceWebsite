let 狀態顯示 = document.getElementById("當前狀態分數ID");
const 時間到音樂 = document.getElementById("時間到音樂ID");
const 任務完成音樂 = document.getElementById("任務完成音樂ID");

const 紅點全部沒了 = document.getElementById("紅點全部沒了ID")

// 初始物件，包含分數與圖像狀態
  let 狀態 = {
  分數: 50,
  紅點全部沒了: false,
};

function 顯示狀態(){      
  狀態顯示.innerHTML = 狀態.分數;
  紅點全部沒了.innerHTML = 狀態.紅點全部沒了;
}
顯示狀態();

// 初始圖像顯示
function 圖像顯示() {
  if(狀態.分數 == 50)
  document.querySelector("#圖像表示ID").src = "https://i.pinimg.com/736x/4e/e8/44/4ee844cd500cfdd9e7e6d9ed26ed0ba6.jpg";


  if(狀態.分數 >= 60)
  document.querySelector("#圖像表示ID").src = "https://i.pinimg.com/736x/cd/6f/c4/cd6fc472f66f7c0cf9128c1d853c94c6.jpg";

  if(狀態.分數 < 50)
  document.querySelector("#圖像表示ID").src = "https://i.pinimg.com/736x/a3/a9/f8/a3a9f8ee1e87828eb4e9c17284688c82.jpg";
}
圖像顯示();

    /* 另一種做法
      // 更新圖像狀態
    function 更新圖像() {
      if (狀態.分數 >= 60) {
        狀態.圖像 = "url = 開心";
      } else if (狀態.分數 < 50) {
        狀態.圖像 = "url = 虛弱";
      } else {
        狀態.圖像 = "url = 普通";
      }
      console.log(目前圖像：${狀態.圖像});
    }
    */

// 每日任務包
let 每日任務包 = {
  bug1: false,
  bug2: false,
  bug3: false,
  bug4: false,
  bug5: false,
};

// 任務完成的按鈕

/*一個一個寫太麻煩了，請熟悉快速寫法（下方）
const button1 = document.querySelector("#button1ID");
const button2 = document.querySelector("#button2ID");
const button3 = document.querySelector("#button3ID");
*/

//使用遍歷寫法來新增大量元素，一定要會；這邊也展示了指定class下的元素物件選取法
/*結果為：[
  <button id="button1ID">Button 1</button>,
  <button id="button2ID">Button 2</button>,
  <button id="button3ID">Button 3</button>,
  <button id="button4ID">Button 4</button>,
  <button id="button5ID">Button 5</button>
]
*/


/*
const button1 = document.querySelector("#button1ID");

button1.addEventListener("click", ()=>{
  button1.textContent = "ok";
  const star1 = document.getElementById("star1ID");
  star1.style.color = "pink";

})
*/

/*
const 任務包btn = [];
for (let i=1; i<=5; i++){
  任務包btn.push(document.querySelector(`.sec3_3Container #button${i}ID`));
  console.log(任務包btn);
}
*/


const button1 = document.querySelector("#button1ID");
const button2 = document.querySelector("#button2ID");
const button3 = document.querySelector("#button3ID");
const button4 = document.querySelector("#button4ID");
const button5 = document.querySelector("#button5ID");


const bug1狀態= document.getElementById("bug1狀態ID");
bug1狀態.innerHTML = 每日任務包.bug1;

const bug2狀態= document.getElementById("bug2狀態ID");
bug2狀態.innerHTML = 每日任務包.bug2;

const bug3狀態= document.getElementById("bug3狀態ID");
bug3狀態.innerHTML = 每日任務包.bug3;

const bug4狀態= document.getElementById("bug4狀態ID");
bug4狀態.innerHTML = 每日任務包.bug4;

const bug5狀態= document.getElementById("bug5狀態ID");
bug5狀態.innerHTML = 每日任務包.bug5;



//const todayDate = new Date();

//const 指定完成時間 = `今天 ${目標時間.getFullYear()}年 ${目標時間.getMonth()+1}月 ${目標時間.getDate()}日 ${目標時間.getHours().toString().padStart(2, '0')} : ${目標時間.getMinutes().toString().padStart(2, '0')}`;


//const testBTN = document.getElementById("testBTN");

/*
testBTN.addEventListener("click", () => {

  
        //const todayDate = new Date().toISOString().split("T")[0];  //這個會出現誤差日期
        

        const todayDate = new Date().toLocaleDateString("zh-TW", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }).replace(/\//g, "-");
        
        console.log(todayDate); // ✅ 正確！顯示當地日期 2025-02-12
    
        console.log(`✅ 全部按鈕按下，開始更新 SQL: ${todayDate}`);
    
  
        fetch("/update-task", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ taskDate: todayDate, completed: true })
        })
        .then(response => response.json())
        .then(data => {
          console.log("✅ 伺服器回應:", data);
          if (data.message === "Task updated successfully") {
            alert("本日任務已標記完成！");
            location.reload();
          }
        })
        .catch(error => console.error("❌ 更新失敗:", error));
    
  
});
*/

function 檢測任務包項目全為真(){
  if (
    每日任務包.bug1 === true
  &&每日任務包.bug2 === true
  &&每日任務包.bug3 === true
  &&每日任務包.bug4 === true
  &&每日任務包.bug5 === true
  ){

        const todayDate = new Date().toLocaleDateString("zh-TW", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }).replace(/\//g, "-");
        
        console.log(todayDate); // ✅ 正確！顯示當地日期 2025-02-12
      console.log(`✅ 全部按鈕按下，開始更新 SQL: ${todayDate}`);

      fetch("/update-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskDate: todayDate, completed: true })
      })
      .then(response => response.json())
      .then(data => {
        console.log("✅ 伺服器回應:", data);
        if (data.message === "Task updated successfully") {
          alert("本日任務已標記完成！");
          location.reload();
        }
      })
      .catch(error => console.error("❌ 更新失敗:", error));
  }
}




button1.addEventListener("click", () => {
  
  const iframe = document.querySelector("#模態視窗版面容器ID1 iframe");


  /*
  setTimeout(()=>{
    iframe.contentWindow.postMessage({ 這是參數名稱: 標題 }, "*");
  }, 100);
*/
  document.getElementById("模態視窗版面容器ID1").style.display = "flex";


  window.addEventListener("message", (event) => {
    // 确保消息来源合法（跨域安全性）
    if (event.data === "完成任務1") {
    
        每日任務包.bug1 = true; // 更新任务状态
        bug1狀態.innerHTML = 每日任務包.bug1;
        狀態.分數 += 5; // 更新分数
  
        顯示狀態();
        檢查任務完成();
        檢查並執行加分();
        setTimeout(檢測任務包項目全為真, 500);
      
    }
  });
  
});

button2.addEventListener("click", () => {
 
  const iframe = document.querySelector("#模態視窗版面容器ID2 iframe");

  document.getElementById("模態視窗版面容器ID2").style.display = "flex";

  window.addEventListener("message", (event) => {
    // 确保消息来源合法（跨域安全性）
    if (event.data === "完成任務2") {
    
        每日任務包.bug2 = true; // 更新任务状态
        bug2狀態.innerHTML = 每日任務包.bug2;
        狀態.分數 += 5; // 更新分数
  
        顯示狀態();
        檢查任務完成();
        檢查並執行加分();
        檢測任務包項目全為真();
      
    }
  });
  

});

button3.addEventListener("click", () => {
  
  const iframe = document.querySelector("#模態視窗版面容器ID3 iframe");


  document.getElementById("模態視窗版面容器ID3").style.display = "flex";

  window.addEventListener("message", (event) => {
    // 确保消息来源合法（跨域安全性）
    if (event.data === "完成任務3") {
    
        每日任務包.bug3 = true; // 更新任务状态
        bug3狀態.innerHTML = 每日任務包.bug3;
        狀態.分數 += 5; // 更新分数
  
        顯示狀態();
        檢查任務完成();
        檢查並執行加分();
        檢測任務包項目全為真();
      
    }
  });

});


button4.addEventListener("click", () => {
  
  const iframe = document.querySelector("#模態視窗版面容器ID4 iframe");

  document.getElementById("模態視窗版面容器ID4").style.display = "flex";

  window.addEventListener("message", (event) => {
    // 确保消息来源合法（跨域安全性）
    if (event.data === "完成任務4") {
    
        每日任務包.bug4 = true; // 更新任务状态
        bug4狀態.innerHTML = 每日任務包.bug4;
        狀態.分數 += 5; // 更新分数
  
        顯示狀態();
        檢查任務完成();
        檢查並執行加分(); 
        檢測任務包項目全為真(); 
    }
  });
});

button5.addEventListener("click", () => {

  const iframe = document.querySelector("#模態視窗版面容器ID5 iframe");

  document.getElementById("模態視窗版面容器ID5").style.display = "flex";

  window.addEventListener("message", (event) => {
    // 确保消息来源合法（跨域安全性）
    if (event.data === "完成任務5") {
    
        每日任務包.bug5 = true; // 更新任务状态
        bug5狀態.innerHTML = 每日任務包.bug5;
        狀態.分數 += 5; // 更新分数
  
        顯示狀態();
        檢查任務完成();
        檢查並執行加分();
        檢測任務包項目全為真();
      
    }
  });


});






/*
任務包btn[0].addEventListener("click", () => {

  const iframe = document.querySelector("#模態視窗版面容器ID1 iframe");

  setTimeout(()=>{
    iframe.contentWindow.postMessage({ 這是參數名稱: 標題 }, "*");
  }, 100);

  document.getElementById("模態視窗版面容器ID1").style.display = "flex";



});

任務包btn[1].addEventListener("click", () => {

  const iframe = document.querySelector("#模態視窗版面容器ID2 iframe");

  setTimeout(()=>{
    iframe.contentWindow.postMessage({ 這是參數名稱: 標題 }, "*");
  }, 100);

  document.getElementById("模態視窗版面容器ID2").style.display = "flex";
});

任務包btn[2].addEventListener("click", () => {

  const iframe = document.querySelector("#模態視窗版面容器ID3 iframe");

  setTimeout(()=>{
    iframe.contentWindow.postMessage({ 這是參數名稱: 標題 }, "*");
  }, 100);

  document.getElementById("模態視窗版面容器ID3").style.display = "flex";
});

任務包btn[3].addEventListener("click", () => {

  const iframe = document.querySelector("#模態視窗版面容器ID4 iframe");

  setTimeout(()=>{
    iframe.contentWindow.postMessage({ 這是參數名稱: 標題 }, "*");
  }, 100);

  document.getElementById("模態視窗版面容器ID4").style.display = "flex";
});

*/






//！但是呢，button點進去，要連結到那個dailyTask的計時器！


function 關閉倒數計時器() {
  // 隱藏模態視窗

  const iframe1 = document.querySelector("#模態視窗版面容器ID1 iframe");

  setTimeout (()=>{
    if (iframe1.contentWindow && typeof iframe1.contentWindow.重新鍵 === "function") {
      iframe1.contentWindow.重新鍵();
    }
  }, 100);
  document.getElementById("模態視窗版面容器ID1").style.display = "none";


  const iframe2 = document.querySelector("#模態視窗版面容器ID2 iframe");

  setTimeout (()=>{
    if (iframe2.contentWindow && typeof iframe2.contentWindow.重新鍵 === "function") {
      iframe2.contentWindow.重新鍵();
    }
  }, 100);
  document.getElementById("模態視窗版面容器ID2").style.display = "none";


const iframe3 = document.querySelector("#模態視窗版面容器ID3 iframe");

setTimeout (()=>{
    if (iframe3.contentWindow && typeof iframe3.contentWindow.重新鍵 === "function") {
      iframe3.contentWindow.重新鍵();
    }
  }, 100);
  document.getElementById("模態視窗版面容器ID3").style.display = "none";



const iframe4 = document.querySelector("#模態視窗版面容器ID4 iframe");

setTimeout (()=>{
    if (iframe4.contentWindow && typeof iframe4.contentWindow.重新鍵 === "function") {
      iframe4.contentWindow.重新鍵();
    }
  }, 100);
document.getElementById("模態視窗版面容器ID4").style.display = "none";

const iframe5 = document.querySelector("#模態視窗版面容器ID5 iframe");

setTimeout (()=>{
    if (iframe5.contentWindow && typeof iframe4.contentWindow.重新鍵 === "function") {
      iframe5.contentWindow.重新鍵();
    }
  }, 100);
document.getElementById("模態視窗版面容器ID5").style.display = "none";

}


   // 檢查所有任務是否完成
   function 檢查任務完成() {
    let 任務包完成情況 = document.querySelector("#任務包完成情況ID");

    // 計算布林值。
    const 是否完成 = 每日任務包.bug1 && 每日任務包.bug2 && 每日任務包.bug3 && 每日任務包.bug4 && 每日任務包.bug4 && 每日任務包.bug5; 
    

    // 顯示布林值
    任務包完成情況.innerHTML = 是否完成;

    // 返回布林值
    return 是否完成;
  }


// 檢查並執行加分邏輯
function 檢查並執行加分() {
  if (檢查任務完成()) {
    
    顯示狀態(); // 更新分數顯示
    圖像顯示(); // 更新圖像顯示
    任務完成音樂.play();
    clearInterval(倒計時); // 停止定時器
    時間限制倒數.innerHTML = "<br>恭喜你，<br>完成啦<br>！！";


  }      
}



const 指定完成時間顯示 = document.querySelector("#指定時間顯示ID");
const 時間限制倒數 = document.querySelector("#時間限制倒數顯示ID");

//設定時間到期點在此
const 現在 = new Date();
const 目標時間 = new Date(現在.getFullYear(), 現在.getMonth(), 現在.getDate(), 18, 15, 0);

let 倒計時;

function 顯示時間限制(){

  const 現在 = new Date();
  const 到目標時間的毫秒數 = 目標時間 - 現在;   
  const 指定完成時間 = `今天 ${目標時間.getFullYear()}年 ${目標時間.getMonth()+1}月 ${目標時間.getDate()}日 ${目標時間.getHours().toString().padStart(2, '0')} : ${目標時間.getMinutes().toString().padStart(2, '0')}`;


  指定完成時間顯示.innerHTML = `${指定完成時間}`;
  
  let 倒數小時 = Math.floor(到目標時間的毫秒數 / (1000 * 60 * 60));
  let 倒數分鐘 = Math.floor((到目標時間的毫秒數 % (1000 * 60 * 60)) / (1000 * 60));
  let 倒數秒數 = Math.floor((到目標時間的毫秒數 % (1000 * 60)) / 1000);

  時間限制倒數.innerHTML = `<br>還剩<br>${倒數小時}小時 ${倒數分鐘}分鐘<br>${倒數秒數}秒<br>！！`;

  if (到目標時間的毫秒數 <= 0) {
    
    clearInterval(倒計時); // 停止定時器
    時間限制倒數.innerHTML = "時間已到！";
  
    扣分檢查();
    時間到音樂.play();
    return;
  }

}

倒計時 = setInterval(顯示時間限制, 1000);


function 扣分檢查() {

  // 時間到達：執行檢查和扣分
  if (!檢查任務完成()) {
    
      狀態.分數 -= 10;
      顯示狀態();
      
      圖像顯示(); // 更新圖像顯示
      
     
    
  }
  
}



   
function 首頁任務包紅點檢查() {
  const observer = new MutationObserver(() => {
    const redDots = document.querySelectorAll('.redDot');
    const allHidden = Array.from(redDots).every(dot => {
      return getComputedStyle(dot).display === 'none';
    });

    if (allHidden === true) {
      localStorage.setItem('taskCompleted', 'true');

      // 通知首頁更新紅點
      const channel = new BroadcastChannel('redDotChannel');
      channel.postMessage({ taskCompleted: true });

      setTimeout(() => {
        狀態.紅點全部沒了 = true;
        顯示狀態();
      }, 200);
    } else {
      localStorage.setItem('taskCompleted', 'false');
    }
  });

  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
}
首頁任務包紅點檢查();
