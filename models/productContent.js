import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  brand: String,
  categoryId: String,
  content: String,
  productName: String,
  unitPrice: {
    type: Number,
    default: 0,
  },
  creator: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ProductContent = mongoose.model("ProductContent", productSchema);

export default ProductContent;
