const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.json({
        application: "Enterprise Release Engineering Platform",
        version: "1.0.0",
        status: "running"
    });
});


app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});


app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});