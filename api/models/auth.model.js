const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First name is required'],
    trim: true, 
    minLength: [2, 'First name must be at least 2 characters'],
    maxLength: [50, 'First name cannot exceed 50 characters']
  },
  
  lastname: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minLength: [2, 'Last name must be at least 2 characters'],
    maxLength: [50, 'Last name cannot exceed 50 characters']
  },


  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
    lowercase: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },

  phoneno: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{10,15}$/, 'Phone number must contain between 10 and 15 digits'] 
  },

  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minLength: [10, 'Message must be at least 10 characters long'],
    maxLength: [500, 'Message cannot exceed 500 characters']
  }
  
}, { timestamps: true }); 


authSchema.pre('save', function(next) {
  
  next();
});


module.exports = mongoose.model('Auth', authSchema);
