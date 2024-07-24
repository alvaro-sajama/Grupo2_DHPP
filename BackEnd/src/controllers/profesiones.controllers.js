const db = require('../database/models');
const profesionCtrl = {};

//GET obtener listado de todas las profesiones
profesionCtrl.getProfesiones = async (req, res) => {
    try {
        const profesiones = await db.Profession.findAll();
        res.json(profesiones);
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error al obtener el listado de profesiones'
        });
    }
};

//POST registrar una profesión
profesionCtrl.createProfesion = async (req, res) => {
    
    Profesion = db.Profession;
    const profesion = new Profesion(req.body);
    try {
        console.log('error')
        await profesion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'profesión registrada exitosamente'
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({
            'status': '0',
            'msg': error.message
        });
        
    }
};

module.exports = profesionCtrl;