'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('agenda', 'AgendaController')
  .apiOnly()
  .middleware('auth')

Route.resource('vendas', 'VendaController')
  .apiOnly()
  .middleware('auth')

Route.resource('produto', 'ProdutoController')
  .apiOnly()
  .middleware('auth')

Route.resource('orcamento', 'ProdutoController')
  .apiOnly()
  .middleware('auth')

Route.resource('estoque', 'EstoqueController')
  .apiOnly()
  .middleware('auth')
