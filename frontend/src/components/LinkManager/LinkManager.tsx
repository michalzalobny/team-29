import React from 'react';
import Link from 'next/link';

interface Props {
  href?: string;
  isExternal?: boolean;
  onClickFn?: () => void;
  children: React.ReactNode;
}

export const LinkManager = (props: Props) => {
  const { href, children, isExternal, onClickFn } = props;

  return (
    <>
      {isExternal ? (
        <a href={href} target="_blank">
          {children}
        </a>
      ) : onClickFn ? (
        <button onClick={() => onClickFn()}>{children}</button>
      ) : (
        href && (
          <Link href={href} passHref>
            {children}
          </Link>
        )
      )}
    </>
  );
};
