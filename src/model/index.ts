export * from './component';

export type Varian = 'primary' | 'outline' | 'secondary' | 'dark' | 'light';

export type VarianCheckbox =
  | 'primary'
  | 'outline-primary'
  | 'secondary'
  | 'outline-secondary';

export type VarianColor = 'primary' | 'secondary';

export enum ImageModuleType {
  Image,
  FastImage,
}

export enum ScaleType {
  NONE = 0,
  HORIZONTAL = 1,
  VERTICAL = 2,
  MODERATE = 3,
  FONTSIZE = 4,
}
