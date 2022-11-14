/*

*/


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.hasJob;
    }

    introduce() { console.log(`${this.name} is ${this.age} years old`) }
}

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const obj1 = {};  // object literal 문법
const obj2 = new Person('seokhwi', 24); // object constructor 문법
const seokhwi = { name: 'seokhwi', age: 24 };
print(seokhwi);

// object는 {key: value} 의 집합체
seokhwi.job = 'student'; // 런타임에 타입이 동작되기 때문에 가능한 문법, 피하는 것이 좋음
delete seokhwi.job;

// Person 클래스에서도 name과 age, sayHello가 key
// seokhwi 객체의 경우 'seokhwi', 24, { console.log(~) } 가 각 key의 value
console.log(obj2.name);
console.log(obj2.age);
console.log(obj2.hasJob);
obj2.introduce();

// 2. Computed properties
// key는 문자열 타입으로 해야함
console.log("###");
console.log(seokhwi.name);  // 키에 해당하는 값을 받아올 때
console.log(seokhwi['name']);  // 정확히 어떤 키가 결정될지 모를 때

function printValue(obj, key) {
    console.log(obj[key]);
    // console.log(obj.key); <- undefined
}

printValue(seokhwi, 'name');

// 3. Property value shorthand
// 4. Constructor function
// 클래스가 없을 때는 객체생성함수를 이용했었음

// 5. 'in', 'for ... in', 'for ... of' 연산자
for (key in obj2) {
    console.log(key);
}

const array = [1, 2, 3, 4, 5, 5, 1, 2, 3];

for (val of array) { console.log(val) };

// 6. cloning 
const user = { name: 'seokhwi', age: 24 };
const user2 = user;  // user2도 user가 참조하는 ref를 동일하게 참조

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

console.log(user3);

const user4 = {};
// 모든 클래스는 Object 클래스를 상속받음
// 클래스로 찍어낸 객체는 최상위 클래스(Object)에 선언 된 메소드를 사용할 수 있음
// 재정의도 가능(toString)
Object.assign(user4, user);
console.log(user4);
