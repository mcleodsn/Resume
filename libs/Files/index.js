var Files = require('../Database').Files;
var jsonify = require('../Database').jsonify;

exports.create = (path, originalname) => {
  console.log(`we are in the funcion`);
  return new Files({path, originalname}).save({
    path,
    originalname
  })
};

exports.list = () => {
  console.log('we are in the list function');
  return Files
  .fetchAll()
  .then(jsonify);
}

exports.get = (id) =>{
  return Files
    .where ('id', id)
    .fetch({
      require: true
    })
    .then(jsonify);
};
