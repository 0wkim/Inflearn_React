// 단락 평가 활용 사례
// -> 첫번쨰 피연산자의 값만 판단하고 두번째 피연산자에는 접근하지 않는 것

function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue()) // returnTrue 함수는 호출 X

function printName(person) {
    const name = person && person.name; 
    console.log(name || "person의 값이 없음");
  }
  
  printName();
  printName({ name: "이정환" });

  // T || T : 첫번째 T 반환
  // T && T : 두번째 T 반환