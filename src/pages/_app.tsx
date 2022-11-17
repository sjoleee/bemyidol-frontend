import type { AppProps } from 'next/app';
import '@/styles/global.css';
import Head from 'next/head';

import Layout from '@/components/Layout';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>BeMyIdol</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
