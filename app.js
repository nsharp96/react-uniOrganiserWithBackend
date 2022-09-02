//Imports 

import express from 'express';
import moduleRouter from './routes/modules.js';
import userRouter from './routes/users.js';

//Configure express app

const app = express();

//Configure middleware

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

app.use(express.json());

//Configure Routes --------------------------------------------------------------
app.use('/api/Modules', moduleRouter);
app.use('/api/users', userRouter);

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));