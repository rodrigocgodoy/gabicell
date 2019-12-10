'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendaSchema extends Schema {
  up () {
    this.create('agenda', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('date').notNullable()
      table.string('priority').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('agenda')
  }
}

module.exports = AgendaSchema
