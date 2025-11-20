

# **Week 2 – Secure Authentication API (Signup + Login)**

This project implements a secure authentication system using **Node.js**, **Express**, **bcrypt**, **JWT**, **Validator**, and **Helmet**.
It includes secure **Signup**, **Login**, and **Token-based authentication**, along with input validation and password hashing.



## 🚀 **Features Implemented**

### ✅ 1. **Signup API**

* Validates user input (email + password)
* Uses **validator.js** to check valid email
* Hashes password using **bcrypt**
* Stores user temporarily (in-memory variable)

### ✅ 2. **Login API**

* Verifies email + hashed password
* Generates **JWT token** on successful login
* Returns token in response
* Proper error handling for invalid credentials

### ✅ 3. **Security Enhancements**

* **Helmet** added to secure HTTP headers
* **bcrypt** for password hashing
* **validator.js** for sanitization and validation
* **jsonwebtoken (JWT)** for secure authentication

---

## 📦 **Installed Packages**

```
npm install express bcrypt jsonwebtoken validator helmet cors
```

---

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

## 🔗 **API Endpoints**

### **POST /api/signup**

Registers a new user.

#### Sample Request

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

#### Sample Response

```json
{
  "message": "User registered",
  "email": "test@example.com",
  "hashedPassword": "..."
}
```

---

### **POST /api/login**

Logs in the user & returns JWT token.

#### Sample Request

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

#### Sample Response

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOi..."
}
```

---

## 🛡️ **Security Measures Used**

### ✔ Input Validation

```js
if (!validator.isEmail(email)) {
    return res.status(400).send("Invalid email");
}
```

### ✔ Password Hashing

```js
const hashedPassword = await bcrypt.hash(password, 10);
```

### ✔ JWT Token Generation

```js
const token = jwt.sign({ email }, "secret123", { expiresIn: "1h" });
```

### ✔ Security Headers

```js
const helmet = require("helmet");
app.use(helmet());
```

---

## 🧪 **API Testing Screenshots**

* ✔ Signup Test
* ✔ Login Test

(Upload your two Thunder-Client screenshots here)

---

## ☁️ **How to Run the Project**

### 1. Install dependencies

```
npm install
```

### 2. Start server

```
node app.js
```

### 3. Open API tester (Thunder Client / Postman)

Use:

```
http://localhost:3000/api/signup
http://localhost:3000/api/login
```




