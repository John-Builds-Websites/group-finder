import { AttendeeCategories } from './AttendeeCategories'
import { Groups } from './Groups'
import { Locations } from './Locations'
import { Users } from './Users'
import { Schedule } from "./Schedule"

//  Collections array consumed by PayloadCMS config
export const collections = [
  AttendeeCategories,
  Groups,
  Locations,
  Users,
  Schedule,
]

export * from './AttendeeCategories'
export * from './Users'
export * from './Groups'
export * from './Locations'
export * from './Schedule'

export default collections