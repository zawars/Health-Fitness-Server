/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const io = sails.io;
const jwt = require('jsonwebtoken');
// const io = require("socket.io")(sails.hooks.http);

io.on("connection", (socket) => {
  socket.on('error', function () {
    console.log('error catch!');
  });

  jwt.verify(socket.handshake.query.token, sails.config.session.secret, (err, authData) => {
    RedisService.set(`socket-${authData.id}`, socket.id, () => {
      console.log(`Socket Client connected: ${socket.id}`, authData.id);

      socket.on('messageSend', data => {
        console.log(data)
        RedisService.get(`socket-${data.otherUserId}`, socketId => {
          console.log('socketId', socketId)
          Message.create({
            sender: data.id,
            receiver: data.otherUserId,
            text: data.text,
            conversation: data.conversation
          }).fetch().then(result => {
            // console.log(result, socketId)
            if (socketId) {
              io.to(socketId).emit('messageReceive', result);
            }

            io.to(data.socketId).emit('messageReceive', result);
          });

        });
      });

      socket.on('fetchMessagesCount', async data => {
        let messagesCount = await Message.count({
          unread: true,
          receiver: data.id
        });

        socket.emit('fetchMessagesCount', messagesCount);
      });
    });
  });
});

module.exports = {
  fetchMessages: async (req, res) => {
    let user1 = req.params.user1;
    let user2 = req.params.user2;

    let messages = await Message.find({
      or: [{
          sender: user1,
          receiver: user2
        },
        {
          sender: user2,
          receiver: user1
        }
      ]
    }).sort('createdAt DESC').limit(20);

    res.ok(messages.reverse());
  },

  markRead: async (req, res) => {
    let id = req.params.id;
    let conversationId = req.params.conversationId;

    let message = await Message.update({
      receiver: id,
      conversation: conversationId
    }).set({
      unread: false
    }).fetch();

    res.ok({
      message: 'Marked as read.'
    });
  },

};
