const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const app = express();
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(bodyParser.json());
dotenv.config();
const router = require("./routes");

app.use("/api/navbarLinks", router.navbarLinks_router);
app.use("/api/keratin", router.keratin_router);
app.use("/api/fenler", router.fenler_router);
app.use("/api/utuler", router.utuler_router);
app.use("/api/sacqulluq", router.sacqulluq_router);
app.use("/api/suallar", router.suallar_router);
app.use("/api/contact", router.contact_router);
app.use("/api/socialMediaLinks", router.socialMediaLinks_router);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });


app.post("/api/upload", upload.single("file"), function (req, res) {
  var tmp_path = req.file.path;
  var target_path = 'uploads/' + req.file.originalname;
  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  
  src.pipe(dest);
  src.on('end', function () { res.json({ message: "Dosya yüklendi.", filename: req.file.filename }); });
  src.on('error', function (err) { res.status(500).json({ error: "Dosya yükleme hatası." }); });
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on PORT:${PORT}`);
});

DB_CONNECTION = process.env.DB_CONNECTION;
mongoose.connect(DB_CONNECTION);
