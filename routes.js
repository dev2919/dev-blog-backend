const express = require('express');
const User = require('./models/User');
const Blog = require('./models/Blog');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/',(req,res) => {
  res.send('User Backend is working');
});


router.get('/blogs', async (req,res) => {
  const blogs = await Blog.find();
  res.send(blogs)
  
});

router.get('/blog/:id', async (req,res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  res.send(blog)
  
});

router.patch('/like/:id', async (req,res) => {
  const id = req.params.id;  
  const like = await Blog.findByIdAndUpdate(id,{"likes": req.body.likes})
  res.send(like);
});

// router.post('/user', async (req,res) => {
//   const users = await User.create(req.body);
//   res.send(users);
// });

router.post('/blog', async (req,res) => {
  const blog = await Blog.create(req.body);
  res.send(blog);
});





// const PRIVATE = "gsrgsdrgsdrg";


// router.post('/login', async (req,res) => {
//   const {email, password} = req.body
//   const user = await User.findOne({email:email});
//   if(user){
//       if(user.password === password){
//         const token = jwt.sign(user.toJSON(),PRIVATE)
//         res.send({token:token})
//       } else {
//         res.status(401).send({message:"Wrong pass boi"})

//       }
//   } else {
//     res.status(401).send({message:"No user found boi"})
//   }
// });

// const authMiddleware = (req,res,next) =>{
//   const token = req.headers.token;
//   try{
//     const decoded = jwt.verify(token,PRIVATE);
//     req.user = decoded; 
//   } catch(error){
//     res.status(401).send({message:"nono spot"})
//   }
//   next();
// }

// router.get('/protected',authMiddleware, (req,res)=>{
//   res.send({message:"YOU MADE IT BOIIIIIIIII",user:req.user});
// })


module.exports = router;
