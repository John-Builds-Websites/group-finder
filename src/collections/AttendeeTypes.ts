import type { CollectionConfig } from 'payload/types'

export const AttendTypes: CollectionConfig = {
  slug: 'attendee-types',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    }
  ],
}