'use strict'

const Estoque = use('App/Models/Estoque')

class EstoqueController {
  async index () {
    const estoque = Estoque.all()

    return estoque
  }

  async store ({ request }) {
    // const { id } = auth.user
    const data = request.only([
      'cod_produto',
      'quantidade'
    ])

    // const property = await Property.create({ ...data, user_id: id })
    const estoque = await Estoque.create({ ...data })

    return estoque
  }
}

module.exports = EstoqueController
