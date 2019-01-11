/// <reference types="node" />
import { IGPIOModule } from 'core-io-types';
import { Value } from 'abstract-io';
import { EventEmitter } from 'events';
export declare class GPIOManager {
    private module;
    private eventEmitter;
    constructor(gpioModule: IGPIOModule, globalEventEmitter: EventEmitter);
    setInputMode(pin: number, pullResistor?: number): void;
    setOutputMode(pin: number): void;
    digitalWrite(pin: number, value: Value): void;
    digitalRead(pin: number, handler: (value: Value) => void): void;
}