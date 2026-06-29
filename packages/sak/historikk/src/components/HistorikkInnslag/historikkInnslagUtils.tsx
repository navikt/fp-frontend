export const parseBoldText = (input: string) =>
  input
    .split(/(__.*?__)/g)
    .map((part, index) =>
      // eslint-disable-next-line @eslint-react/no-array-index-key -- tekstbiter mangler stabil id, indeks trengs for unik nøkkel
      part.startsWith('__') && part.endsWith('__') ? <b key={`bold-${index}-${part}`}>{part.slice(2, -2)}</b> : part,
    );
