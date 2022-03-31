import "./db"
import "./models/User";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import offRouter from "./routers/offRouter";
import onRouter from "./routers/onRouter";



const app = express();
const bodyParser = require('body-parser');
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views" ,process.cwd() + "/src/views");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger);
app.use("/",globalRouter);
app.use("/on", onRouter);
app.use("/off", offRouter);

const PORT = 3003;


const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening)

