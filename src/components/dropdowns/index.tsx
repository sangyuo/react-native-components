import React, {ReactNode, useEffect, useRef, useState} from 'react';
import Box from '../box';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import Button from '../button';
import {ButtonComponentProps, VarianColor} from '../../model';
import {classNames, device, isNumber} from '../../utils';
import useClassNameDropdown from '../../hook/useClassNameDropdown';
import {useStateVisible, useVarianColor} from '../../hook';
import {ArrowDown} from '../svgBox/ArrowDown';
import {TextInputBox} from '../..';
import {IconSearch} from '../svgBox/IconSearch';
import {IconClose} from '../svgBox/IconClose';

interface OffsetType {
  top?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
}

interface RenderButtonProps {
  selected?: boolean;
  label?: string | number;
  onClose?: () => void;
  onOpen?: () => void;
}

interface RenderOptionItem {
  selected: boolean;
  index: number;
}

interface Props<ItemT = any> {
  data: ItemT[];
  offset?: OffsetType;
  buttonDropdown?: ButtonComponentProps & {
    hidden?: boolean;
    placeholder?: string;
    classPlaceholderColor?: string;
    classValueColor?: string;
  };
  maxWidthOption?: number;
  classBox?: string;
  classOption?: string;
  classOptionItem?: string;
  classOptionLabel?: string;
  enableRightToLeft?: boolean;
  enableSearch?: boolean;
  height?: number;
  width?: number;
  value?: number | string;
  pickKey?: keyof ItemT;
  pickLabel?: keyof ItemT;
  enableScroll?: boolean;
  varian?: VarianColor;
  iconColor?: string;
  numberOfLinesOption?: number;
  saveKeywordType?: 'none' | 'auto' | 'submit';
  searchType?: 'auto' | 'submit';
  inputSearch?: {
    value?: string;
    classInput?: string;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    placeholder?: string;
    onSearch?: (keyword: string) => void;
  };
  renderButtonAction?: (params: RenderButtonProps) => ReactNode;
  renderOptionItem?: (
    props: RenderOptionItem & {
      item: ItemT;
    },
  ) => ReactNode;
  onChange?: (value: ItemT) => void;
}

export default function DropdownBox<ItemT = any>({
  data,
  pickKey = 'id' as keyof ItemT,
  pickLabel = 'name' as keyof ItemT,
  value,
  buttonDropdown,
  classBox,
  classOption,
  classOptionItem,
  classOptionLabel,
  width,
  height,
  offset,
  enableScroll,
  varian,
  iconColor,
  enableRightToLeft,
  maxWidthOption = device.width,
  enableSearch,
  numberOfLinesOption,
  inputSearch,
  saveKeywordType = 'auto',
  searchType = 'auto',
  renderButtonAction,
  renderOptionItem,
  onChange,
}: Props<ItemT>) {
  const {isVisible, onClose, onOpen, setVisible} = useStateVisible();
  const [keyword, setKeyword] = useState('');
  const [dataFilter, setDataFilter] = useState<ItemT[]>([]);
  const theme = useVarianColor({varian, enableNull: true});
  const {
    className,
    title,
    placeholder,
    classNameText,
    classPlaceholderColor,
    classValueColor,
    ...rest
  } = buttonDropdown || {};
  const [offsetLayout, setOffsetLayout] = useState({
    left: 0,
    top: 0,
    width: 0,
  });
  const [maxContent, setMaxContent] = useState({
    height: 0,
    width: 0,
  });
  const refTimeUpdate = useRef<ReturnType<typeof setTimeout>>();
  const refTimeMaxContent = useRef<ReturnType<typeof setTimeout>>();
  const refKw = useRef('');

  const offsetOption = useRef(0);

  const classDropOption = useClassNameDropdown({
    classOption,
    offset,
    offsetLayout,
    enableScroll,
    classTheme: theme.border,
    enableRightToLeft,
    maxWidthOption,
    maxContent,
  });

  useEffect(() => {
    return () => {
      if (isVisible) {
        switch (saveKeywordType) {
          case 'auto':
            break;
          case 'none':
            handleClear();
            break;
          case 'submit':
            if (keyword !== refKw.current) {
              setKeyword(refKw.current);
            }
            break;
          default:
            break;
        }
      }
    };
  }, [isVisible]);

  const renderButton = () => {
    if (buttonDropdown?.hidden) {
      return null;
    }
    let titleBtn = placeholder ?? 'Select data';
    let classTitle = classPlaceholderColor ?? 'text-gray-400';
    if (value || isNumber(value)) {
      const itemSelect = data?.find(x => x?.[pickKey] === value);
      if (itemSelect) {
        titleBtn = itemSelect[pickLabel] as string;
        classTitle = classValueColor ?? 'text-black';
      }
    }
    if (renderButtonAction) {
      return renderButtonAction({
        label: titleBtn,
        selected: value ? true : false,
        onClose,
        onOpen,
      });
    }

    return (
      <Button
        {...rest}
        className={classNames(
          'w-full px-2 h-10 row-center space-between border',
          theme.border,
          className,
        )}
        classNameText={classNames('font-medium', classTitle, classNameText)}
        numberOfLines={1}
        title={titleBtn ?? title}
        onPress={() => setVisible(pre => !pre)}>
        <ArrowDown width={16} fill={iconColor ?? theme.color} />
      </Button>
    );
  };

  const renderOption = () => {
    const option = dataFilter?.map((item, index) => {
      const selected = item?.[pickKey] === value;
      if (renderOptionItem) {
        return renderOptionItem({item, selected, index});
      }
      return (
        <Button
          key={(item?.[pickKey] ?? index) as string | number}
          className={classNames(
            'w-full px-4 py-2',
            classOptionItem,
            selected ? 'bg-light-blue-100' : '',
          )}
          classNameText={classNames('font-medium', classOptionLabel)}
          title={item?.[pickLabel] as string}
          onPress={() => {
            onChange && onChange(item);
            onClose();
          }}
          numberOfLines={numberOfLinesOption}
        />
      );
    });
    if (enableScroll) {
      return <ScrollView>{option}</ScrollView>;
    }
    return option;
  };

  const timerSearchRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (searchType !== 'submit') {
      if (inputSearch?.onSearch) {
        inputSearch?.onSearch(keyword);
      } else {
        if (keyword) {
          if (timerSearchRef.current) {
            clearTimeout(timerSearchRef.current);
          }
          timerSearchRef.current = setTimeout(() => {
            handleSearch(keyword);
          }, 250);
        } else {
          setDataFilter(data);
        }
      }
    }
  }, [keyword, data, inputSearch?.onSearch, searchType]);

  const handleSearch = (kw: string) => {
    const result = data?.filter(item =>
      (item[pickLabel] as string).toLowerCase()?.includes(kw.toLowerCase()),
    );
    setDataFilter(result);
  };

  const handleClear = () => {
    setKeyword('');
    handleSearch('');
  };

  return (
    <>
      <Box
        className={classNames(
          width ? `w-[${width}]` : '',
          height ? `w-[${height}]` : '',
          classBox,
        )}
        onLayout={({nativeEvent}) => {
          if (refTimeUpdate.current) {
            clearTimeout(refTimeUpdate.current);
          }
          refTimeUpdate.current = setTimeout(() => {
            setOffsetLayout({
              width: Math.floor(nativeEvent.layout.width),
              left: Math.floor(nativeEvent.layout.x),
              top: Math.floor(nativeEvent.layout.y + nativeEvent.layout.height),
            });
          }, 250);
        }}>
        {renderButton()}
      </Box>
      {isVisible && (
        <>
          <TouchableWithoutFeedback
            onPress={onClose}
            onLayout={({nativeEvent}) => {
              if (refTimeMaxContent.current) {
                clearTimeout(refTimeMaxContent.current);
              }
              refTimeMaxContent.current = setTimeout(() => {
                setMaxContent({
                  height: Math.floor(nativeEvent.layout.height),
                  width: Math.floor(nativeEvent.layout.width),
                });
              }, 250);
            }}>
            <Box className="absolute w-full h-full z-9" />
          </TouchableWithoutFeedback>
          <Box
            onLayout={({nativeEvent}) => {
              if (!offsetOption.current) {
                if (refTimeUpdate.current) {
                  clearTimeout(refTimeUpdate.current);
                }
                refTimeUpdate.current = setTimeout(() => {
                  offsetOption.current = Math.floor(nativeEvent.layout.width);
                }, 250);
              }
            }}
            className={classNames(
              classDropOption,
              offsetOption.current ? `w-[${offsetOption.current + 1}]` : '',
            )}>
            {enableSearch && (
              <TextInputBox
                value={inputSearch?.value ?? keyword}
                classInput={classNames(
                  'h-10 rounded mx-2',
                  inputSearch?.classInput,
                )}
                placeholder={inputSearch?.placeholder ?? 'Search'}
                onChangeText={setKeyword}
                leftContent={inputSearch?.leftContent}
                rightContent={
                  inputSearch?.rightContent ?? (
                    <Box className="row-center gap-1 px-2">
                      {keyword ? (
                        <Button
                          className="p-2 rounded-full bg-gray-300 center"
                          onPress={handleClear}>
                          <IconClose width={14} />
                        </Button>
                      ) : null}
                      <Button
                        className="p-1 border rounded"
                        onPress={() => {
                          handleSearch(keyword);
                        }}
                        disabled={saveKeywordType !== 'submit'}>
                        <IconSearch width={16} />
                      </Button>
                    </Box>
                  )
                }
              />
            )}
            {renderOption()}
          </Box>
        </>
      )}
    </>
  );
}
