'use strict'
const Mhs = use('App/Models/Mhsw')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mhsws
 */
class MhswController {
    /**
     * Show a list of all mhsws.
     * GET mhsws
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {

        const mhs = await Mhs.query()
            .with('Biaya')
            .with('Prodi')
            .with('Asun')
            .fetch();

        return response.status(200).json(mhs)

    }

    /**
     * Render a form to be used for creating a new mhsw.
     * GET mhsws/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        const nm_mhs = request.input('nm_mhs')
        const alamat = request.input('alamat')
        const email = request.input('email')
        const no_telp = request.input('no_telp')
        const biaya_id = request.input('biaya_id')
        const prodi_id = request.input('prodi_id')
        const asun_id = request.input('asun_id')

        const mhs = new Mhs()

        mhs.nm_mhs = nm_mhs
        mhs.alamat = alamat
        mhs.email = email
        mhs.no_telp = no_telp
        mhs.biaya_id = biaya_id
        mhs.prodi_id = prodi_id
        mhs.asun_id = asun_id

        await mhs.save()
        return response.json(mhs)
    }

    /**
     * Create/save a new mhsw.
     * POST mhsws
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const nm_mhs = request.input('nm_mhs')
        const alamat = request.input('alamat')
        const email = request.input('email')
        const no_telp = request.input('no_telp')
        const biaya_id = request.input('biaya_id')
        const prodi_id = request.input('prodi_id')
        const asun_id = request.input('asun_id')

        const mhs = new Mhs()

        mhs.nm_mhs = nm_mhs
        mhs.alamat = alamat
        mhs.email = email
        mhs.no_telp = no_telp
        mhs.biaya_id = biaya_id
        mhs.prodi_id = prodi_id
        mhs.asun_id = asun_id

        await mhs.save()
        return response.json(mhs)
    }

    /**
     * Display a single mhs.
     * GET mhs/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        const mhs = await Mhs.find(params.id)
        return response.json(mhs)
    }

    /**
     * Update mhsw details.
     * PUT or PATCH mhsws/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const mhs = await Mhs.find(params.id)

        const nm_mhs = request.input('nm_mhs')
        const alamat = request.input('alamat')
        const email = request.input('email')
        const no_telp = request.input('no_telp')
        const biaya_id = request.input('biaya_id')
        const prodi_id = request.input('prodi_id')
        const asun_id = request.input('asun_id')

        mhs.nm_mhs = nm_mhs
        mhs.alamat = alamat
        mhs.email = email
        mhs.no_telp = no_telp
        mhs.biaya_id = biaya_id
        mhs.prodi_id = prodi_id
        mhs.asun_id = asun_id

        await mhs.save()
        return response.json(mhs)

    }

    /**
     * Delete a mhsw with id.
     * DELETE mhsws/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const mhs = await Mhs.find(params.id)
        await mhs.delete()
        return response.json({ message: 'Data Deleted!' })
    }
}

module.exports = MhswController