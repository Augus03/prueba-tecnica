const express = require('express');
const router = express.Router();

const image = require('../controllers/imagenes.controller');

router.get('/', image.getImagenes);
router.post('/:id', image.addImagenFav);

module.exports = router;