import type { AppProps } from 'next/app';
import '@/styles/global.css';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import Layout from '@/components/Layout';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <Layout>
      <Head>{/* <title>BeMyIdol</title> */}</Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
