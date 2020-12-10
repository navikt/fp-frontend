import React from 'react';
import { expect } from 'chai';

import { TimeLineControl, TimeLineSokerEnsamSoker } from '@fpsak-frontend/tidslinje';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-tilkjent-ytelse';
import { PeriodeMedId, TilkjentYtelse } from './TilkjentYtelse';

describe('<TilkjentYtelse>', () => {
  const arbeidsgiverOpplysningerPerId = {
    1: {
      erPrivatPerson: false,
      identifikator: '973861778',
      navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
    },
  };

  it('skall innehålla korrekt antal felter', () => {
    const wrapper = shallowWithIntl(<TilkjentYtelse
      items={[{
        id: 1,
        tom: '2018-10-01',
        fom: '2018-02-02',
        dagsats: 2300,
        andeler: [{
          arbeidsgiverReferanse: '1',
          refusjon: 0,
          sisteUtbetalingsdato: '2018-03-31',
          tilSoker: 1846,
          uttak: {
            stonadskontoType: 'FORELDREPENGER_FØR_FØDSEL',
            gradering: true,
            periodeResultatType: 'INNVILGET',
          },
        }],
      }] as PeriodeMedId[]}
      groups={[]}
      soknadDate="2018-04-05"
      familiehendelseDate={new Date('2018-05-10')}
      hovedsokerKjonnKode="K"
      intl={intlMock}
      isSoknadSvangerskapspenger={false}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    expect(wrapper.find(TimeLineSokerEnsamSoker)).to.have.length(1);
    expect(wrapper.find(TimeLineSokerEnsamSoker).props().hovedsokerKjonnKode).to.equal('K');
    expect(wrapper.find(TimeLineControl)).to.have.length(1);
  });
});
