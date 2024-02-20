const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();



app.use(cors({
  origin: 'https://nanoplastica.az', // Sadece belirli bir origin'den gelen isteklere izin ver
  credentials: true // Gerekirse, credentails kullanılacaksa
}));
app.use(bodyParser.json());
require('dotenv').config();
const router = require("./routes");

app.use("/api/navbarLinks", router.navbarLinks_router);
app.use("/api/keratin", router.keratin_router);
app.use("/api/fenler", router.fenler_router);
app.use("/api/utuler", router.utuler_router);
app.use("/api/sacqulluq", router.sacqulluq_router);
app.use("/api/contact", router.contact_router);
app.use("/api/socialMediaLinks", router.socialMediaLinks_router);
app.use('/api/user', router.user_routes);
app.use("/api/login", router.login_routes)
app.use("/api/setler", router.setler_routes)
app.use("/api/suallar", router.suallar_routes)


PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on PORT:${PORT}`);
});

DB_CONNECTION = process.env.DB_CONNECTION;
mongoose.connect(DB_CONNECTION);
