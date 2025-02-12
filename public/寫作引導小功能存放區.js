function 引導文字亂數抽取(){
  引導者對話文字.innerHTML = 引導者提問語料庫[引導者提問語料庫隨機編號];

}

function 關閉引導按鈕(){
  引導者按鈕.style.display = "none";    

}

function 開啟引導按鈕(){
  引導者按鈕.style.display = "block";    

}

function 開啟休息按鈕(){
  休息按鈕.style.display = "block"; 
  休息按鈕.textContent = "休息";   

}

function 關閉休息按鈕(){
 
  休息按鈕.style.display = "none";

}

function 開啟繼續按鈕(){
  繼續按鈕.style.display = "block"; 
  繼續按鈕.textContent = "繼續";   

}

function 關閉繼續按鈕(){
  繼續按鈕.style.display = "none";    

}

function 開啟textArea(){
  textareaJS.style.display ="block";

}

function 關閉textArea(){
  textareaJS.style.display ="none";

}


function 開啟使用者按鈕(){
  使用者區塊按鈕.style.display = "block";
}



function 關閉使用者按鈕(){
  使用者區塊按鈕.style.display = "none";

}



function 關閉按鈕123 (){

  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
}

function 出現檢查按鈕() {
  引導者對話文字.innerHTML = "這個回答...";

  //！這是錯誤寫法document.querySelectorAll.檢查具體性按鈕.style.display = "block";
  document.querySelectorAll('.檢查具體性按鈕').forEach(btn => btn.style.display = "block");

  // 3. 設定按鈕的文字內容
  button1.textContent = "很好很清楚！";
  button2.textContent = "有懂又沒有懂。再說清楚些？";
  button3.textContent = "你認真？好好認真！";



  textareaJS.value = "";


}

//按下user按鈕後，開啟3按鈕
function 開啟三按鈕(){  
    出現檢查按鈕();
    關閉使用者按鈕();
    關閉textArea();

}
  

function 繼續鍵(){
  引導者對話文字.innerHTML = "那就繼續囉！";
  開啟textArea();
  開啟使用者按鈕();
  使用者區塊按鈕.textContent = "ok";

  開啟三按鈕();
  關閉繼續按鈕();
}

function 休息鍵(){

  引導者對話文字.innerHTML = "休息一下再回來討論吧！";
  關閉休息按鈕();
  開啟繼續按鈕();
  關閉引導按鈕();
  關閉textArea();
  關閉使用者按鈕();

}


function 使用者input(){
  引導文字亂數抽取(); //你剛剛看了啥？
  開啟textArea();
  開啟使用者按鈕();
  關閉引導按鈕();
  使用者區塊按鈕.textContent = "ok";
  textareaJS.value = "";
  textareaJS.style.display ="block";
  關閉休息按鈕();
  
}



function button1Click12(){
引導者對話文字.innerHTML = "很不錯嘛你！那麼，再來聊聊下一段？";
開啟引導按鈕();
roundNum++;    
roundNum顯示.innerHTML = roundNum;   
關閉按鈕123();
引導者按鈕.innerHTML = "好喔";



setTimeout(寫作引導機制, 500);

}


function button2Click12(){
  引導者對話文字.innerHTML = "我很期待你這次的想法oh～？";
  開啟引導按鈕();
  roundNum++;
  roundNum顯示.innerHTML = roundNum;
  關閉按鈕123();
 
  setTimeout(寫作引導機制, 500);


}


function button3Click12(){


  關閉按鈕123();
  開啟引導按鈕();
  引導者對話文字.innerHTML = "剛剛的真是怎麼說呢～。這位同學，去後面罰站——！";
  roundNum++;
  roundNum顯示.innerHTML = roundNum;
  
  setTimeout(寫作引導機制, 500);


}


function button1Click3(){
引導者對話文字.innerHTML = "真是amzing！再來一回？";
roundNum + 0.5;    
roundNum顯示.innerHTML = roundNum;
關閉引導按鈕();   
關閉按鈕123();


setTimeout(()=> {
  引導者對話文字.innerHTML = `要進入round ${roundNum}了`;
  引導者按鈕.innerHTML = `來吧${roundNum}`;
  開啟引導按鈕();
  開啟休息按鈕();

}, 1800);


寫作引導機制(); 



}


function button2Click3(){
    引導者對話文字.innerHTML = "還是不太到位啊。再思考一下？";  
    roundNum + 0.5;
    roundNum顯示.innerHTML = roundNum;    
    關閉引導按鈕();
    關閉按鈕123();

    setTimeout(()=> {
      引導者對話文字.innerHTML = `要進入round ${roundNum}了`;
      引導者按鈕.innerHTML = "我再試試";
      開啟引導按鈕();
      開啟休息按鈕();   
    }, 1800);    
    寫作引導機制(); 
}


function button3Click3(){
    引導者對話文字.innerHTML = "渙散了呀！你的注意力！";
    roundNum + 0.5;   
    roundNum顯示.innerHTML = roundNum;
    關閉引導按鈕();
    關閉按鈕123();

    setTimeout(()=> {
      引導者對話文字.innerHTML = `要進入round ${roundNum}了`;
      引導者按鈕.innerHTML = "我大徹大悟了來吧！";
      開啟引導按鈕();
      開啟休息按鈕();   
    }, 1800);    
    寫作引導機制(); 
        
}

function 完成退出鍵(){
  

  window.parent.關閉倒數計時器();

  window.parent.postMessage("完成任務4", "*");
  window.parent.document.getElementById("button4ID").style.display = "none";
  window.parent.document.getElementById("star4ID").style.color = "rgb(200, 247, 172)";

  window.parent.document.getElementById("redDotID4").style.display = "none";
 
          
}

