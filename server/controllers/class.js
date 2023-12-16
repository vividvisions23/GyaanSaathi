import Class from "../models/Class.js";
import Student from "../models/Student.js";

export const createClass = async (req, res, next) => {

    const newClass = new Class(req.body);
    try {
        const savedClass = await newClass.save();
        res.status(200).json(savedClass);
    } catch (err) {
        next(err);
    }
};

export const updateClass = async (req, res, next) => {
    try {
        const sclass = await Class.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(sclass);
    } catch (err) {
        next(err);
    }
};

export const deleteClass = async (req, res, next) => {
    try {
        const deletedClass = await Class.findById(req.params.id);

        if (!deletedClass) {
        return res.status(404).json({ message: 'Class not found' });
        }

        // Remove class reference from associated students
        await Student.updateMany(
        { class: deletedClass._id },
        { $unset: { class: 1 } }
        );

        // Now, delete the class
        await deletedClass.remove();

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
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (err) {
        next(err)
    }
}
