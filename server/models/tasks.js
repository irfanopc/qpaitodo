const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  todo: {
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
}
});

module.exports = mongoose.model("todo",taskSchema);