import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        min: [1, "atleast contain one character"]
    },
    description: {
        type: String,
        min: [3, "description is mandatory"]
    },
    date: {
        type: Date
    },
    userId:{
        type:mongoose.Types.ObjectId
    }
})

export const Todo = mongoose.model('Todo',todoSchema);