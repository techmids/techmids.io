import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - TechMids</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing."
        intro="We’ll send you an occasional email when have anything interesting to share that we think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
