import Visitor from "../mongodb/models/visitor.js";
import User from "../mongodb/models/user.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const getAllVisitors = async (req, res) => {
  const {
    _end,
    _order,
    _start,
    _sort,
    fullName_like = "",
    city = "",
  } = req.query;

  const query = {};

  if (city !== "") {
    query.city = city;
  }

  if (fullName_like) {
    query.fullName = { $regex: fullName_like, $options: "i" };
  }

  try {
    const count = await Visitor.countDocuments({ query });

    const visitors = await Visitor.find(query)
      .limit(_end)
      .skip(_start)
      .sort({ [_sort]: _order });

    res.header("x-total-count", count);
    res.header("Access-Control-Expose-Headers", "x-total-count");

    res.status(200).json(visitors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getVisitorDetail = async (req, res) => {
  const { id } = req.params;
  const visitorExists = await Visitor.findOne({ _id: id });

  if (visitorExists) {
    res.status(200).json(visitorExists);
  } else {
    res.status(404).json({ message: "Visitor not found" });
  }
};

const createVisitor = async (req, res) => {
  try {
    const { fullName, phoneNumber, city, property, company, plateNumber } =
      req.body;

    const newVisitor = await Visitor.create({
      fullName,
      phoneNumber,
      city,
      property,
      company,
      plateNumber,
    });

    res.status(200).json({ message: "Visitor created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVisitor = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, phoneNumber, city, property, company, plateNumber } =
      req.body;

    await Visitor.findByIdAndUpdate(
      { _id: id },
      {
        fullName,
        phoneNumber,
        city,
        property,
        company,
        plateNumber,
      }
    );

    res.status(200).json({ message: "Visitor updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVisitor = async (req, res) => {
  const { id } = req.params;

  let visitorToDelete = await Visitor.findById({ _id: id })
    .then(async (val) => {
      return await Visitor.deleteOne({ _id: id })
        .then(() => true)
        .catch((err) => err);
    })
    .catch((err) => err);

  if (visitorToDelete)
    return await res
      .status(200)
      .json({ message: "Visitor deleted successfully" });
  return await res.status(500).json({ message: error.message });
};

export {
  getAllVisitors,
  getVisitorDetail,
  createVisitor,
  updateVisitor,
  deleteVisitor,
};
