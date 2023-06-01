// 獲得dom元素物件
const yearAndMonth = document.getElementById('yearAndMonth');
const data = document.getElementById('data');

// 陣列分塊(chunk)
// ex. chunk(["a", "b", "c", "d"], 2) => [["a","b"],["c","d"]]
// https://stackoverflow.com/questions/40682103/splitting-an-array-up-into-chunks-of-a-given-size
function chunk(arr, size) {
    let myArray = [];
    for (let i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i + size));
    }
    return myArray;
}

// 檢查
//console.log(yearAndMonth, data);

// 定義目前的年月(一定要用數字類型，代表要呈現的年與月)
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; //注意月份回傳為 0~11 數字
const today = now.getDate();

console.log(year, month, today);

// 呈現
yearAndMonth.innerText = ` ${year}年${month}月`

// firstDay這個月的第一天是星期幾，索引值0~6，星期日為0
const firstDay = new Date(`${year}/${month}/1`).getDay();

// days這個月有幾天
// 注意公式需要代入數字類型
const days = new Date(year, month, 0).getDate();
//console.log(firstDay, days);

//------ 以下開始產生資料陣列 

// 最前面塞入空白字串的陣列
const emptyData = Array(firstDay).fill('');

// 有值的陣列1 ~ days
// 如何建立一個陣列包含1...N數字
// https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
const valueData = Array(days).fill('').map((v, i) => i + 1);

// 合併兩陣列為一長陣列，並先加入<td>xxxx</td>標記
const allData = [...emptyData, ...valueData].map((v) => {
    // 加入 data-date 屬性用
    const datasetValue = v ? `${year}/${month}/${v}` : '';
    // 加入 class 屬性用
    const classValue = (v === today) ? 'today' : '';

    return `<td data-date="${datasetValue}" class="${classValue}">${v}</td>`

});

//------ 以下準備呈現在網頁上
const allDataChunks = chunk(allData, 7);
// console.log(allData, allDataChunks);
const display = allDataChunks.map(v => `<tr>${v.join("")}</tr>`).join("");

// 呈現在網頁上
data.innerHTML = display;

// js處理事件方式
// const elements = document.getElementsByTagName('td');
// console.log(document.getElementsByTagName('td'));

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        console.log(this.dataset.date);

        // 移除所有的背景顏色
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = '';
        }

        // 加入目前的背景顏色
        this.style.backgroundColor = 'red';
    })
}

// 用jQuery處理事件方式
$('td').on('click', function(){
   console.log($(this).data('date'));

   $('td').css('background-color',"");
   $(this).css('background-color',"red");
})