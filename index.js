const express = require('express');

const PORT = 5000;
console.log("port", PORT);
let app = express();
app.use(express.json())
console.log("hi hello hiii");
app.listen(PORT, () => {
    console.log("server runs successfully", PORT);
})


