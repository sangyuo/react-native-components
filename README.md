# rn-components

![components-demo]https://github.com/sangyuo/react-native-components/blob/main/src/example/example-1.png

## Installation

`$ npm install rn-components`
or
`$ yarn add rn-components`

### Extension for rn-components

To use suggestion for className, you need to install extension [react-native-components-intellisense](https://marketplace.visualstudio.com/items?itemName=SangYuo.react-native-components-intellisense) in your vscode.

## Usage

```js
import {Box, Button, Text} from 'rn-components';
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
```

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
