const Gato = require('../models/gato');

const gatoCtrl = {};

gatoCtrl.getGatos = async (req, res) => {
    const gatos = await Gato.find();
    res.json(gatos);
};

gatoCtrl.getGato = async (req, res) => {
    const gato = await Gato.findById(req.params.id);
    res.json(gato);
};

gatoCtrl.createGato = async (req, res) => {
    const gato = await Gato(req.body);
    await gato.save();
    res.json({'status': 'Gato creado'});
};

gatoCtrl.editGato = async (req, res) => {
    const { id } = req.params;
    const gato = {
        nombre: req.body.nombre,
        raza: req.body.raza,
        edad: req.body.edad,
        foto: req.body.foto,
    };
    await Gato.findByIdAndUpdate(id, {$set: gato}, {new: true});
    res.json({'status': 'Gato actualizado'});
};

gatoCtrl.deleteGato = async (req, res) => {
    await Gato.findByIdAndRemove(req.params.id);
    res.json({'status': 'Gato eliminado'});
};

module.exports = gatoCtrl;