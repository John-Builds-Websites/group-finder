import { ContactDetails, ContactTypes } from './ContactDetails'
import { Groups } from './Groups/BaseGroup'
import { Users } from './Users'

//  Collections array consumed by PayloadCMS config
export const collections = [
  ContactTypes,
  ContactDetails,
  Groups,
  Users,
]

export * from './Users'
export * from './ContactDetails'
export * from './Groups/BaseGroup'

export default collections