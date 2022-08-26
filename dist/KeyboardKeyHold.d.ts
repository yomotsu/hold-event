import { Hold } from './Hold';
declare type WritingSystemKeys = 'Backquote' | 'Backslash' | 'Backspace' | 'BracketLeft' | 'BracketRight' | 'Comma' | 'Digit0' | 'Digit1' | 'Digit2' | 'Digit3' | 'Digit4' | 'Digit5' | 'Digit6' | 'Digit7' | 'Digit8' | 'Digit9' | 'Equal' | 'IntlBackslash' | 'IntlRo' | 'IntlYen' | 'KeyA' | 'KeyB' | 'KeyC' | 'KeyD' | 'KeyE' | 'KeyF' | 'KeyG' | 'KeyH' | 'KeyI' | 'KeyJ' | 'KeyK' | 'KeyL' | 'KeyM' | 'KeyN' | 'KeyO' | 'KeyP' | 'KeyQ' | 'KeyR' | 'KeyS' | 'KeyT' | 'KeyU' | 'KeyV' | 'KeyW' | 'KeyX' | 'KeyY' | 'KeyZ' | 'Minus' | 'Period' | 'Quote' | 'Semicolon' | 'Slash';
declare type FunctionalKeys = 'AltLeft' | 'AltRight' | 'CapsLock' | 'ContextMenu' | 'ControlLeft' | 'ControlRight' | 'Enter' | 'MetaLeft' | 'MetaRight' | 'ShiftLeft' | 'ShiftRight' | 'Space' | 'Tab';
declare type CJKFunctionalKeys = 'Convert' | 'KanaMode' | 'Lang1' | 'Lang2' | 'Lang3' | 'Lang4' | 'Lang5' | 'NonConvert';
declare type ControlPadKeys = 'Delete' | 'End' | 'Help' | 'Home' | 'Insert' | 'PageDown' | 'PageUp';
declare type AllowKeys = 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp';
declare type NumPadKeys = 'NumLock' | 'Numpad0' | 'Numpad1' | 'Numpad2' | 'Numpad3' | 'Numpad4' | 'Numpad5' | 'Numpad6' | 'Numpad7' | 'Numpad8' | 'Numpad9' | 'NumpadAdd' | 'NumpadBackspace' | 'NumpadClear' | 'NumpadClearEntry' | 'NumpadComma' | 'NumpadDecimal' | 'NumpadDivide' | 'NumpadEnter' | 'NumpadEqual' | 'NumpadHash' | 'NumpadMemoryAdd' | 'NumpadMemoryClear' | 'NumpadMemoryRecall' | 'NumpadMemoryStore' | 'NumpadMemorySubtract' | 'NumpadMultiply' | 'NumpadParenLeft' | 'NumpadParenRight' | 'NumpadStar' | 'NumpadSubtract';
declare type FunctionKeys = 'Escape' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'Fn' | 'FnLock' | 'PrintScreen' | 'ScrollLock' | 'Pause';
declare type MediaKeys = 'BrowserBack' | 'BrowserFavorites' | 'BrowserForward' | 'BrowserHome' | 'BrowserRefresh' | 'BrowserSearch' | 'BrowserStop' | 'Eject' | 'LaunchApp1' | 'LaunchApp2' | 'LaunchMail' | 'MediaPlayPause' | 'MediaSelect' | 'MediaStop' | 'MediaTrackNext' | 'MediaTrackPrevious' | 'Power' | 'Sleep' | 'AudioVolumeDown' | 'AudioVolumeMute' | 'AudioVolumeUp' | 'WakeUp';
declare type KeyboardEventCode = WritingSystemKeys | FunctionalKeys | CJKFunctionalKeys | ControlPadKeys | AllowKeys | NumPadKeys | FunctionKeys | MediaKeys;
export declare class KeyboardKeyHold extends Hold {
    constructor(code: KeyboardEventCode, holdIntervalDelay?: number);
}
export {};
