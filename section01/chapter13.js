// 1. 콜백함수
function main(value) {
    // console.log(value);
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

// 함수 표현식
main(() => {
    console.log("I am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let ids = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, function (idx) {
    console.log(idx * 2);
});

// function repeatDouble(count) {
//     for (let ids = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }

// repeat(5);
// repeatDouble(5);