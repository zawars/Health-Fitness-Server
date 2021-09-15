/**
 * ExerciseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fetchExerciseByUser: async (req, res) => {
    let id = req.params.id;

    let exerciseList = await Exercise.find({
      user: id
    }).populateAll();

    res.ok(exerciseList);
  },

  update: async (req, res) => {
    let id = req.params.id;

    let exercise = await Exercise.updateOne({
      id
    }).set({
      ...req.body,
      video: req.body.video.id,
      program: req.body.program.id,
      user: req.body.user.id,
    });

    res.ok(exercise);
  },

};
