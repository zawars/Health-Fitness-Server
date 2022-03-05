/**
 * BookingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
  create: async (req, res) => {
    try {
      let body = req.body;
      let timeSlotIds = [];
      let booking = [];

      body.days.forEach((val, idx) => {
        timeSlotIds.push(...val.timeSlots);

        val.timeSlots.map(async timeSlot => {
          let temp = await Booking.create({
            tutorListing: body.tutorListing,
            user: body.user,
            instructor: body.instructor,
            day: val.id,
            timeSlot: timeSlot
          }).fetch();

          booking.push(temp);

          await TimeSlot.update({
            id: timeSlot
          }).set({
            booking: booking[booking.length - 1].id
          });
        });
      });

      await TimeSlot.update({
        id: {
          in: timeSlotIds
        }
      }).set({
        isAvailable: false,
        isTaken: true,
        takenBy: body.user,
      });

      booking = await Booking.find({
        id: _.map(booking, 'id')
      }).populateAll();

      res.ok(booking);
    } catch (error) {
      console.log(error);
    }
  },

  fetchBookingsByUser: async (req, res) => {
    try {
      let bookings = await Booking.find({
        user: req.params.id
      }).sort(`createdAt ${req.query.sort}`).populateAll();

      res.ok(bookings);
    } catch (error) {
      console.log(error);
    }
  },

  fetchBookingsByInstructor: async (req, res) => {
    try {
      let bookings = await Booking.find({
        instructor: req.params.id
      }).sort(`createdAt ${req.query.sort}`).populateAll();

      res.ok(bookings);
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    let booking = await Booking.update({
      id: req.params.id
    }).set({
      ...req.body
    }).fetch();

    res.ok(booking);
  },

  show: async (req, res) => {
    let booking = await Booking.findOne({
      id: req.params.id
    }).populateAll();

    res.ok(booking);
  },

  cancelBooking: async (req, res) => {
    let id = req.params.id;

    let booking = await Booking.findOne({
      id
    }).populateAll();

    await TimeSlot.update({
      id: booking.timeSlot.id
    }).set({
      isTaken: false,
      isAvailable: true,
      takenBy: null,
      booking: null,
    });

    booking = await Booking.update({
      id
    }).set({
      isCancelled: true,
      cancelledBy: req.body.cancelledBy
    }).fetch();

    res.ok({
      ...booking,
      message: 'Booking cancelled.'
    });
  },

  rescheduleBooking: async (req, res) => {
    try {
      let body = req.body;

      let booking = await Booking.findOne({
        id: req.params.id
      }).populateAll();

      await TimeSlot.update({
        id: booking.timeSlot.id
      }).set({
        isTaken: false,
        takenBy: null,
        isAvailable: true,
        booking: null
      });

      let timeSlot = (await TimeSlot.update({
        id: body.newTimeSlot,
      }).set({
        isTaken: true,
        isAvailable: false,
        takenBy: body.user,
        booking: booking.id
      }).fetch())[0];

      booking = (await Booking.update({
        id: booking.id
      }).set({
        timeSlot: timeSlot.id,
        day: body.newDay,
        rescheduledBy: body.rescheduledBy
      }).fetch())[0];

      booking = await Booking.findOne({
        id: booking.id
      }).populateAll();

      res.ok(booking);
    } catch (error) {
      res.ok({
        error
      });
    }
  },

};
