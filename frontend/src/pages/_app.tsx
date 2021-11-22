import React, { useEffect, useState } from 'react';
import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    setIsInit(true);
  }, [isInit]);

  return (
    <>
      <Component
        key={router.route + router.locale}
        router={router}
        {...pageProps}
      />
    </>
  );
}
