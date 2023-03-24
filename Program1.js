class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static compareUser(user1, user2){
        return user1.age - user2.age
    }


}

const result = new user("Rohit", 23);
const result1 = new user("sanju", 13);
const result2 = new user("Deepak", 25);
const users = [result, result1, result2];
users.sort(user.compareUser)
console.log(users);