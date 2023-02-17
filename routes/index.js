var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res,)=> {
  //display current date
  let date = new Date
  res.render('index', { 
    title: 'This Is My Life',
    date : date
  });
});

router.get('/about',(req, res)=>{
  //Displaying current date
  
  res.render('about', {
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
