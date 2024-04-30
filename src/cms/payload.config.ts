import path from 'path'
// import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical' // editor-import
import { buildConfig } from 'payload/config'

import collections, { Users } from './collections'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    dateFormat: 'dd-MM-yyyy',
    meta: {
      // favicon: '/favicon.ico',
      // ogImage: '/logo.png',
      titleSuffix: ' | Group Finder',

    },
    avatar: 'gravatar',
  },
  collections: collections,
  // components: {
  //   // Add your components here
  // },
  // hooks: {
  //   // Add your hooks here
  // },
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    idType: 'uuid',
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: true,
  }),
  upload: {
    staticURL: '/uploads',
    staticPath: path.resolve(dirname, '../uploads'),

  },
  indexSortableFields: true,


  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
})
