// 1. 숫자와 문자
//alert(값); 브라우저에서 제공하는 Dialog 띄우는것(확인버튼 안누르면 다음동작 실행 못함)
//console.log(값); 브라우저 개발자 도구 Console 영역에 찍히게 하는 명령어
    //1-1. 숫자
    alert(1);
    console.log(1); //숫자
    console.log(1+1); // 숫자 더하기
    console.log(2*2); // 숫자 곱하기, 숫자와 곱하기 사이에 스페이스 넣어도 됨 (2 * 2)
    console.log(4/2); // 숫자 나누기

    // 여기서부터는 개발자 도구 콘솔창에 바로 입력함
    Math.pow(3,2); // 9, 3의 2승 .. 쓸일이 있을까..
    Math.round(10.6); // 11, 10.6을 반올림 
    Math.ceil(10.2); // 11, 10.2를 올림
    Math.ceil(10.6); // 10, 10.6을 버림
    Math.sqrt(9); //3, 3의 제곱근
    Math.random(); // 0 부터 1 사이 랜덤한 숫자를 실수로 표현
    100*Math.random(); // 100보다 작은 실수
    // 섞어서 이렇게 써도 됨
    Math.round(100*Math.random()); // 소숫점이 반올림되어 정수처럼 나옴

    //1-2. 문자
    console.log('1은 문자'); //문자, '' or ""
    //작은따옴표 사이에 작은따옴표를 넣고 싶을때 \ 사용: escape
    console.log('sophie\'s homework'); 
    typeof 1; //typeof 값 : 데이터 형식을 알려줌
    typeof "1"; //string
    console.log("첫번째 줄\n두번째줄"); // \n 은 줄바꿈 
    console.log("1" + "1"); // 11, 문자열을 더하기
    console.log("Hello".length); //5,  문자의 길이 구하기
    console.log("code".indexOf("c"));//0, c는 문자열의 0번째 값



//2. 변수(Variable)
//문자, 숫자와 같이 값을 담는 컨테이너. 값을 유지할 필요가 있을 때 사용
//담겨진 값은 다른 값으로 바꿀 수 있음. 대명사 같은 역할
    var a = 1; // a 라는 이름을 가진 변수에 1을 담음. var는 처음 선언 이후 생략 가능
    var b = 2;
    alert(a+b); // alert 로 3이 출력됨
    var irm = '회사';
    alert('우리' + irm);
    var a='사과', b=2, c='개';
    alert(a+b+c);

// 변수는 왜 쓸까? 코드의 재활용성을 높이기 위해



//3. 주석 타인이 이해할 수 있도록 간결하게 표기
// 한줄 주석
/* 여러줄 주석
여러줄 주석*/



//4. 줄바꿈과 여백
//; 세미콜론: 명령이 끝났다는 명시적 표시. 
// var a=1; 이라고 써도 되고 var a = 1; 여백을 주어도 된다.



//5. 비교
//연산자: 어떤 작업을 컴퓨터에게 지시하기위한 기호 
// a=1; 예) a: 변수, 1: 값(상수), = : 대입 연산자

//비교연산자: 좌항과 우항 비교
//비교연산자의 결과: true, false --> boolean

//http://dorey.github.io/JavaScript-Equality-Table/ 
//== 동등연산자(eual operator): 좌항과 우항을 비교해서 값이 같다면 true, 다르다면 false
    alert(1==2); //false
    alert(1==1); // true
    alert('one'=='two'); //false
    alert('one'=='one'); // true

//=== 일치연산자(strict equal operator): 값 뿐만아니라 데이터의 형식까지 같은지 다른지 비교하는 연산자
    alert(1 === '1'); //false: 데이터의 형식이 다르므로 거짓
    alert(1=='1'); //true: 데이터의 형식과 관계 없이 좌항과 우항의 값이 동일

// 동등연산자, 일치연산자 더알아보기
//null: 값이 없다. undefined: 값이 정의되지 않았다.
    var a;
    alert(a); // undefined
    var b = null;
    alert(b); // null
    alert( undefined === null); //false
    alert( undefined == null); //true

//데이터의 타입
//Boolean true, false
//Number -1, 0, 1
//String "a", 'b'
//undefined
//null
//true==1  자바스크립트에서 동등연산자는 숫자 1을 true 로 간주하고, 숫자 1이 아니면 false로 간주한다.
    alert(true == 1);               //true
    alert(true === 1);              //false

    alert(true == '1');             //true
    alert(true === '1');            //false

    alert(0 === -0);                //true
    alert(NaN === NaN);             //false NaN은 숫자가 아니므로

//!= 부정
    alert(1!=2);            //true
    alert(1!=1);            //false
    alert("one"!="two");    //true
    alert("one"!="one");    //false
//!== strict 부정

//부등호
    alert(10>20);   //false
    alert(10>1);    //true
    alert(10>10);   //false

    alert(10>=20);      //false
    alert(10>=1);       //true
    alert(10>=10);      //true



//6. 조건문(conditional statement)
// 주어진 조건에 따라 애플리케이션을 다르게 동작시키기 위해 사용

    //if : (괄호)자리에 true가 와야만 조건문 안에 있는 구문이 실행됨
        if(true) { 
            alert('result : true');
        }

    //else : if 가 flase 라서 실행되지 않으면 else 가 실행됨
    //if 가 ture 이면, else 가 실행되지 않음
        if(false) {
            alert('true');
        }else {
            allert('else');
        }

    //else if : 앞쪽의 구문이 실행되지 않았을 때, 실해되는 구문
        if(false){
            alert(1);
        } else if(true){
            alert(2);
        } else if(true){
            alert(3);
        } else {
            alert(4);
        }
        // 정답: 2만 출력됨

        if(false){
            alert(1);
        } else if(false){
            alert(2);
        } else if(false){
            alert(3);
        } else {
            alert(4);
        }
        //정답: 4만 출력됨

    //조건문 응용
        var a = 1;
        if(a==1) {
            alert(true);
        }
    
    //prompt: 사용자로부터 어떤 값을 받을 수 있는 기능
    //콘솔창에 prompt('당신의 이름은?')
    //alert(prompt('당신의 이름은?')) 최종결과: 입력한 이름의 값

        // 예제1)
        
        var id = prompt('아이디를 입력해주세요.');
        if(id=='egoing'){
            var password = prompt('비밀번호를 입력해주세요.');
            if(password==='111111'){
                alert('로그인 성공' + id +'반값습니다.');
            } else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        } else {
            alert('아이디가 일치하지 않습니다.');
        }
        
    //논리연산자 

    //&& : and , 좌항과 우항이 모두 참이어야 전체가 참이되는 연산자
        // 예제2)

        var id = prompt('아이디를 입력해주세요.');
        var password = prompt('비밀번호를 입력해주세요.');
        if(id =='egoing' && password ==='111111'){
            alert('로그인 성공' + id +'님 반값습니다.');
        } else {
            alert('인증실패, 다시 로그인 해주세요');
        }

    //|| : or , 좌항과 우항 중 하나라도 참이면 참이되는 연산자

        // 예제 3)

        var id = prompt('아이디를 입력해주세요.');
        var password = prompt('비밀번호를 입력해주세요.');
        if((id==='egoing' || id==='k8805' || id==='sorialgi') && password==='111111'){
            alert('인증 했습니다.');
        } else {
            alert('인증에 실패 했습니다.');
        }

    // ! : 부정
    // !true == false  !false == true

    //Boolean 의 대체제
    // 숫자 1 : 자바스크립트에서 true 로 간주됨
    // 자바스크립트에서 false 로 간주됨
    /*
        if(!''){
    alert('빈 문자열')
    }
    if(!undefined){
        alert('undefined');
    }
    var a;
    if(!a){
        alert('값이 할당되지 않은 변수'); 
    }
    if(!null){
        alert('null');
    }
    if(!NaN){
        alert('NaN');
    }
    */

//7. 반복문(loop / iterate)

/* while(Boolean 조건){
     반복해서 실행할 코드
} */

//반복문 무한 루프
while(true){
    document.write('coding everybody <br /');
}

//반복문의 조건: 반복문 중단시키기

var i = 0; // 변수 초기화
while(i < 5){ // 반복 조건
    document.write("coding everybody" + i);
    i = i + 1; // 반복 실행
}


/* for(초기화; 반복조건; 반복 될 때마다 실행되는 코드){
    반복해서 실행될 코드
}
*/

for(var i = 0; i < 5; i++){
    document.write("Hello " + i);
}

for(var i = 0; i < 5; i = i + 1){
    console.log("Hello " + (i+1));
}

// ++i 와 i++ 의 차이
// var i = 0;
// alert(++i); //i 를 증가 시킨 후 alert 실행. 값: 1
// alert(i++); // 기존값 사용 후 alert 실행 후 1이 증가. 값: 0


//반복문의 제어

for(var i = 0; i < 5; i++){
    if(i===3) {
        break; // 조건에 다다르는 순간 반복문 종료
    }
    console.log(i);
}

for(var i = 0; i < 5; i++){
    if(i===3) {
        continue; // 조건에 다다르는 순간만 반복문을 중지 했다가 다시 반복문으로 돌아감
    }
    console.log(i);
}

// 중첩사용과 디버거

for(var i = 0; i < 10; i++){
    for(var j= 0; j < 10; j++){
        console.log('Hi' + i + j + '<br />') // i, j 가 'Hi' 문자와 만나서 문자열이 됨
    }
    
}
// 개발자 도구 > source > 코드 실행 라인 클릭 (파란 화살표), 오른쪽 화살 표(브레이크 포인트)를 이용해서 코드를 한줄씩 실행해 볼 수 있음



//8. 함수(function) : 하나의 로직을 재실행 할 수 있도록 하는 것. 코드의 재사용성을 높여줌

/* 함수의 형식
function 함수이름([인자...[,인자]]){
    코드
    return 반환값;
}
*/

// 함수 정의
function numbering() {
    console.log(1);
}
numbering(); // 함수 호출

function numbering() {
    var i = 0;
    while (i < 10){
        console.log(i);
        i += 1;
    }
}
numbering();

// 함수의 입력과 출력

// 출력 return : return 이 등장하면 해당 함수를 종료시키고, return 뒤의 값을 반환함.
function member1() {
    return 'samuel';
}
function member2() {
    return 'hoffman';
}
alert(member1());
alert(member2());

// 입력 인자(argument): 함수로 입력되는 입력 값. 전달하는 인자에 따라 함수가 반환하는 값이나 메소드의 동작방법을 다르게 할 수 있다.
function get_argument(arg){ // arg: 매개변수(prameter) 
    return arg; // 값 1을 리턴함
}
alert(get_argument(1)); // arg 매개변수에 인자 1을 담음
alert(get_argument(2));

// 복수의 인자 (인자 여러개)
function get_arguments(arg1, arg2){
    return arg1 + arg2
}
 
alert(get_arguments(10, 20)); // 값: 30

// 함수를 정의하는 다른 방법
    //변수에 함수 담기
    var numbering = function (){
        i = 0;
        while(i < 10){
            document.write(i);
            i += 1;
        }   
    }
    numbering();

    // 함수 정의 후 바로 호출 : 익명함수, 이름이 없고, 1회성으로 호출할 때 사용
    (function (){
        i = 0;
        while(i < 10){
            document.write(i);
            i += 1;
        }   
    })();



//9. 배열(array): 연관된 데이터를 모아서 통으로 관리하기 위해 사용하는 데이터 타입. 데이터들을 담는 그릇
// 변수가 하나의 데이터를 저장하기 위한것이라면, 배열은 여러개의 데이터를 하나의 변수에 저장하기 위한 것.


// 배열 만들기
var member = ['sam', 'hoff', 'sun'] // sam: 원소, sam 의 식별자(색인=index) 0
// 원소: 배열에 담긴 각각의 값. 원소는 각가 고유한 식별자를 갖는다. 


// 배열에 담긴 값 불러오기
//alert(배열을 담은 변수(불러오고 싶은 값의 인덱스));
alert(member[1]); // hoff 반환


// 함수는 입력값을 여러개 받을 수 있지만 출력값을 1개만 리턴할 수 있음
// 이때, 배열을 쓴다면
function get_members() {
    return ['mason', 'dean', 'james'];
}
var members = get_members();
console.log(members[0]);


//배열과 반복문
function get_members() {
    return ['mason', 'dean', 'james'];
}
var members = get_members();
console.log(members[0]);

// 화면에 대문자로 출력하려면?
// 변수명.toUpperCase(); // 소문자를 대문자로 바꿔주는 내장 함수
console.log(members[0].toUpperCase());

// 배열안에 값(원소)이 몇개 인지 출력하려면?
// 변수명.length
var arr = [1, 2, 3, 4, 5];
alert(arr.length);

    // 배열과 반복문 예제 
    function get_members(){
        return ['sophie', 'nick', 'heather'];
    }
    var members = get_members();
    // members.length는 배열에 담긴 값의 숫자를 알려준다. 
    for(i = 0; i < members.length; i++){
        // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
        console.log(members[i].toUpperCase());   
    }


// 배열의 제어
    // 맨뒤에 추가
    // push : 값을 한개만 추가 할 수 있음
    var li = ['a', 'b', 'c', 'd', 'e'];
    li.push('f');
    alert(li); // a, b, c, d, e, f

    //concat : 배열 뒤에 배열을 추가할 수 있음
    var li = ['a', 'b', 'c', 'd', 'e'];
    li = li.concat(['f', 'g']);
    alert(li); //a, b, c, d, e, f, g

    // 맨앞에 추가
    // unshift
    var li = ['a', 'b', 'c', 'd', 'e'];
    li = li.unshift('z');
    alert(li); // z, a, b, c, d, e

    // 중간에 추가
    // splice : 특정 구간을 찾아서 특정 구간에 추가
    // array.splice(index, howmany, element1, ..., elementN);
    // index: 배열에 추가할 특정 배열의 위치, 데이터형 number
    // howmany: index에서 부터 제거될 원소들의 수. 이 값이 0이면 어떤 원소도 삭제되지 않음. 데이터형 number
    // element: index와 howmany 사이에 추가될 값
    var li = ['a', 'b', 'c', 'd', 'e'];
    li.splice(2, 0, 'B');
    alert(li); // a, b, B, c, d, e

    var li = ['a', 'b', 'c'];
    li.splice(1, 1, 'x', 'y');
    alert(li); // a, x, y, c

    // 첫번째 원소 제거
    var li = ['a', 'b', 'c', 'd', 'e'];
    li.shift(); // a : 삭제된 값 반환
    alert(li); // b, c, d, e

    // 맨 끝 원소 제거 
    var li = ['a', 'b', 'c', 'd', 'e'];
    li.pop();
    alert(li);

    // 정렬
    var li = ['c', 'e', 'a', 'b', 'd'];
    li.sort(); // a, b, c, d, e
    alert(li); // a, b, c, d, e

    // 역순 정렬
    var li = ['c', 'e', 'a', 'b', 'd'];
    li.reverse();
    alert(li); // e, d, c, b, a

    // sortfunc 이런거는 생활코딩 문서 찾아보기
    // 생활코딩 > 클라이언트 > JavaScript > JavaScript사전
