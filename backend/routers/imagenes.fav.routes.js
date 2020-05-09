const express = require('express');
const router = express.Router();

const image = require('../controllers/imagenes.controller');

router.get('/', image.viewImagenFav);
router.get('/:id', image.getImagenFav)
router.delete('/:id', image.deleteFav);

module.exports = router;