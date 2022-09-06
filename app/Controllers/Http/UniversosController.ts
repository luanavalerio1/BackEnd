 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import Universo from 'App/Models/Universo'
 import UniversoValidator from 'App/Validators/UniversoValidator'

export default class UniversosController {
    public async index({ }: HttpContextContract) {
        const universo = await Universo.all()
        return universo
    }

    public async store({ request }: HttpContextContract) {
        const data = await request.validate(UniversoValidator)
        const universo = await Universo.create({ ...data})
        return universo
    }

    public async show({ params, response}: HttpContextContract) {
        try{
            console.log(params.id)
            const universo = await Universo.findOrFail(params.id)
            return universo
        } catch (error) {
            response.status(400).send("Tópico não encontrado!!!")
        }
    }
    public async update ({ request, params, response}: HttpContextContract){
        const { name, apelido, planeta } = await request.validate(UniversoValidator)
        try {
            const universo = await Universo.findOrFail(params.id)
            universo.name = name
            universo.apelido = apelido
            universo.planeta = planeta
            await universo.save()
            return universo

        } catch (error) {
            response.status(400).send("Tópico não encontrado!!!")
        }
    }

    public async destroy({ params, response}: HttpContextContract){
        try{
            const universo = await Universo.findOrFail(params.id)
            await universo.delete()
            return universo
        } catch(error) {
            response.status(400).send("Tópico não encontrado!!!!")
        }
    }
}
