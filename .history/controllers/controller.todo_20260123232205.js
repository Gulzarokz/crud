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

        const todo = Todo.create({
            title,
            description
        })

        return res.status(201).json({
            success: true,
            message: "Todo created successfully",

        })

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

export const updateTodo = async (req, res) => {
    try {
        // const todoId = req.params.id;
        const { id } = req.params;
        const { title } = req.body;

        const todo = await Todo.findByIdAndUpdate(id, title, { new: true });

        return res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            todo
        });

    } catch (error) {
        console.log(error);
    }
}
