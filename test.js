function user() {
    this.firstname = 'John'
    this.lastname = "Deo"
    this.age = 30
    this.email = 'z7Vr5@example.com';
    this.address = 'USA'
}

user.prototype.getName = function () {
    return `${this.firstname} ${this.lastname}`;
}

const getUserOne = new user();

console.log(getUserOne.getName());