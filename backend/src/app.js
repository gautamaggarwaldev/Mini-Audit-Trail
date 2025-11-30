const express = require('express');
const cors = require('cors');
const versionRoutes = require('./routes/versionRoute');


const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/versions', versionRoutes);


app.get('/', (req, res) => res.send('Mini Audit Trail Backend'));


module.exports = app;