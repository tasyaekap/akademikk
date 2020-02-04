'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NilaiSchema extends Schema {
  up () {
    this.create('nilais', (table) => {
      table.increments()
      table
      .integer('matkul_id')
      .unsigned()
      .references('id')
      .inTable('matkuls')
      table.integer('mhsw_id')
      .unsigned()
      .references('id')
      .inTable('mhsws')
      table.integer('nilai')
      table.timestamps()
    })
  }

  down () {
    this.drop('nilais')
  }
}

module.exports = NilaiSchema
