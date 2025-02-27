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
  'POST /api/v1/auth/forgetPassword': 'AuthController.forgetPassword',
  'POST /api/v1/auth/forget/verify': 'AuthController.forgetVerify',
  'POST /api/v1/auth/forget/renew': 'AuthController.updateForgetPassword',
  'POST /api/v1/auth/verify': 'AuthController.verify',
  'POST /api/v1/auth/verify/resend': 'AuthController.resendToken',

  // User Controller Routes
  'POST /api/v1/user': 'UserController.create',
  'PATCH /api/v1/user/:id': 'UserController.update',
  'POST /api/v1/user/uploadImage': 'UserController.uploadImage',
  'GET /api/v1/user/:id/client/:client': 'UserController.isClient',
  'GET /api/v1/user/:id/clients/fetch': 'UserController.getClients',
  'GET /api/v1/user/:id/trainers/fetch': 'UserController.getTrainers',
  'GET /api/v1/user/search/:query': 'UserController.search',

  // Exercise Library Controller Routes
  'GET /api/v1/exercise/user/:id/fetch': 'ExerciseController.fetchExerciseByUser',
  'PATCH /api/v1/exercise/:id': 'ExerciseController.update',
  'POST /api/v1/exercise/fetch/populate': 'ExerciseController.fetchExercises',

  // Video Library Controller Routes
  'POST /api/v1/videoLibrary': 'VideoLibraryController.create',
  'GET /api/v1/videoLibrary/user/:id/fetch': 'VideoLibraryController.fetchVideosByUser',
  'PATCH /api/v1/videoLibrary': 'VideoLibraryController.update',

  // Program Controller Routes
  'POST /api/v1/program': 'ProgramController.create',
  'GET /api/v1/program/user/:id': 'ProgramController.fetchUserProgram',
  'PATCH /api/v1/program': 'ProgramController.update',
  'PATCH /api/v1/program/:id/assign': 'ProgramController.assignClientToProgram',
  'GET /api/v1/program/trainee/user/:id/fetch': 'ProgramController.fetchTraineePrograms',
  'GET /api/v1/program/status/:status/:page': 'ProgramController.fetchProgramsByStatus',

  // Conversation Controller Routes
  'GET /api/v1/conversation/fetch/:id': 'ConversationController.fetchConversations',
  'POST /api/v1/conversation': 'ConversationController.create',

  // Messages Controller Routes
  'GET /api/v1/message/fetch/:user1/:user2': 'MessageController.fetchMessages',
  'GET /api/v1/message/markRead/:id/:conversationId': 'MessageController.markRead',

  // Program Invoice Routes
  'GET /api/v1/programInvoice/user/:id': 'ProgramInvoiceController.fetchUserInvoices',
  'GET /api/v1/programInvoice/:id/approve': 'ProgramInvoiceController.approveInvoice',

  // Tutor Listing Routes
  'POST /api/v1/tutorListing': 'TutorListing.create',
  'GET /api/v1/tutorListing/fetch/instructor/:id': 'TutorListing.getAvailablity',
  'GET /api/v1/tutorListing/fetch/organisation/:id': 'TutorListing.getTutorListingByOrganisation',
  'PUT /api/v1/tutorListing/:id': 'TutorListing.update',

  // Booking Routes
  'POST /api/v1/booking': 'Booking.create',
  'GET /api/v1/booking/fetch/user/:id': 'Booking.fetchBookingsByUser',
  'GET /api/v1/booking/fetch/instructor/:id': 'Booking.fetchBookingsByInstructor',
  'PUT /api/v1/booking/:id': 'Booking.update',
  'GET /api/v1/booking/:id': 'Booking.show',
  'PUT /api/v1/booking/:id/cancel': 'Booking.cancelBooking',
  'PUT /api/v1/booking/:id/reschedule': 'Booking.rescheduleBooking',

  // Workout Routes
  'GET /api/v1/workout/user/:id/fetch': 'WorkoutController.fetchWorkoutsByUser',

};
