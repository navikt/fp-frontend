import React from 'react';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import VurderEtterlonnSluttpakkeForm from './VurderEtterlonnSluttpakkeForm';
import messages from '../../../../../i18n/nb_NO.json';

describe('<VurderEtterlonnSluttpakkeForm>', () => {
  it('Skal teste at komponenten vises korrekt', () => {
    const wrapper = shallowWithIntl(<VurderEtterlonnSluttpakkeForm
      readOnly={false}
      isAksjonspunktClosed={false}
    />, messages);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);
  });
  it('Skal teste at buildInitialvalues bygges korrekt når det er tidligere fastsatt etterlønn eller sluttpakke', () => {
    const ap = {
      status: {
        kode: 'OPPRETTET',
        kodeverk: 'test',
      },
      definisjon: {
        kode: '5058',
        kodeverk: 'test',
      },
      kanLoses: true,
      erAktivt: true,
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              arbeidsforhold: {
                arbeidsforholdType: {
                  kode: 'ETTERLØNN_SLUTTPAKKE',
                  kodeverk: 'test',
                },
              },
              beregnetPrAar: 120000,
            } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    };
    const values = VurderEtterlonnSluttpakkeForm.buildInitialValues(bg, ap);
    const testobj = {
      vurderEtterlønnSluttpakke: true,
    };
    expect(values).toEqual(testobj);
  });

  it('Skal teste at buildInitialvalues bygges korrekt når det ikke er tidligere fastsatt etterlønn eller sluttpakke', () => {
    const ap = {
      status: {
        kode: 'OPPRETTET',
        kodeverk: 'test',
      },
      definisjon: {
        kode: '5058',
        kodeverk: 'test',
      },
      kanLoses: true,
      erAktivt: true,

    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              arbeidsforhold: {
                arbeidsforholdType: {
                  kode: 'ETTERLØNN_SLUTTPAKKE',
                  kodeverk: 'test',
                },
              },
              beregnetPrAar: null,
            } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    };
    const values = VurderEtterlonnSluttpakkeForm.buildInitialValues(bg, ap);
    const testobj = {
      vurderEtterlønnSluttpakke: false,
    };
    expect(values).toEqual(testobj);
  });
});
