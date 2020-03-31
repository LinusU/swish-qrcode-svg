# Swish QR Code SVG

Generate [Swish](https://www.swish.nu) styled QR Code as SVG images.

## Installation

```sh
npm install --save swish-qrcode-svg
```

## Usage

```js
const swishQrcodeSvg = require('swish-qrcode-svg')

console.log(swishQrcodeSvg('http://example.com', { margin: 0, backgroundColor: 'transparent' }))
// => <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox=...
```

![Example](/example.png?raw=true "Example")

## API

### `swishQrcodeSvg(input: string, options?: Options): string`

Renders a QR Code with the data in `input`. Returns a string with the SVG content.

#### `options.backgroundColor: string`

Sets the color of the QR Code light patches. Defaults to `white`.

Note: you can set this value to `transparent` to not have a background at all.

#### `options.margin: number`

Number of additional "points" of the background color on each side. Defaults to `4`.

#### `options.size: number`

If this option is set, the resulting `svg`-tag will have it's `width` and `height` property set to this value.
