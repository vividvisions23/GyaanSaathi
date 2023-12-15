import Class from "../models/Class.js";
import Student from "../models/Student.js";
import Faculty from "../models/Faculty.js";

export const createClass = async (req, res, next) => {

    const newClass = new Class(req.body);
    try {
        const savedClass = await newClass.save();

        // Automatically inject the new class into associated Students and Teachers (kinda confusing)
        await Student.updateMany({ _id: { $in: req.body.students } }, { $addToSet: { classes: savedClass._id } });
        await Faculty.updateMany({ _id: { $in: req.body.teachers } }, { $addToSet: { classes: savedClass._id } });

        res.status(200).json(savedClass);
    } catch (err) {
        next(err);
    }
};

export const updateClass = async (req, res, next) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        // Update Students and Teachers when class is updated
        await Student.updateMany({ _id: { $in: updatedClass.students } }, { $addToSet: { classes: updatedClass._id } });
        await Faculty.updateMany({ _id: { $in: updatedClass.teachers } }, { $addToSet: { classes: updatedClass._id } });
        
        res.status(200).json(sclass);
    } catch (err) {
        next(err);
    }
};

export const deleteClass = async (req, res, next) => {
    try {
        const deletedClass = await Class.findByIdAndDelete(req.params.id);

        // Remove the class from Students and Teachers when class is deleted
        await Student.updateMany({ _id: { $in: deletedClass.students } }, { $pull: { classes: deletedClass._id } });
        await Faculty.updateMany({ _id: { $in: deletedClass.teachers } }, { $pull: { classes: deletedClass._id } });

        res.status(200).json("the Class has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getClass = async (req, res, next) => {
    try {
        const sclass = await Class.findById(req.params.id);
        res.status(200).json(sclass);
    } catch (err) {
        next(err);
    }
};

export const getClasses = async (req, res, next) => {
    try {
        const classes = await Classes.find();
        res.status(200).json(classes);
    } catch (err) {
        next(err)
    }
}