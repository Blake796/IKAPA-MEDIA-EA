# ikapaMedia East Africa - Backend

Modular Node.js/Express backend for the ikapaMedia website.

## Structure
- `models/`: Data logic and file interaction.
- `controllers/`: Request handling and core processing.
- `routes/`: API endpoint definitions.
- `submissions.json`: Local data store for form submissions.

## API Endpoints
- `GET /api/health`: Health check.
- `POST /api/subscribe`: Newsletter subscription.
- `POST /api/contact`: Contact form submission.
- `GET /api/gallery`: Fetch gallery image filenames.

## Setup
1. `npm install`
2. `npm start`
