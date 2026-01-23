
export const createTodo = (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            })
        }

        const todo = await
    } catch (error) {
        console.log(error);

    }
}


