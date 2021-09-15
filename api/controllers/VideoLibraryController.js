/**
 * VideoLibraryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const fs = require('fs')


module.exports = {
  create: async (req, res) => {
    let body = req.body;

    req.file('attachment').upload({
      dirname: '../../../uploads/'
    }, async function (err, uploadedFiles) {
      if (err) return res.serverError(err);
      // return res.json({
      //   message: uploadedFiles.length + ' file(s) uploaded successfully!',
      //   files: uploadedFiles
      // });

      let attach = await Attachment.create({
        fileName: (uploadedFiles[0].fd.split('\\')).pop(),
        originalName: uploadedFiles[0].filename,
        path: uploadedFiles[0].fd
      }).fetch();

      let videoObj = await VideoLibrary.create({
        title: body.title,
        notes: body.notes,
        video: attach.id,
        user: body.user
      }).fetch();

      res.ok(videoObj);
    });

  },

  update: async (req, res) => {
    let body = req.body;

    if (body.isfileUpdated == 'true') {
      // Delete the previous file
      await Attachment.destroy({
        id: body.videoId
      });

      fs.unlinkSync(body.videoPath);

      req.file('attachment').upload({
        dirname: '../../../uploads/'
      }, async function (err, uploadedFiles) {
        if (err) return res.serverError(err);

        let attach = await Attachment.create({
          fileName: (uploadedFiles[0].fd.split('\\')).pop(),
          originalName: uploadedFiles[0].filename,
          path: uploadedFiles[0].fd
        }).fetch();

        let videoObj = await VideoLibrary.update({
          id: body.id
        }).set({
          title: body.title,
          notes: body.notes,
          video: attach.id,
          user: body.user
        });

        res.ok(videoObj);
      });
    } else {
      let videoObj = await VideoLibrary.updateOne({
        id: body.id
      }).set({
        title: body.title,
        notes: body.notes,
      });

      res.ok(videoObj);
    }

  },

  fetchVideosByUser: async (req, res) => {
    let userId = req.params.id;
    let videos = await VideoLibrary.find({
      user: userId
    }).populateAll();

    res.ok(videos)

  },

};
