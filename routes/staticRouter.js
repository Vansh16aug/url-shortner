const express = require("express");
const router = express.Router();
const URL=  require("../models/url");
const { restrictTo } = require("../middlewares/auth");

router.get('/admin/urls', restrictTo(["ADMIN"]) ,async (req,res)=>{
    // console.log(req.user.name);
    const allurls = await URL.find({});
    return res.render('home', {
        urls: allurls,
        email: req.user.email,
        role: req.user.role,
    });
    
});


router.get('/', restrictTo(["NORMAL","ADMIN"]) ,async (req,res)=>{
    const allurls = await URL.find({ createdBy: req.user._id  });
    console.log(req.user);
    return res.render('home',{
        urls: allurls,
        email: req.user.email,
        role: req.user.role,
    });
});

router.get("/signup", (req, res) => {
    return res.render("signup");
});
router.get("/signin", (req, res) => {
    return res.render("signin");
});
module.exports=router;