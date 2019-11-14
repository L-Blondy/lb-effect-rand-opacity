# lb-effects-rand-opacity

`randOpacity` will target the children of the container (1st arg) and will periodically trigger an opacity animation on random children

Compatible with IE10+

## install
> npm install --save-dev lb-effect-rand-opacity

## Usage
```
import randOpacity from "lb-effect-rand-opacity/dist/bundle.js"
...
const container = document.querySelector( ".container" );
const options = {
	frequency: 8,  ( 1 < frequency < 10 )
	duration: 2000,
	fade: true,
}
randOpacity( container, options )
```