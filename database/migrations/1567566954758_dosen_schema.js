'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DosenSchema extends Schema {
  up () {
    this.create('dosens', (table) => {
      table.increments()
      table.string('nm_dosen')
      table.string('alamat', 50)
      table.string('no_telp', 12)
      table.string('email')
      table.timestamps()
    })
  }

  down () {
    this.drop('dosens')
  }
}

module.exports = DosenSchema
