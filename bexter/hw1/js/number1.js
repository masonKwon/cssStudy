/*function createArray() {
    let arr = new Array(Math.floor((Math.random()*99)+1));

    // push random number into array
    for(var i = 0; i < arr.length; i++) {
        arr.push(Math.floor((Math.random()*99)+1));
    }

    return arr;
}*/

/*function createCommand() {
    let arr = new Array(Math.floor((Math.random()*49)+1));

    // create 2D array
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(3);

        arr[i][0].push(Math.floor((Math.random()*49)+1));
        arr[i][1].push(Math.floor((Math.random()*(50-arr[i][0]))+arr[i][0]));
        arr[i][2].push(Math.floor((Math.random()*())));

    }

    return arr;
}*/

function slice_sort_find() {
    let arr = [1, 5, 2, 6, 3, 7, 4]; //arguments[0];
      let cmd = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]; //arguments[1];

      var result = null;
      let newArr = new Array();
      let resultArray = new Array();

      // the number of [i, j, k] array
      for(var i = 0; i < cmd.length; i++) {
        // slice
        newArr = arr.slice(cmd[i][0]-1, cmd[i][1]);

        // ascending sort
        newArr.sort(function(a,b) {
            return a - b;
        });

        // find number and make result array
        result = newArr[cmd[i][2]-1];
        resultArray.push(result);
      }

    return resultArray;
}

console.log(slice_sort_find());