'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('descricao').notNullable()
      table.string('quantidade').notNullable()
      table.string('categoria').notNullable()
      table.string('marca').notNullable()
      table.string('fornecedor').notNullable()
      table.string('valor').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
