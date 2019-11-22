const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
  allStepsData
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
    .join('schemes', 'schemes.id', "steps.scheme_id")
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where({ scheme_id: id })
}

function add(scheme) {
  return db('schemes').insert(scheme);
}

function addStep(stepData, id) {
  return db('steps').insert({scheme_id: id, ...stepData})
}

function update(changes, id) {
  return db('schemes')
    .where('id', '=', id)
    .update(changes)
}

function remove(id) {
  return db('schemes')
    .where({id})
    .del();
}

function allStepsData() {
  return db('steps')
}