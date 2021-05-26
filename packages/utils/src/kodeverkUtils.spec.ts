import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import arbeidType from '@fpsak-frontend/kodeverk/src/arbeidType';
import avslagsarsakCodes from '@fpsak-frontend/kodeverk/src/avslagsarsakCodes';
import { AlleKodeverk } from '@fpsak-frontend/types';

import { getKodeverknavnFn, getKodeverknavnFraKode } from './kodeverkUtils';

describe('<kodeverkUtils>', () => {
  it('skal finne navn til gitt kodeverk-kode', () => {
    const alleKodeverk = {
      [KodeverkType.ARBEID_TYPE]: [{
        kode: arbeidType.LONN_UNDER_UTDANNING,
        kodeverk: 'ARBEID_TYPE',
        navn: 'Lønn under utdanning',
      }],
    } as AlleKodeverk;

    const kodeverkType = KodeverkType.ARBEID_TYPE;
    const kode = arbeidType.LONN_UNDER_UTDANNING;

    const navn = getKodeverknavnFraKode(alleKodeverk, kodeverkType, kode);

    expect(navn).toBe('Lønn under utdanning');
  });

  it('skal finne navn til gitt kodeverk-objekt', () => {
    const alleKodeverk = {
      [KodeverkType.ARBEID_TYPE]: [{
        kode: arbeidType.LONN_UNDER_UTDANNING,
        kodeverk: 'ARBEID_TYPE',
        navn: 'Lønn under utdanning',
      }],
    } as AlleKodeverk;

    const kodeverk = {
      kodeverk: 'ARBEID_TYPE',
      kode: arbeidType.LONN_UNDER_UTDANNING,
    };

    const navn = getKodeverknavnFn(alleKodeverk, KodeverkType)(kodeverk);

    expect(navn).toBe('Lønn under utdanning');
  });

  it('skal finne navn til gitt kodeverk-objekt når en har underkategori i kodeverk-json', () => {
    const alleKodeverk = {
      [KodeverkType.AVSLAGSARSAK]: {
        [vilkarType.FODSELSVILKARET_MOR]: [{
          kode: avslagsarsakCodes.INGEN_BEREGNINGSREGLER,
          kodeverk: 'AVSLAGSARSAK',
          navn: 'Ingen beregningsregler',
        }],
        [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE]: [{
          kode: 'test 2',
          kodeverk: 'AVSLAGSARSAK',
          navn: 'test 2',
        }],
      },
    };

    const kodeverk = {
      kodeverk: 'AVSLAGSARSAK',
      kode: avslagsarsakCodes.INGEN_BEREGNINGSREGLER,
    };

    // @ts-ignore (Kodeverket for avslagsårsak er anleis enn alle andre. Bør nok flyttast til eigen resttjeneste,
    // evt. må typen til alle-kodeverk endrast i heile appen)
    const navn = getKodeverknavnFn(alleKodeverk, KodeverkType)(kodeverk, vilkarType.FODSELSVILKARET_MOR);

    expect(navn).toBe('Ingen beregningsregler');
  });
});
