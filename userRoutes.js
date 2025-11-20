const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

let savedUser = null;

// ---------------- SIGNUP ----------------
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).send("Email and password required");

    if (!validator.isEmail(email))
        return res.status(400).send("Invalid email");

    const hashedPassword = await bcrypt.hash(password, 10);

    savedUser = { email, password: hashedPassword };

    res.send({
        message: "User registered",
        email,
        hashedPassword
    });
});

// ---------------- LOGIN ----------------
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!savedUser)
        return res.status(400).send("No user found, please signup first.");

    // Compare email
    if (email !== savedUser.email)
        return res.status(401).send("Invalid credentials");

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, savedUser.password);

    if (!isMatch)
        return res.status(401).send("Invalid credentials");

    const token = jwt.sign({ email }, "secret123", { expiresIn: "1h" });

    res.send({
        message: "Login successful",
        token
    });
});

module.exports = router;
