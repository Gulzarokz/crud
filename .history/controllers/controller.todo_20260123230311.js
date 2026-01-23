import { Todo } from "../models/models.todo.js";

export const createTodo = (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            })
        }

        const todo = await Todo.create({
            title,
            description
        })

        todo.save();
    } catch (error) {
        console.log(error);

    }
}

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.findOne();
        return res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        console.log(error);

    }
}


