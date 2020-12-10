import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { behandlingForm } from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { omit } from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, Arbeidsforhold, ArbeidsgiverOpplysningerPerId, KodeverkMedNavn,
} from '@fpsak-frontend/types';

import { InjectedFormProps } from 'redux-form';
import BekreftOgForsettKnapp from './BekreftOgForsettKnapp';
import PersonArbeidsforholdPanel from './PersonArbeidsforholdPanel';
import CustomArbeidsforhold from '../typer/CustomArbeidsforholdTsType';

// ----------------------------------------------------------------------------
// VARIABLES
// ----------------------------------------------------------------------------

const formName = 'ArbeidsforholdInfoPanel';

// ----------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------

export const fjernIdFraArbeidsforholdLagtTilAvSaksbehandler = (arbeidsforhold: Arbeidsforhold[]): Arbeidsforhold[] => arbeidsforhold
  .map((a: Arbeidsforhold) => {
    if (a.lagtTilAvSaksbehandler === true) {
      return {
        ...a,
        id: null,
      };
    }
    return a;
  });

const harAksjonspunkt = (aksjonspunktCode: string, aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .some((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCode);

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  aksjonspunkter: Aksjonspunkt[];
  arbeidsforhold: Arbeidsforhold[];
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  skalKunneLeggeTilNyeArbeidsforhold: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * ArbeidsforholdInfoPanelImpl:
 * Ansvarlig for å rendre aksjonspunktteksten, arbeidsforholdene, og
 * bekreft & fortsett knappen
 * */
export const ArbeidsforholdInfoPanelImpl: FunctionComponent<PureOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  aksjonspunkter,
  readOnly,
  hasOpenAksjonspunkter,
  skalKunneLeggeTilNyeArbeidsforhold,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  behandlingId,
  behandlingVersjon,
  arbeidsgiverOpplysningerPerId,
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
        intl={intl}
        readOnly={readOnly}
        hasAksjonspunkter={aksjonspunkter.length > 0}
        hasOpenAksjonspunkter={hasOpenAksjonspunkter}
        skalKunneLeggeTilNyeArbeidsforhold={skalKunneLeggeTilNyeArbeidsforhold}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
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

type FormValues = {
  arbeidsforhold: CustomArbeidsforhold[];
}

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.arbeidsforhold,
    (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId],
  (arbeidsforhold, arbeidsgiverOpplysningerPerId): FormValues => ({
    ...PersonArbeidsforholdPanel.buildInitialValues(arbeidsforhold, arbeidsgiverOpplysningerPerId),
  }),
);

const transformValues = (values: FormValues): any => {
  const arbeidsforhold = fjernIdFraArbeidsforholdLagtTilAvSaksbehandler(values.arbeidsforhold);
  return {
    arbeidsforhold: arbeidsforhold.map((a) => omit(a,
      'erEndret',
      'replaceOptions',
      'originalFomDato',
      'arbeidsforholdHandlingField',
      'aktivtArbeidsforholdHandlingField')),
    kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
  };
};

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback([transformValues(values)]));

const mapStateToProps = (_state, ownProps: PureOwnProps) => ({
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(behandlingForm({ form: formName })(injectIntl(ArbeidsforholdInfoPanelImpl)));
