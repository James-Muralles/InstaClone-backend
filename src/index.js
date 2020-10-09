import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import {connect} from 'mongoose';


require("dotenv").config();

import middlewares from "./middlewares"
// const middlewares = require("./middlewares").default;




//app config
const app = express();
const port = process.env.PORT || 8080

//middlewares
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
    }))
    app.use(helmet());
    app.use(morgan("common"))
    app.use(express.json())


    // routes
    app.get("/", (req, res) => {
        res.json({
            message: "Hello World!!!",
        });
    });
    
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

    // app.use(middlewares.notFound);
    // app.use(middlewares.errorHandler);

    
    //listener
    app.listen(port, () => {
        console.log(`listening at https://localhost:${port}`);
    });
