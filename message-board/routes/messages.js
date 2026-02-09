var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Get messages")
})

router.post("/post", (req, res, next) => {
    res.send("post messages")
})

router.delete("/delete", function(req, res, next) {
    res.send("delete messages")
})

module.exports = router;