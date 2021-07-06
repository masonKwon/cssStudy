
function calculate() {
    
    let numberStr = document.querySelector('.text_value').value;
    // let numberIdx = numberStr.length;
    let text = numberStr.slice(-4);
    let regex = /[0-9]/g;
    let printTxt = numberStr.replace(regex,"*");
    let result = printTxt.substr(4) + text;
    console.log(text,printTxt,result);

}

function arrayInput() {
    let arraySort = [3,6,7,8,7]
    arraySort.sort(function(a,b){return a-b;});
    return arraySort;
}