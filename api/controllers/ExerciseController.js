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

    let count = 0;
    exerciseList.forEach(async (val, index) => {
      let attach = await Attachment.findOne({
        id: val.video.video
      }).populateAll();
      exerciseList[index].video.video = attach;

      count++;
      if (count == exerciseList.length) {
        res.ok(exerciseList);
      }
    });
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

  fetchExercises: async (req, res) => {
    let body = req.body;

    let exercise = await Exercise.find({
      id: body.exercise
    }).populateAll();

    let count = 0;
    exercise.forEach(async (val, index) => {
      let attach = await Attachment.findOne({
        id: val.video.video
      }).populateAll();
      exercise[index].video.video = attach;

      count++;
      if (count == exercise.length) {
        res.ok(exercise);
      }
    });

  },


};
