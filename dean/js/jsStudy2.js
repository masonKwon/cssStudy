function solution() {
    var phone_number = '12847128746812';

    var numberLength = phone_number.length;
    // var last_str = phone_number.substr(numberLength-1,1);
    var lastNum = phone_number.substring(numberLength-4,numberLength)

    // console.log(last_str);
    

    var star='';

    for (var i=0; i<numberLength-4; i++) {
        star += '*';
    }
    result = star + lastNum;
    console.log("result ", result);
}