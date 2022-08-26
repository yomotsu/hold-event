import { EventDispatcher } from './EventDispatcher';
export declare class Hold extends EventDispatcher {
    holdIntervalDelay?: number;
    protected _enabled: boolean;
    protected _holding: boolean;
    protected _intervalId: number;
    protected _deltaTime: number;
    protected _elapsedTime: number;
    protected _lastTime: number;
    constructor(holdIntervalDelay?: number);
    get enabled(): boolean;
    set enabled(enabled: boolean);
    get holding(): boolean;
    protected _holdStart: (event?: Event) => void;
    protected _holdEnd: (event?: Event) => void;
}
