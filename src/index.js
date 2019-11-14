import randOpacity from "./randOpacity.js"
import "./styles.css";

const board = document.querySelector( ".board" )

const boardMap = new Array( 20 )
for ( let i = 0; i < boardMap.length; i++ ) {
	const elem = document.createElement( "DIV" );
	elem.className = "board-item";
	board.appendChild( elem )
	boardMap[ i ] = elem;
}

const container = document.querySelector( ".board" );
const options = {
	frequency: 2,
	duration: 10000,
	fadeTo: 0,
}
randOpacity( container, options )

