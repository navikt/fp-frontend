export const range = (length: number) => [...Array(length).keys()];

export const isArrayEmpty = (array: any[]): boolean => !array || array.length === 0;

export const haystack = (object: Record<string, any>, keys: string | string[], defaultValue = null): any => {
  const keysArray = Array.isArray(keys) ? keys : keys.replace(/(\[(\d+)\])/g, '.$2').split('.');
  const currentObject = object[keysArray[0]];
  if (currentObject && keysArray.length > 1) {
    return haystack(currentObject, keysArray.slice(1), defaultValue);
  }
  return currentObject === undefined ? defaultValue : currentObject;
};
