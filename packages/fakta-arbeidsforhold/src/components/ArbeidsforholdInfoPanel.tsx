import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { behandlingForm } from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { omit } from '@fpsak-frontend/utils';
import { Aksjonspunkt, Arbeidsforhold, KodeverkMedNavn } from '@fpsak-frontend/types';

import { InjectedFormProps } from 'redux-form';
import BekreftOgForsettKnapp from './BekreftOgForsettKnapp';
import PersonArbeidsforholdPanel from './PersonArbeidsforholdPanel';

// ----------------------------------------------------------------------------
// VARIABLES
// ----------------------------------------------------------------------------

const formName = 'ArbeidsforholdInfoPanel';

// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------

export const fjernIdFraArbeidsforholdLagtTilAvSaksbehandler = (arbeidsforhold: Arbeidsforhold[]) => arbeidsforhold.map((a: Arbeidsforhold) => {
  if (a.lagtTilAvSaksbehandler === true) {
    return {
      ...a,
      id: null,
    };
  }
  return a;
});

const harAksjonspunkt = (aksjonspunktCode: string, aksjonspunkter: Aksjonspunkt[]) => aksjonspunkter
  .some((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCode);

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  skalKunneLeggeTilNyeArbeidsforhold: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

/**
 * ArbeidsforholdInfoPanelImpl:
 * Ansvarlig for å rendre aksjonspunktteksten, arbeidsforholdene, og
 * bekreft & fortsett knappen
 * */
export const ArbeidsforholdInfoPanelImpl: FunctionComponent<OwnProps & InjectedFormProps> = ({
  aksjonspunkter,
  readOnly,
  hasOpenAksjonspunkter,
  skalKunneLeggeTilNyeArbeidsforhold,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  behandlingId,
  behandlingVersjon,
  ...formProps
}) => (
  <>
    { aksjonspunkter.length > 0 && (
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter && !readOnly}>
        {[<FormattedMessage
          key="ArbeidsforholdInfoPanelAksjonspunkt"
          id={skalKunneLeggeTilNyeArbeidsforhold ? 'ArbeidsforholdInfoPanel.IngenArbeidsforholdRegistrert' : 'ArbeidsforholdInfoPanel.AvklarArbeidsforhold'}
        />]}
      </AksjonspunktHelpTextTemp>
    )}
    <form onSubmit={formProps.handleSubmit}>
      <PersonArbeidsforholdPanel
        readOnly={readOnly}
        hasAksjonspunkter={aksjonspunkter.length > 0}
        hasOpenAksjonspunkter={hasOpenAksjonspunkter}
        skalKunneLeggeTilNyeArbeidsforhold={skalKunneLeggeTilNyeArbeidsforhold}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
      />
      { harAksjonspunkt(aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD, aksjonspunkter) && (
      <BekreftOgForsettKnapp
        readOnly={readOnly || (!hasOpenAksjonspunkter && formProps.pristine)}
        isSubmitting={formProps.submitting}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
      />
      )}
    </form>
  </>

);

interface PureOwnProps {
  arbeidsforhold: Arbeidsforhold[];
  submitCallback: (...args: any[]) => any;
}

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.arbeidsforhold],
  (arbeidsforhold) => ({
    ...PersonArbeidsforholdPanel.buildInitialValues(arbeidsforhold),
  }),
);

const transformValues = (values: any) => {
  const arbeidsforhold = fjernIdFraArbeidsforholdLagtTilAvSaksbehandler(values.arbeidsforhold);
  return {
    arbeidsforhold: arbeidsforhold.map((a: any) => omit(a,
      'erEndret',
      'replaceOptions',
      'originalFomDato',
      'arbeidsforholdHandlingField',
      'aktivtArbeidsforholdHandlingField')),
    kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
  };
};

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: any) => initialOwnProps.submitCallback([transformValues(values)]);
  return (_state, ownProps: PureOwnProps) => ({
    initialValues: buildInitialValues(ownProps),
    onSubmit,
  });
};

export default connect(mapStateToPropsFactory)(behandlingForm({ form: formName })(ArbeidsforholdInfoPanelImpl));
