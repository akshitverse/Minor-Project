import express from 'express';  
import { getAllUsers, getAllContact } from '../controller/admin-controller.js'; // ES module import
const router = express.Router();

// Define the routes
router.route('/users').get(getAllUsers);
router.route('/contact').get(getAllContact);

// Export the router
export default router;
