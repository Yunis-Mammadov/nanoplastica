const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();



app.use(cors());
app.use(bodyParser.json());
dotenv.config();
const router = require("./routes");

app.use("/api/navbarLinks", router.navbarLinks_router);
app.use("/api/keratin", router.keratin_router);
app.use("/api/fenler", router.fenler_router);
app.use("/api/utuler", router.utuler_router);
app.use("/api/sacqulluq", router.sacqulluq_router);
app.use("/api/contact", router.contact_router);
app.use("/api/socialMediaLinks", router.socialMediaLinks_router);
// app.use('/api/user', router.user_routes);
// app.use("/api/login", router.login_routes)
app.use("/api/setler", router.setler_routes)
app.use("/api/suallar", router.suallar_routes)


PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on PORT:${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION
mongoose.connect(DB_CONNECTION.replace('<password>', DB_PASSWORD), {

  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {


    console.log('Mongo DB connected');
  })
  .catch((error) => {
    console.error('Mongo DB connection error:', error);
  });
