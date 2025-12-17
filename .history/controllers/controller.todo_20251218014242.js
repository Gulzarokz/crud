import { Todo } from "../models/models.todo.js";

export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: "Title and Description are required" });
        }
        const createtodo = await Todo.create({
            title,
            description
        });
        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            Todo
        })

    } catch (error) {
        console.log(error);

    }
}