/**
 * VideoLibraryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    let body = req.body;
    console.log(body)

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
        video: attach.id
      }).fetch();

      res.ok(videoObj);
    });

  },

};
