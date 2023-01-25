const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const peopleRoutes = require('./routes/people');

dotenv.config({path: __dirname + '/config/.env'});

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Use imported routes
app.use('/people', peopleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
  console.log(`Server started on port ${PORT}`);
})