const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  birthday: { type: Date, required: true },
  username: { type: String, required: true },
  hashed_password: { type: String, required: true },
  program_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true }
});

module.exports = mongoose.model('Student', studentSchema);

