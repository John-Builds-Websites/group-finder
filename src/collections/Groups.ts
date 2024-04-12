import type { CollectionConfig } from 'payload/types'

export const Groups: CollectionConfig = {
  slug: 'groups',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'followers',
      label: 'Followers',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
    {
      name: 'moderators',
      label: 'Moderators',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
    {
      name: 'attendee-types',
      label: 'Suitable for',
      type: 'relationship',
      relationTo: 'attendee-types',
      hasMany: true,
    },
    // Email added by default
    // Add more fields as needed
  ],
}
