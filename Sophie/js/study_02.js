document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    console.log("hi sophie!");
    sophie();
    evenNum();
});

//1~10 을 뿌려주는 for 문 작성
function sophie() { // param은 넘겨주는 값 없으면 없애도 됨
    console.log("My name is sophie and i'am one of Funtion!");
    
    for(var i=0; i < 10; i++){
        console.log("for 문 연습 : ", i+1);
    }
    
}

// 복합대입연산자 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators
/*
var value = 10; 
value += 10; // value = value + 10;
alert(value); // 20

var i =0;
i++; // i = i+1;
i = i+1;
i += 1;
*/

//짝수만 뿌려주는 for 문 작성
function evenNum(){
    
    for(var i=0; i<10; i++){
        // console.log("for 문 짝수 연습 : ", i+2);
        if(i/2 == 0){
            console.log("for 문 짝수 연습 : ", i+2);

        }
    }
}

