/**
 * Exercise.js
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
    notes: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    duration: {
      type: 'string'
    },
    set: {
      type: 'string'
    },
    reps: {
      type: 'string'
    },
    time: {
      type: 'string'
    },
    intensity: {
      type: 'string'
    },
    link: {
      type: 'string'
    },
    type: {
      type: 'string',
      isIn: ["exercise", "break"]
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    video: {
      model: 'videoLibrary'
    },
    user: {
      model: 'user'
    },
    // workout: {
    //   model: 'workout'
    // },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    program: {
      model: 'program'
    },
  },

};
