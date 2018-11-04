var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/myDatabase");
const userSchema = require("./../databaseChema/user");
// const userSchema = new mongoose.Schema({
// 	username: String,
// 	password: String,
// });
const user = mongoose.model('user', userSchema);

router.get("/", (req,res)=>{
	res.render("register.pug");
})

router.post("/", function(req, res){
   console.log(req.body);
   user.findOne({"username": req.body.email}, function(error, result){
   	if(error) console.log(error);
   	if(result != null){
   		res.render("failed");
   	}else{
   		user.create({
   		username: req.body.email,
   		password: req.body.password
   })
   res.render("success");
   	}
   })
});

module.exports = router;