import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import {
  RadioGroupField, RadioOption, TextAreaField, DatepickerField,
} from '@fpsak-frontend/form';
import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';
import {
  dateBeforeOrEqualToToday,
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { FlexColumn, FlexRow, VerticalSpacer } from '@fpsak-frontend/shared-components';
import tilbakekrevingKodeverkTyper from '@fpsak-frontend/kodeverk/src/tilbakekrevingKodeverkTyper';
import { AlleKodeverkTilbakekreving, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import TilbakekrevingTimelineData from './splittePerioder/TilbakekrevingTimelineData';
import ForeldelsesresultatActivity from '../types/foreldelsesresultatActivitytsType';

import styles from './foreldelsePeriodeForm.less';
import { PeriodeMedBelop, PeriodeMedFeilutbetaling } from './splittePerioder/PeriodeController';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export const FORELDELSE_PERIODE_FORM_NAME = 'foreldelsesresultatActivity';

export type FormValues = {
  foreldet: string;
} & ForeldelsesresultatActivity;

interface PureOwnProps {
  periode: ForeldelsesresultatActivity;
  alleKodeverk: AlleKodeverkTilbakekreving;
  oppdaterPeriode: (values: FormValues) => void;
  skjulPeriode: (event: React.MouseEvent) => void;
  setNestePeriode: (event: React.KeyboardEvent | React.MouseEvent) => void;
  setForrigePeriode: (event: React.KeyboardEvent | React.MouseEvent) => void;
  oppdaterSplittedePerioder: (data: PeriodeMedFeilutbetaling[]) => void;
  readOnly: boolean;
  beregnBelop: (data: { behandlingUuid: string; perioder: PeriodeMedBelop[]}) => Promise<any>;
  behandlingUuid: string;
}

interface MappedOwnProps {
  foreldelseVurderingTyper: KodeverkMedNavn[];
  erForeldet?: boolean;
  erMedTilleggsfrist?: boolean;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => void;
}

interface DispatchProps {
  clearFields: (formName: string, keepTouched: boolean, persistentSubmitErrors: boolean, ...fields: string[]) => void;
}

export const ForeldelsePeriodeFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & DispatchProps & InjectedFormProps> = ({
  skjulPeriode,
  readOnly,
  foreldelseVurderingTyper,
  periode,
  setNestePeriode,
  setForrigePeriode,
  oppdaterSplittedePerioder,
  beregnBelop,
  erForeldet,
  erMedTilleggsfrist,
  behandlingUuid,
  ...formProps
}) => (
  <div className={styles.container}>
    <TilbakekrevingTimelineData
      periode={periode}
      callbackForward={setNestePeriode}
      callbackBackward={setForrigePeriode}
      oppdaterSplittedePerioder={oppdaterSplittedePerioder}
      readOnly={readOnly}
      behandlingUuid={behandlingUuid}
      beregnBelop={beregnBelop}
    />
    <VerticalSpacer twentyPx />
    <Row>
      <Column md="8">
        <TextAreaField
          name="begrunnelse"
          label={{ id: 'ForeldelsePeriodeForm.Vurdering' }}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
      </Column>
    </Row>
    <VerticalSpacer twentyPx />
    <Row>
      <Column md="5">
        <Undertekst><FormattedMessage id="ForeldelsePeriodeForm.RadioGroup.Foreldet" /></Undertekst>
        <RadioGroupField
          validate={[required]}
          name="foreldet"
          direction="vertical"
          readOnly={readOnly}
        >
          {foreldelseVurderingTyper.map((type) => <RadioOption key={type.kode} label={type.navn} value={type.kode} />)}
        </RadioGroupField>
      </Column>
      <Column md="3">
        {(erForeldet || erMedTilleggsfrist) && (
          <DatepickerField
            name="foreldelsesfrist"
            label={{ id: 'ForeldelsePeriodeForm.Foreldelsesfrist' }}
            validate={[required]}
            readOnly={readOnly}
          />
        )}
        {erMedTilleggsfrist && (
          <>
            <VerticalSpacer eightPx />
            <DatepickerField
              name="oppdagelsesDato"
              label={{ id: 'ForeldelsePeriodeForm.OppdagelsesDato' }}
              validate={[required, dateBeforeOrEqualToToday]}
              readOnly={readOnly}
              disabledDays={{ before: moment('1970-01-01').toDate(), after: moment(moment.now()).toDate() }}
            />
          </>
        )}
      </Column>
    </Row>
    <VerticalSpacer twentyPx />
    <FlexRow>
      <FlexColumn>
        <Hovedknapp
          mini
          htmlType="button"
          onClick={formProps.handleSubmit}
          disabled={formProps.pristine || formProps.submitting || readOnly}
          spinner={formProps.submitting}
        >
          <FormattedMessage id="ForeldelsePeriodeForm.Oppdater" />
        </Hovedknapp>
      </FlexColumn>
      <FlexColumn>
        <Knapp mini htmlType="button" onClick={skjulPeriode}>
          <FormattedMessage id="ForeldelsePeriodeForm.Avbryt" />
        </Knapp>
      </FlexColumn>
    </FlexRow>
  </div>
);

const oldForeldetValue = (fvType: Kodeverk): string | null => (fvType.kode !== foreldelseVurderingType.UDEFINERT ? fvType.kode : null);
const checkForeldetValue = (selectedItemData: ForeldelsesresultatActivity): string => (selectedItemData.foreldet ? selectedItemData.foreldet
  : oldForeldetValue(selectedItemData.foreldelseVurderingType));

const buildInitalValues = (periode: ForeldelsesresultatActivity): FormValues => ({
  ...periode,
  foreldet: checkForeldetValue(periode),
});

const mapStateToPropsFactory = (_initialState: any, ownProps: PureOwnProps) => {
  const initialValues = buildInitalValues(ownProps.periode);
  const onSubmit = (values: FormValues) => ownProps.oppdaterPeriode(values);
  const foreldelseVurderingTyper = ownProps.alleKodeverk[tilbakekrevingKodeverkTyper.FORELDELSE_VURDERING]
    .filter((fv) => fv.kode !== foreldelseVurderingType.IKKE_VURDERT);
  return (state: any): MappedOwnProps => {
    const sel = formValueSelector(FORELDELSE_PERIODE_FORM_NAME);
    const foreldet = sel(state, 'foreldet');
    return {
      initialValues,
      erForeldet: foreldet && foreldet === foreldelseVurderingType.FORELDET,
      erMedTilleggsfrist: foreldet && foreldet === foreldelseVurderingType.TILLEGGSFRIST,
      onSubmit,
      foreldelseVurderingTyper,
    };
  };
};

const ForeldelsePeriodeForm = connect(mapStateToPropsFactory)(reduxForm({
  form: FORELDELSE_PERIODE_FORM_NAME,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ForeldelsePeriodeFormImpl));

export default ForeldelsePeriodeForm;
