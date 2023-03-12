const express = require("express"),
  port = 1020,
  mongoose = require("mongoose"),
  userRoutes = require("./routes/userRoutes"),
  cors = require('cors'),
  resultRoutes = require("./routes/resultRoutes"),
  app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://abhishek123:abhishek123@cluster0.1kbo88a.mongodb.net/testportal?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.use(cors())
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/result", resultRoutes);

app.listen(port, () => console.log(`listening on ${port}`));
