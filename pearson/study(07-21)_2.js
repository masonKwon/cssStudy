//13458214595
function result() {
    var left='*';
    var right='#';
    var number=document.getElementById("input").value;
    var hand=document.getElementById("hand").value;
    var answer=[];
    //keypad 위치 별 좌표
    var mapping={
    '1': [0, 0], '2': [0, 1], '3': [0, 2],
    '4': [1, 0], '5': [1, 1], '6': [1, 2],
    '7': [2, 0], '8': [2, 1], '9': [2, 2],
    '*': [3, 0], '0': [3, 1], '#': [3, 2]
    };
    for(var i=0; i<number.length;i++){
        if(number[i]==1||number[i]==4||number[i]==7) {
            answer.push('L');
            left=number[i];
            console.log(answer);
        }
        else if (number[i] == 3 || number[i] == 6 || number[i] == 9) {
            answer.push('R');
            right = number[i];
            console.log(answer);
        }

        else{
            var leftDistance=distance(left,number[i],mapping);
            var rightDistance=distance(right,number[i],mapping);
            var nextHand=choose(leftDistance,rightDistance,hand);
            if(nextHand=='L'){
                left=number[i];
            }
            else if(nextHand=='R'){
                right=number[i]
            }
            else{
                console.error("");
            }
            answer.push(nextHand);
        }
    }

    document.getElementById("output").value = answer;
}

//현재 손과 목표와의 거리
function distance(now,target,mapping){
    var targetPosition=mapping[target];
    var nowPosition=mapping[now];
    console.log(targetPosition);
    return Math.abs(targetPosition[0]-nowPosition[0])+Math.abs(targetPosition[1]-nowPosition[1]);
}

//가운데 줄 키페드(2,5,8,0)일 경우 사용 손
function choose(leftDistance,rightDistance,hand){
    if(leftDistance>rightDistance){
        return 'R';
    }
    else if(leftDistance<rightDistance){
        return 'L';
    }
    else if(leftDistance==rightDistance){
        if(hand=='R'){
            return 'R';
        }

        else if(hand=='L'){
            return 'L'
        }

        else{
            console.error("");
        }
    }
}