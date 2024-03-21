const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectToMongoDb } = require("./connect");
const {checkForAuth , restrictTo} = require('./middlewares/auth');

const URL = require("./models/url");

const app = express();
const PORT = 8001;

//routes
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

connectToMongoDb("mongodb://localhost:27017/url-shortner").then(() =>
  console.log("Mongodb connected")
);

//ejs
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuth);

app.use("/url",restrictTo(["NORMAL","ADMIN"]), urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  
  if (entry && entry.redirectURL) {
    res.redirect(entry.redirectURL);
  } else {
    res.status(404).send("URL not found");
  }
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
