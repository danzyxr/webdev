let users = [];

function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
  this.rep = 0;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, 'has logged in');
  return this;
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, 'has logged out');
  return this;
};

User.prototype.updateRep = function (n) {
  this.rep = this.rep + n;
  console.log(this.email, 'rep is now', this.rep);
  return this;
};

function Admin(...args) {
  User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email !== u.email;
  });
};

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
