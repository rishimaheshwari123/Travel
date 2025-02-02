const { uploadImageToCloudinary } = require("../config/imageUploader");
const cabModel = require("../models/cab");

const createCab = async (req, res) => {
  const {
    title,
    desc,
    vName

  } = req.body;

  // console.log(seats)

  const thumbnail = req.files.image;
  try {
    if (!title || !desc || !vName) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Upload the Thumbnail to Cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    const cab = await cabModel.create({
      title,
      desc,
      vName,
      image: thumbnailImage.secure_url,
    });
    res.status(200).send({
      success: true,
      message: "Cab created successfully",
      cab,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in create cab api!",
      error: error.message,
    });
  }
};

const getAllCab = async (req, res) => {
  try {
    const cabs = await cabModel.find({});
    res.status(200).send({
      totalCabs: cabs.length,
      cabs,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting all cabs api!",
      error: error.message,
    });
  }
};



const deleteCab = async (req, res) => {
  try {
    const { id } = req.params

    await cabModel.findByIdAndDelete(id)

    res.status(200).json({
      success: true,
      message: "Cab deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting cab api!",
      error: error.message,
    });
  }
}

module.exports = { createCab, getAllCab, deleteCab };
