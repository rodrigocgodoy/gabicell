'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VendasSchema extends Schema {
  up () {
    this.create('vendas', (table) => {
      table.increments()
      table.string('valor_total').notNullable()
      table.string('name_cliente').notNullable()
      table.string('doc_cliente').notNullable()
      table.string('id_funcionario').notNullable()
      table.string('cod_produto').notNullable()
      table.string('quantidade').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('vendas')
  }
}

module.exports = VendasSchema
