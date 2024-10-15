import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import {DropDownProps} from '../../model';
import {classNames, device, isNumber} from '../../utils';
import useClassNameDropdown from '../../hook/useClassNameDropdown';
import {useStateVisible, useVarianColor} from '../../hook';
import {ArrowDown} from '../svgBox/ArrowDown';
import {Box, ButtonBox, TextInputBox} from '../..';
import {IconSearch} from '../svgBox/IconSearch';
import {IconClose} from '../svgBox/IconClose';
import {Tick} from '../svgBox/Tick';

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
  classOptionItemSelected,
  classOptionLabelSelected,
  styleSelectType = 'color',
  iconSelected,
  iconSelectedColor,
  renderButtonAction,
  renderOptionItem,
  onChange,
}: DropDownProps<ItemT>) {
  const {isVisible, onClose, setVisible} = useStateVisible();
  const [keyword, setKeyword] = useState('');
  const [dataFilter, setDataFilter] = useState<ItemT[]>([]);
  const theme = useVarianColor({varian, enableNull: true, isDropdown: true});
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
    let itemSelect: ItemT | null = null;
    if (value || isNumber(value)) {
      itemSelect = data?.find(x => x?.[pickKey] === value) ?? null;
      if (itemSelect) {
        titleBtn = itemSelect[pickLabel] as string;
        classTitle = classValueColor ?? 'text-black';
      }
    }
    if (renderButtonAction) {
      return renderButtonAction({
        dataSelected: itemSelect,
        onPress: () => {
          setVisible(pre => !pre);
        },
      });
    }

    return (
      <ButtonBox
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
      </ButtonBox>
    );
  };

  const renderOption = () => {
    const option = dataFilter?.map((item, index) => {
      const selected = item?.[pickKey] === value;
      if (renderOptionItem) {
        return renderOptionItem({item, selected, index});
      }
      return (
        <ButtonBox
          key={(item?.[pickKey] ?? index) as string | number}
          className={classNames(
            'w-full px-4 py-2 row-center space-between',
            classOptionItem,
            selected
              ? classNames(
                  styleSelectType === 'color' ? theme.bg : '',
                  classOptionItemSelected,
                )
              : '',
          )}
          classNameText={classNames(
            'font-medium',
            classOptionLabel,
            selected ? classOptionLabelSelected : '',
          )}
          title={item?.[pickLabel] as string}
          onPress={() => {
            onChange && onChange(item);
          }}
          numberOfLines={numberOfLinesOption}
          rightContent={
            selected && styleSelectType === 'icon'
              ? iconSelected ?? (
                  <Tick width={16} fill={iconSelectedColor || theme.color} />
                )
              : null
          }
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
    if (searchType === 'submit') {
      refKw.current = kw;
    }
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
          }, 0);
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
              }, 0);
            }}>
            <Box className="absolute w-full h-full z-9" />
          </TouchableWithoutFeedback>
          <Box className={classNames(classDropOption)}>
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
                        <ButtonBox
                          className="p-2 rounded-full bg-gray-300 center"
                          onPress={handleClear}>
                          <IconClose width={14} />
                        </ButtonBox>
                      ) : null}
                      <ButtonBox
                        className="p-1 border rounded"
                        onPress={() => {
                          handleSearch(keyword);
                        }}
                        disabled={saveKeywordType !== 'submit'}>
                        <IconSearch width={16} />
                      </ButtonBox>
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
