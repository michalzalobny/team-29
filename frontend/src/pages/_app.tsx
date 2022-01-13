import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import 'focus-visible';
import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import FontFaceObserver from 'fontfaceobserver';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoggerContextProvider } from 'context/LoggerContext';
import { AuthContextProvider } from 'context/AuthContext';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Layout } from 'components/Layout/Layout';
import { AuthWrapper } from 'components/AuthWrapper/AuthWrapper';

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
      <GlobalStyles />
      <AuthContextProvider>
        <LoggerContextProvider>
          <AuthWrapper>
            <AnimatePresence exitBeforeEnter={false}>
              <>
                <Layout isReady={isReady}>
                  <Component key={router.route + router.locale} router={router} {...pageProps} />
                </Layout>
              </>
            </AnimatePresence>
            <ToastContainer style={{ fontSize: 15 }} position="bottom-right" />
          </AuthWrapper>
        </LoggerContextProvider>
      </AuthContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
