'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdiSchema extends Schema {
  up () {
    this.create('prodis', (table) => {
      table.increments()
      table.string('nm_prodi')
      table.timestamps()
    })
  }

  down () {
    this.drop('prodis')
  }
}

module.exports = ProdiSchema
