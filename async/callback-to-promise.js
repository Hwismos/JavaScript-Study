// 콜백지옥은 promise로 해결
// promise 객체를 생성함과 동시에 네트워크 통신 시작
// 더 이상 콜백을 전달받지 않아도 됨

// 콜백지옥 다시 생성
// 서버에서 로그인 확인하고 role 확인

class UserStorage {
    login(id, pw) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id === 'seokhwi' && pw === '1234') {
                    resolve(id);
                } else {
                    reject(new Error("없는 정보입니다."));
                }
            }, 2000);
        })
    }

    getRole(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user == "seokhwi") {
                    resolve({ name: "seokhwi", role: "admin" });
                } else {
                    reject(new Error("접근 불가"));
                }
            }, 2000)
        })
    }
}

const us = new UserStorage;
const id = "seokhwi"
// const id = "yurim";
const pw = "1234";

us.login(id, pw)
    .then(user => us.getRole(user))
    .then(obj => console.log(`환영합니다. ${obj.role}인 ${obj.name}님!!!`))

/*
- 정리
    - Promise는 비동기적인 연산을 처리해주는 객체를 반환
    - 로그인/접근권한 확인 예제
        - db에서 유저의 존재여부를 확인하는 연산과 로그인된 유저의 접근권한을 확인하는 연산이 비동기적임
        - 콜백함수로 위 시나리오를 구현하면 가독성이 떨어짐
        - Promise 이용
            - 클래스를 정의할 때 로그인, 역할 확인 함수가 Promise 객체를 반환하도록 구상
            - 비동기적인 처리들을 순서대로 처리
*/