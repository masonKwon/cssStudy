function solution(d, budget) {
    var answer = 0;
    var d = d.sort(function(a, b) { // 오름차순
        return a - b;
    });
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    for(var i=0; i<d.length;i++){
        budget = budget - d[i];
        if(budget < 0) break;
        answer++;
    }
    return answer;
}


//문제1
function solution2(phone_number) {
    // var answer = '';
    //
    // var phone_num = phone_number.slice(-4);
    // var temp = '';
    // for(var i=0; i<phone_number.length-4; i++){
    //     temp += '*';
    // }
    // answer = temp + phone_num;
    //
    //
    // return answer;
    return phone_number.replace(/\d(?=\d{4})/g, "*");

}

//문제2
function solution3(numbers) {
    var answer = [];
    for(var i=0; i<numbers.length; i++) {
        // for(var j=i; j<numbers.length-1; j++){
        //     var sum = numbers[i] + numbers[j+1];
        for(var j=i+1; j<numbers.length; j++){
            var sum = numbers[i] + numbers[j];
            console.log("---------------------");
            console.log("sum1 : ", numbers[i]);
            console.log("sum2 : ", numbers[j]);
            console.log("sum : ", sum);
            answer.push(sum);
        }

    }
    answer = answer.filter((e,i) => {
        return answer.indexOf(e) === i;
    });
    answer.sort(function(a, b) { // 오름차순
        return a - b;
    });
    return answer;
}