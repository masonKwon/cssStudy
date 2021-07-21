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

function arraySum() {
    // var arr = [2,1,3,4,1];
    var arr = [5,0,2,7];
    var result = [];
   
    for(var i=0; i<arr.length; i++) {
        for(var j=i+1; j<arr.length; j++) {
            var sumArr = arr[i] + arr[j];
            result.push(sumArr);
        }
    }
    result.sort(function(a, b) {
        return a - b ;
    });

    var result = result.filter(function (x,idx) {
        return result.indexOf(x) === idx;
    });


    console.log("result : ",result);
}

function sortSelect() {
    var originArr = [1, 5, 2, 6, 3, 7, 4];
    var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
    var copyArr = [];
    var resultArr = [];   
    
    for(var i=0; i<commands.length; i++) {
        copyArr = originArr.slice(commands[i][0]-1,commands[i][1]);
        
        copyArr.sort(function(a, b) {
            return a - b ;
        });
        resultArr.push(copyArr[commands[i][2]-1]);

        console.log("copyArr : ",copyArr);
    }
    console.log("resultArr : ",resultArr);
    
}

function marathon() {
    var marathonParticipant = ["leo", "kiki", "eden"];
    var marathonFinisher = ["eden", "kiki"];

    // var differ = marathonParticipant.filter(x => !marathonFinisher.includes(x));

    var loser = marathonParticipant.filter(function (x) {
        return !marathonFinisher.includes(x);
      });
    console.log("loser : ",loser );
}