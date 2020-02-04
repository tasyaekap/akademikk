'use strict'
const Dosen = use('App/Models/Dosen')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with dosens
 */
class DosenController {
    /**
     * Show a list of all dosens.
     * GET dosens
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let dosen = await Dosen.all()
        return response.json(dosen)
    }

    /**
     * Create/save a new dosen.
     * POST dosens
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const nm_dosen = request.input('nm_dosen')
        const alamat = request.input('alamat')
        const no_telp = request.input('no_telp')
        const email = request.input('email')

        const dosen = new Dosen()

        dosen.nm_dosen = nm_dosen
        dosen.alamat = alamat
        dosen.no_telp = no_telp
        dosen.email = email

        await dosen.save()
        return response.json(dosen)

    }

    /**
     * Display a single dosen.
     * GET dosen/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        const dosen = await Dosen.find(params.id)
        return response.json(dosen)
    }


    /**
     * Update dosen details.
     * PUT or PATCH dosens/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const dosen = await Dosen.find(params.id)

        const nm_dosen = request.input('nm_dosen')
        const alamat = request.input('alamat')
        const no_telp = request.input('no_telp')
        const email = request.input('email')

        dosen.nm_dosen = nm_dosen
        dosen.alamat = alamat
        dosen.no_telp = no_telp
        dosen.email = email

        await dosen.save()
        return response.json(dosen)
    }

    /**
     * Delete a dosen with id.
     * DELETE dosens/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = DosenController