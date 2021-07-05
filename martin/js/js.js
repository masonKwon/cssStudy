function calculate() {
    let array = [1,233,523,63,79,82,32]; // 부서별 신청금액 : 부서별 입력 ui 만들면 좋음
    // array.length = 100; // 부서의 개수는 100로 제한한다 : 부서의 갯수를 어떻게 제한알수있나?

    let totalPrice = Number(document.querySelector('.d').value); // 예산은 범위내에서 입력 가능하다
    let text = solution(array,totalPrice); // 예산에 따른 지원가능 부서 계산
    document.querySelector('.text_value').value = text;
    
}
function solution(d,budget){
    
    var answer = 0;
    var answerTotal = 0;
    var remainingAmount = 0;
    let arraySort = d.sort(function(a,b){return a-b;}); // 배열을 숫자로 변환하여 낮은 금액부터 정렬
    console.log(arraySort);
    
    let loop = arraySort.length; // 신청부서 숫자
    
    // logic
    for(answer=0; answer < loop; answer++ ) { // 예산이 낮은 부서부터 예산을 더해서 예산보다 작을때 까지 
        answerTotal += arraySort[answer];
        if(answerTotal >= budget) {
            
            break;      
        }
    }
    
    let newTotal = arraySort.slice(0,answer).reduce((a,b) => a+b); // 지원가능한 부서의 인덱스를 잘라서 더함
    remainingAmount = budget - newTotal;
    document.querySelector('.totalD').value = newTotal;        
    document.querySelector('.remaining_amount').value = remainingAmount;        
    return answer; // 예산을 사용한 마지막 부서의 순서를 반환
    // logic end
    
}
function maxBudget(el) {
    let val = el.value;
    if(val.replace(/[0-9]/g, "").length > 0) {
        alert("예산은 숫자만 입력해 주십시오.");
        el.value = "";
    }
    if(val < 1 || val > 10000000) {
        alert("예산을 1~10,000,000 범위로 입력해 주십시오.");
        el.value = "";
    }
}