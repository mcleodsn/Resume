var Users = require('../libs/Users');
var Files = require('../libs/Files')
var router = require('express').Router();
var multer = require('multer');

/* GET users listing. */
//  GET  http://localhost:3000/users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login',  function(req, res, next) {
  console.log(req.body);
  Users
    .getByEmail(req.body.username)
    .then(function(user) {
      if ( user.password == req.body.password) {
        if ( user.admin ){
          return res.redirect('/users/list')
        }
        res.redirect('/users/uploadResume');
      } else {
        res.redirect('/login');
      }
      console.log(user);
    })
    .catch(function (err){
      console.log(err);
    });

    router.get('/uploadResume', function(req, res){
      res.render('resume', {title: 'upload page'});
    });
});

router.get('/list', function(req, res) {
  Files
    .list()
    .then(files => {
      res.render('list', {
        files
      });
    })

});

router.get('/download/:id', function(req, res) {
  console.log(req.params.id);
  Files
    .get(req.params.id)
    .then(file => {
      console.log(file);
      res.download(file.path);
    });


});

router.post('/uploadResume', multer({ dest: 'C://Users//testuser//Desktop//resume_project//uploads'}).single('upl'), function(req, res) {
  console.log(req.body);


  Files
    .create(
      req.file.path,
      req.file.originalname
    )
    .then(file => {
      console.log(file);
      res.send('Thank you for your interest, we will get back to you as soon as possible!');
    });
});



module.exports = router;
