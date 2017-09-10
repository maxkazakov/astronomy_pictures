var user = {
    firstName: "Вася",
    sayHi: function(who) {
        // здесь у sayHi есть один аргумент
        console.log(this.firstName + ": Привет, " + who)
    }
}

const g = user.sayHi.bind(user)
user = {}
g()
