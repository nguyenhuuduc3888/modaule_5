"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shape = void 0;
class shape {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    get x() {
        return this.x;
    }
    set x(x) {
        this._x = x;
    }
    toString() {
        return `(x:${this._x},y:${this._y}`;
    }
}
exports.shape = shape;
//# sourceMappingURL=shape.js.map