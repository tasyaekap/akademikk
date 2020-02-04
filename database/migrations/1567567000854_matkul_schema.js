'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatkulSchema extends Schema {
    up() {
        this.create('matkuls', (table) => {
            table.increments()
            table.string('nm_matkul')
            table
                .integer('prodi_id')
                .unsigned()
                .references('id')
                .inTable('prodis')
            table.date('jadwal')
            table.integer('dosen_id')
                .unsigned()
                .references('id')
                .inTable('dosens')
            table.timestamps()
        })
    }

    down() {
        this.drop('matkuls')
    }
}

module.exports = MatkulSchema