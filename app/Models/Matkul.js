'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Matkul extends Model {

    Mhsw () {
        return this.belongsToMany('App/Models/Mhsw')
    }

    Prodi () {
        return this.belongsTo('App/Models/Prodi')
    }

    Dosen () {
        return this.belongsTo('App/Models/Dosen')
    }

    Nilai () {
        return this.hasMany('App/Models/Nilai')
    }
}

module.exports = Matkul
