import { Categories } from './AttendeeCategories'
import { Groups } from './Groups'
import { Locations } from './Locations'
import { Users } from './Users'

//  Collections array consumed by PayloadCMS config
export const collections = [
  Categories,
  Groups,
  Locations,
  Users,
]

export * from './AttendeeCategories'
export * from './Users'
export * from './Groups'
export * from './Locations'

export default collections