/*
2번 문제
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 
만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/

var array = [2,1,3,4,1];

sum_solution(array);
function sum_solution(array) {
  
  array.sort(function (a, b) {
    return a - b;
  });

  var new_array = [];
  for(var i=0;i<array.length;i++) {
    if(array)
  }

  console.log(array);

}
