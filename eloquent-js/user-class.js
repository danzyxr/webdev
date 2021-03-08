let users = [];

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.online = false;
    this.rep = 0;
  }

  login() {
    this.online = true;
    console.log(this.email, 'has logged in');
    return this;
  }

  logout() {
    this.online = false;
    console.log(this.email, 'has logged out');
    return this;
  }

  updateRep(n) {
    this.rep = this.rep + n;
    console.log(this.email, 'rep is now', this.rep);
    return this;
  }
}

class Admin extends User {
  deleteUser(userObj) {
    users = users.filter((u) => {
      return u.email !== userObj.email;
    });
    return this;
  }
}

const danny = new User('Dan', 'dan@dan.gratis');
const bobby = new User('Robert', 'bobby@bobby.bob');
const admin = new Admin('Admin', 'admin@business.org');

danny.login().updateRep(100).logout();
bobby.login().updateRep(-50).logout();
admin.login().updateRep(155).logout();

users.push(danny, bobby, admin);

console.log(users);
admin.login().deleteUser(danny);
console.log(users);
