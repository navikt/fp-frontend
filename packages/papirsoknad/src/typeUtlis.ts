type ReturnTypesOfFunctionProps<T> = {
  [K in keyof T]: T[K] extends (...args: any) => infer R ? R : never;
}[keyof T];
