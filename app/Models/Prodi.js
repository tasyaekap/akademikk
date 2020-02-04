'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Prodi extends Model {

    Mhsw () {
        return this.hasMany('App/Models/Mhsw')
    }

    Matkul () {
        return this.hasMany('App/Models/Matkul')
    }
    
}

module.exports = Prodi
