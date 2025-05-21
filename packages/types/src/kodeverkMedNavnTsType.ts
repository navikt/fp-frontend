import type { KodeverkType } from './kodeverkType';

//TODO (TOR) extends string bør byttast ut med faktiske enums
export type KodeverkMedNavn<T extends KodeverkType> = Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>;
