import stringEnum from './stringEnum';

export const KjønnkodeEnum = stringEnum({
  KVINNE: 'K',
  MANN: 'M',
  UDEFINERT: '-',
});

export type Kjønnkode = typeof KjønnkodeEnum[keyof typeof KjønnkodeEnum];
