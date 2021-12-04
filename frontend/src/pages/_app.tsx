import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import 'focus-visible';
import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import FontFaceObserver from 'fontfaceobserver';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { LoggerContextProvider } from 'context/LoggerContext';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Layout } from 'components/Layout/Layout';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();

  const [queryClient] = React.useState(() => new QueryClient());

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fontA = new FontFaceObserver('opensans');

    Promise.all([fontA.load(null, 1000)])
      .then(
        () => {
          setIsReady(true);
        },
        () => {
          setIsReady(true);
          console.warn('Fonts were loading too long (over 1000ms)');
        }
      )
      .catch(err => {
        setIsReady(true);
        console.warn('Some critical font are not available:', err);
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LoggerContextProvider>
        <GlobalStyles />

        <AnimatePresence exitBeforeEnter={false}>
          <>
            <Layout isReady={isReady}>
              <Component key={router.route + router.locale} router={router} {...pageProps} />
            </Layout>
          </>
        </AnimatePresence>
      </LoggerContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
