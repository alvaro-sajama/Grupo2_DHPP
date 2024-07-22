const db = require('../database/models');
const aspiranteCtrl = {};

//GET obtener listado de todos los aspirantes
aspiranteCtrl.getAspirantes = async (req, res) => {
    try {
        const aspirantes = await db.aspirantes.findAll();
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
    
    Aspirante = db.aspirantes;
    const aspirante = new Aspirante(req.body);
    try {
        console.log('error')
        await aspirante.save();
        res.status(200).json({
            'status': '1',
            'msg': 'aspirante registrado exitosamente'
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({
            'status': '0',
            'msg': error.message
        });
        
    }
};

module.exports = aspiranteCtrl;