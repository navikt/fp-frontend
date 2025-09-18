declare module '*.svg';
declare module '*.less';
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
