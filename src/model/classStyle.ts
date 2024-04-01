import {FlexType, GapType} from './flex';
import {PositionType} from './position';
import {MarginType} from './margin';
import {PaddingType} from './padding';
import {SizeType} from './size';
import {BorderType} from '.';

export type ClassStyleType =
  | BorderType
  | PositionType
  | GapType
  | MarginType
  | PaddingType
  | FlexType
  | SizeType;
