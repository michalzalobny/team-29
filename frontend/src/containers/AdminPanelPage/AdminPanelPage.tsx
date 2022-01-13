import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Head } from 'seo/Head/Head';
import { useAuthContext } from 'context/AuthContext';

import { Props } from './data';
import * as S from './AdminPanelPage.styles';

export default function AdminPanelPage(props: Props) {
  const { head } = props;
  const { user } = useAuthContext();
  const router = useRouter();

  //Prevents displaying the page to unauthorized users
  useEffect(() => {
    if (user.scope !== 'ADMIN') {
      router.push('/');
    }
  }, [router, user.scope]);

  return (
    <>
      <Head {...head} />
      <S.Wrapper></S.Wrapper>
    </>
  );
}
