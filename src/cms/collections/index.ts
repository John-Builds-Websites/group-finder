import { Groups } from './Groups'
import { Users } from './Users'

//  Collections array consumed by PayloadCMS config
export const collections = [
  Groups,
  Users,
]

export * from './Users'
export * from './Groups'

export default collections