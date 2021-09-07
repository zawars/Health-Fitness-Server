/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },


  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/

  // Auth Controller Routes 
  'POST /api/v1/auth/login': 'AuthController.login',
  'POST /api/v1/auth/login/social': 'AuthController.socialLogin',

  // User Controller Routes
  'POST /api/v1/user': 'UserController.create',
  'PATCH /api/v1/user': 'UserController.update',
  'POST /api/v1/user/uploadImage': 'UserController.uploadImage',
  'GET /api/v1/user/:id/client/:client': 'UserController.isClient',
  'GET /api/v1/user/:id/clients/fetch': 'UserController.getClients',
  'GET /api/v1/user/:id/trainers/fetch': 'UserController.getTrainers',

  // Exercise Library Controller Routes
  'GET /api/v1/exercise/user/:id/fetch': 'ExerciseController.fetchExerciseByUser',

  // Video Library Controller Routes
  'POST /api/v1/videoLibrary': 'VideoLibraryController.create',
  'GET /api/v1/videoLibrary/user/:id/fetch': 'VideoLibraryController.fetchVideosByUser',

  // Program Controller Routes
  'POST /api/v1/program': 'ProgramController.create',
  'GET /api/v1/program/user/:id': 'ProgramController.fetchUserProgram',

  // Conversation Controller Routes
  'GET /api/v1/conversation/fetch/:id': 'ConversationController.fetchConversations',
  'POST /api/v1/conversation': 'ConversationController.create',

  // Messages Controller Routes
  'GET /api/v1/message/fetch/:user1/:user2': 'MessageController.fetchMessages',
  'GET /api/v1/message/markRead/:id/:conversationId': 'MessageController.markRead',

  // Program Invoice Routes
  'GET /api/v1/programInvoice/user/:id': 'ProgramInvoiceController.fetchUserInvoices',
  'GET /api/v1/programInvoice/:id/approve': 'ProgramInvoiceController.approveInvoice',

};
