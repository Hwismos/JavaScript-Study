// 콜백지옥은 promise로 해결
// promise 객체를 생성함과 동시에 네트워크 통신 시작
// 더 이상 콜백을 전달받지 않아도 됨

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id == "ellie" && password == "dream") ||
                    (id == 'coder' && password == 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user == 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 2000);

        })

    }
}

const userStroage = new UserStorage();
const id = 'ellie';
// const id = 'seokhwi';
const pw = 'dream';

userStroage
    .loginUser(id, pw)
    .then(userStroage.getRoles)
    .then(user => console.log(`${user.name}는 ${user.role}입니다.`))
    .catch(console.log);