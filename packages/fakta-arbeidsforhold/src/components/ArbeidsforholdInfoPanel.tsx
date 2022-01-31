import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createSelector } from 'reselect';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { omitMany } from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, Arbeidsforhold, ArbeidsgiverOpplysningerPerId, AlleKodeverk,
} from '@fpsak-frontend/types';
import { AvklarArbeidsforholdAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

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

export const fjernIdFraArbeidsforholdLagtTilAvSaksbehandler = (arbeidsforhold: CustomArbeidsforhold[]): CustomArbeidsforhold[] => arbeidsforhold
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
  .some((ap: Aksjonspunkt) => ap.definisjon === aksjonspunktCode);

interface PureOwnProps {
  aksjonspunkter: Aksjonspunkt[];
  arbeidsforhold: Arbeidsforhold[];
  submitCallback: (data: AvklarArbeidsforholdAp) => Promise<void>;
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  skalKunneLeggeTilNyeArbeidsforhold: boolean;
  alleKodeverk: AlleKodeverk;
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
        skalKunneLeggeTilNyeArbeidsforhold={skalKunneLeggeTilNyeArbeidsforhold}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      { harAksjonspunkt(aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD, aksjonspunkter) && (
      <BekreftOgForsettKnapp
        readOnly={readOnly || (!hasOpenAksjonspunkter && formProps.pristine)}
        isSubmitting={formProps.submitting}
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

const transformValues = (values: FormValues): AvklarArbeidsforholdAp => {
  const arbeidsforhold = fjernIdFraArbeidsforholdLagtTilAvSaksbehandler(values.arbeidsforhold);
  return {
    arbeidsforhold: arbeidsforhold.map((a) => omitMany(a, [
      'erEndret',
      'replaceOptions',
      'originalFomDato',
      'arbeidsforholdHandlingField',
      'aktivtArbeidsforholdHandlingField'])),
    kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
  };
};

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (_state, ownProps: PureOwnProps) => ({
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(injectIntl(ArbeidsforholdInfoPanelImpl)));
