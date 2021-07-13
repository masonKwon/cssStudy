/*
2번 문제
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 
만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

                결과
[2,1,3,4,1]    [2,3,4,5,6,7]
[5,0,2,7]      [2,5,7,9,12]

5+0
5+2
5+7
0+2
0+7
2+7
*/


//! 2번 문제
/*
* 제한사항
* numbers의 길이는 2 이상 100 이하입니다.
* numbers의 모든 수는 0 이상 100 이하입니다.

[2,1,3,4,1];
234567
[5,0,2,7,7,7];
257912

2+1, 2+3, 2+4, 2+1
1+3, 1+4, 1+1
3+4, 3+1

6,3
5,2
7,4
*/



sum_solution([2,1,3,4,1]);

function sum_solution(array) {

    if((array.length < 2) || (array.length >= 100)) {
        console.log('배열의 길이가 2개 이상 100 이하입니다.');
        return ;
    }

    for(var i in array) {
        if(array[i] < 0 || array[i] > 100) {
            console.log('모든 수는 0 이상 100 이하입니다.');    
            return ;
        }
    }

    var sum_array = [];
    // 배열을 순회하면서 조건에 맞는 값들만 새로운 배열에 저장
    for (var i = 0; i < array.length; i++) {
        for (var k = 1; k < array.length; k++) {
            if( i != k ) {
                sum_array.push(array[i] + array[k]);    
            }   
        }
    }

    // 새로운 배열을 오름차순 정렬
    sum_array.sort(function (a, b) {
        return a - b;
    });

    // 정렬된 배열에서 중복되는 값을 제거 후 출력
    console.log('sum_array   ', removeDuplication(sum_array));
}

//배열 요소의 중복 제거
function removeDuplication(array) {
    var list = array.filter(function (element, index) {
        return array.indexOf(element) === index;
    });
    return list;
}


//=========================다른 방법 =========================




// solution();
// function solution() {
//     var array = [10, 20, 30, 40];
//     // var array = [5,0,2,7];
    
//     // var result = array.map(function(element) {
//     //     return element * 2;
//     // });

//     var sum = 0;
//     var result = array.map(function(element, index, list) {
//         return element*list[index];

//     });
    
//     console.log('result   ', result);
