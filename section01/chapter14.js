// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 지역 함수
}

funcA();
// funcB(); -> error

// 함수를 조건문이나 반복문 안에 선언하는 경우, 지역 스코프를 갖지 않음
if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}
