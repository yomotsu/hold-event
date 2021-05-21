import { Hold } from './Hold';

export class ElementHold extends Hold {

	constructor( element: HTMLElement, holdIntervalDelay?: number ) {

		super( holdIntervalDelay );

		this._holdStart = this._holdStart.bind( this );
		this._holdEnd = this._holdEnd.bind( this );

		const onPointerDown = this._holdStart;
		const onPointerUp = this._holdEnd;

		element.addEventListener( 'mousedown', onPointerDown );
		document.addEventListener( 'mouseup', onPointerUp );
		window.addEventListener( 'blur', this._holdEnd );

	}

}
