# Portfolio Backend Server

Backend server for handling contact form submissions using Express and Nodemailer.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
ADMIN_EMAIL=your-email@gmail.com
PORT=5000
```

### Gmail Setup
- Enable 2-Factor Authentication on your Gmail account
- Generate an [App Password](https://myaccount.google.com/apppasswords)
- Use the App Password in `EMAIL_PASSWORD`

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### POST `/api/contact`
Sends a contact form email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "projectType": "Web Development",
  "message": "Your message here"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "error": "Error message"
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "Server is running"
}
```

## CORS Configuration

The server allows requests from `http://localhost:3000` by default. Update CORS settings in `server.js` for production.

## Notes

- Make sure your Gmail account has "Less secure app access" disabled if using App Passwords
- The server sends two emails: one to admin, one to the user as confirmation
- All form fields are validated before sending
