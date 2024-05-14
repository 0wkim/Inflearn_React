// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA; // 호출하지 않고 함수 자체를 변수에 담은 것
varA(); // 변수이름으로 함수 호출

let varB = function () { // 익명함수
    // 함수이름으로 호출 불가능 -> 함수이름 생략
    console.log("funcB");
};

varB();

// 2. 화살표 함수
// let varC = () => {
//     return 1;
// };
let varC = (value) => value + 1;

console.log(varC(10));



 