import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { springMedium } from 'components/Animations/framerTransitions';
import { NavbarLink } from 'types';
import { LogoDark } from 'components/LogoDark/LogoDark';
import { LinkManager } from 'components/LinkManager/LinkManager';
import { CloseButton } from 'components/Buttons/CloseButton/CloseButton';
import { useBreakpoint } from 'hooks/useBreakpoint';
import { breakpoints } from 'styles/media';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { useLoggerContext, ActiveLoggerMode } from 'context/LoggerContext';
import { useAuthContext } from 'context/AuthContext';

import * as S from './Navbar.styles';
import { LinksSectionV } from './Navbar.motion';

interface Props {}

export const Navbar = (props: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const { setActiveLoggerMode, setIsLoggerOpen } = useLoggerContext();
  const isTablet = useBreakpoint(breakpoints.tablet);
  const { user, logoutUser } = useAuthContext();

  const handleOpenLogger = React.useCallback(
    (mode: ActiveLoggerMode) => {
      setActiveLoggerMode(mode);
      setIsLoggerOpen(true);
      setIsOpened(false);
    },
    [setActiveLoggerMode, setIsLoggerOpen]
  );

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
      label: 'Admin panel',
      href: '/admin-panel',
      shouldHide: user.scope !== 'ADMIN',
    },
    {
      label: 'Sign in',
      isBold: true,
      onClickFn: () => handleOpenLogger('signin'),
      shouldHide: user.scope !== null,
    },
    {
      label: 'Sign up',
      isBold: true,
      onClickFn: () => handleOpenLogger('signup'),
      shouldHide: user.scope !== null,
    },
    {
      label: 'Logout',
      isBold: true,
      onClickFn: () => logoutUser(),
      shouldHide: user.scope === null,
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
          <S.ButtonSection aria-label="open links menu" onClick={() => setIsOpened(prev => !prev)}>
            <CloseButton isCrossed={isOpened} />
          </S.ButtonSection>
          <S.LinksSection
            transition={isTablet ? { type: 'tween', duration: 0 } : springMedium}
            variants={LinksSectionV}
            initial="initial"
            animate={isOpened || isTablet ? 'animate' : 'initial'}
          >
            {links.map(navLink => {
              if (navLink.shouldHide) return null;
              return (
                <S.LinkWrapper key={navLink.label}>
                  <LinkManager elHref={navLink.href} onClickFn={navLink.onClickFn}>
                    {navLink.isRound ? (
                      <BlobButton label={navLink.label} />
                    ) : (
                      <S.LinkItem isBold={navLink.isBold}>{navLink.label}</S.LinkItem>
                    )}
                  </LinkManager>
                </S.LinkWrapper>
              );
            })}
          </S.LinksSection>
          <S.BottomImg />
        </S.SectionsWrapper>
      </S.Wrapper>
    </>
  );
};
