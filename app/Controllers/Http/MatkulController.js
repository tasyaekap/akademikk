'use strict'
const Matkul = use('App/Models/Matkul')
const Dosen = use('App/Models/Dosen')
const Prodi = use('App/Models/Prodi')
    /** @typedef {import('@adonisjs/framework/src/Request')} Request */
    /** @typedef {import('@adonisjs/framework/src/Response')} Response */
    /** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with matkuls
 */
class MatkulController {
    /**
     * Show a list of all matkuls.
     * GET matkuls
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view, auth }) {
        const matkul = await Matkul.query()
            .with('Dosen')
            .with('Prodi')
            .fetch();

        return response.status(200).json(matkul)
    }

    /**
     * Render a form to be used for creating a new matkul.
     * GET matkuls/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Display a single Matkul.
     * GET matkul/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        const matkul = await Matkul.find(params.id)
        return response.json(matkul)
    }

    /**
     * Create/save a new matkul.
     * POST matkuls
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {

        const nm_matkul = request.input('nm_matkul')
        const prodi_id = request.input('prodi_id')
        const jadwal = request.input('jadwal')
        const dosen_id = request.input('dosen_id')

        const matkul = new Matkul()

        matkul.nm_matkul = nm_matkul
        matkul.prodi_id = prodi_id
        matkul.jadwal = jadwal
        matkul.dosen_id = dosen_id

        await matkul.save()

        return response.status(201).json({
            message: 'Matakuliah created successfully',
            data: matkul
        })
    }


    /**
     * Update matkul details.
     * PUT or PATCH matkuls/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const matkul = await Matkul.find(params.id)

        const nm_matkul = request.input('nm_matkul')
        const prodi_id = request.input('prodi_id')
        const jadwal = request.input('jadwal')
        const dosen_id = request.input('dosen_id')


        matkul.nm_matkul = nm_matkul
        matkul.prodi_id = prodi_id
        matkul.jadwal = jadwal
        matkul.dosen_id = dosen_id

        await matkul.save()

        return response.status(201).json({
            message: 'Matakuliah created successfully',
            data: matkul
        })
    }

    /**
     * Delete a matkul with id.
     * DELETE matkuls/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const matkul = await Matkul.find(params.id)
        await matkul.delete()
        return response.json({ message: 'Data Deleted!' })
    }
}

module.exports = MatkulController