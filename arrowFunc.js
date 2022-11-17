function foo() {
    console.log(this);
}

const bar = () => {
    setTimeout(() => {
        console.log(this);
    }, 1000);
}

const tmpObj = {
    name: "seokhwi",
    showMeThis: () => { console.log(this); },
    sayHello: () => {
        console.log(`${this.name} is my Name`);
    }
}

foo();
console.log("###############")
bar();

tmpObj.sayHello();