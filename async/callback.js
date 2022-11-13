/*
- 필기
    - 자바 스크립트는 동기적으로 실행(순서적으로 실행)
        - 호이스팅
            - var, function 선언이 자동적으로 제일 위로 올라가는 것
            - 호이스팅 된 이후로 코드가 순서대로 실행
    - 비동기적으로 실행(순서적으로 실행되는 것이 보장되지 않음)
    - callback 함수
        - 나중에 호출되도록 요청되는 함수
        - Synchronous Callback
        - Asynchronous Callback
*/

console.log("1");
// 브라우저에게 먼저 요청
// 브라우저에서 1초의 시간이 지난 후에 내부 함수 호출
setTimeout(() => {
    // 1초가 지난 다음에 함수를 호출되기를 바라는 함수(callback 함수)
    return (console.log('2'));
}, 2000);
// 콘솔로 바로 요청
console.log("3");

// 함수의 선언은 호이스팅 되므로 맨 위로 이동
// 화살표 함수는 호이스팅되지 않음
function printImmediately(print) {
    print();
}

// 동기 콜백함수에 함수 인자로 전달
printImmediately(() => console.log("Hello"));

// 비동기 콜백함수
// 역시 선언은 맨 위로 올라감
// 브라우저에게 요청하고 2초 뒤 콜백함수 호출
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// 비동기 콜백함수에 함수 인자 전달
printWithDelay(() => console.log("async callback"), 2000);

////////////////////
// 3. 콜백 지옥 체험
////////////////////

/*
1. 아이디와 패스워드 받아옴
2. 로그인
3. 역할 요청
4. 역할을 출력
*/
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        // 딜레이를 줘서 네트워크 통신 상황 가정
        setTimeout(() => {
            if (
                (id == "ellie" && password == "dream") ||
                (id == 'coder' && password == 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user == 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 2000);
    }
}

// 실습
// const user = new UserStorage();
// user.loginUser('ellie', 'dream', (id) => (console.log(id + '로 로그인 되었습니다.')), (obj) => (console.log('없는 유저입니다.')));
// user.getRoles(user, (obj) => (console.log(`${obj.name}은 ${obj.role}입니다.`), (obj) => (console.log('일반 사용자입니다.'))));

const userStroage = new UserStorage();
const id = 'ellie';
// const id = 'seokhwi';
const pw = 'dream';

userStroage.loginUser(
    id,
    pw,
    (user) => {
        userStroage.getRoles(
            user,
            (userWithRole) => {
                console.log(`${userWithRole.name}는 ${userWithRole.role}입니다.`)
            },
            (error) => {
                console.log("erro");
            }
        )
    },
    (error) => {
        console.log("error");
    }
);
// 가독성 부족
// 디버깅, 문제 분석이 어려움
// 유지보수도 어려움

/*
- 정리
    - 호이스팅은 (var)변수 선언과 function을 이용한 함수 선언이 코드의 맨 위로 이동하는 것
    - 콜백함수는 일정 시간 후에 호출이 요청되는 함수
        - 인자로 콜백함수가 호출될 때 호출할 함수와 대기 시간을 받음
    - 콜백함수의 단점
        - 코드가 복잡해지면 콜백함수는 가독성을 매우 떨어뜨림
        - 유지보수, 디버깅이 어려움
*/