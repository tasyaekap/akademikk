'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BiayaSchema extends Schema {
  up () {
    this.create('biayas', (table) => {
      table.increments()
      table.string('kls_biaya')
      table.integer('nominal')
      table.timestamps()
    })
  }

  down () {
    this.drop('biayas')
  }
}

module.exports = BiayaSchema
