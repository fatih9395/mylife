var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res,)=> {
  res.render('index', { title: 'This Is My Life' });
});

router.get('/about',(req, res)=>{
  //Displaying current date
  let date = new Date();
  res.render('about', {
    date : date, 
    //Adding a title for our page
    title : 'Purpose of the Site'
  });
});

router.get('/father',(req, res)=>{
  res.render('father',{
    title : 'Father'
  });
});

router.get('/mother',(req, res)=>{
  res.render('mother',{
    title : 'Mother'
  });
});

router.get('/brother',(req, res)=>{
  res.render('brother',{
    title : 'Brother'
  });
});

module.exports = router;
