// models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText:{
    type:String,
    required:true,
  },
  
  createdAt: { type: Date, default: Date.now },
});

module.exports= mongoose.model('Post', postSchema);

