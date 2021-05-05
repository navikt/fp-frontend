const throwError = (message: string) => {
  throw new Error(message);
};

export const notNull = (value?: string | null) => (value === undefined || value === null ? throwError(`Value is ${value}`) : value);

export const isObjectEmpty = (object: Record<string, any>): boolean => Object.keys(object).length === 0;

export const isEqual = (obj1: Record<string, any>, obj2: Record<string, any>): boolean => JSON.stringify(obj1) === JSON.stringify(obj2);

export const isObject = (variable: any): boolean => variable !== undefined && variable !== null && variable.constructor === Object;

export const omit = (object: Record<string, any>, ...keysToOmit: string[]) => Object.keys(object)
  .filter((key) => !keysToOmit.includes(key))
  .map((key) => ({ [key]: object[key] }))
  .reduce((a, b) => Object.assign(a, b), {});

export const omitOne = <T, K extends keyof T>(object: T, keyToOmit: K): Omit<T, K> => {
  const o: Omit<T, K> & Partial<Pick<T, K>> = { ...object };
  delete o[keyToOmit];
  return o;
};

export const omitMany = <T, K extends keyof T>(object: T, keysToOmit: K[]): Omit<T, K> => {
  let result = object as Omit<T, K>;
  keysToOmit.forEach((key) => {
    result = omitOne(result, key as unknown as keyof Omit<T, K>) as Omit<T, K>;
  });
  return result;
};

type DiffInput = Array<any> | Record<string, any> | (() => any) | string | number | boolean;

const isNullOrUndefined = (obj?: DiffInput | null): boolean => obj === null || typeof obj === 'undefined';
const isNotNullAndObject = (obj?: DiffInput | null): boolean => obj !== null && typeof obj === 'object' && !!obj.constructor;

const redefineIfUndefined = (inputA?: DiffInput | null, inputB?: DiffInput | null): DiffInput | null | undefined => {
  if (isNullOrUndefined(inputA) && isNotNullAndObject(inputB)) {
    try {
      // @ts-ignore Fiks
      return new inputB.constructor();
    } catch (e) {
      return null;
    }
  }
  return inputA;
};

export const diff = (a?: DiffInput | null, b?: DiffInput | null): boolean | Record<string, boolean> => {
  const thing1 = redefineIfUndefined(a, b);
  const thing2 = redefineIfUndefined(b, a);
  if (typeof thing1 !== typeof thing2) {
    return true;
  }
  if (thing1 === null && thing2 === null) {
    return false;
  }

  const diffObj = () => {
    if (thing1 instanceof Array) {
      if (thing2 instanceof Array) {
        const length = Math.max(thing1.length, thing2.length);
        return [...Array(length).keys()].map((i) => diff(thing1[i], thing2[i]));
      }
      return true;
    }

    // @ts-ignore
    return [...new Set([...Object.keys(thing1), ...Object.keys(thing2)])]
      // @ts-ignore
      .reduce((diffs, key) => ({ ...diffs, [key]: diff(thing1[key], thing2[key]) }), {});
  };

  switch (typeof thing1) {
    case 'object':
      return diffObj();
    case 'undefined':
    case 'function':
    case 'string':
    case 'number':
    case 'boolean':
    default:
      return thing1 !== thing2;
  }
};
