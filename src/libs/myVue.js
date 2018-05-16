
class myVue {
  constructor (options) {
    this._data = options.data;
    this.observer(this._data);
  }

  defineReactive(obj, key, val) {
    Object.defineProperty(obj, key , {
      enumerable : true,
      configurable : true,
      get : function reactiveGetter() {
        return val;
      },
      set : function reactiveSetter(newVal) {
        if (newVal === val) return;
        cb(newVal);
      }
    })
  };

  observer (value) {
    if (!value || typeof value != 'object') {
      return;
    }
    Object.keys(value).forEach((key) => {
      this.defineReactive(value, key, value[key]);
    })
  };
}
