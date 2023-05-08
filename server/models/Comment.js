const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    id: {
        type: Number,
        required: true,
      
      },
    body: {
      type: String,
      required: true,
 
    }
    
  });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;