// 獲取網頁上對應的dom元素物件
const total = document.getElementById("total");

total.addEventListener('click', function () {
   // 先得到網頁上的數字， 加1後設定回網頁上
   // 從網頁上得到的文字為字串類型，要先轉為數字類型才能作算術運算
   total.innerText = Number(total.innerText) + 1;
});



// 獲取網頁上對應的dom元素物件，以下兩種都可以
//console.log(typeof document.getElementById("total"));
// console.log(document.querySelector("#total"));

// 透過dom元素物件的innerText屬性，獲得到它的其中包含文字
//console.log(document.getElementById("total").innerText);
