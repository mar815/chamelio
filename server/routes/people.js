const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

router.get('/', peopleController.getPeople);
router.post('/', peopleController.addPerson);
router.put('/:id', peopleController.updatePerson);
router.delete('/:id', peopleController.deletePerson);

module.exports = router;