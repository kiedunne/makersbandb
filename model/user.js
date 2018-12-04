function User() {
  this.id
  this.username
  this.email
  this.password
  this.login = false
};

User.prototype.signup = function(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
};

User.prototype.signin = function(username, password) {
if(this.username !== username) {
  throw new Error('Incorrect username');
} else if(this.password !== password) {
  throw new Error('Incorrect password');
}else {
    this.login = true;
}
};

User.prototype.logout = function() {
  this.login = false
};
