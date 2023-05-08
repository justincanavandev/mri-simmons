const mongoose = require('mongoose');

const { Schema } = mongoose;

const authorSchema = new Schema({
    id: {
        type: Number,
        required: true,
      
      },
    name: {
      type: String,
      required: true,
 
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
        ]

  });



const Author = mongoose.model('Author', authorSchema);

module.exports = Author;