var express = require('express');
var router = express.Router();

router.get("/", (req,res)=>{
	res.render("signin");
});

router.post('/', function(req, res){
   console.log(req.body);
   res.cookie("name", "hoang").send("đã gửi cookie");
});


module.exports = router;