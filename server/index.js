const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const dbConnect = require("./db");
const userRoutes= require("./routes/user");
const authRoutes= require("./routes/auth");
const cardRoutes=require("./routes/cards")
dotenv.config()
dbConnect();

const app= express()
app.use(express.json())
app.use(cors())

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/cards",cardRoutes);


port =process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`listening to ${port}...`)
})