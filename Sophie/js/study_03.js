document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    solution1();
    solution2();
    solution3();
    solution4();
    solution5();
    solution6();
    solution7();
    solution8();
    solution9();
    solution10();
    solution11();
    solution12();
    solution13();
    solution14();
    solution15();
    solution16();
   
});

// 문제1 (참고: push) 입력받은 배열의 마지막에 "banana" 를 추가 후 반환하세요.

function solution1 () {  

    console.log("문제1 (참고: push) 입력받은 배열의 마지막에 banana 를 추가 후 반환하세요.");

    var arrEnd = ["apple", "melon", "pear", "peach"];
    arrEnd.push('banana');
    console.log(arrEnd); 
}

/*
input:  ["apple", "melon", "pear", "peach"]
output: ["apple", "melon", "pear", "peach", "banana"]
*///==================================================================


// 문제2 (참고: unshift) 입력 받은 배열의 처음에 "banana" 를 추가 후 반환하세요.

function solution2 () {

    console.log("문제2 (참고: unshift) 입력 받은 배열의 처음에 banana 를 추가 후 반환하세요.");

    var arrFirst = ["apply", "pie", "fig", "melon", "pear", "peach"];
    arrFirst.unshift('banana');
    console.log(arrFirst); 
}
//console.log(solution2()); // 질문: 함수는 함수 밖에서 실행하는것 아닌가요.. ?바깥에서 실행하면 왜 안나올까요..?

/*
input:  ["apply", "pie", "fig", "melon", "pear", "peach"]
output: ["banana", "apply", "pie", "fig", "melon", "pear", "peach"]
*///==================================================================


// 문제3 입력 받은 배열의 길이를 출력하세요 (출력 => 참고: console.log)

function solution3 () {

    console.log("문제3 입력 받은 배열의 길이를 출력하세요 ");

    var value = ["apply", "pie", "fig", "melon", "pear", "peach"];
    console.log(value.length);
}

/*
input:  ["apply", "pie", "fig", "melon", "pear", "peach"]
output: 6
*///==================================================================


// 문제4 (참고: forEach, some, for - 자바스크립트 순수 for 구문) 입력 받은 배열의 순번과 값을 모두 출력하세요 

function solution4 (inputValue) {

    console.log("문제4 (참고: 자바스크립트 순수 for 구문) 입력 받은 배열의 순번과 값을 모두 출력하세요");
    var value = ["apply", "pie", "fig", "melon", "pear", "peach"];

        for (var i = 0; i < value.length ; i ++){
            console.log(value[i] + ' '+ i);
        }

    
}

/*
input:  ["apply", "pie", "fig", "melon", "pear", "peach"]
output: 
	apply 0
	pie 1
	fig 2
	melon 3
	pear 4
	peach 5
*///==================================================================


// 문제5 (참고: pop) 입력 받은 배열의 마지막 값을 제거(삭제) 후 반환하세요

function solution5 () {

    console.log("문제5 (참고: pop) 입력 받은 배열의 마지막 값(peach)을 제거(삭제) 후 반환하세요");
	
    var deletePeach = ["apply", "pie", "fig", "melon", "pear", "peach"];
    deletePeach.pop();

    console.log(deletePeach);

}

/*
input:  ["apply", "pie", "fig", "melon", "pear", "peach"]
output: ["apply", "pie", "fig", "melon", "pear"]
*///==================================================================


// 문제6 (참고: shift) 입력 받은 배열의 첫번째 값을 제거(삭제) 후 반환하세요

function solution6 (inputValue) {

    console.log("문제6 (참고: shift) 입력 받은 배열의 첫번째 값(apply을 제거(삭제) 후 반환하세요");

    var value = ["apply", "pie", "fig", "melon", "pear", "peach"];
    value.shift();

    console.log(value);

}

/*
input:  ["apply", "pie", "fig", "melon", "pear", "peach"]
output: ["pie", "fig", "melon", "pear", "peach"]
*///==================================================================


// 문제7 (참고: indexOf) 입력 받은 배열에서 melon 의 순번(index) 를 출력하세요

function solution7 () {

    console.log("문제7 (참고: indexOf) 입력 받은 배열에서 melon 의 순번(index) 를 출력하세요");

    var value = ["apply", "pie", "fig", "melon", "pear", "peach"];
    var indexvalue = value.indexOf('melon');

    //함수 실행
    console.log(indexvalue);
}

/*
input:  ["apply", "pie", "fig", "melon", "pear", "peach"]
output: 3
*///==================================================================


// 문제8 (참고: indexOf, splice) 입력 받은 배열에서 "pear" 를 제거(삭제) 후 반환하세요

function solution8 () {

    console.log("문제8 (참고: indexOf, splice) 입력 받은 배열에서 pear 를 제거(삭제) 후 반환하세요");

    var value = ["apply", "pie", "fig", "melon", "pear", "peach"];
    var indexvalue = value.indexOf('pear');
    var spliceValue = value.splice(indexvalue, 1);

    console.log(spliceValue);

}

/*
input:  ["apply", "pie", "fig", "melon", "peach"]
output: 
	apply 0
	pie 1
*///==================================================================


// 문제9 (참고: slice) 입력 받은 배열의 복사본을 반환하세요

function solution9 () {

    console.log("문제9 (참고: slice) 입력 받은 배열의 복사본을 반환하세요");

    var value = ["apply", "pie", "fig", "melon", "pear", "peach"];
    console.log(value.slice());

}

/*
input:  ["apply", "pie", "fig", "melon", "peach"]
output: false
*///==================================================================


// 문제10 (참고: filter) 입력 받은 배열에서 문자열 길이 4개 이상인 값을 반환하세요

function solution10 (inputValue) {

    console.log("문제10 (참고: filter) 입력 받은 배열에서 문자열 길이 4개 이상인 값을 반환하세요");

    var value = ["apply", "pie", "fig", "melon", "pear", "peach"];
    var length_4 = value.filter(value => value.length >= 4);
    // var length_4 = value.filter(value.length >= 4); 왜 이렇게 쓰면 안되는 걸까요 ㅠㅠ
    console.log(length_4);
	
}

/*
input:  ["apply", "pie", "fig", "melon", "peach"]
output: ["apply", "melon", "peach"]
*///==================================================================


// 문제11 (참고: concat) 입력 받은 2개의 배열을 합쳐서 반환하세요

function solution11 () {

    console.log("문제11 (참고: concat) 입력 받은 2개의 배열을 합쳐서 반환하세요");

	var value1 = ["apply", "pie", "fig"];
    var value2 = ["melon", "pear", "peach"];
    value = value1.concat(value2);

    console.log(value);
}

/*
input:  ["apply", "pie", "fig"], ["melon", "pear", "peach"]
output: ["apply", "pie", "fig", "melon", "pear", "peach"]
*///==================================================================


// 문제12 (참고: join) 입력 받은 배열 요소에 연결문자("-") 추가 후 출력하세요.

function solution12 () {

	console.log("문제12 (참고: join) 입력 받은 배열 요소에 연결문자 -를 추가 후 출력하세요.");

    var value = ["apply", "pie", "fig", "melon", "pear", "peach"];;
	
    console.log(value.join('-'));
}

/*
input:  ["apply", "pie", "fig", "melon", "pear", "peach"]
output: "apply-pie-fig-melon-pear-peach"
*///==================================================================


// 문제13 (참고: map) 입력 받은 배열 값을 2배 증가시켜서 반환하세요.
// ?? https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function solution13 () {

    console.log("문제13 (참고: map) 입력 받은 배열 값을 2배 증가시켜서 반환하세요.");

    var value = [2, 5, 10, 15, 20, 22, 30, 60];
    var multiple_2 = value.map(x => x * 2); 
    //var multiple_2 = value.map(..?* 2); 
	console.log(multiple_2);
}

/*
input:  [2, 5, 10, 15, 20, 22, 30, 60]
output: [4, 10, 20, 30, 40, 44, 60, 120]
*///==================================================================


/***
문제14 (참고: reduce) 2개의 값을 전달 받아(2개의 인자) 그 수의 합을 반환하세요.
1번째 값(1번째 인자) 는 배열
2번째 값(2번째 인자) 는 숫자
***/

function solution14 () { // 문제가 이해가 잘... 

    console.log("문제14 (참고: reduce) 2개의 값을 전달 받아(2개의 인자) 그 수의 합을 반환하세요.");

    var value1 = [1,2,3,4,5,6,7,8,9,10];
    var numberValue = 50;

    console.log(value1 + numberValue);

}

/*
input:  [1,2,3,4,5,6,7,8,9,10], 50
output: 105
*///==================================================================

//문제15 (참고: reverse) 입력받은 배열을 역순으로 정렬 후 반환하세요.

function solution15 (inputValue) {

    console.log("문제15 (참고: reverse) 입력받은 배열을 역순으로 정렬 후 반환하세요.");

	var value1 = [1,2,3,4,5];
    value1.reverse();

    console.log(value1);

}

/*
input:  [1,2,3,4,5]
output: [5,4,3,2,1]
*///==================================================================


// 문제16 (참고: sort) 입력받은 배열을 오름차순으로 정렬 후 반환하세요.


function solution16 (inputValue) {

    console.log("문제16 (참고: sort) 입력받은 배열을 오름차순으로 정렬 후 반환하세요.");

    var value1 = [10,5,3,7,1];
    value1.sort(function(a, b){
        return a - b;
    });

	console.log(value1);

}

/*
input:  [10,5,3,7,1]
output: [1,3,5,7,10]
*/
