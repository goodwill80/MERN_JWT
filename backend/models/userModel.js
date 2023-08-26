import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Create user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// Action to be done before the user is save - Hash password b4 saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Add methods to userSchema - Compare passwords to generate true or false
userSchema.methods.matchPasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create a model with mongoose named 'User' with the userSchema above
const User = mongoose.model('User', userSchema);

// Export the User
export default User;
