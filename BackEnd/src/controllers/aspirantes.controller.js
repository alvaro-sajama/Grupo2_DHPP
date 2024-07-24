const db = require('../database/models');
const aspiranteCtrl = {};

//GET obtener listado de todos los aspirantes
aspiranteCtrl.getAspirantes = async (req, res) => {
    try {
        const aspirantes = await db.aspirantes.findAll({
            include: [{
                model: db.Profession,
                as: 'Profesion'
            }]
        });
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

    newBody = {
        nombre: req.body["first-name"],
        apellido: req.body["last-name"],
        telefono: req.body["phone-number"],
        email: req.body.email,
        linkedin_url: req.body["perfil-likedin"],
        fecha_nacimiento: req.body["fecha-nacimiento"],
        imagen: req.file.filename,
        sexo: req.body.sexo,
    }
    
    Aspirante = db.aspirantes;
    const aspirante = new Aspirante(newBody);
    try {
        console.log('error')
        await aspirante.save();
        res.redirect('http://localhost:5173/');
        /* res.status(200).json({
            'status': '1',
            'msg': 'aspirante registrado exitosamente'
        }); */
    } catch (error) {
        console.log(error)
        res.status(404).json({
            'status': '0',
            'msg': error.message
        });
        
    }
};

module.exports = aspiranteCtrl;