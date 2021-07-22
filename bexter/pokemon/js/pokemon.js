function maximumKind() {
    // input
    const nums = [3, 3, 3, 2, 2, 2];

    // use Set to get rid of same kind of pokemon
    const newNums = [...new Set(nums)];

    // the maximum kind of pokemon
    const max = newNums.length

    // the number of pokemon to choose
    const pickNum = nums.length / 2;

    if(max <= pickNum) {
        document.getElementById("valueInput").innerHTML = max;
    }
    else {
        document.getElementById("valueInput").innerHTML = pickNum;
    }
}