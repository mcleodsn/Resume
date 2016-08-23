const knex = require('knex')({
  client: 'postgres',
  connection: {
    host: '192.168.99.100',
    port: '32769',
    user: 'postgres',
    database: 'resumeDB',
    charset: 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex);

const Users = bookshelf.Model.extend({
  tableName: 'defaultSchema.users'
});
const Files = bookshelf.Model.extend({
  tableName: 'defaultSchema.files'
});
exports.Files = Files;
exports.Users = Users;

exports.jsonify = (ele) => { return ele.toJSON();};
