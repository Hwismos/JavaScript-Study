const seokhwi = {
    name: 'seokhwi',
    age: 24,
    skill: 'JavaScript',
    study: function () {
        console.log(`${this.name}은 ${this.skill}를 공부한다..`)
    }
}

// seokhwi.study();

// 1. Object to JSON

console.log(`\n#1`)
const json = JSON.stringify(seokhwi, (key, value) => {
    console.log(`key: ${key}, value: ${value}, type: ${typeof (value)}`);
    return (value);
})

console.log(`\n#2`)
console.log(`${json}`);


// 2. JSON to Object 

const seokhwi_clone = JSON.parse(json);

console.log(`\n#3`)
console.log(seokhwi_clone);

console.log(`\n#4`)
for (key in seokhwi_clone) {
    console.log(`key: ${key}, key_type: ${typeof (key)}, val_type: ${typeof (seokhwi_clone[key])}`)
}

/*
    JSON diff
    JSON Beautifier
    JSON Parser
    JSON Validator
*/