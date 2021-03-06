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

const getRandIndex = max => Math.floor( Math.random() * max );

const toggleOpacity = ( elem, fadeTo ) => {
	if ( fadeTo === 1 ) {
		elem.classList.remove( "toggle-popout" );
		setTimeout( () => elem.classList.add( "toggle-popout" ), 17 )
	}
	else if ( fadeTo === 0 ) {
		elem.classList.remove( "toggle-fadein" );
		setTimeout( () => elem.classList.add( "toggle-fadein" ), 17 )
	}
	else {
		elem.style.opacity = Math.floor( Math.random() * 9 + 2 ) / 10;
	}
}

function randOpacity ( container, nodeList, { frequency = 5, duration = 2000, fadeTo = null } ) {
	this.count = 0;
	container.className += " lb-effect-rand-opacity-container";
	container.style.animationDuration = duration + "ms";
	this.forbiddenIndex = [];
	this.frameID = 0;
	this.pause = () => {
		window.cancelAnimationFrame( this.frameID )
	}
	this.start = () => {
		randOpacity_wrapped()
	}

	const randOpacity_wrapped = () => {
		if ( frequency < 1 || frequency > 10 )
			throw new Error(
				"function randOpacity(nodeList, options) : frequency option must be between 1 and 10 included"
			)
		else if ( ++this.count % ( 55 - frequency * 5 ) === 0 ) {
			let nextIndex = getRandIndex( nodeList.length )

			while ( this.forbiddenIndex.includes( nextIndex ) ) {
				nextIndex = getRandIndex( nodeList.length )
			}
			this.forbiddenIndex.push( nextIndex );

			if ( this.forbiddenIndex.length >= nodeList.length / 5 )
				this.forbiddenIndex.shift()

			toggleOpacity( nodeList[ nextIndex ], fadeTo )
		}
		this.frameID = window.requestAnimationFrame( randOpacity_wrapped )
	}
}
export default randOpacity;