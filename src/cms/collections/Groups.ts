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
      hidden: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'moderators',
      label: 'Moderators',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      hidden: false,
      admin: {
        className: 'mod',
        isSortable: true,
        readOnly: true,
      },

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
