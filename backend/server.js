const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const { errorHandler } = require("./middleware/errorMiddleware");


dotenv.config();
console.log("JWT_SECRET VALUE:", process.env.JWT_SECRET);

connectDB();


const app = express();


// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);


// Error Handler (must be last)
app.use(errorHandler);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});