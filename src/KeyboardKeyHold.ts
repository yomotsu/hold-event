import { Hold } from './Hold';

export class KeyboardKeyHold extends Hold {

	constructor( keyCode: number, holdIntervalDelay: number = 100 ) {

		super( holdIntervalDelay );

		this._holdStart = this._holdStart.bind( this );
		this._holdEnd = this._holdEnd.bind( this );

		const onKeydown = ( event: KeyboardEvent ) => {

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
