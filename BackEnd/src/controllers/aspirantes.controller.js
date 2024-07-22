const Aspirante = require('./../database/models/aspirantes');
const aspiranteCtrl = {};

//GET obtener listado de todos los aspirantes
aspiranteCtrl.getAspirantes = async (req, res) => {
    try {
        const aspirantes = await Aspirante.findAll();
        res.json(aspirantes);
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error al obtener el listado de aspirantes'
        });
    }
};

//POST registrar un aspirante
aspiranteCtrl.createAspirante = async (req, res) => {
    const aspirante = new Aspirante(req.body);
    try {
        await aspirante.save();
        res.status(200).json({
            'status': '1',
            'msg': 'aspirante registrado exitosamente'
        });
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error al registrar aspirante'
        });
        
    }
};

module.exports = aspiranteCtrl;