'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dosen extends Model {
    Matkul () {
        return hasMany('App/Model/Matkul')
    }
}

module.exports = Dosen
