/*
- async, await
    - promise의 복잡한 체이닝을 위해 고안
    - 조금 더 간편한 API 제공
    - syntactic sugar
    - 깔끔하게 promise를 사용하는 방법
*/

// 1. async

// promise를 리턴하는 것(아래 코드)과 같은 결과
// syntactic sugar
async function fetchUser() {
    // 통신하는데 10초가 걸린다고 가정
    return 'seokhwi';
}

/*
function fetchUser() {
    return Promise((resolve, reject) => {
        ...
        resolve("seokhwi");
    })
}
*/

// 비동기적인 처리를 안 하면 fetch가 느려짐
// promise 객체를 가지고 있다면 비동기적인 처리가 끝난 뒤 then 콜백함수에 등록된 함수의 처리가 약속됨
// resolve라 reject를 사용해야 promise 객체가 pending 상태에서 fullfilled 혹은 rejected 상태로 변환
// 위와 같이 promise 객체의 상태가 바뀌어야 결과값이 반환됨
const user = fetchUser();
console.log(user);

// 2. await
// 동기적인 것처럼 코드를 작성할 수 있음
async function getApple() {
    await delay(1000);
    return "사과";
}

async function getBanana() {
    await delay(1000);
    return "바나나";
}

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return (`${apple} + ${banana}`);
}

pickFruits();

// 3. 병렬처리

// 4. Promise.all 과 Promise.race