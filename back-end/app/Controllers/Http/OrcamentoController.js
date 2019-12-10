'use strict'

const Orcamento = use('App/Models/Orcamento')

class OrcamentoController {
  async index () {
    const orcamento = Orcamento.all()

    return orcamento
  }

  async store ({ request }) {
    // const { id } = auth.user
    const data = request.only([
      'nome_cliente',
      'tel_cliente',
      'doc_cliente',
      'end_cliente',
      'aparelho',
      'marca',
      'imei',
      'raclamacao',
      'responsavel_retira',
      'data_entrada',
      'data_saida',
      'valor_sinal',
      'valor_mao_obra',
      'valor_peca',
      'valor_total'
    ])

    // const property = await Property.create({ ...data, user_id: id })
    const orcamento = await Orcamento.create({ ...data })

    return orcamento
  }
}

module.exports = OrcamentoController
