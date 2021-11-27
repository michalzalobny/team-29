import React from 'react';
import Link from 'next/link';

import { NavbarLink } from 'types';
import { LogoDark } from 'components/LogoDark/LogoDark';
import { LinkManager } from 'components/LinkManager/LinkManager';

import * as S from './Navbar.styles';

interface Props {}

export const Navbar = (props: Props) => {
  const handleOpenLogger = (type: string) => {
    alert(`opened ${type}`);
  };

  const links: NavbarLink[] = [
    {
      label: 'Play Game',
      href: '/',
      isRound: true,
    },
    {
      label: 'Species List',
      href: '/species-list',
    },
    {
      label: 'Ranking',
      href: '/ranking',
    },
    {
      label: 'Sign in',
      isBold: true,
      onClickFn: () => handleOpenLogger('login'),
    },
    {
      label: 'Sign up',
      isBold: true,
      onClickFn: () => handleOpenLogger('register'),
    },
  ];

  return (
    <>
      <S.Wrapper>
        <S.SectionsWrapper>
          <S.LogoSection>
            <Link href="/" passHref>
              <S.LogoWrapper>
                <LogoDark />
              </S.LogoWrapper>
            </Link>
          </S.LogoSection>
          <S.LinksSection>
            {links.map((navLink) => {
              return (
                <S.LinkWrapper key={navLink.label}>
                  <LinkManager
                    href={navLink.href}
                    onClickFn={navLink.onClickFn}
                  >
                    <S.LinkItem
                      isBold={navLink.isBold}
                      isRound={navLink.isRound}
                    >
                      {navLink.label}
                    </S.LinkItem>
                  </LinkManager>
                </S.LinkWrapper>
              );
            })}
          </S.LinksSection>
        </S.SectionsWrapper>
      </S.Wrapper>
    </>
  );
};
