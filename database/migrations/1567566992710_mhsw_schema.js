'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MhswSchema extends Schema {
  up () {
    this.create('mhsws', (table) => {
      table.increments()
      table.string('nm_mhs', 50)
      table.string('alamat', 50)
      table.string('email').unique()
      table.string('no_telp')
      table
      .integer('biaya_id')
      .unsigned()
      .references('id')
      .inTable('biayas')
      table
      .integer('prodi_id')
      .unique()
      .unsigned()
      .references('id')
      .inTable('prodis')
      table
      .integer('asun_id')
      .unique()
      .unsigned()
      .references('id')
      .inTable('asuns')
      table.timestamps()
    })
  }

  down () {
    this.drop('mhsws')
  }
}

module.exports = MhswSchema
