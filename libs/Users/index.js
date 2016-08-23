var Users = require('../Database').Users;
var jsonify = require('../Database').jsonify;
exports.getByEmail = function (email ) {
  console.log('we are in lib');
  console.log(email);
  return Users
    .where('email', email)
    .fetch({
      require: true
    })
    .then(jsonify);
  // return new Promise(function(resolve, reject) {
  //   resolve('1')
  // });
}
