import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { springMedium } from 'components/Animations/framerTransitions';
import { NavbarLink } from 'types';
import { LogoDark } from 'components/LogoDark/LogoDark';
import { LinkManager } from 'components/LinkManager/LinkManager';
import { CloseButton } from 'components/Buttons/CloseButton/CloseButton';

import * as S from './Navbar.styles';
import { LinksSectionV } from './Navbar.motion';

interface Props {}

export const Navbar = (props: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenLogger = React.useCallback((type: string) => {
    alert(`opened ${type}`);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsOpened(false);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

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
          <S.ButtonSection onClick={() => setIsOpened((prev) => !prev)}>
            <CloseButton />
          </S.ButtonSection>
          <S.LinksSection
            transition={springMedium}
            variants={LinksSectionV}
            initial="initial"
            animate={isOpened ? 'animate' : 'initial'}
          >
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
