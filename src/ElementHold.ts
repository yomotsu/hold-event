import { Hold } from './Hold';

export class ElementHold extends Hold {

	private _activePointerIds: number[] = [];

	constructor( element: HTMLElement, holdIntervalDelay?: number ) {

		super( holdIntervalDelay );

		const holdStart = ( event?: Event ) => {

			this._holdStart( event );

		};

		const holdEnd = ( event?: Event ) => {

			this._activePointerIds.length = 0;
			this._holdEnd( event );

		};

		const onPointerDown = ( event: PointerEvent ) => {

			this._activePointerIds.push( event.pointerId );
			holdStart( event );

		};

		const onPointerUp = ( event: PointerEvent ) => {

			const pointerIndex = this._activePointerIds.indexOf( event.pointerId );
			if ( pointerIndex === - 1 ) return;

			this._activePointerIds.splice( pointerIndex, 1 );
			if ( this._activePointerIds.length === 0 ) holdEnd( event );

		};

		element.addEventListener( 'pointerdown', onPointerDown );
		document.addEventListener( 'pointerup', onPointerUp );
		window.addEventListener( 'blur', holdEnd );

	}

}
