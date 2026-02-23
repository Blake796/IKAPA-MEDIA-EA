const fs = require('fs/promises');
const path = require('path');
require('dotenv').config();

exports.getGalleryImages = async (req, res) => {
    try {
        const frontendPath = process.env.FRONTEND_PATH || '../frontend';
        const photosDir = path.join(__dirname, '..', frontendPath, 'images');
        const files = await fs.readdir(photosDir);
        const images = files.filter((file) => /\.(jpe?g|png|gif)$/i.test(file));
        res.json({ success: true, images });
    } catch (err) {
        console.error('Gallery read error', err);
        res.status(500).json({ success: false, message: err.message });
    }
};
