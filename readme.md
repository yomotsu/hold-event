# hold-event

Provides key hold-start, holding, hold-end and other events.

- [keyboard](https://yomotsu.github.io/hold-event/examples/keyboard.html)
- [multiple keys](https://yomotsu.github.io/hold-event/examples/keyboard-multiple.html)
- [element](https://yomotsu.github.io/hold-event/examples/element.html)

## Key press and hold

The 1st argument is a [`KeyboardEvent.code`](https://www.w3.org/TR/uievents-code/#keyboard-key-codes).

```js
const keyLeft = new holdEvent.KeyboardKeyHold( 'ArrowLeft' );

keyLeft.addEventListener( holdEvent.HOLD_EVENT_TYPE.HOLD_START, ( event ) => console.log( event ) );
keyLeft.addEventListener( holdEvent.HOLD_EVENT_TYPE.HOLDING, ( event ) => console.log( event ) );
keyLeft.addEventListener( holdEvent.HOLD_EVENT_TYPE.HOLD_END, ( event ) => console.log( event ) );
```

## Element press and hold

```js
const $button = document.getElementById( 'button' )
const buttonHold = new holdEvent.ElementHold( $button );

buttonHold.addEventListener( holdEvent.HOLD_EVENT_TYPE.HOLD_START, ( event ) => console.log( event ) );
buttonHold.addEventListener( holdEvent.HOLD_EVENT_TYPE.HOLDING, ( event ) => console.log( event ) );
buttonHold.addEventListener( holdEvent.HOLD_EVENT_TYPE.HOLD_END, ( event ) => console.log( event ) );
```
