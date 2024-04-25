import { AttendeeCategories } from './AttendeeCategories'
import { Groups } from './Groups'
import { Locations } from './Locations'
import { Users } from './Users'
import { WeeklySchedule } from "./WeeklySchedule"

//  Collections array consumed by PayloadCMS config
export const collections = [
  AttendeeCategories,
  Groups,
  Locations,
  Users,
  WeeklySchedule,
]

export * from './AttendeeCategories'
export * from './Users'
export * from './Groups'
export * from './Locations'
export * from './WeeklySchedule'

export default collections