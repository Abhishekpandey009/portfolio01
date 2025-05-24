import express from 'express';
import Contact from '../models/Contact.js';
import Project from '../models/Project.js';

const router = express.Router();

// Contact routes
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }
    
    const newContact = new Contact({
      name,
      email,
      message
    });
    
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Project routes
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/projects/featured', async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ date: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;