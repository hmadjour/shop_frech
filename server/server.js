const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res) => {
  res.send("YOUR EXPRESS BACKEND IS CONNECTED TO REACT");
});
