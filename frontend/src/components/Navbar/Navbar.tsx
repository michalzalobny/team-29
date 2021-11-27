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

import * as S from './Navbar.styles';
import { LinksSectionV } from './Navbar.motion';

interface Props {}

export const Navbar = (props: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const { setActiveLoggerMode, setIsLoggerOpen } = useLoggerContext();

  const isTablet = useBreakpoint(breakpoints.tablet);

  const handleOpenLogger = React.useCallback((mode: ActiveLoggerMode) => {
    setActiveLoggerMode(mode);
    setIsLoggerOpen(true);
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
      onClickFn: () => handleOpenLogger('signin'),
    },
    {
      label: 'Sign up',
      isBold: true,
      onClickFn: () => handleOpenLogger('signup'),
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
          <S.ButtonSection
            aria-label="open links menu"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <CloseButton isCrossed={isOpened} />
          </S.ButtonSection>
          <S.LinksSection
            transition={
              isTablet ? { type: 'tween', duration: 0 } : springMedium
            }
            variants={LinksSectionV}
            initial="initial"
            animate={isOpened || isTablet ? 'animate' : 'initial'}
          >
            {links.map((navLink) => {
              return (
                <S.LinkWrapper key={navLink.label}>
                  <LinkManager
                    elHref={navLink.href}
                    onClickFn={navLink.onClickFn}
                  >
                    {navLink.isRound ? (
                      <BlobButton label={navLink.label} />
                    ) : (
                      <S.LinkItem isBold={navLink.isBold}>
                        {navLink.label}
                      </S.LinkItem>
                    )}
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
