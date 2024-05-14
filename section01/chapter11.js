// 함수선언
function greeting () {
    console.log("안녕하세요!");
}

// 함수호출
greeting();

// getArea(10, 20); // 인수
let area1 = getArea(10, 20);
let area2 = getArea(30, 20);

// 함수선언
// 호이스팅 -> '끌어올리다'라는 뜻
// 함수선언을 호출 아래에 해도 됨
function getArea(width, height) { // 매개변수
    function another() { // 중첩함수
        console.log("another");
    }

    another(); 

    // let width = 10;
    // let height = 20;
    let area = width * height;

    // console.log(area);
    return area;
    console.log("hello") // return 밑의 코드는 수행되지 않음
}