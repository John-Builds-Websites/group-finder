import type { CollectionConfig } from 'payload/types'

export const ContactTypes: CollectionConfig = {
  slug: 'contact-types',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
    name: 'type',
    label: 'Type',
    type: 'select',
    required: true,
    options: [
      {
        label: 'Email',
        value: 'email',
      },
      {
        label: 'Phone',
        value: 'phone',
      },
      {
        label: 'Social Media',
        value: 'social',
      },
      {
        label: 'Website',
        value: 'url',
      },
      {
        label: 'Other',
        value: 'other',
      },
    ],
    }
  ],
}

export const ContactDetails: CollectionConfig = {
  slug: 'contact-details',
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
      name: 'type',
      label: 'Type',
      type: 'relationship',
      relationTo: 'contact-types',
      required: true,
    },
    {
      name: 'value',
      label: 'Value',
      type: 'text',
      required: true,
    },
  ],
}