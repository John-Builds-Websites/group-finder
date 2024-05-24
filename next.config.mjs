import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    reactCompiler: {
      compilationMode: 'all',
    },
  },
}

export default withPayload(nextConfig)
