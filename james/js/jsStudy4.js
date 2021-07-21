

//[2,3,5,6]
//[6]
//[1,2,3,4,5,6,7]

window.onload = function(){  
  solution([[2, 5, 3], [4, 4, 1], [1, 7, 3]]);
  marathon(["leo", "kiki", "eden"], ["eden", "kiki"]);
};

//! 4번문제: 마라톤
function marathon(participant_array, completion_array){
  var player = [];
  participant_array.filter(function(element, index, arr) {
    // console.log(completion_array.includes(element));
    if(!completion_array.includes(element)) {
      // console.log(element);      
      player.push(element);
    }    
  });
  return console.log(player);
}

//! 3번문제
function solution(array) {
  
  var result_array = [];

  //파라미터로 받은 배열의 길이만큼 반복
  for(var index in array) {
    result_array.push(getArrayTransform(array[index])); 
  }
  console.log('return array', result_array);
  
}

function getArrayTransform(commands) {
  var default_array = [1, 5, 2, 6, 3, 7, 4];
  
  //default 배열에서 commands 배열의 [0]~[1]번째 인덱스 길이만큼 잘라냄: [0]-1 => 문제에서 배열을 자르는 시작점은 1부터
  var modified_array = default_array.slice(commands[0]-1, commands[1]);

  // 잘라낸 배열 정렬
  modified_array.sort(function (a, b) {
    return  a - b;
  });

  var value;
  // commands 배열의 [2]번째 인덱스 값, 잘라낸 배열의 index+1(문제의 시작점은 1번째부터)
  modified_array.find(function (element, index, arr) {
    if(index+1 === commands[2]) {
      console.log(index+1 + '번째 숫자는  ' + element); // [2,3,5,6]  
      return value = element;
    }    
  });

  return value;
}




