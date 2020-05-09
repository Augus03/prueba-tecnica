const request = require('request');
const Fav = require('../models/favoritos');
const API_KEY = 'f221c99b-304d-4404-b111-cbd3ddccf31a';

imageCtrl = {};

imageCtrl.getImagenes = (req, res) => {
    let option = ({
        url: 'https://api.thecatapi.com/v1/images/search?limit=10&page=10',
        method: 'GET',
        json: true,
        headers: {
            'secret-key': API_KEY
        }
    });

    request(option, (err, req) => {
        res.send(req.body);
    });
};

imageCtrl.addImagenFav = (req, res) => {
    const fav = Fav(req.body);
    fav.save();
    res.json({'status': 'Imagen guardada'})
};

imageCtrl.viewImagenFav = async (req, res) => {
    const favs = await Fav.find();
    res.json(favs);
};

imageCtrl.getImagenFav = async (req, res) => {
    const fav = await Fav.findById(req.params.id);
    res.json(fav);
};

imageCtrl.deleteFav = async (req, res) => {
    await Fav.findByIdAndRemove(req.params.id);
    res.json({'status': 'Imagen eliminada'});
};

module.exports = imageCtrl;