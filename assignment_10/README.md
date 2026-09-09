# assignment_10

**Name:** Somyajeet Singh

**Subject:** Backend Development

**Roll Number:** 150096725043

---

## Assignment: Store Data in Firebase Firestore Using Express.js

### Folder Structure
```text
assignment_10/
├── package.json
├── server.js
├── config/
│   └── firebase.js
├── schema/
│   └── userSchema.js
├── router/
│   └── userRouter.js
└── README.md
```

---

## Setup & Configuration

1. Place your Firebase service account JSON key file as `config/serviceAccountKey.json` (or set `FIREBASE_PROJECT_ID` in your environment variables).
2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

Terminal output on start:
```text
Firebase connected successfully
Server is running on http://localhost:3000
```

---

## API Endpoints

### Store User in Firestore
- **Method:** `POST`
- **URL:** `http://localhost:3000/api/users`
- **Headers:** `Content-Type: application/json`

#### 1. Valid Request Body
```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "age": 22,
  "course": "MCA"
}
```

- **Success Response (201 Created):**
```json
{
  "message": "User stored successfully in Firestore",
  "id": "abc123firestoreDocId"
}
```

#### 2. Invalid Request Body (Validation Error)
```json
{
  "name": "",
  "email": "invalid-email",
  "age": -5,
  "course": ""
}
```

- **Error Response (400 Bad Request):**
```json
{
  "message": "Validation failed",
  "errors": [
    "Name is required",
    "Valid email is required",
    "Age is required and must be a valid positive range (1-120)",
    "Course is required"
  ]
}
```
