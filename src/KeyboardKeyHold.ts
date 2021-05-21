import { Hold } from './Hold';

export class KeyboardKeyHold extends Hold {

	constructor( keyCode: number, holdIntervalDelay?: number ) {

		super( holdIntervalDelay );

		this._holdStart = this._holdStart.bind( this );
		this._holdEnd = this._holdEnd.bind( this );

		const onKeydown = ( event: KeyboardEvent ) => {

			if ( isInputEvent( event ) ) return;
			if ( event.keyCode !== keyCode ) return;

			this._holdStart( event );

		};

		const onKeyup = ( event: KeyboardEvent ) => {

			if ( event.keyCode !== keyCode ) return;

			this._holdEnd( event );

		};

		document.addEventListener( 'keydown', onKeydown );
		document.addEventListener( 'keyup', onKeyup );
		window.addEventListener( 'blur', this._holdEnd );

	}

}

function isInputEvent( event: KeyboardEvent ) {

	const target = event.target as HTMLElement;

	return (
		target.tagName === 'INPUT' ||
		target.tagName === 'SELECT' ||
		target.tagName === 'TEXTAREA' ||
		target.isContentEditable
	);

}
