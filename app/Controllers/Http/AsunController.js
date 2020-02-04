'use strict'
const Asun = use('App/Models/Asun')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with asuns
 */
class AsunController {
    /**
     * Show a list of all asuns.
     * GET asuns
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let asun = await Asun.all()
        return response.json(asun)
    }



    /**
     * Create/save a new asun.
     * POST asuns
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const nm_univ = request.input('nm_univ')
        const alamat = request.input('alamat')
        const no_telp = request.input('no_telp')

        const asun = new Asun()
        asun.nm_univ = nm_univ
        asun.alamat = alamat
        asun.no_telp = no_telp


        await asun.save()
        return response.json(asun)
    }

    /**
     * Display a single asun.
     * GET asun/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        const asun = await Asun.find(params.id)
        return response.json(asun)
    }


    /**
     * Update asun details.
     * PUT or PATCH asuns/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const asun = await Asun.find(params.id)

        const nm_univ = request.input('nm_univ')
        const alamat = request.input('alamat')
        const no_telp = request.input('no_telp')

        asun.nm_univ = nm_univ
        asun.alamat = alamat
        asun.no_telp = no_telp

        await asun.save()
        return response.json(asun)
    }

    /**
     * Delete a asun with id.
     * DELETE asuns/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const dosen = await Dosen.find(params.id)
        await dosen.delete()
        return response.json({ message: 'Data deleted!' })
    }
}

module.exports = AsunController