export const parseBoldText = (input: string) =>
  input
    .split(/(__.*?__)/g)
    .map((part, index) =>
      part.startsWith('__') && part.endsWith('__') ? <b key={index}>{part.slice(2, -2)}</b> : part,
    );
