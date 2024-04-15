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
    {
      name: 'contact-details',
      label: 'Contact Details',
      type: 'relationship',
      relationTo: 'contact-details',
      hasMany: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
      defaultValue: 'draft',
    }
    // Email added by default
    // Add more fields as needed
  ],
}
