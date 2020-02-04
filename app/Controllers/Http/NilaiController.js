'use strict'

const Nilai = use('App/Models/Nilai')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with nilais
 */
class NilaiController {
    /**
     * Show a list of all nilais.
     * GET nilais
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        const nilai = await Nilai.query()
            .with('Matkul')
            .with('Mhsw')
            .fetch();

        return response.status(200).json(nilai)
    }


    /**
     * Create/save a new nilai.
     * POST nilais
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {

        const matkul_id = request.input('matkul_id')
        const mhsw_id = request.input('mhsw_id')
        const nilai = request.input('nilai')

        const nilaii = new Nilai()

        nilaii.matkul_id = matkul_id
        nilaii.mhsw_id = mhsw_id
        nilaii.nilai = nilai

        await nilaii.save()
        return response.json(nilaii)
    }

    /**
     * Display a single nilai
     * GET nilai/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        const nilai = await Nilai.find(params.id)
        return response.json(nilai)
    }

    /**
     * Update nilai details.
     * PUT or PATCH nilais/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const nilaii = await Nilai.find(params.id)

        const matkul_id = request.input('matkul_id')
        const mhsw_id = request.input('mhsw_id')
        const nilai = request.input('nilai')

        nilaii.matkul_id = matkul_id
        nilaii.mhsw_id = mhsw_id
        nilaii.nilai = nilai

        await nilaii.save()
        return response.json(nilaii)
    }

    /**
     * Delete a nilai with id.
     * DELETE nilais/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const nilaii = await Nilai.find(params.id)
        await nilaii.delete()
        return response.json({ message: 'Data Deleted!' })
    }
}

module.exports = NilaiController