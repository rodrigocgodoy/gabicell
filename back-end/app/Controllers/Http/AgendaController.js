'use strict'

const Agenda = use('App/Models/Agenda')

class AgendaController {

  async index () {
    const agendas = Agenda.all()

    return agendas
  }

  async store ({ request }) {
    // const { id } = auth.user
    const data = request.only([
      'title',
      'description',
      'date',
      'priority'
    ])

    // const property = await Property.create({ ...data, user_id: id })
    const agenda = await Agenda.create({ ...data })

    return agenda
  }

  async show ({ params }) {
    const agenda = await Agenda.findOrFail(params.id);

    return agenda;
  }

  async update ({ params, request }) {
    const agenda = await Agenda.findOrFail(params.id)

    const data = request.only([
      'title',
      'description',
      'date',
      'priority'
    ])

    agenda.merge(data)

    await agenda.save()

    return agenda
  }

  async destroy ({ params }) {
    const agenda = await Agenda.findOrFail(params.id)

    // if (property.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Not authorized' })
    // }

    await agenda.delete()
  }
}

module.exports = AgendaController
