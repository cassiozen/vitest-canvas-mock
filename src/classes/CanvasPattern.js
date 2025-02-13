import { vi } from 'vitest';

export default class CanvasPattern {
  constructor() {
    this.setTransform = vi.fn(this.setTransform.bind(this));
  }

  setTransform(value) {
    if (arguments.length > 0 && !(value instanceof Object))
      throw new TypeError(
        "Failed to execute 'setTransform' on 'CanvasPattern': parameter 1 ('transform') is not an object."
      );
  }
}
