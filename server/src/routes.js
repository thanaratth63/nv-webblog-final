const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenControllers')
const gucciController = require('./controllers/gucciController')
const gucci = require('./models/gucci.js');
const CommentController = require('./controllers/CommentController')
let multer = require("multer")

let storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, "./public/uploads");
  },
  filename: function (req, file, callback) {
      // callback(null, file.fieldname + '-' + Date.now());
      console.log(file);
      callback(null, file.originalname);
  }
})
let upload = multer({ storage: storage }).array("userPhoto", 10)

module.exports = (app) => {
  app.post('/user',
    UserController.create
  )

  app.put('/user/:userId',
    UserController.put
  )

  app.delete('/user/:userId',
    UserController.remove
  )

  app.get('/user/:userId',
    UserController.show
  )

  app.get('/users',
    isAuthenController,
    UserController.index    
  )

  app.post('/login',
    UserAuthenController.login
  )
  
  app.post('/gucci',
    gucciController.create
  )

  app.put('/gucci/:gucciId',
    gucciController.put
  )

  app.delete('/gucci/:gucciId',
    gucciController.remove
  )

  app.get('/gucci/:gucciId',
    gucciController.show
  )

  app.get('/guccis',
    gucciController.index
  )
  
  app.post('/comment',
    CommentController.create
  )

  app.put('/comment/:commentId',
    CommentController.put
  )

  app.delete('/comment/:commentId',
    CommentController.remove
  )

  app.get('/comment/:commentId',
    CommentController.show
  )

  app.get('/comments',
    CommentController.index
  )

   app.post('/upload', function(req, res){
    upload(req, res, function(err){
      if (err){
        return res.end("Error uploading file. ");
      }
      res.end("File is upload");
    })
  })

  app.post('/upload/delete', async function(req, res){
    try{
      const fs = require('fs');
      console.log(req.body.filename)
      fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename,
         (err) => {
           if (err) throw err;
           res.send("Delete sucessful")
           //console.log('successfully deleted material file');
         });
    }catch (err){
      res.status(500).send({
        error: 'An error has occored trying to delete file the material'
      })
    }
  })

}