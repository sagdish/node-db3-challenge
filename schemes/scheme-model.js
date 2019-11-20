const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps
}

function find() {
  return db('schemes')
  // same as:
  // return db.select('*').from('schemes');
}

function findById(id) {
  return db('schemes')
    .where({id})
    .first();
}

function findSteps(id) {
  return db('steps')
    .where({ scheme_id: id })
}