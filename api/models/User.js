/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: 'string'
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    username: {
      type: 'string',
    },
    avatar: {
      type: 'string',
      defaultsTo: '../assets/congrats.png'
    },
    password: {
      type: 'string',
      encrypt: true
    },
    age: {
      type: 'number'
    },
    weight: {
      type: 'number'
    },
    height: {
      type: 'number'
    },
    phone: {
      type: 'string'
    },
    athleticLevel: {
      type: 'string',
    },
    about: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    languages: {
      type: 'json'
    },
    userType: {
      type: 'string',
      defaultsTo: 'regular'
    },
    isPasswordSet: {
      type: 'boolean',
      defaultsTo: false
    },
    profileType: {
      type: 'string',
      defaultsTo: 'Trainee'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    primarySkill: {
      model: 'skills'
    },
    secondarySkill: {
      collection: 'skills',
      via: 'userSkills'
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};
