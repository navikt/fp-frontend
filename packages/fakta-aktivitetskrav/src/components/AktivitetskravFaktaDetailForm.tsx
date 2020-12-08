import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import { FaktaBegrunnelseTextField } from '@fpsak-frontend/fakta-felles';
import { behandlingForm, RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import {
  FlexColumn, FlexContainer, FlexRow, PeriodLabel, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { required } from '@fpsak-frontend/utils';

type FormValues = UttakKontrollerAktivitetskrav;

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  valgtAktivitetskrav: UttakKontrollerAktivitetskrav;
  readOnly: boolean;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  oppdaterAktivitetskrav: (aktivitetskrav: UttakKontrollerAktivitetskrav) => void;
  avbrytEditeringAvAktivitetskrav: () => void;
}

interface MappedOwnProps {
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

export const AktivitetskravFaktaDetailForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  valgtAktivitetskrav,
  readOnly,
  aktivitetskravAvklaringer,
  avbrytEditeringAvAktivitetskrav,
  ...formProps
}) => (
  <>
    <Element><FormattedMessage id="AktivitetskravFaktaDetailForm.Header" /></Element>
    <VerticalSpacer fourPx />
    <Undertekst>
      <FormattedMessage id="AktivitetskravFaktaDetailForm.Periode" />
    </Undertekst>
    <VerticalSpacer fourPx />
    <Normaltekst>
      <PeriodLabel
        dateStringFom={valgtAktivitetskrav.fom}
        dateStringTom={valgtAktivitetskrav.tom}
      />
    </Normaltekst>
    <VerticalSpacer sixteenPx />
    <RadioGroupField
      name="avklaring.kode"
      label={<FormattedMessage id="AktivitetskravFaktaDetailForm.Avklaring" />}
      validate={[required]}
      readOnly={readOnly}
    >
      {aktivitetskravAvklaringer.sort(((a1, a2) => a1.navn.localeCompare(a2.navn))).map((avklaring) => (
        <RadioOption
          key={avklaring.kode}
          label={avklaring.navn}
          value={avklaring.kode}
        />
      ))}
    </RadioGroupField>
    <FaktaBegrunnelseTextField
      name="begrunnelse"
      isSubmittable
      isReadOnly={readOnly}
      hasBegrunnelse
    />
    <VerticalSpacer sixteenPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Hovedknapp mini spinner={false} onClick={formProps.handleSubmit} disabled={formProps.pristine || readOnly}>
            <FormattedMessage id="AktivitetskravFaktaDetailForm.Oppdater" />
          </Hovedknapp>
        </FlexColumn>
        <FlexColumn>
          <Knapp mini htmlType="button" onClick={avbrytEditeringAvAktivitetskrav} disabled={readOnly}>
            <FormattedMessage id="AktivitetskravFaktaDetailForm.Avbryt" />
          </Knapp>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </>
);

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.valgtAktivitetskrav],
  (valgtAktivitetskrav): FormValues => ({
    ...valgtAktivitetskrav,
  }),
);

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.oppdaterAktivitetskrav],
(submitCallback) => (values: FormValues) => submitCallback(values));

const FORM_NAME = 'AktivitetskravFaktaDetailForm';

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(behandlingForm({
  form: FORM_NAME,
  keepDirtyOnReinitialize: false,
  enableReinitialize: true,
})(AktivitetskravFaktaDetailForm));
