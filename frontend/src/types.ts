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

export interface BackendUser {
  username: string;
  id: number;
}

export interface BackendAnimal {
  name: string;
  scientific_name: string;
  description: string;
  category: string;
  population: number;
  id: number;
}
