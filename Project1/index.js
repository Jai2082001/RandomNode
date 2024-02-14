const express = require('express');

const app = express();
const indexRoute = require('./routes/indexRoutes/indexRoute')
app.use(express.json());
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs');


app.use('/', indexRoute);



app.listen(PORT, (req, res)=>{
    console.log('SERVER WORKING ON' + PORT);
})


