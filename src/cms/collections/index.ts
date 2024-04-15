import { Users } from './Users'
import { AttendTypes } from './AttendeeTypes'
import { ContactTypes, ContactDetails } from './ContactDetails'
import { Groups } from './Groups'

//  Collections array consumed by PayloadCMS config
export const collections = [
  AttendTypes,
  ContactTypes,
  ContactDetails,
  Groups,
  Users,
]

export * from './Users'
export * from './AttendeeTypes'
export * from './ContactDetails'
export * from './Groups'

export default collections