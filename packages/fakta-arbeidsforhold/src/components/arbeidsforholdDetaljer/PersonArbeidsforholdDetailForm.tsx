import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, IntlShape } from 'react-intl';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { ArbeidsgiverOpplysningerPerId, KodeverkMedNavn } from '@fpsak-frontend/types';

import PersonAksjonspunktText from './PersonAksjonspunktText';
import PersonNyttEllerErstattArbeidsforholdPanel from './PersonNyttEllerErstattArbeidsforholdPanel';
import LeggTilArbeidsforholdFelter from './LeggTilArbeidsforholdFelter';
import ArbeidsforholdRadioknapper from './ArbeidsforholdRadioknapper';
import ArbeidsforholdBegrunnelse from './ArbeidsforholdBegrunnelse';
import PermisjonPeriode from './PermisjonPeriode';
import ArbeidsforholdHandling from '../../kodeverk/arbeidsforholdHandling';
import CustomArbeidsforhold from '../../typer/CustomArbeidsforholdTsType';

// ----------------------------------------------------------------------------------
// VARIABLES
// ----------------------------------------------------------------------------------

export const PERSON_ARBEIDSFORHOLD_DETAIL_FORM = 'PersonArbeidsforholdDetailForm';

// ----------------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------------
const showNyttOrErstattPanel = (
  arbeidsforholdHandlingVerdi: string,
  vurderOmSkalErstattes: boolean,
  harErstattetEttEllerFlere: boolean,
): boolean => arbeidsforholdHandlingVerdi === ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD
  && vurderOmSkalErstattes
  && !harErstattetEttEllerFlere;

type FormValues = CustomArbeidsforhold;

interface PureOwnProps {
  readOnly: boolean;
  cancelArbeidsforhold: (event: React.MouseEvent) => void;
  aktivtArbeidsforholdTillatUtenIM: boolean;
  arbeidsforhold: CustomArbeidsforhold;
  skalKunneLeggeTilNyeArbeidsforhold: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  updateArbeidsforhold: (values: FormValues) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  intl: IntlShape;
}

interface MappedOwnProps {
  initialValues: CustomArbeidsforhold;
  readOnly: boolean;
  hasReceivedInntektsmelding: boolean;
  vurderOmSkalErstattes: boolean;
  arbeidsforholdHandlingVerdi?: string;
  harErstattetEttEllerFlere?: boolean;
  isErstattArbeidsforhold: boolean;
  onSubmit: (formValues: FormValues) => void;
  validate: (formValues: FormValues, props: any) => void;
}

type Props = PureOwnProps & MappedOwnProps & InjectedFormProps;

// ----------------------------------------------------------------------------------
// Component: PersonArbeidsforholdDetailForm
// ----------------------------------------------------------------------------------
export const PersonArbeidsforholdDetailForm: FunctionComponent<Props> = ({
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
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
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
      />
    )}
    { (arbeidsforhold.kanOppretteNyttArbforFraIM) && (
      <LeggTilArbeidsforholdFelter
        readOnly={readOnly}
        formName={PERSON_ARBEIDSFORHOLD_DETAIL_FORM}
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
        />
        <VerticalSpacer twentyPx />
        <ArbeidsforholdBegrunnelse
          readOnly={readOnly}
          formName={PERSON_ARBEIDSFORHOLD_DETAIL_FORM}
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
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        )}
        { arbeidsforholdHandlingVerdi === ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD && harErstattetEttEllerFlere
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

const validateForm = (values: FormValues, intl: IntlShape) => ({
  ...LeggTilArbeidsforholdFelter.validate(values, intl),
});

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: FormValues) => initialOwnProps.updateArbeidsforhold(values);
  const validate = (values: FormValues, props: Props) => validateForm(values, props.intl);
  return (state: any, ownProps: PureOwnProps): MappedOwnProps => {
    const { arbeidsforhold, readOnly } = ownProps;
    return {
      initialValues: arbeidsforhold,
      readOnly: readOnly || (!arbeidsforhold.tilVurdering && !arbeidsforhold.erEndret),
      hasReceivedInntektsmelding: !!formValueSelector(PERSON_ARBEIDSFORHOLD_DETAIL_FORM)(state, 'mottattDatoInntektsmelding'),
      vurderOmSkalErstattes: !!formValueSelector(PERSON_ARBEIDSFORHOLD_DETAIL_FORM)(state, 'vurderOmSkalErstattes'),
      harErstattetEttEllerFlere: formValueSelector(PERSON_ARBEIDSFORHOLD_DETAIL_FORM)(state, 'harErstattetEttEllerFlere'),
      isErstattArbeidsforhold: formValueSelector(PERSON_ARBEIDSFORHOLD_DETAIL_FORM)(state, 'erNyttArbeidsforhold') === false,
      arbeidsforholdHandlingVerdi: formValueSelector(PERSON_ARBEIDSFORHOLD_DETAIL_FORM)(state, 'arbeidsforholdHandlingField'),
      onSubmit,
      validate,
    };
  };
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: PERSON_ARBEIDSFORHOLD_DETAIL_FORM,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(PersonArbeidsforholdDetailForm));
