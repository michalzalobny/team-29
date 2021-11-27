import React from 'react';
import { AnimatePresence } from 'framer-motion';
import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { GlobalStyles } from 'styles/GlobalStyles';
import { Layout } from 'components/Layout/Layout';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();

  return (
    <>
      <GlobalStyles />

      <AnimatePresence exitBeforeEnter={false}>
        <>
          <Layout />

          <Component
            key={router.route + router.locale}
            router={router}
            {...pageProps}
          />
        </>
      </AnimatePresence>
    </>
  );
}
