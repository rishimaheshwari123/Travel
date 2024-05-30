const RateModel = require("../models/Rate")

const createRate = async (req, res) => {
    try {
        const { car, seat, rate } = req.body;
        const rates = await RateModel.create({ car, seat, rate });
        res.status(201).send({
            success: true,
            message: "Rate created successfully!",
            rates
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in creating rate api!",
            error: error.message,
        });
    }
}


const getRate = async (req, res) => {
    try {
        const rates = await RateModel.find({});
        if (rates.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No rates found",
            });
        }
        res.status(200).send({
            totalCabs: rates.length,
            rates,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in getting all rate API",
            error: error.message,
        });
    }
};


const deleteRate = async (req, res) => {
    try {
        const { id } = req.params

        await RateModel.findByIdAndDelete(id)

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

module.exports = { createRate, getRate, deleteRate }