import { DateTime } from 'luxon'
import {
   BaseModel, column, HasMany, hasMany, ManyToMany,
   manyToMany 
  }from '@ioc:Adonis/Lucid/Orm'
  import Universo from './Universo'
  import UniversoTopic from './UniversoTopic'

export default class Universo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public planeta: string

  @column()
  public apelido: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
