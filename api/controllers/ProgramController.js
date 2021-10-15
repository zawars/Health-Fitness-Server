/**
 * ProgramController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    let body = req.body;
    let program = await Program.create(body).fetch();

    res.ok(program);
  },

  update: async (req, res) => {
    let body = req.body;

    let program = await Program.updateOne({
      id: body.id || req.params.id
    }).set(body);

    res.ok(program);
  },

  fetchUserProgram: async (req, res) => {
    let program = await Program.find({
      user: req.params.id
    }).populateAll();

    res.ok(program);
  },

  assignClientToProgram: async (req, res) => {
    try {
      let id = req.params.id;

      await Program.addToCollection(id, 'clients').members([...req.body.clients]);

      res.ok({
        message: 'Program assigned successfully.'
      });
    } catch (error) {
      console.log(error);
    }
  },

  fetchTraineePrograms: async (req, res) => {
    try {
      let program = await Program.find({
        clients: req.params.id
      }).populateAll();

      res.ok(program);
    } catch (error) {
      console.log(error)
    }
  }

};
