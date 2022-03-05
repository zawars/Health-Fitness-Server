/**
 * TutorListingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const moment = require('moment');

module.exports = {
  getAvailablity: async (req, res) => {
    let listing = await TutorListing.findOne({
      instructor: req.params.id,
    }).populate('instructor');

    if (listing) {
      let days = await Day.find({
        listing: listing.id,
        date: {
          ">=": req.query.from ? new Date(moment(req.query.from).format('Y-M-D')).toISOString() : new Date(moment().format('Y-M-D')).toISOString(),
          "<": req.query.to ? new Date(moment(req.query.to).format('Y-M-D')).toISOString() : new Date(moment().add(28, 'days').format('Y-M-D')).toISOString()
        }
      }).populateAll();

      let count = 0;
      days.forEach(async (val, idx) => {
        let timeSlots = _.map(val.timeSlots, 'id');

        let temp = await TimeSlot.find({
          id: timeSlots
        }).populateAll();

        val.timeSlots = temp;
        count++;

        if (count == days.length) {
          listing.days = days;
          res.ok(listing);
        }
      });

    }

  },

  create: async (req, res) => {
    let body = req.body;
    createTutor(res, body);
  },

  getTutorListingByOrganisation: async (req, res) => {
    let users = await User.find({
      organisation: req.params.id
    });

    res.ok(users);
  },

  update: async (req, res) => {
    let body = req.body;

    if (body.cancelled || body.new) {
      if (body.cancelled && body.cancelled.days.length > 0) {
        let timeSlotIds = [];

        body.cancelled.days.forEach((day, idx) => {
          if (day.timeSlots.length > 0) {
            timeSlotIds.push(...day.timeSlots);
          }
        });

        if (timeSlotIds.length > 0) {
          await Booking.update({
            timeSlot: timeSlotIds
          }).set({
            isCancelled: true
          });

          await TimeSlot.destroy({
            id: {
              in: timeSlotIds
            }
          });

          if (body.new && body.new.days.length == 0) {
            res.ok({
              message: 'TimeSlots cancelled successfully.'
            });
          }
        }
      }

      if (body.new && body.new.days.length > 0) {
        let tutor = await TutorListing.findOne({
          id: req.params.id
        });

        // body.instructor = tutor ? tutor.instructor : null;
        body.days = body.new.days;
        createTutor(res, body);
      }
    } else {
      res.ok({
        message: 'There is no cancelled and new timeSlots.'
      });
    }
  },
};

const createTutor = async (res, body) => {
  let count = 0;
  let oldDaysCount = 0;
  let days;
  let dayIds = [];

  if (body.days.length > 0) {
    let daysData = JSON.parse(JSON.stringify(body.days));
    let newDays = [];
    let oldDays = [];
    let oldDaysTimeSlots = [];

    daysData.map(val => {
      if (val.type) {
        if (val.type == 'new') {
          val.unix = new Date(val.date).getTime();
          val.date = new Date(val.date).toISOString();
          newDays.push(val);
        } else if (val.type == 'old') {
          oldDays.push(val);
          oldDaysTimeSlots.push(JSON.parse(JSON.stringify(val.timeSlots)));
        }
      } else {
        val.unix = new Date(val.date).getTime();
        val.date = new Date(val.date).toISOString();
        newDays.push(val);
      }

      delete(val.timeSlots);
    });

    days = await Day.createEach(newDays).fetch();
    dayIds = _.map(days, 'id');

    if (newDays.length > 0) {
      days.forEach(async (val, idx) => {
        if (body.days[idx].timeSlots.length > 0) {
          let timeSlots = await TimeSlot.createEach(body.days[idx].timeSlots).fetch();
          let timeSlotIds = _.map(timeSlots, 'id');

          await Day.addToCollection(val.id, 'timeSlots').members(timeSlotIds);

          count++;
          if (count == days.length) {
            if (oldDays.length > 0) {
              oldDays.forEach(async (oldDay, idx) => {
                let timeSlots1 = await TimeSlot.createEach(oldDaysTimeSlots[idx]).fetch();
                let timeSlotIds1 = _.map(timeSlots1, 'id');

                await Day.addToCollection(oldDay.date, 'timeSlots').members(timeSlotIds1);
                oldDaysCount++;

                if (oldDaysCount == oldDays.length) {
                  sendResponse(res, true, dayIds, body);
                }
              });
            } else {
              sendResponse(res, true, dayIds, body);
            }
          }
        } else {
          sendResponse(res, true, dayIds, body);
        }
      });
    } else { // Only old days are provided
      oldDays.forEach(async (oldDay, idx) => {
        let timeSlots1 = await TimeSlot.createEach(oldDaysTimeSlots[idx]).fetch();
        let timeSlotIds1 = _.map(timeSlots1, 'id');

        await Day.addToCollection(oldDay.date, 'timeSlots').members(timeSlotIds1);
        oldDaysCount++;

        if (oldDaysCount == oldDays.length) {
          sendResponse(res, true, [], body);
        }
      });
    }
  } else {
    sendResponse(res, false, [], body);
  }
}

const sendResponse = async (res, flag, dayIds, body) => {
  let tutorListing = await TutorListing.findOne({
    instructor: body.instructor
  });

  if (flag) {
    if (!tutorListing) {
      tutorListing = await TutorListing.create({
        instructor: body.instructor,
        days: dayIds
      }).fetch();
    } else {
      await TutorListing.addToCollection(tutorListing.id, 'days').members(dayIds);
    }

    tutorListing.days = await Day.find({
      listing: tutorListing.id
    }).populateAll();

    res.ok(tutorListing);
  } else {
    let listing = await TutorListing.create({
      instructor: body.instructor,
    }).fetch();

    res.ok(listing);
  }
}
