'use strict'
const Biaya = use('App/Models/Biaya')
    /** @typedef {import('@adonisjs/framework/src/Request')} Request */
    /** @typedef {import('@adonisjs/framework/src/Response')} Response */
    /** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with biayas
 */
class BiayaController {
    /**
     * Show a list of all biayas.
     * GET biayas
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let biaya = await Biaya.all()
        return response.json(biaya)
    }


    /**
     * Create/save a new biaya.
     * POST biayas
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const kls_biaya = request.input('kls_biaya')
        const nominal = request.input('nominal')

        const biaya = new Biaya()

        biaya.kls_biaya = kls_biaya
        biaya.nominal = nominal

        await biaya.save()
        return response.json(biaya)
    }

    /**
     * Display a single biaya.
     * GET biaya/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        const biaya = await Biaya.find(params.id)
        return response.json(biaya)
    }

    /**
     * Update biaya details.
     * PUT or PATCH biayas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const biaya = await Biaya.find(params.id)

        const kls_biaya = request.input('kls_biaya')
        const nominal = request.input('nominal')

        biaya.kls_biaya = kls_biaya
        biaya.nominal = nominal

        await biaya.save()
        return response.json(biaya)
    }

    /**
     * Delete a biaya with id.
     * DELETE biayas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const biaya = await Biaya.find(params.id)
        await biaya.delete()
        return response.json({ message: 'Data Deleted!' })
    }
}

module.exports = BiayaController