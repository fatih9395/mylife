var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res,)=> {
  res.render('index', { title: 'This Is My Life' });
});

router.get('/about',(req, res)=>{
  res.render('about');
});

module.exports = router;
