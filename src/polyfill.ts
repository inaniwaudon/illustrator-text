Object.keys = (obj: { [key in string]: any }) => {
  const result: string[] = [];
  for (const key in obj) {
    result.push(key);
  }
  return result;
};

Object.values = (obj: { [key in string]: any }) => {
  const result: string[] = [];
  for (const key in obj) {
    result.push(obj[key]);
  }
  return result;
};

Array.prototype.forEach = function <S>(
  callback: (value: S, index: number, array: S[]) => void
) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.reduce = function <S, T>(
  callback: (previous: T, value: S, index: number, array: S[]) => T,
  initial?: any
) {
  let previous = initial ?? this[0];
  for (let i = initial == null ? 1 : 0; i < this.length; i++) {
    previous = callback(previous, this[i], i, this);
  }
  return previous;
};

Array.prototype.map = function <S>(
  callback: (value: any, index: number, array: S[]) => S
) {
  let result: any[] = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

Array.prototype.filter = function <S>(
  predicate: (value: S, index: number, array: S[]) => boolean
) {
  let result: any[] = [];
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.some = function <S>(
  predicate: (value: S, index: number, array: S[]) => boolean
) {
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

Array.prototype.every = function <S>(
  predicate: (value: S, index: number, array: S[]) => value is S
) {
  let result = true;
  for (let i = 0; i < this.length; i++) {
    result &&= predicate(this[i], i, this);
  }
  return result;
};

Array.prototype.fill = function <S>(value: S) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(value);
  }
  return result;
};

Array.prototype.includes = function <S>(value: S) {
  for (const arrrayValue of this) {
    if (arrrayValue === value) {
      return true;
    }
  }
  return false;
};

Array.prototype.at = function (index: number) {
  return index >= 0 ? this[index] : this[this.length + index];
};

String.prototype.includes = function (value: string) {
  return this.split("").includes(value);
};
