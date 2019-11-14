import "./randOpacity.css";

if ( !Array.prototype.includes ) {
	Object.defineProperty( Array.prototype, "includes", {
		enumerable: false,
		value: function ( obj ) {
			var newArr = this.filter( function ( el ) {
				return el == obj;
			} );
			return newArr.length > 0;
		}
	} );
}

const getRand = max => Math.floor( Math.random() * max );
const defaultOptions = {
	frequency: 5,
	fade: true,
	duration: 3000
}

const toggleOpacity = ( elem, fade ) => {
	if ( fade ) {
		elem.classList.remove( "toggle-to-animate" );
		elem.style.opacity = Math.floor( Math.random() * 9 + 2 ) / 10;
		setTimeout( () => elem.classList.add( "toggle-to-animate" ), 17 )
	}
	else {
		elem.style.opacity = Math.floor( Math.random() * 9 + 2 ) / 10;
	}
}

const randOpacity = ( container, options ) => {
	let count = 0;
	if ( !options ) {
		options = defaultOptions
	}
	const { frequency, fade, duration } = options;
	container.style.animationDuration = duration + "ms";
	const forbiddenIndex = []

	const randOpacity_wrapped = () => {
		if ( frequency < 1 || frequency > 10 )
			throw new Error(
				"function randOpacity(nodeList, options) : frequency option must be between 1 and 10 included"
			)
		else if ( ++count % ( 33 - frequency * 3 ) === 0 ) {
			let nextIndex = getRand( container.children.length )

			while ( forbiddenIndex.includes( nextIndex ) ) {
				nextIndex = getRand( container.children.length )
			}
			forbiddenIndex.push( nextIndex );

			if ( forbiddenIndex.length >= container.children.length / 15 )
				forbiddenIndex.shift()

			toggleOpacity( container.children[ nextIndex ], fade )
		}
		window.requestAnimationFrame( randOpacity_wrapped )
	}
	randOpacity_wrapped()
}
export default randOpacity;