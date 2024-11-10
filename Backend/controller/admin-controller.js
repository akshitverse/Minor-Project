import User from '../Config/User.js';  
import Contact from '../Config/Contact.js';  

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContact = async (req, res, next) => {
    try {
        const contact = await Contact.find();
        console.log(contact);
        if (!contact || contact.length === 0) {
            return res.status(404).json({ message: "No contact found" });
        }
        return res.status(200).json(contact);
    } catch (error) {
        next(error);
    }
}

// Export the functions
export { getAllUsers, getAllContact };
