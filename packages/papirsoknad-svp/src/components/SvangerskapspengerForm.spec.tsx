import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import MottattDatoPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-mottatt-dato';

import { SvangerskapspengerForm, transformValues } from './SvangerskapspengerForm';

describe('<SvangerskapspengerForm>', () => {
  it('skal vise fødselpaneler når familieHendelseType er lik fødsel', () => {
    const wrapper = shallow(<SvangerskapspengerForm
      {...reduxFormPropsMock}
      onSubmitUfullstendigsoknad={sinon.spy()}
      readOnly={false}
      soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR)}
      alleKodeverk={{}}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      validate={sinon.spy()}
      valuesForRegisteredFieldsOnly={{}}
    />);
    expect(wrapper.find(MottattDatoPapirsoknadIndex)).toHaveLength(1);
  });

  it('skal transformere tilretteleggingsdata for arbeidsgiver før lagring', () => {
    const values = {
      foedselsDato: '2019-09-18',
      tilretteleggingArbeidsforhold: {
        sokForSelvstendigNaringsdrivende: false,
        sokForFrilans: false,
        sokForArbeidsgiver: true,
        tilretteleggingForArbeidsgiver: [{
          organisasjonsnummer: '12345',
          behovsdato: '2019-09-18',
          tilretteleggingArbeidsgiver: [{
            tilretteleggingType: 'HEL_TILRETTELEGGING',
            fomDato: '2019-09-19',
            stillingsprosent: '12',
          }, {
            tilretteleggingType: 'DELVIS_TILRETTELEGGING',
            fomDato: '2019-09-18',
            stillingsprosent: '23',
          }],
        }, {
          organisasjonsnummer: '45677',
          behovsdato: '2019-09-18',
          tilretteleggingArbeidsgiver: [
            {
              tilretteleggingType: 'HEL_TILRETTELEGGING',
              fomDato: '2019-09-19',
              stillingsprosent: '23',
            },
          ],
        }],
      },
    };

    expect(transformValues(values)).toEqual({
      foedselsDato: ['2019-09-18'],
      tilretteleggingArbeidsforhold: [{
        '@type': 'VI',
        behovsdato: '2019-09-18',
        organisasjonsnummer: '12345',
        tilrettelegginger: [{
          fomDato: '2019-09-19',
          stillingsprosent: '12',
          tilretteleggingType: 'HEL_TILRETTELEGGING',
        }, {
          fomDato: '2019-09-18',
          stillingsprosent: '23',
          tilretteleggingType: 'DELVIS_TILRETTELEGGING',
        }],
      }, {
        '@type': 'VI',
        behovsdato: '2019-09-18',
        organisasjonsnummer: '45677',
        tilrettelegginger: [{
          fomDato: '2019-09-19',
          stillingsprosent: '23',
          tilretteleggingType: 'HEL_TILRETTELEGGING',
        }],
      }],
    });
  });

  it('skal transformere tilretteleggingsdata for frilans før lagring', () => {
    const values = {
      foedselsDato: '2019-09-18',
      tilretteleggingArbeidsforhold: {
        sokForSelvstendigNaringsdrivende: false,
        sokForFrilans: true,
        sokForArbeidsgiver: false,
        behovsdatoFrilans: '2019-09-18',
        tilretteleggingFrilans: [{
          tilretteleggingType: 'HEL_TILRETTELEGGING',
          fomDato: '2019-09-19',
          stillingsprosent: '12',
        }, {
          tilretteleggingType: 'DELVIS_TILRETTELEGGING',
          fomDato: '2019-09-18',
          stillingsprosent: '23',
        }],
      },
    };

    expect(transformValues(values)).toEqual({
      foedselsDato: ['2019-09-18'],
      tilretteleggingArbeidsforhold: [{
        '@type': 'FR',
        behovsdato: '2019-09-18',
        tilrettelegginger: [{
          fomDato: '2019-09-19',
          stillingsprosent: '12',
          tilretteleggingType: 'HEL_TILRETTELEGGING',
        }, {
          fomDato: '2019-09-18',
          stillingsprosent: '23',
          tilretteleggingType: 'DELVIS_TILRETTELEGGING',
        }],
      }],
    });
  });

  it('skal transformere tilretteleggingsdata for selvstendig næringsdrivende før lagring', () => {
    const values = {
      foedselsDato: '2019-09-18',
      tilretteleggingArbeidsforhold: {
        sokForSelvstendigNaringsdrivende: true,
        sokForFrilans: false,
        sokForArbeidsgiver: false,
        behovsdatoSN: '2019-09-18',
        tilretteleggingSelvstendigNaringsdrivende: [{
          tilretteleggingType: 'HEL_TILRETTELEGGING',
          fomDato: '2019-09-19',
          stillingsprosent: '12',
        }, {
          tilretteleggingType: 'DELVIS_TILRETTELEGGING',
          fomDato: '2019-09-18',
          stillingsprosent: '23',
        }],
      },
    };

    expect(transformValues(values)).toEqual({
      foedselsDato: ['2019-09-18'],
      tilretteleggingArbeidsforhold: [{
        '@type': 'SN',
        behovsdato: '2019-09-18',
        tilrettelegginger: [{
          fomDato: '2019-09-19',
          stillingsprosent: '12',
          tilretteleggingType: 'HEL_TILRETTELEGGING',
        }, {
          fomDato: '2019-09-18',
          stillingsprosent: '23',
          tilretteleggingType: 'DELVIS_TILRETTELEGGING',
        }],
      }],
    });
  });
});
