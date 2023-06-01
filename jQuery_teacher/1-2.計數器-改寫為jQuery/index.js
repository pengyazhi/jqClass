// 獲取網頁上對應的dom元素物件
// $('#total').on('click', function () {
//    // 先得到網頁上的數字， 加1後設定回網頁上
//    // 從網頁上得到的文字為字串類型，要先轉為數字類型才能作算術運算
//    total.innerText = Number(total.innerText) + 1;
// });

//$("#total").click(function(event){
$("#total").on('click', function (event) {
   // 在此處total元素物件到相等於 event.target，也相等於 this
   // console.log(event.target === this);
   // console.log(event.target === $("#total")[0]);
   $("#total").text(Number($("#total").text()) + 1);
});


