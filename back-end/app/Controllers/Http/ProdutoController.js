'use strict'

const Produto = use('App/Models/Produto')

class ProdutoController {
  async index () {
    const produto = Produto.all()

    return produto
  }

  async store ({ request }) {
    // const { id } = auth.user
    const data = request.only([
      'nome',
      'descricao',
      'quantidade',
      'categoria',
      'marca',
      'fornecedor',
      'valor'
    ])

    // const property = await Property.create({ ...data, user_id: id })
    const produto = await Produto.create({ ...data })

    return produto
  }
}

module.exports = ProdutoController
