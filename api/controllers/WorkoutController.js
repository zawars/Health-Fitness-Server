/**
 * WorkoutController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fetchWorkoutsByUser: async (req, res) => {
    let id = req.params.id;

    let workoutList = await Workout.find({
      user: id
    }).populateAll();

    res.ok(workoutList);
  },


};

