import { Request, Response } from "express";
import multer from "multer";
import People from "../model/people.model";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// add new martyers
const addNewMartyers = async (req: Request, res: Response) => {
  try {
    const {
      name,
      age,
      address,
      birthOfDate,
      died,
      institution,
      causeOfDeath,
      history,
    } = req.body;
    const personalImage = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : null;

    const user = await People.create({
      name,
      age,
      address,
      birthOfDate,
      died,
      institution,
      causeOfDeath,
      history,
      personalImage,
    });
    res.status(200).json({
      success: true,
      message: "new martyers added successfully",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all martyers
const getAllMartyers = async (req: Request, res: Response) => {
  try {
    const allPeoples = await People.find();
    res.status(200).json({
      success: true,
      count: allPeoples.length,
      user: allPeoples,
    });
  } catch (err) {
    console.log(err);
  }
};

// edit martyers
const getOneMartyers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    // console.log(userId);
    const findPeople = await People.find({ _id: userId });
    res.status(200).json({
      success: true,
      user: findPeople,
    });
  } catch (err) {
    console.log(err);
  }
};

// update one martyers
const updateOneMartyers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    console.log(req.body);
    const personalImage = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : null;
    const updateData = {
      name: req.body.name,
      age: req.body.age,
      address: req.body.address,
      birthOfDate: req.body.birthOfDate,
      deathOfDate: req.body.deathOfDate,
      institution: req.body.institution,
      causeOfDeath: req.body.causeOfDeath,
      history: req.body.history,
      personalImage: personalImage,
    };

    const findUpdatedMartyers = await People.findByIdAndUpdate(
      userId,
      updateData
    );

    if (findUpdatedMartyers) {
      res.status(200).json({
        success: true,
        message: "user updated successfully",
        user: findUpdatedMartyers,
      });
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something went wrong!!",
    });
    console.log(err);
  }
};

const removeMartyer = async (req: Request, res: Response) => {
  try {
    const { martyerId } = req.params;
    await People.findByIdAndDelete({ _id: martyerId });
    res.status(201).json({
      success: true,
      message: "Martyer deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something went wrong!!",
    });
  }
};

export const peopleController = {
  addNewMartyers,
  getAllMartyers,
  getOneMartyers,
  updateOneMartyers,
  removeMartyer,
  upload,
};
