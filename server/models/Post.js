const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    id: {
        type: Number,
        required: true,
      
      },
    title: {
      type: String,
      required: true,
 
    },
      body: {
      type: String,
      required: true,
 
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
        ]
  });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;