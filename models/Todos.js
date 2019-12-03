const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});

const Todos = mongoose.model("todos", todoSchema);

module.exports = Todos;

//   todo: {
//     type: String,
//     required: true
//   },
//   status: {
//     type: Boolean,
//     require: true,
//     default: false
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "users"
//   }
