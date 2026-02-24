const Submission = require('../models/Submission');

exports.subscribe = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    try {
        await Submission.add({ type: 'subscribe', email });
        return res.json({ success: true, message: 'Thanks for subscribing!' });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

exports.submitContact = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
    }

    try {
        await Submission.add({ type: 'contact', name, email, message });
        return res.json({ success: true, message: 'Your message has been received.' });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
