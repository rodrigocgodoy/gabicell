'use strict'

const Venda = use('App/Models/Venda')

class VendaController {
  async index () {
    const venda = Venda.all()

    return venda
  }

  async store ({ request }) {
    // const { id } = auth.user
    const data = request.only([
      'valor_total',
      'name_cliente',
      'id_funcionario',
      'doc_cliente',
      'cod_produto',
      'quantidade'
    ])

    // const property = await Property.create({ ...data, user_id: id })
    const venda = await Venda.create({ ...data })

    return venda
  }

  async show ({ params }) {
    const venda = await Venda.findOrFail(params.id);

    return venda;
  }

  async update ({ params, request }) {
    const venda = await Venda.findOrFail(params.id)

    const data = request.only([
      'valor_total',
      'name_cliente',
      'id_funcionario',
      'doc_cliente',
      'cod_produto',
      'quantidade'
    ])

    venda.merge(data)

    await venda.save()

    return venda
  }

  async destroy ({ params }) {
    const venda = await Venda.findOrFail(params.id)

    // if (property.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Not authorized' })
    // }

    await venda.delete()
  }
}

module.exports = VendaController
