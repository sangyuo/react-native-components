# react-native-box-lite

![components-demo](https://github.com/sangyuo/react-native-components/blob/main/src/example/example-1.png)

## Installation

`$ npm install react-native-box-lite`

### Extension for react-native-box-lite

To use suggestion for className, you need to install extension [react-native-components-intellisense](https://marketplace.visualstudio.com/items?itemName=SangYuo.react-native-components-intellisense) in your vscode.

## Usage

```js
import {Box, Button, Text} from 'react-native-box-lite';
import {View, TouchableOpacity} from 'react-native';

const test =()=>{
   const containerStyle = useClassName({
      className: "flex-1 bg-white p-4"
   })

   const containerHeaderStyle = useClassName({
      className: "bg-black p-4 h-10 w-screen"
   })

   const buttonOutLineStyle = useClassName({
      className: "w-full h-10 rounded-xl border-success bg-white"
   })

   return (
      <View style={containerStyles}>
         <Box style={containerHeaderStyle}>
            <Text className="text-white font-bold text-xl">
               Title
            </Text>
         </Box>
         <Box className="bg-amber-200 h-12 w-12">
            <Text className="text-white font-bold text-md">
               Demo rn component
            </Text>
         </Box>
         <Text className="text-green-500 font-bold text-base">
            Demo rn component
         </Text>
         <Button className="w-10 h-5 bg-amber-500">
            <Text className="text-white font-bold text-center">Button</Text>
         </Button>
         <Button style={buttonOutLineStyle}>
            <Text className="text-green-400 font-bold text-center">Button outline</Text>
         </Button>
         <TouchableOpacity style={buttonOutLineStyle}>
            <Text className="text-green-400 font-bold text-center">Button outline</Text>
         </TouchableOpacity>
      <View>
   )
}

```

## Usage custom styles

- use passed number in `[]` as `w-[200]` => width: 200
- scale you can use function horizontalScale fontSize,... `[${horizontalScale(30)}]`

```js
import {Box, Text} from 'react-native-box-lite';

return (
   <Box className="w-[200] h-[350] bg-white center">
      <Text className="text-white font-bold text-xl">
         Title
      </Text>
   </Box>
   <Text className="text-[22] text-green-500 font-bold">
      Demo rn component
   </Text>
)
```

## HOOK: useClassName

| Prop              | Description                         | Default |
| ----------------- | ----------------------------------- | ------- |
| **`className`**   | class of component as:`w-1 h-1`     | `null`  |
| **`scaleScreen`** | Active use scale by width of screen | `true`  |

## Box

| Prop              | Description                         | Default |
| ----------------- | ----------------------------------- | ------- |
| **`className`**   | class styles of component           | `null`  |
| **`scaleScreen`** | Active use scale by width of screen | `true`  |
| **`rest`**        | extents from ViewProps              |         |

## Button

| Prop                | Description                         | Default |
| ------------------- | ----------------------------------- | ------- |
| **`className`**     | class styles of component           | `null`  |
| **`scaleScreen`**   | Active use scale by width of screen | `true`  |
| **`isDebounce`**    | Active debounce when press          | `false` |
| **`delayDebounce`** | time debounce when press            | `500`   |
| **`rest`**          | extents from TouchableOpacityProps  |         |

## Text

| Prop              | Description                         | Default |
| ----------------- | ----------------------------------- | ------- |
| **`className`**   | class styles of component           | `null`  |
| **`scaleScreen`** | Active use scale by width of screen | `true`  |
| **`rest`**        | extents from TextProps              |         |

## scale screen

| function              | Description                                                    | parameter |
| --------------------- | -------------------------------------------------------------- | --------- |
| **`horizontalScale`** | scale by ratio width device default guidelineBaseWidth = 375   | `number`  |
| **`verticalScale`**   | scale by ratio height device default guidelineBaseHeight = 812 | `number`  |
| **`moderateScale`**   | scale by ratio width and height                                | `number`  |
| **`fontSize`**        | scale by ratio width and height                                | `number`  |
