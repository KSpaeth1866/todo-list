const express = require('express');
const app = express();
app.use(express.static('build'));

const dbRoutes = require('./routes/databaseAccess.js');
app.use('/db', dbRoutes);

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("\n\nListening on port: ", port);
})
