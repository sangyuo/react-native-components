import {FlexType, GapType} from './flex';
import {PositionType} from './position';
import {MarginType} from './margin';
import {PaddingType} from './padding';
import {SizeType} from './size';
import {BackgroundType, BorderType, OpacityType, TextType} from '.';

export type ClassStyleType =
  | BorderType
  | PositionType
  | GapType
  | MarginType
  | PaddingType
  | FlexType
  | SizeType
  | BackgroundType
  | OpacityType
  | TextType;

export enum ClassCustomType {
  MARGIN = 'm-',
  MARGIN_LEFT = 'ml-',
  MARGIN_TOP = 'mt-',
  MARGIN_RIGHT = 'mr-',
  MARGIN_BOTTOM = 'mb-',
  MARGIN_X = 'mx-',
  MARGIN_Y = 'my-',
  PADDING = 'p-',
  PADDING_LEFT = 'pl-',
  PADDING_TOP = 'pt-',
  PADDING_RIGHT = 'pr-',
  PADDING_BOTTOM = 'pb-',
  PADDING_X = 'px-',
  PADDING_Y = 'py-',
  WIDTH = 'w-',
  MAX_WIDTH = 'max-w-',
  MIN_WIDTH = 'min-w-',
  HEIGHT = 'h-',
  MAX_HEIGHT = 'max-h-',
  MIN_HEIGHT = 'min-h-',
  TOP = 't-',
  LEFT = 'l-',
  RIGHT = 'r-',
  BOTTOM = 'b-',
  TEXT = 't-',
  GAP = 'gap-',
  ROW_GAP = 'row-gap-',
  COL_GAP = 'col-gap-',
}
