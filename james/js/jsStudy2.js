
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

