import React from 'react';
import sinon from 'sinon';
import { Element } from 'nav-frontend-typografi';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioOption, TextAreaField } from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, BeregningsresultatFp } from '@fpsak-frontend/types';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';

import { buildInitialValues, Tilbaketrekkpanel as UnwrappedForm, transformValues } from './Tilbaketrekkpanel';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-tilkjent-ytelse';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const lagAksjonspunktTilbaketrekk = (begrunnelse?: string): Aksjonspunkt => ({
  definisjon: {
    kode: aksjonspunktCodes.VURDER_TILBAKETREKK,
  },

  status: {
    kode: 'OPPR',
  },

  begrunnelse,
} as Aksjonspunkt);

describe('<Tilbaketrekkpanel>', () => {
  it('skal teste at komponent vises korrekt', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      intl={intlMock}
      readOnly={false}
      submitCallback={sinon.spy()}
      readOnlySubmitButton={false}
      vurderTilbaketrekkAP={lagAksjonspunktTilbaketrekk()}
      behandlingId={1}
      behandlingVersjon={1}
      {...reduxFormPropsMock}
    />);

    const radioOption = wrapper.find(RadioOption);
    expect(radioOption).toHaveLength(2);
    const textfield = wrapper.find(TextAreaField);
    expect(textfield).toHaveLength(1);
    const button = wrapper.find(ProsessStegSubmitButton);
    expect(button).toHaveLength(1);
    const element = wrapper.find(Element);
    expect(element).toHaveLength(1);
  });

  it('skal teste at komponent bygger korrekte initial values dersom alle data mangler', () => {
    const expectedInitialValues = undefined;

    const actualInitialValues = buildInitialValues.resultFunc(undefined, undefined);
    expect(actualInitialValues).toEqual(expectedInitialValues);
  });

  it('skal teste at komponent bygger korrekte initial values dersom aksjonspunkt ikke er løst før', () => {
    const expectedInitialValues = undefined;
    const ownProps = {
      vurderTilbaketrekkAP: lagAksjonspunktTilbaketrekk(),
    };
    const tilkjentYtelse = {
      skalHindreTilbaketrekk: null,
    } as BeregningsresultatFp;
    const actualInitialValues = buildInitialValues.resultFunc(ownProps.vurderTilbaketrekkAP, tilkjentYtelse);
    expect(actualInitialValues).toEqual(expectedInitialValues);
  });

  it('skal teste at komponent bygger korrekte initial values dersom aksjonspunkt er løst før og er satt til false', () => {
    const expectedInitialValues = {
      radioVurderTilbaketrekk: false,
      begrunnelseVurderTilbaketrekk: 'begrunnelse',
    };
    const ownProps = {
      vurderTilbaketrekkAP: lagAksjonspunktTilbaketrekk('begrunnelse'),
    };
    const tilkjentYtelse = {
      skalHindreTilbaketrekk: false,
    } as BeregningsresultatFp;
    const actualInitialValues = buildInitialValues.resultFunc(ownProps.vurderTilbaketrekkAP, tilkjentYtelse);
    expect(actualInitialValues).toEqual(expectedInitialValues);
  });

  it('skal teste at komponent bygger korrekte initial values dersom aksjonspunkt er løst før og er satt til true', () => {
    const expectedInitialValues = {
      radioVurderTilbaketrekk: true,
      begrunnelseVurderTilbaketrekk: 'Utfør tilbaketrekk grunnet endret refusjonskrav',
    };
    const ownProps = {
      vurderTilbaketrekkAP: lagAksjonspunktTilbaketrekk('Utfør tilbaketrekk grunnet endret refusjonskrav'),
    };
    const tilkjentYtelse = {
      skalHindreTilbaketrekk: true,
    } as BeregningsresultatFp;
    const actualInitialValues = buildInitialValues.resultFunc(ownProps.vurderTilbaketrekkAP, tilkjentYtelse);
    expect(actualInitialValues).toEqual(expectedInitialValues);
  });

  it('skal teste at transformvalues settes korrekt', () => {
    const expectedTransformedValues = {
      kode: aksjonspunktCodes.VURDER_TILBAKETREKK,
      begrunnelse: 'Test',
      hindreTilbaketrekk: false,
    };
    const values = {
      radioVurderTilbaketrekk: false,
      begrunnelseVurderTilbaketrekk: 'Test',
    };
    const actualTransformedValues = transformValues(values);
    expect(actualTransformedValues).toEqual(expectedTransformedValues);
  });
});
