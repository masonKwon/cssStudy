/* 1) i,j,k 매개변수를 통해 기존 배열읠 잘라서 새로운 배열에 담는다 */
var array = [1, 5, 2, 6, 3, 7, 4];
var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];    
function calculate() {
    
    let returnArray = [];

    for(let i = 0; i < commands.length; i++){        
        let firsttNum = commands[i][0];
        let secondNum = commands[i][1];
        let sliceIdx = commands[i][2];
        let resultArray = array.slice(firsttNum - 1, secondNum).sort(function(a,b){return a-b;});
        // console.log("commands의" + i + "번째 배열의 요소" + '\n' + firsttNum,secondNum,sliceIdx);
        console.log(
            "commands의 " + (i+1) +" 번째 정리 배열" + '\n' +
            resultArray + '\n' +
            sliceIdx + "번째 추출"
        );
        let addNum =
        // let addNum = resultArray.splice(sliceIdx -1,1).pop();

        // returnArray.push(addNum);
        returnArray.push(resultArray[sliceIdx-1]);
    }
    console.log("최종반환값 = " + returnArray);
    document.querySelector('#resultTxt').innerHTML = returnArray;
}
// array를 자동으로 생성
function makeArray() {
    let numbersArray = [];
    let arraySize = document.querySelector('.arrySize').value; // 입력한 배열의 크기를 가져온다.
    
    
    for(var i = 0; i < arraySize; i++) {                
        numbersArray.push(Math.floor(Math.random() * 100)+11); // numbers 배열의 크기만큼 요소에 숫자 추가
    }
    if( arraySize < 0 ) {
        alert("입력한 값이 없습니다.");
    } else if(arraySize > 0){
        array = numbersArray;
        document.querySelector('#arrayData').innerHTML = "[" + numbersArray + "]"; // 생성된 배열 출력
        document.querySelector('.arrySize').value = "";
    } else {
        console.error("")
    }

    try {
        //logic
    }catch() {
        //error appear logic
    }finally {
        //whatever (success/fail)
    }
}

//Commands를 자동으로 생성
function makeCommands() {
    let = commandsArray = [];
    // let = result = [];
    let randomCommandsSize = Math.floor(Math.random() * 10)+1; // 실제 사용할 것
    commandsArray.length = randomCommandsSize; // 실제 사용할 것
    
    // let randomCommandsSize = 3; // 테스트용
    for(let i = 0; i < randomCommandsSize; i++) {
        commandsArray[i] = [];
        for(let j = 0; j < 3; j++) {                        
            commandsArray[i][j] = [];
            let randomNum = Math.floor(Math.random() * 10) + 1;            // 1~10랜덤생성
            let firstNum = commandsArray[i][0];
            if (j == 1 ) {
                randomNum = Math.floor(Math.random() * (10 - Number(firstNum))) + Number(firstNum);            // 2번째 인자는 첫번째 보다 커야한다
            }
            let secondNum = commandsArray[i][1];
            if (j == 2 ) { // 1,2번째의 차보다 작으면 안된다.
                // commandsArray[i][2] = Math.abs(firstNum - secondNum) + 1;
                let testNum = Math.abs(firstNum - secondNum) + 1;
                randomNum = Math.floor(Math.random() * testNum) + 1 ;
            }
            
            commandsArray[i][j].push(randomNum);
            console.log("["+ commandsArray +"]");
            console.log(commandsArray);             

            // document.querySelector('#commandsArray').innerHTML = "[" + commandsArray + "]"; // 생성된 배열 출력   
        }
        
    }
    commands = commandsArray;
    let commandsTxt = commandsArray.join("],[");
    document.querySelector('#commandsArray').innerHTML = "[" + commandsTxt + "]"; // 생성된 배열 출력   
    document.querySelector('#commandsSize').innerHTML = randomCommandsSize; // 생성된 배열 출력   
    // document.querySelector('#commandsArray').innerHTML = "[" + commandsArray + "]"; // 생성된 배열 출력   
    // document.querySelector('#commandsArray').innerHTML = "[" + commandsArray + "]"; // 생성된 배열 출력   
}


/* 2) 마라톤 참가자 랜덤 생성 */
function makePlayer() {
    let playersArray = [];
    let arraySize = document.querySelector('.arrySize2').value; // 입력한 배열의 크기를 가져온다.
    let playName = "";
    let newPlayerArray = [];
    
    for(let i = 0; i < arraySize; i++) {
        playersArray[i] = [];        
        let nameSize = Math.floor(Math.random() * 5)+1;
        for(let j = 0; j < nameSize; j++) {            
            playersArray[i][j] = [];
            playersArray[i][j].push(String.fromCharCode((Math.random() * 26) +97));
        }
        
        // console.log(playersArray[i]);
        
    }
    let nameArray = "";
    for ( let i = 0; i < playersArray.length; i++ ){
        for ( let j = 0; j < playersArray[i]; j++ ) {
            nameArray = playersArray[i][j].join("");
        }
    }
    let playerTxt = playersArray.join("],[");
    console.log("["+playerTxt+"]");
    console.log(nameArray);
    // let str1 ='';
    // // let str2 ='';
    // for( let i = 0; i < playersArray.length; i++ ) {        
    //     for( let j = 0; j < playersArray[i].length; j++ ) {
    //         // str2 += playersArray[i][j];
    //         console.log(playersArray[i][j]);
    //         // console.log(str);            
    //         // str1 += "["+ str2 +"]";
    //         str1 += playersArray[i][j] + (i == playersArray[i].legnth - 1 ? '' : ",");
    //         // str += playersArray[i][j] + (i == playersArray[].legnth - 1 ? '' : separator);
    //     }
        
        
    // }

    if( arraySize == "" ) {
        alert("입력한 값이 없습니다.");
    } else {
        document.querySelector('#arrayPlayer').innerHTML = "[" + playerTxt + "]"; // 생성된 배열 출력
        // document.querySelector('.arrySize').value = "";
        console.log(playersArray);
    }    
    // console.log(str1);


}

/* 유효성 검사 */
function maxBudget(el) {
    let val = el.value;
    if(val.replace(/[0-9]/g, "").length > 0) {
        alert("array는 숫자만 입력해 주십시오.");
        el.value = "";
    }
    if(val < 10 || val > 100) {
        alert("array는 10~100 범위로 입력해 주십시오.");
        el.value = "";
    }
}