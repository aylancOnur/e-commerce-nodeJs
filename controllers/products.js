import mongoose from "mongoose";
import ProductContent from "../models/productContent.js";

export const getProducts = async (req, res) => {
  try {
    const productContent = await ProductContent.find();

    res.status(200).json(productContent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new ProductContent(product);
  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No product with that id");

  const updatedProduct = await ProductContent.findByIdAndUpdate(
    _id,
    { ...product, _id },
    {
      new: true,
    }
  );

  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No product with that id");

  await ProductContent.findByIdAndRemove(id);

  console.log("DELETE!");

  res.json({ message: "Product deleted successfully" });
};
