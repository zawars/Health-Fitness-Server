/**
 * ProgramRequestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fetchUserInvoices: async (req, res) => {
    let id = req.params.id;

    let invoices = await ProgramInvoice.find({
      user: id,
      status: 'Pending'
    }).populateAll();

    res.ok(invoices);
  },

  approveInvoice: async (req, res) => {
    let id = req.params.id;
    let invoice = await ProgramInvoice.update({
      id
    }).set({
      status: 'Approved'
    }).fetch();

    await User.addToCollection(invoice[0].user, 'programs').members([invoice[0].program]);

    res.ok({
      message: 'Approved'
    });
  },

};
