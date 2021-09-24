/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const jwt = require("jsonwebtoken");

module.exports = {
  create: async (req, res) => {
    let data = req.body;
    let check = await User.find({
      email: data.email
    });

    if (check == undefined || check.length == 0) {
      let user = await User.create(data).fetch();
      // let authCode = speakEasy.totp({
      //   digits: 8,
      //   secret: sails.config.session.secret + user.email,
      //   encoding: 'base32',
      //   step: 86400
      // });

      // EmailService.sendMail({
      //   email: user.email,
      //   subject: "Verification",
      //   message: `Please use this link token to verify your account. <br>
      //   <a href="${sails.config.custom.backendPath}/user/${user.id}/verify/${authCode}" target="_blank">Verify</a>
      //   `
      // }, (err) => {
      // if (err) {
      //   res.ok({
      //     message: 'Error sending email.'
      //   });
      // } else {
      jwt.sign(user, sails.config.session.secret, (err, token) => {
        RedisService.set(user.id, token, () => {
          console.log(`${user.email} logged in.`);
          delete(user.password);

          res.ok({
            token,
            user,
            message: "Logged in successfully."
          });
        });
      });
      // res.ok({
      //   user,
      //   message: 'Verification link sent to your email. Please verify.'
      // });
      //   }
      // });
    } else {
      res.ok({
        message: 'User already exists with either email, username.'
      });
    }
  },

  update: async (req, res) => {
    let body = req.body;
    let clients = body.clients;
    delete(body.clients);

    let user = await User.update({
      id: req.params.id
    }).set(body).fetch();
    user = user[0];


    if (user.profileType == 'Trainer') {
      if (clients) {
        await User.addToCollection(user.id, 'clients').members([...clients]);
        let temp = await User.update({
          id: clients[0].id
        }).set({
          trainer: user.id
        }).fetch();
      }
    }

    user = await User.findOne({
      id: user.id
    }).populateAll();

    res.ok(user);
  },

  uploadImage: async (req, res) => {
    req.file('attachment').upload({
      dirname: '../../../uploads/'
    }, function (err, uploadedFiles) {
      if (err) return res.serverError(err);
      return res.json({
        message: uploadedFiles.length + ' file(s) uploaded successfully!',
        files: uploadedFiles
      });
    });

    // res.ok();
  },

  isClient: async (req, res) => {
    let id = req.params.id;
    let clientId = req.params.client;

    let user = await User.findOne({
      id
    }).populateAll();

    let flag = false;
    user.clients.map(client => {
      if (client.id == clientId) {
        flag = true;
      }
    });

    res.ok({
      isClient: flag
    });
  },

  getClients: async (req, res) => {
    let id = req.params.id;

    let user = await User.findOne({
      id
    }).populate('clients');

    if (user) {
      res.ok({
        clients: user.clients
      });
    } else {
      res.ok({
        clients: []
      });
    }
  },

  getTrainers: async (req, res) => {
    let id = req.params.id;

    let user = await User.findOne({
      id
    }).populateAll();

    res.ok({
      programs: user.programs,
      trainers: user.trainer ? [user.trainer] : []
    });
  },

};
