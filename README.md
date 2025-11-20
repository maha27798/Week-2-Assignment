
# 📌 Week 2 – Node.js Authentication & Security Assignment

This project implements **secure user authentication** using Node.js and Express.
It includes **Signup**, **Login**, **Password Hashing**, **Token-based Authentication**, and **Security Headers**.

---

## 🚀 Features Implemented

### ✅ 1. Input Validation & Sanitization

* Used **validator** library
* Validates email format
* Sanitizes inputs before processing

```js
if (!validator.isEmail(email)) {
    return res.status(400).send("Invalid email");
}
```

---

### ✅ 2. Password Hashing

* Implemented using **bcrypt**
* User passwords are hashed before saving

```js
const hashedPassword = await bcrypt.hash(password, 10);
```

---

### ✅ 3. Token-Based Authentication

* Added **jsonwebtoken (JWT)**
* On successful login, a JWT token is generated

```js
const token = jwt.sign({ email }, "secret123", { expiresIn: "1h" });
```

---

### ✅ 4. Secure HTTP Headers

Used **helmet.js** to protect against common attacks:

```js
const helmet = require("helmet");
app.use(helmet());
```

---

## 📡 API Endpoints

### 🔹 **POST /api/signup**

Registers a new user
**Request Body:**

```json
{
  "email": "maha@test.com",
  "password": "123456"
}
```

### 🔹 **POST /api/login**

Authenticates user and returns a JWT token
**Response Example:**

```json
{
  "message": "Login successful",
  "token": "your-jwt-token"
}
```

---

## 🛠 Technologies Used

* Node.js
* Express.js
* bcrypt
* jsonwebtoken
* validator
* helmet
* Thunder Client (for API testing)

---

## 📸 API Testing Screenshots

✔️ **Signup API Response**
✔️ **Login API Response with JWT Token**



## 📁 Project Structure

```
project/
│── app.js
│── userRoutes.js
│── usercontrollers.js
│── authMiddleware.js
│── package.json
└── node_modules/
```

---

## 📥 Installation

```sh
npm install
```

Start server:

```sh
node app.js
```


## 🧑‍💻 Author

**Maha Fatima**
Week-2 Security Assignment


Just tell me **“make it more stylish”** 😊
