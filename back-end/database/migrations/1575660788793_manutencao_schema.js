'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ManutencaoSchema extends Schema {
  up () {
    this.create('manutencaos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('manutencaos')
  }
}

module.exports = ManutencaoSchema
