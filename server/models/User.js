const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  water: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Water',
    },
  ],
  outside: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Outside',
    },
  ],
  sleep: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sleep',
    },
  ],
  intention: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Intention',
    },
  ],
  thought: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  picture: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Picture',
    },
  ],
  mood: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Mood',
    },
  ],
  social: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Social',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;