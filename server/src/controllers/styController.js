const { sty } = require('../models')
module.exports = {
    // get all sty
    async index(req, res) {
        try {
            const stys = await sty.findAll()
            res.send(stys)
        } catch (err) {
            res.status(500).send({
                error: 'The stys information was incorrect'
            })
        }
    },
    // create sty
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const sty = await sty.create(req.body)
            res.send(sty.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create sty incorrect'
            })
        }
    },
    // edit sty, suspend, active
    async put(req, res) {
        try {
            await sty.update(req.body, {
                where: {
                    id: req.params.styId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update sty incorrect'
            })
        }
    },
    
// delete sty
async remove(req, res) {
        try {
            const sty = await sty.findOne({
                where: {
                    id: req.params.styId
                }
            })
            if (!sty) {
                return res.status(403).send({
                    error: 'The sty information was incorrect'
                })
            }
            await sty.destroy()
            res.send(sty)
        } catch (err) {
            res.status(500).send({
                error: 'The sty information was incorrect'
            })
        }
    },
    // get sty by id
    async show(req, res) {
        try {
            const sty = await sty.findByPk(req.params.styId)
            res.send(sty)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The sty information was incorrect'
            })
        }
    }
}
