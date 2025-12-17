export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: "Title and Description are required" });
        }
        const createtodo = await 
        
    } catch (error) {
        console.log(error);

    }
}