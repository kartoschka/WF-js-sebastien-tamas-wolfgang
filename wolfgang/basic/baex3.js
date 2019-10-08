class Person {
    constructor(name, surname, age, description) {
        this.name = name,
        this.surname = surname,
        this.age = age,
        this.description = description,
        this.introduce()
    }
    
    introduce() {
        console.log(
            `I am ${this.name} ${this.surname}, ${this.age} years old and ${this.description}.`
        )
    }
}

person1 = new Person("Wolfi", "Figl", 18, "Koch");



