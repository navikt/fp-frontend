import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { Arbeidsforhold, KodeverkMedNavn } from '@fpsak-frontend/types';

import PersonAksjonspunktText from './PersonAksjonspunktText';
import PersonNyttEllerErstattArbeidsforholdPanel from './PersonNyttEllerErstattArbeidsforholdPanel';
import LeggTilArbeidsforholdFelter from './LeggTilArbeidsforholdFelter';
import ArbeidsforholdRadioknapper from './ArbeidsforholdRadioknapper';
import ArbeidsforholdBegrunnelse from './ArbeidsforholdBegrunnelse';
import PermisjonPeriode from './PermisjonPeriode';
import arbeidsforholdHandling from '../../kodeverk/arbeidsforholdHandling';

// ----------------------------------------------------------------------------------
// VARIABLES
// ----------------------------------------------------------------------------------

export const PERSON_ARBEIDSFORHOLD_DETAIL_FORM = 'PersonArbeidsforholdDetailForm';

// ----------------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------------
const showNyttOrErstattPanel = (
  arbeidsforholdHandlingVerdi: any, vurderOmSkalErstattes: any, harErstattetEttEllerFlere: any,
) => arbeidsforholdHandlingVerdi === arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD
  && vurderOmSkalErstattes
  && !harErstattetEttEllerFlere;

interface OwnProps {
  cancelArbeidsforhold: (...args: any[]) => any;
  isErstattArbeidsforhold: boolean;
  hasReceivedInntektsmelding: boolean;
  vurderOmSkalErstattes: boolean;
  harErstattetEttEllerFlere?: boolean;
  readOnly: boolean;
  aktivtArbeidsforholdTillatUtenIM: boolean;
  arbeidsforhold: Arbeidsforhold;
  arbeidsforholdHandlingVerdi?: string;
  skalKunneLeggeTilNyeArbeidsforhold: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  initialValues: {
    erEndret: boolean;
    tilVurdering: boolean;
    replaceOptions: Arbeidsforhold[];
  }
}

// ----------------------------------------------------------------------------------
// Component: PersonArbeidsforholdDetailForm
// ----------------------------------------------------------------------------------
export const PersonArbeidsforholdDetailForm: FunctionComponent<OwnProps & InjectedFormProps> = ({
  cancelArbeidsforhold,
  isErstattArbeidsforhold,
  hasReceivedInntektsmelding,
  harErstattetEttEllerFlere,
  readOnly,
  vurderOmSkalErstattes,
  aktivtArbeidsforholdTillatUtenIM,
  arbeidsforhold,
  arbeidsforholdHandlingVerdi,
  skalKunneLeggeTilNyeArbeidsforhold,
  behandlingId,
  behandlingVersjon,
  alleKodeverk,
  ...formProps
}) => (
  <>
    <Element><FormattedMessage id="PersonArbeidsforholdDetailForm.Header" /></Element>
    <PermisjonPeriode arbeidsforhold={arbeidsforhold} />
    <PersonAksjonspunktText arbeidsforhold={arbeidsforhold} alleKodeverk={alleKodeverk} />
    <VerticalSpacer eightPx />
    { skalKunneLeggeTilNyeArbeidsforhold && (
      <LeggTilArbeidsforholdFelter
        readOnly={readOnly}
        formName={PERSON_ARBEIDSFORHOLD_DETAIL_FORM}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
      />
    )}
    { (arbeidsforhold.kanOppretteNyttArbforFraIM) && (
      <LeggTilArbeidsforholdFelter
        readOnly={readOnly}
        formName={PERSON_ARBEIDSFORHOLD_DETAIL_FORM}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
      />
    )}
    <Row>
      <Column xs="5">
        <VerticalSpacer twentyPx />
        <ArbeidsforholdRadioknapper
          readOnly={readOnly}
          formName={PERSON_ARBEIDSFORHOLD_DETAIL_FORM}
          hasReceivedInntektsmelding={hasReceivedInntektsmelding}
          arbeidsforhold={arbeidsforhold}
          aktivtArbeidsforholdTillatUtenIM={aktivtArbeidsforholdTillatUtenIM}
          arbeidsforholdHandlingVerdi={arbeidsforholdHandlingVerdi}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
        />
        <VerticalSpacer twentyPx />
        <ArbeidsforholdBegrunnelse
          readOnly={readOnly}
          formName={PERSON_ARBEIDSFORHOLD_DETAIL_FORM}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
        />
        <VerticalSpacer sixteenPx />
        { (formProps.initialValues.tilVurdering || formProps.initialValues.erEndret) && (
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Hovedknapp mini spinner={false} onClick={formProps.handleSubmit} disabled={formProps.pristine || readOnly}>
                  <FormattedMessage id="PersonArbeidsforholdDetailForm.Oppdater" />
                </Hovedknapp>
              </FlexColumn>
              <FlexColumn>
                <Knapp mini htmlType="button" onClick={cancelArbeidsforhold} disabled={readOnly}>
                  <FormattedMessage id="PersonArbeidsforholdDetailForm.Avbryt" />
                </Knapp>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        )}
      </Column>
      <Column xs="6">
        { showNyttOrErstattPanel(arbeidsforholdHandlingVerdi, vurderOmSkalErstattes, harErstattetEttEllerFlere) && (
          <PersonNyttEllerErstattArbeidsforholdPanel
            readOnly={readOnly}
            isErstattArbeidsforhold={isErstattArbeidsforhold}
            arbeidsforholdList={formProps.initialValues.replaceOptions}
            formName={PERSON_ARBEIDSFORHOLD_DETAIL_FORM}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
          />
        )}
        { arbeidsforholdHandlingVerdi === arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD && harErstattetEttEllerFlere
          && !arbeidsforhold.kanOppretteNyttArbforFraIM && (
          <Normaltekst>
            <FormattedMessage id="PersonArbeidsforholdDetailForm.ErstatteTidligereArbeidsforhod" />
          </Normaltekst>
        )}
      </Column>
    </Row>
  </>
);

PersonArbeidsforholdDetailForm.defaultProps = {
  harErstattetEttEllerFlere: false,
};

interface PureOwnProps {
  updateArbeidsforhold: (values: any) => void;
}

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: any) => initialOwnProps.updateArbeidsforhold(values);
  return (state: any, ownProps: any) => {
    const {
      arbeidsforhold, readOnly, behandlingId, behandlingVersjon,
    } = ownProps;
    return {
      initialValues: arbeidsforhold,
      readOnly: readOnly || (!arbeidsforhold.tilVurdering && !arbeidsforhold.erEndret),
      hasReceivedInntektsmelding: !!behandlingFormValueSelector(
        PERSON_ARBEIDSFORHOLD_DETAIL_FORM, behandlingId, behandlingVersjon,
      )(state, 'mottattDatoInntektsmelding'),
      vurderOmSkalErstattes: !!behandlingFormValueSelector(
        PERSON_ARBEIDSFORHOLD_DETAIL_FORM, behandlingId, behandlingVersjon,
      )(state, 'vurderOmSkalErstattes'),
      harErstattetEttEllerFlere: behandlingFormValueSelector(
        PERSON_ARBEIDSFORHOLD_DETAIL_FORM, behandlingId, behandlingVersjon,
      )(state, 'harErstattetEttEllerFlere'),
      isErstattArbeidsforhold: behandlingFormValueSelector(
        PERSON_ARBEIDSFORHOLD_DETAIL_FORM, behandlingId, behandlingVersjon,
      )(state, 'erNyttArbeidsforhold') === false,
      arbeidsforholdHandlingVerdi: behandlingFormValueSelector(
        PERSON_ARBEIDSFORHOLD_DETAIL_FORM, behandlingId, behandlingVersjon,
      )(state, 'arbeidsforholdHandlingField'),
      onSubmit,
    };
  };
};

const validateForm = (values: any) => ({
  ...LeggTilArbeidsforholdFelter.validate(values),
});

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: PERSON_ARBEIDSFORHOLD_DETAIL_FORM,
  validate: (values) => validateForm(values),
  enableReinitialize: true,
})(PersonArbeidsforholdDetailForm));
