
var phone_number = "015678111111";
console.log('['+ solution(phone_number) +']'  +  '의 전화번호');

function solution(phone_number) {

  if(phone_number.length <=4 || phone_number.length >=20) {
    alert('4이상의 수 또는 20이하의 수를 입력해 주세요');
  }

  console.log(typeof phone_number);
  console.log(phone_number.length);
  
  var hidden_number_length = parseInt(phone_number.length) - 4;
  console.log(hidden_number_length);
  console.log(phone_number.substring(hidden_number_length ,phone_number.length));
  
  var star = '';
  for(var i=0; i<hidden_number_length; i++ ) {
    star = '*' + star;
    
  }
  console.log(star);
  
  return star+phone_number.substring(hidden_number_length ,phone_number.length);
}

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
    // if(array)
  }

  console.log(array);

}

/*
1,1,2,3,4

1+1
2+1
3+1
4+1

2+1
2+3
4+1


*/