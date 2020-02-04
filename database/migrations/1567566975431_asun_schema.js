'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AsunSchema extends Schema {
  up () {
    this.create('asuns', (table) => {
      table.increments()
      table.string('nm_univ', 50)
      table.string('alamat')
      table.string('no_telp')
      table.timestamps()
    })
  }

  down () {
    this.drop('asuns')
  }
}

module.exports = AsunSchema
