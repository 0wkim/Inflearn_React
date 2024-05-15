// 원시타입: Number, String, Boolean, Null, Undefined
// -> 불변값: 원본값 변경 X, 복사 (call-by-value와 비슷)

// 객체타입: Object -> Array, Function, RegexExp
// -> 가변값: 원본 데이터를 수정, 메모리 주소 공유 (call-by-reference와 비슷)  

// 깊은 복사
let o1 = {name: "김영우"};
let o2 = {...o1}; // 원본 객체가 수정되지 않음