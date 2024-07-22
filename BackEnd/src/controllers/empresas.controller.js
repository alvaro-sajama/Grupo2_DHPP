const Empresa = require('./../database/models/empresas');
const empresaCtrl = {};

// GET - Listar todas las empresas

empresaCtrl.getEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        res.json(empresas);
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error al obtener el listado de empresas'
        });
    }

    // POST - Crear una nueva empresa
    empresaCtrl.createEmpresa = async (req, res) => {
        const empresa = new Empresa(req.body);
        try {
            await empresa.save();
            res.json({
                'status': '1',
                'msg': 'empresa creada exitosamente'
            })
        } catch (error) {
            res.status(404).json({
                'status': '0',
                'msg': 'Error al crear la empresa'
            })
        }
    };
};

module.exports = empresaCtrl;