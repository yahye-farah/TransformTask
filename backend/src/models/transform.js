const mongoose = require('mongoose');

const transformSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    items: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'timestamp',
    },
  }
);

const Transform = mongoose.model('Transform', transformSchema);

module.exports = Transform;
