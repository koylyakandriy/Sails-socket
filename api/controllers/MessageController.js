/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  onConnect: function(req, res){
    sails.sockets.join(req, 'chat-channel');
    return res.ok();
  },

  sendMessage: function(req, res){
    content = req.body.content;
    sails.sockets.broadcast('chat-channel','chat', content );
    return res.ok();
  },

  deleteMessage: function(req, res){
    content = req.body.content;
  }
  
};

