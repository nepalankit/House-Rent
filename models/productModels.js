const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    //This section is for basically what things do we need for products
    type: String,
    required: [true, "please enter product name "],
    trim: true, //removes unnecessary white spaces , tabs
  },
  description: {
    type: String,
    required: [true, "please enter product description "],
  },

  price: {
    type: Number,
    required: [true, "please enter product name "],
    maxLength: [8, "price cannot exceed 8 characters"],
  },

  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "please enter product category"],
  },

  numofReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      //reviews section consists of name,rating,comment

      name: {
        type: String,
        required: true,
      },

      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now, //gives current date
  },
});

module.exports = mongoose.model("Prduct", productSchema);
