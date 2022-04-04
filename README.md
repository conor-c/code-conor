```javascript
class Dev {
  constructor(name, age, experience, language) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.language = language;
  }

  introduction() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`)
    console.log(`My language of choice is ${this.language}.`);
    console.log(`My experience level would best be classified as a ${this.experience}.`)
  }
}

const Conor = new Dev('Conor Chung', 28, 'Junior', 'JavaScript');

Conor.introduction();
```