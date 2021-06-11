/**
 * ProgramController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    let body = req.body;
    let exercises = await Exercise.createEach(body.exercise).fetch();
    let exerciseIds = [];

    exercises.forEach(val => exerciseIds.push(val.id));
    delete(body.exercise);
    body.exercise = exerciseIds;

    let program = await Program.create(body).fetch();

    res.ok(program);
  },

  fetchUserProgram: async (req, res) => {
    let program = await Program.find({
      user: req.params.id
    }).populateAll();

    res.ok(program);
  },

};
