const express = require('express');
const router = express.Router();

const gato = require('../controllers/gato.controller');

router.get('/', gato.getGatos);
router.post('/', gato.createGato);
router.get('/:id', gato.getGato);
router.put('/:id', gato.editGato);
router.delete('/:id', gato.deleteGato);

module.exports = router;