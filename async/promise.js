/*
- 정리
    - 비동기 처리 이슈에서 콜백함수의 대체제
        - State 이해
            - pending -> fulfilled or refected
        - producer와 consumer의 견해 차이 이해
*/

// 1. Producer

// resolve와 reject 콜백함수를 인자로 받음
// 새로운 Promise가 만들어질 때는 전달한 executor 함수가 바로 실행됨
const promise = new Promise((resolve, reject) => {
    // 비중 있는 작업을 처리
    // 시간이 조금 걸리는 일들은 비동기적으로 처리하는 것이 좋음
    // 네트워킹, 파일 읽기

    console.log('doing something...');
    // promise를 만드는 순간 executer 콜백함수가 바로 실행됨
    // 만들어지는 순간 바로 네트워크 통신 시작

    setTimeout(() => {
        resolve('ellie'); // <- 콜백함수
        // reject((new Error("no network"))); // <- 자바스크립트에서 제공하는 에러 오브젝트
    }, 2000);
});



// 2. Consumers: then, catch, finally를 이용해서 값을 받아올 수 있음

// promise가 정상적으로 잘 수행돼서 최종적으로 resolve 콜백함수를 호출, 이때 인자로 전달했던 값이 value로 감
// then은 promise를 리턴
// promise의 catch를 호출할 수 있음
// 체이닝
// finally는 성공하든 실패하든 호출됨
promise
    .then((value) => {
        console.log(value);
    })
    // .catch(error => {
    //     console.log(error);
    // })
    .finally(() => {
        console.log("finally");
    })

// 3. Promise 연결하기
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

// Promise 객체 생성
fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    )
    .then(num => console.log(num));
// 비동기적인 연산들을 묶어서 처리

// 4. Error Handling
const getHen = () => {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => (reject(new Error("네트워크 에러"))), 1000);
        })
    );
};

const getEgg = (hen) => (
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(hen + " => 달걀"), 1000);
    })
);

const cook = egg => (
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(egg + " => 달갈 후라이"), 1000);
    })
);


getHen()
    .catch(error => ("마트"))
    .then(hen => getEgg(hen))
    .catch(error => { return ("빵") })
    .then(egg => cook(egg))
    .then(meal => console.log(meal));