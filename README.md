# react-native-box-lite

![components-demo](https://github.com/sangyuo/react-native-components/blob/main/src/example/example-1.png)

## Installation

`$ npm install react-native-box-lite`

### Extension for react-native-box-lite

To use suggestion for className, you need to install extension [react-native-components-intellisense](https://marketplace.visualstudio.com/items?itemName=SangYuo.react-native-components-intellisense) in your vscode.

## Usage

```js
import {Box, Button, Text} from 'react-native-box-lite';
import {View} from 'react-native';

const test =()=>{
   const containerStyle = useClassName({
      className: "flex-1 bg-white p-4"
   })
   const containerHeaderStyle = useClassName({
      className: "bg-black p-4 h-10 w-screen"
   })

   return (
      <View style={containerStyles}>
         <Box style={containerHeaderStyle}>
            <Text className="text-white font-bold text-xl">
               Title Demo rn component
            </Text>
         </Box>
         <Box className="bg-amber-200 h-12 w-12">
            <Text className="text-white font-bold text-md">
               Demo rn component
            </Text>
         </Box>
         <Button title="Demo Button Default" />
         <Button varian="outline" title="Demo Button Outline" />
         <Button varian="primary" title="Demo Button Primary" />
      <View>
   )
}
```

## Usage custom styles

- use passed number in `[]` as `w-[200]` => width: 200
- scale you can use function horizontalScale fontSize,... `[${horizontalScale(30)}]`

```js
import {Box, Text} from 'react-native-box-lite';

const customStyles = () => {
  return (
    <Box>
      <Box className="w-[200] h-[350] bg-white center" />
      <Text className="text-[22] text-green-500 font-bold">
        Demo rn component
      </Text>
    </Box>
  );
};
```

## Note

**`Type class Gap: support react-native version >= 0.71`**

## HOOK: useClassName

| Prop              | Description                         | Default |
| ----------------- | ----------------------------------- | ------- |
| **`className`**   | class of component as:`w-1 h-1`     | `null`  |
| **`scaleScreen`** | Active use scale by width of screen | `true`  |

## Checkbox

| Prop                    | Description                                                       | Default                          |
| ----------------------- | ----------------------------------------------------------------- | -------------------------------- |
| **`checked`**           | state checked                                                     | `false`                          |
| **`value`**             | state parameter when event press                                  | `null`                           |
| **`label`**             | label of checkbox                                                 | `null`                           |
| **`color`**             | properties `checked` and `default`                                | `checked: blue`,` default: gray` |
| **`size`**              | size of checkbox                                                  | `20`                             |
| **`sizeChildren`**      | size of state checked if has `size && (!sizeChildren) => size/2 ` | `10`                             |
| **`iconChecked`**       | custom icon checked, type: `ImageSourcePropType`                  | `null`                           |
| **`renderIconChecked`** | function render icon checked                                      | `null`                           |
| **`className`**         | class styles of container                                         | `null`                           |
| **`classNameParent`**   | class styles of Parent                                            | `null`                           |
| **`classNameChildren`** | class styles of Children                                          | `null`                           |
| **`classNameLabel`**    | class styles of Label                                             | `null`                           |
| **`isDebounce`**        | Active debounce when event press                                  | `false`                          |
| **`delayDebounce`**     | time debounce of debounce                                         | `500`                            |

```js
import {Checkbox} from 'react-native-box-lite';

<Checkbox label="Label" />
<Checkbox checked label="Checked" />
<Checkbox
   size={28}
   checked
   color={{checked: 'green'}}
   label="Custom color and size"
/>
 <Checkbox
   size={28}
   checked
   iconChecked={Add}
   color={{checked: 'green'}}
   label="Custom icon"
/>
```

![example](https://github.com/sangyuo/react-native-components/blob/main/src/example/checkbox.png)

## RadioButton

| Prop                    | Description                                                       | Default                         |
| ----------------------- | ----------------------------------------------------------------- | ------------------------------- |
| **`checked`**           | state checked                                                     | `false`                         |
| **`value`**             | state parameter when press                                        | `null`                          |
| **`label`**             | label of radio                                                    | `null`                          |
| **`color`**             | properties `checked` and `default`                                | `checked: blue`,`default: gray` |
| **`size`**              | size of radio                                                     | `20`                            |
| **`sizeChildren`**      | size of state checked if has `size && (!sizeChildren) => size/2 ` | `8`                             |
| **`className`**         | class styles of container                                         | `null`                          |
| **`classNameParent`**   | class styles of Parent                                            | `null`                          |
| **`classNameChildren`** | class styles of Children                                          | `null`                          |
| **`classNameLabel`**    | class styles of Label                                             | `null`                          |
| **`isDebounce`**        | Active debounce when press                                        | `false`                         |
| **`delayDebounce`**     | time debounce of debounce                                         | `500`                           |

```js
import {RadioButton} from 'react-native-box-lite';

<RadioButton label="Label" />
<RadioButton checked label="Checked" />
<RadioButton
   size={28}
   checked
   color={{checked: 'green'}}
   label="Custom color and size"
/>
```

![example](https://github.com/sangyuo/react-native-components/blob/main/src/example/radio-button.png)

## Box

| Prop              | Description                         | Default |
| ----------------- | ----------------------------------- | ------- |
| **`className`**   | class styles of component           | `null`  |
| **`scaleScreen`** | Active use scale by width of screen | `true`  |
| **`rest`**        | extents from ViewProps              |         |

```js
import {Box} from 'react-native-box-lite';

<Box className="row gap-2">
  <Box className="w-10 h-10 bg-red-400" />
  <Box className="w-10 h-10 bg-green-400" />
  <Box className="w-10 h-10 bg-yellow-400" />
</Box>;
```

![example](https://github.com/sangyuo/react-native-components/blob/main/src/example/example-box.png)

## Button

| Prop                | Description                         | Default |
| ------------------- | ----------------------------------- | ------- |
| **`varian`**        | type of `primary, outline `         | `null`  |
| **`className`**     | class styles of component           | `null`  |
| **`scaleScreen`**   | Active use scale by width of screen | `true`  |
| **`isDebounce`**    | Active debounce when press          | `false` |
| **`delayDebounce`** | time debounce of debounce           | `500`   |
| **`rest`**          | extents from TouchableOpacityProps  |         |

```js
import {Button} from 'react-native-box-lite';

<Button title="Demo Button Default" />
<Button varian="outline" title="Demo Button Outline" />
<Button varian="primary" title="Demo Button Primary" />

```

![example](https://github.com/sangyuo/react-native-components/blob/main/src/example/example-button.png)

## Text

| Prop              | Description                         | Default |
| ----------------- | ----------------------------------- | ------- |
| **`className`**   | class styles of component           | `null`  |
| **`scaleScreen`** | Active use scale by width of screen | `true`  |
| **`rest`**        | extents from TextProps              |         |

```js
import {Text} from 'react-native-box-lite';

<Text className="font-bold text-xl text-black">Text xl</Text>
<Text className="font-normal text-xl text-black">Font normal</Text>
```

![example](https://github.com/sangyuo/react-native-components/blob/main/src/example/example-text.png)

## scale screen

| function              | Description                                                    | parameter |
| --------------------- | -------------------------------------------------------------- | --------- |
| **`horizontalScale`** | scale by ratio width device default guidelineBaseWidth = 375   | `number`  |
| **`verticalScale`**   | scale by ratio height device default guidelineBaseHeight = 812 | `number`  |
| **`moderateScale`**   | scale by ratio width and height                                | `number`  |
| **`fontSize`**        | scale by ratio width and height                                | `number`  |
