const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const { Image } = require("../utils/multer");
const multer = require("../utils/multer");
const userModel = require("../model/userModel");
const verify = require("../utils/authorize");
const contentModel = require("../model/contentModel");

router.post("/", verify, Image, async (req, res) => {
  try {
    if (req.user.seller) {
      const { description, title, price, category } = req.body;
      const image = await cloudinary.uploader.upload(req.file.path);
      const getUser = await userModel.findById(req.params.id);
      const getContent = new contentModel({
        description,
        title,
        price,
        category,
        image: cloudImage.secure_url,
        imageID: cloudImage.public_id,
      });
      getContent.user = getUser;
      getContent.save();

      getUser.content.push(getContent);
      getUser.save();

      res
        .status(201)
        .json({ message: "content created successfully", data: getContent });
    } else {
      res
        .status(404)
        .json({ message: "you don't have right to perform this operation" });
    }
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
