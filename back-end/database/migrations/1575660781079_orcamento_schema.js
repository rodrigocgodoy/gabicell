'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrcamentoSchema extends Schema {
  up () {
    this.create('orcamentos', (table) => {
      table.increments()
      table.string('nome_cliente').notNullable()
      table.string('tel_cliente').notNullable()
      table.string('doc_cliente').notNullable()
      table.string('end_cliente').notNullable()
      table.string('aparelho').notNullable()
      table.string('marca').notNullable()
      table.string('imei').notNullable()
      table.string('reclamacao').notNullable()
      table.string('responsavel_retira').notNullable()
      table.string('data_entrada').notNullable()
      table.string('data_saida').notNullable()
      table.string('valor_sinal').notNullable()
      table.string('valor_mao_obra').notNullable()
      table.string('valor_peca').notNullable()
      table.string('valor_total').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('orcamentos')
  }
}

module.exports = OrcamentoSchema
