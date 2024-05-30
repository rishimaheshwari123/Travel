const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload")

// env configration 
dotenv.config();

// rest object  
const app = express();


// connect to db 
connectDB();
// middleware 
app.use(express.json())
app.use(cors());


app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);
cloudinaryConnect();

// routes 
app.use("/admin", require("./routes/auth"))
// app.use("/api/v1/user", require("./routes/bookingRoute"))
app.use("/admin", require("./routes/cabRoute"))
app.use("/admin", require("./routes/rateRoute"))
// app.use("/api/v1/admin", require("./routes/authRoute"))
// app.use("/api/v1/user", require("./routes/contact"))



const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`)
})
