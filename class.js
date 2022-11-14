/*
- 개념
    - class: 붕어빵 틀
    - object: 팥 붕어빵, 슈크림 붕어빵
- ES6에서 소개된 개념
- prototype 기반의 syntactical sugar
*/

// 1. 클래스 선언과 객체 생성

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}, Hello!`);
    }
}

const seokhwi = new Person("seokhwi", 24);
// seokhwi.speak();

// 2. Getter, Setter
// 사람의 나이는 -1이 될 수 없음
// 위와 같은 결과가 나오지 않게 해주는 방어적인 기능이 Getter와 Setter

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // getter와 setter에 쓰이는 age를 그대로 사용하면 this.age = age; 문장이 setter를 호출하게 되며 함수 stack이 초과됨
    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age cannot be negative');
        }
        this._age = value;
    }
}

const user1 = new User('choi', 'seokhwi', 24);
console.log(user1.age);

// 3. Publci과 Private 
// 4. static
// 추가되었다는 정도만 알면 좋음

// 5. 상속과 다형성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} of color`);
    }

    getArea() {
        return (this.width * this.height);
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log("new drawing");
    }
    // 오버라이딩(재정의)
    getArea() {
        return (this.width * this.height / 2);
    }
}

const rec = new Rectangle(20, 20, 'red');
const tri = new Triangle(20, 20, 'blue');

rec.draw();
tri.draw();
console.log(rec.getArea());
console.log(tri.getArea());