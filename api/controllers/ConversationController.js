/**
 * ConversationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fetchConversations: async (req, res) => {
    let id = req.params.id;

    let conversations = await Conversation.find({
      or: [{
          user1: id
        },
        {
          user2: id
        },
      ]
    }).sort('updatedAt DESC').populateAll();

    res.ok(conversations);
  },

  create: async (req, res) => {
    let body = req.body;

    let conversation = await Conversation.find({
      or: [{
          user1: body.user1,
          user2: body.user2
        },
        {
          user1: body.user2,
          user2: body.user1
        },
      ]
    }).populateAll();

    if (conversation.length > 0) {
      res.ok(conversation);
    } else {
      conversation = await Conversation.create(body).fetch();
      conversation = await Conversation.find({
        id: conversation.id
      }).populateAll();
      res.ok(conversation);
    }
  },

};
