import React from 'react';

import VurderEtterlonnSluttpakkeForm from './VurderEtterlonnSluttpakkeForm';
import shallowWithIntl from '../../../../../i18n/intl-enzyme-test-helper-fakta-beregning';

describe('<VurderEtterlonnSluttpakkeForm>', () => {
  it('Skal teste at komponenten vises korrekt', () => {
    const wrapper = shallowWithIntl(<VurderEtterlonnSluttpakkeForm.WrappedComponent
      readOnly={false}
      behandlingId={1}
      behandlingVersjon={1}
      isAksjonspunktClosed={false}
    />);
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
            },
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
            },
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
