const express = require("express");
const app = express();
const contactUsRoute = require("./routes/Contact")
const database = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");


 


dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

app.use(express.json());
 
app.use(
	cors({
		origin:"*",
		credentials:true,
	})
)

app.use("/api/v1/reach", contactUsRoute);

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is  running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
