
/* 1) 전화번호 뒷자리 4개만 숫자로 반환하기 */
function calculate() {
    
    let numberStr = document.querySelector('.text_value').value;
    // let numberIdx = numberStr.length;
    let text = numberStr.slice(-4);
    let regex = /[0-9]/g;
    let printTxt = numberStr.replace(regex,"*");
    let result = printTxt.substr(4) + text;
    console.log(text,printTxt,result);

}


/* 2) 배열의 합이 중복되지 않게 오름차순으로 반환 */

var numbersArray = []; // numbers 배열 생성 : ?? 함수간 변수 통신방법이 따로 있는지? 몰라서 전역으로 변수 사용

function arrayInput() {
    let arraySort = numbersArray; // 자동 생성된 배열을 가져온다.
    let resultArray = [];

    for( let i = 0; i < arraySort.length; i++ ) { // : ?? forEach 안되나요??
        for( let j = i+1; j < arraySort.length; j++) {
            if( !(j==i)) { // 같은 인덱스는 제외 : ?? 이 방법이 맞는지?
                resultArray.push( arraySort[i] + arraySort[j] ); // 새로운 배열에 더한값을 추가
            }
        }
    }
    let set = new Set(resultArray); // 배열을 객체로 만든 후 중복제거
    let finalData = [...set]; // 객체럴 다시 배열로 변환 : ...전개연산자
    // console.log(finalData.sort(function(a,b){return a-b;}));
    let finalArray = finalData.sort(function(a,b){return a-b;}); // 오름차순으로 정렬된 값을 할당
    document.querySelector('.resultTxt').value = finalArray;

}
[1,2,3,4,5]

// 함수를 자동으로 생성
function addArraySize() {
    numbersArray = [];
    let arraySize = document.querySelector('.arrySize').value; // 입력한 배열의 크기를 가져온다.

    for(var i = 0; i < arraySize; i++) {
        let randomNum = Math.floor(Math.random() * 101); // 0~100 이하의 정수 랜덤으로 생성
        numbersArray.push(randomNum); // numbers 배열의 크기만큼 요소에 숫자 추가
    }
    document.querySelector('.numbers').innerHTML = numbersArray; // 생성된 배열 출력
    document.querySelector('.arrySize').value = "";
    // console.log(numbersArray);
    // return numbersArray;
    numbersArray = [5,0,2,7];

}

/* 유효성 검사 */
function maxBudget(el) {
    let val = el.value;
    if(val.replace(/[0-9]/g, "").length > 0) {
        alert("numbers는 숫자만 입력해 주십시오.");
        el.value = "";
    }
    if(val < 2 || val > 100) {
        alert("numbers는 2~100 범위로 입력해 주십시오.");
        el.value = "";
    }
}