const Person = require('../models/person');

exports.getPeople = (req, res) => { 
  Person.find()
    .then(people => res.json(people))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.addPerson = (req, res) => { 
  const newPerson = new Person({
    name: req.body.name,
    affiliation: req.body.affiliation,
    location: req.body.location
  });

  newPerson.save()
    .then(() => res.json('Person added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.updatePerson = (req, res) => { 
  Person.findById(req.params.id)
    .then(person => { 
      person.name = req.body.name;
      person.affiliation = req.body.affiliation;
      person.location = req.body.location;
      person.save()
        .then(() => res.json('Person updated!'))
        .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error: ', err));
};

exports.deletePerson = (req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.json('Person deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};