const { gucci } = require('../models')
module.exports = {
    // get all gucci
    async index(req, res) {
        try {
            const guccis = await gucci.findAll()
            res.send(guccis)
        } catch (err) {
            res.status(500).send({
                error: 'The guccis information was incorrect'
            })
        }
    },
    // create gucci
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const gucci = await gucci.create(req.body)
            res.send(gucci.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create gucci incorrect'
            })
        }
    },
    // edit gucci, suspend, active
    async put(req, res) {
        try {
            await gucci.update(req.body, {
                where: {
                    id: req.params.gucciId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update gucci incorrect'
            })
        }
    },
    
// delete gucci
async remove(req, res) {
        try {
            const gucci = await gucci.findOne({
                where: {
                    id: req.params.gucciId
                }
            })
            if (!gucci) {
                return res.status(403).send({
                    error: 'The gucci information was incorrect'
                })
            }
            await gucci.destroy()
            res.send(gucci)
        } catch (err) {
            res.status(500).send({
                error: 'The gucci information was incorrect'
            })
        }
    },
    // get gucci by id
    async show(req, res) {
        try {
            const gucci = await gucci.findByPk(req.params.gucciId)
            res.send(gucci)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The gucci information was incorrect'
            })
        }
    }
}
