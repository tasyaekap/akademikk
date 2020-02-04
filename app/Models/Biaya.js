'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Biaya extends Model {
    Mhsw () {
        return this.hasMany('App/Models/Mhsw')
    }
}

module.exports = Biaya
