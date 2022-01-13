export interface NavbarLink {
  label: string;
  href?: string;
  isRound?: boolean;
  isBold?: boolean;
  onClickFn?: () => void;
  shouldHide?: boolean;
}

export interface DomRectSSR {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}
