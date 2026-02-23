const fs = require('fs/promises');
const path = require('path');
require('dotenv').config();

const DATA_FILE = path.join(__dirname, '..', process.env.DATA_FILE || 'submissions.json');

class Submission {
    static async getAll() {
        try {
            const file = await fs.readFile(DATA_FILE, 'utf-8');
            return JSON.parse(file);
        } catch {
            return [];
        }
    }

    static async add(item) {
        const existing = await this.getAll();
        const newSubmission = {
            ...item,
            createdAt: new Date().toISOString()
        };
        existing.push(newSubmission);
        await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2));
        return newSubmission;
    }
}

module.exports = Submission;
