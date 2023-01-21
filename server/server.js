const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://mar815:four1two4@cluster0.c5fts.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
)
  .then(() => { 
    console.log('Successfully connected to MongoDB Atlas!')
  })
  .catch((error) => { 
    console.log('Error connecting to MongoDB Atlas:', error);
  });

const profileSchema = new mongoose.Schema({
  name: String,
  association: String,
  location: String
});

const Profile = mongoose.model('Profile', profileSchema);

app.use(bodyParser.json());

app.post('/profiles', (req, res) => {
  console.log('Data received: ', req.body);
  const profile = new Profile(req.body);
  profile.save()
    .then(profile => {
      console.log('Data saved: ', profile);
      res.status(201).json(profile);
    })
    .catch(err => {
      console.log('Error saving data: ', err);
      res.status(400).json(err);
    });
});

app.listen(3000, () => { 
  console.log('Server is listening on port 3000');
})