/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    let data = req.body;

    let user = await User.findOne({
      email: data.email
    }).decrypt();

    if (user) {
      // if (user.isVerified) {
      // if (err) {
      //   res.ok({
      //     message: "Invalid password."
      //   });
      // } else {
      // if (result) {
      if (user.password == data.password) {
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
      } else {
        res.ok({
          message: "Invalid password."
        });
      }
      // } else {
      //   res.ok({
      //     message: "Invalid password."
      //   });
      // }
      // }
      // } else {
      //   res.ok({
      //     message: "User is not verified."
      //   });
      // }
    } else {
      res.ok({
        message: "User does not exist."
      });
    }
  },

  socialLogin: async (req, res) => {
    const body = req.body;

    let count = await User.count({
      email: body.email
    });

    if (count < 1) {
      let user = await User.create(body).fetch();

      jwt.sign(user, sails.config.session.secret, (err, token) => {
        RedisService.set(user.id, token, () => {
          console.log(`${user.email} logged in.`);
          delete(user.password);

          res.ok({
            token,
            user,
            message: "Logged in successfully.",
            isNewUser: true
          });
        });
      });
    } else {
      let user = await User.findOne({
        email: body.email
      });

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
    }
  },

};
