const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
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

function add(scheme) {
  return db('schemes').insert(scheme);
}

function addStep(stepData, id) {
  return db('steps').insert({scheme_id: id, ...stepData})
}