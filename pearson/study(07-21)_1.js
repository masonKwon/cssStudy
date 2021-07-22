function start(){
    var input = document.getElementById("input").value;
    var numOfInput=input.length;
    var phoneketmon=[];
    var answer;
    phoneketmon=makeArray(input,numOfInput);
    console.log(phoneketmon)
    answer=result(phoneketmon);
    console.log(answer);
    document.getElementById("output").value= answer;
}

function makeArray(input,numOfInput){
    var arr=[];
    for(var i=0;i<numOfInput;i++){
        value=input[i];
        arr.push(value);
    }
    return arr;
}

function result(array) {
    var withoutSamePhoneketmon = [...new Set(array)];
    console.log("withoutSamePhoneketmon="+withoutSamePhoneketmon)
    var numOfPhoneketmon=withoutSamePhoneketmon.length;
    console.log("numOfPhoneketmon="+numOfPhoneketmon);
    var limits=array.length /2;
    console.log("limits="+limits);

    if(numOfPhoneketmon>limits){
        return limits;
    }
    
    else{
        return numOfPhoneketmon;
    }
}