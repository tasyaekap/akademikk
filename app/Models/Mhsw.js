'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Mhsw extends Model {
    Prodi () {
        return this.belongsTo('App/Models/Prodi')
    }

    Asun () {
        return this.belongsTo('App/Models/Asun')
    }

    Biaya () {
        return this.belongsTo('App/Models/Biaya')
    }

    Nilai () {
        return this.hasMany('App/Models/Nilai')
    }
}

module.exports = Mhsw
