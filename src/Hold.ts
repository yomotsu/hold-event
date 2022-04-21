import { EventDispatcher } from './EventDispatcher';
import { HOLD_EVENT_TYPE } from './constants';

export class Hold extends EventDispatcher {

	holdIntervalDelay?: number;
	protected _enabled: boolean = true;
	protected _holding: boolean = false;
	protected _intervalId: number = - 1;
	protected _deltaTime: number = 0;
	protected _elapsedTime: number = 0;
	protected _lastTime: number = 0;

	constructor( holdIntervalDelay?: number ) {

		super();
		this.holdIntervalDelay = holdIntervalDelay;

	}

	get enabled() {

		return this._enabled;

	}

	set enabled( enabled: boolean ) {

		if ( this._enabled === enabled ) return;

		this._enabled = enabled;

		if ( ! this._enabled ) this._holdEnd();

	}

	protected _holdStart = ( event?: Event ) => {

		if ( ! this._enabled ) return;
		if ( this._holding ) return;

		this._deltaTime = 0;
		this._elapsedTime = 0;
		this._lastTime = performance.now();

		this.dispatchEvent( {
			type: HOLD_EVENT_TYPE.HOLD_START,
			deltaTime: this._deltaTime,
			elapsedTime: this._elapsedTime,
			originalEvent: event,
		} );

		this._holding = true;

		const cb = () => {

			this._intervalId = !! this.holdIntervalDelay ?
				window.setTimeout( cb, this.holdIntervalDelay ) :
				window.requestAnimationFrame( cb );

			const now = performance.now();
			this._deltaTime = now - this._lastTime;
			this._elapsedTime += this._deltaTime;
			this._lastTime = performance.now();

			this.dispatchEvent( {
				type: HOLD_EVENT_TYPE.HOLDING,
				deltaTime: this._deltaTime,
				elapsedTime: this._elapsedTime,
				originalEvent: event
			} );

		};

		this._intervalId = !! this.holdIntervalDelay ?
			window.setTimeout( cb, this.holdIntervalDelay ) :
			window.requestAnimationFrame( cb );

	}

	protected _holdEnd = ( event?: Event ) => {

		if ( ! this._enabled ) return;
		if ( ! this._holding ) return;

		const now = performance.now();
		this._deltaTime = now - this._lastTime;
		this._elapsedTime += this._deltaTime;
		this._lastTime = performance.now();

		this.dispatchEvent( {
			type: HOLD_EVENT_TYPE.HOLD_END,
			deltaTime: this._deltaTime,
			elapsedTime: this._elapsedTime,
			originalEvent: event,
		} );

		window.clearTimeout( this._intervalId );
		window.cancelAnimationFrame( this._intervalId );
		this._holding = false;

	};

}
