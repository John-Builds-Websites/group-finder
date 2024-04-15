/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import config from '@/cms/payload.config'
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import { RootPage } from '@payloadcms/next/views'

type Args = {
  params: {
    segments: string[]
  }
  searchParams: {
    [key: string]: string | string[]
  }
}

const Page = ({ params, searchParams }: Args) => RootPage({ config, params, searchParams })

export default Page
