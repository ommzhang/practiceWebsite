var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //pagination 分頁，是下方那個藍圓點！
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,  // 修正拼寫錯誤
  initialSlide: 2, //這個就是設定哪個編號順位的圖片會被突出！！
  speed: 600,
  preventClicks: true,
  
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: false,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);  // 修正 clickedIndex 拼寫錯誤
    },
  },

});


function 更新時間() {
  const 現在時間 = new Date();
  const 星期幾資料 = ["Sun. 週日", "Mon. 星期一", "Tue. 星期二", "Wed. 星期三", "Thu. 星期四", "Fri. 星期五", "Sat. 星期六"];
  const 現在星期幾 = 星期幾資料[現在時間.getDay()];
  const 星期幾顯示 = document.getElementById("星期幾顯示ID");
  const 幾點顯示 = document.getElementById("幾點顯示ID");
  const 年月日顯示 = document.getElementById("年月日顯示ID");



  const 年 = 現在時間.getFullYear();
  const 月 = 現在時間.getMonth() +1; // getMonth() 從0開始
  const 日 = 現在時間.getDate();

  let 現在小時 = 現在時間.getHours();
  const 分鐘 = 現在時間.getMinutes().toString().padStart(2, "0");
  const 秒數 = 現在時間.getSeconds().toString().padStart(2, "0");
  //const ampm = 現在小時 >= 12 ? "pm" : "am";

  let 時間段;
    if (現在小時 >= 0 && 現在小時 < 12) {
        時間段 = "上午";
    } else if (現在小時 >= 12 && 現在小時 < 18) {
        時間段 = "下午";
    } else {
        時間段 = "晚上";
    }


  現在小時 = 現在小時 % 12 || 12; // 轉換為12小時制


  // 顯示"星期幾點"

  幾點顯示.innerHTML = `${時間段} ${現在小時}點${分鐘}分${秒數}秒`;
  年月日顯示.innerHTML = `${年}-${月}-${日}&nbsp&nbsp ${現在星期幾}`;
 
 

}
setInterval(更新時間, 1000);
更新時間();





/*

document.addEventListener('DOMContentLoaded', () => {
  const redDot = document.getElementById('redDotID');

  // 從 localStorage 中檢查任務完成狀態
  const taskCompleted = localStorage.getItem('taskCompleted');

  // 如果任務已完成，隱藏紅點
  if (taskCompleted === 'true') {
    redDot.classList.add('hidden');
  }
});

*/

document.addEventListener('DOMContentLoaded', () => {
  const redDot = document.getElementById('redDotID');

  const updateRedDot = () => {
    const taskCompleted = localStorage.getItem('taskCompleted');
    if (taskCompleted === 'true') {
      redDot.classList.add('hidden');
    } else {
      redDot.classList.remove('hidden');
    }
  };

  // 初次檢查
  updateRedDot();

  // 接收來自任務包的通知
  const channel = new BroadcastChannel('redDotChannel');
  channel.onmessage = (event) => {
    if (event.data.taskCompleted) {
      updateRedDot();
    }
  };
});
