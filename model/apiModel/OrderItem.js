const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItemSchema = Schema({
  quantity: {
    type: Number,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

module.exports = mongoose.model("OrderItem", orderItemSchema);
