import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import { transformValues, buildInitialValues } from './KontrollerBesteberegningPanel';

const apMedStatus = (status: string, begrunnelse: string): Aksjonspunkt => ({
  definisjon: {
    kode: aksjonspunktCodes.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
    kodeverk: 'test',
  },
  status: {
    kode: status,
    kodeverk: 'test',
  },
  erAktivt: true,
  kanLoses: true,
  begrunnelse,
});

describe('<KontrollerBesteberegningPanel>', () => {
  it('Skal utføre transformeValues korrekt', () => {
    const values = {
      besteberegningErKorrektValg: true,
      begrunnelse: 'Dette er en begrunnelse',
    };
    const transformed = transformValues(values);
    const expected = {
      kode: '5048',
      begrunnelse: 'Dette er en begrunnelse',
      besteberegningErKorrekt: true,
    };
    expect(transformed).toEqual(expected);
  });

  it('Skal bygge initial values korrekt når første gang man er i aksjonspunktet', () => {
    const initialValues = buildInitialValues.resultFunc(null, apMedStatus(aksjonspunktStatus.OPPRETTET, null));
    const expected = {
      begrunnelse: null,
      besteberegningErKorrektValg: null,
    };
    expect(initialValues).toEqual(expected);
  });

  it('Skal bygge initial values korrekt når man har satt at beregning er korrekt', () => {
    const initialValues = buildInitialValues.resultFunc(null, apMedStatus(aksjonspunktStatus.UTFORT, 'Begrunnelsen'));
    const expected = {
      begrunnelse: 'Begrunnelsen',
      besteberegningErKorrektValg: true,
    };
    expect(initialValues).toEqual(expected);
  });

  it('Skal bygge initial values korrekt når man har satt at beregning er feil', () => {
    const initialValues = buildInitialValues.resultFunc(venteArsakType.VENT_PÅ_KORRIGERT_BESTEBEREGNING,
      apMedStatus(aksjonspunktStatus.UTFORT, 'Begrunnelsen'));
    const expected = {
      begrunnelse: 'Begrunnelsen',
      besteberegningErKorrektValg: false,
    };
    expect(initialValues).toEqual(expected);
  });
});
