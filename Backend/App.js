import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import './Config/dbConn.js'; // Import the database connection
import adminRoute from './routes/adminRoute.js'; // Assuming this exists for '/api/admin'
import User from './Config/User.js'; 
import Contact from './Config/Contact.js';

const app = express();
const port = 3001;

app.use("/api/admin", adminRoute);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'accesszone79@gmail.com',
        pass: 'ftmy tvdc ehzg qyfs',
    }
});

// Sign up API
app.post('/', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(chalk.inverse.red('Error saving user:', error));
        res.status(500).json({ message: 'Error saving user data' });
    }
});

// Login API
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.status(200).send('success');
            } else {
                res.status(400).send('password incorrect');
            }
        } else {
            res.status(400).send('you have to register before login');
        }
    } catch (error) {
        console.log(chalk.inverse.red('Error during login:', error));
        res.status(500).json({ message: 'An error occurred during login' });
    }
});

// Contact us API
app.post('/contact', async (req, res) => {
    try {
        const { fullname, email, phone, message } = req.body;
        const { firstname, lastname } = fullname;

        const newContact = new Contact({ fullname, email, phone, message });
        await newContact.save();

        const mailOptions = {
            from: 'accesszone79@gmail.com',
            to: email,
            subject: 'Welcome to Access Zone',
            text: `Dear ${firstname} ${lastname},\n\nThank you for getting in touch with us. We appreciate your effort and look forward to helping those in need.\n\nBest regards,\nAccess Zone Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(chalk.red('Error sending email:', error));
                return res.status(500).json({ alert: 'Data saved, but error occurred while sending email.' });
            }
            console.log('Email sent:', info.response);
            res.status(201).json({ alert: 'Contact form data saved and email sent successfully' });
        });

    } catch (error) {
        console.log(chalk.inverse.red('Error saving contact form data:', error));
        res.status(500).json({ alert: 'Error occurred while saving data' });
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.inverse.red(err));
    } else {
        console.log(chalk.inverse.green(`Server is running on port ${port}`));
    }
});
