import React from 'react';

import { Head } from 'seo/Head/Head';

import { Props } from './data';
import styles from './indexPage.module.scss';

export default function IndexPage(props: Props) {
  const { head } = props;

  return (
    <>
      <Head {...head} />
      <div className={styles.wrapper}>test</div>
    </>
  );
}
