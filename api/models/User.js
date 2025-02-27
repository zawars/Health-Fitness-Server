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
      defaultsTo: '../assets/empty-user.png'
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
    trainerType: {
      type: 'string',
      defaultsTo: 'Fitness Trainer'
    },
    hourlyRate: {
      type: 'number',
      defaultsTo: 0
    },
    currency: {
      type: 'string',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    primarySkill: {
      model: 'skills'
    },
    trainer: {
      model: 'user'
    },
    clients: {
      collection: 'user'
    },
    programs: {
      collection: 'program'
    },
    languages: {
      collection: 'languages'
    },
    country: {
      model: 'countries'
    },
    isVerified: {
      type: 'boolean',
      defaultsTo: false
    },
    isPasswordChanged: {
      type: 'boolean',
      defaultsTo: false
    },


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    secondarySkill: {
      collection: 'skills',
      via: 'userSkills'
    },
    programInvoices: {
      collection: 'programInvoice',
      via: 'user'
    },
    traineePrograms: {
      collection: 'program',
      via: 'client',
      through: 'userprogram'
    }


  },

};
