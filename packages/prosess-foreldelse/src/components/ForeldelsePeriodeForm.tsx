import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm,
} from '@fpsak-frontend/form';
import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';
import {
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { FlexColumn, FlexRow, VerticalSpacer } from '@fpsak-frontend/shared-components';
import tilbakekrevingKodeverkTyper from '@fpsak-frontend/kodeverk/src/tilbakekrevingKodeverkTyper';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import TilbakekrevingTimelineData from './splittePerioder/TilbakekrevingTimelineData';
import ForeldelsesresultatActivity from '../types/foreldelsesresultatActivitytsType';

import styles from './foreldelsePeriodeForm.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export const FORELDELSE_PERIODE_FORM_NAME = 'foreldelsesresultatActivity';

interface OwnProps {
  periode: ForeldelsesresultatActivity;
  behandlingFormPrefix: string;
  skjulPeriode: (...args: any[]) => any;
  readOnly: boolean;
  foreldelseVurderingTyper: KodeverkMedNavn[];
  setNestePeriode: (...args: any[]) => any;
  setForrigePeriode: (...args: any[]) => any;
  oppdaterSplittedePerioder: (...args: any[]) => any;
  behandlingId: number;
  behandlingVersjon: number;
  beregnBelop: (data: any) => Promise<any>;
}

interface DispatchProps {
  clearFields: (formName: string, keepTouched: boolean, persistentSubmitErrors: boolean, ...fields: string[]) => void;
}

export const ForeldelsePeriodeFormImpl: FunctionComponent<OwnProps & DispatchProps & InjectedFormProps> = ({
  skjulPeriode,
  readOnly,
  foreldelseVurderingTyper,
  periode,
  setNestePeriode,
  setForrigePeriode,
  oppdaterSplittedePerioder,
  behandlingId,
  behandlingVersjon,
  beregnBelop,
  ...formProps
}) => (
  <div className={styles.container}>
    <TilbakekrevingTimelineData
      periode={periode}
      callbackForward={setNestePeriode}
      callbackBackward={setForrigePeriode}
      oppdaterSplittedePerioder={oppdaterSplittedePerioder}
      readOnly={readOnly}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      beregnBelop={beregnBelop}
    />
    <VerticalSpacer twentyPx />
    <Row>
      <Column md="6">
        <TextAreaField
          name="begrunnelse"
          label={{ id: 'ForeldelsePeriodeForm.Vurdering' }}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
      </Column>
      <Column md="6">
        <Undertekst><FormattedMessage id="ForeldelsePeriodeForm.RadioGroup.Foreldet" /></Undertekst>
        <VerticalSpacer eightPx />
        <RadioGroupField
          validate={[required]}
          name="foreldet"
          direction="vertical"
          readOnly={readOnly}
        >
          {foreldelseVurderingTyper.map((type) => <RadioOption key={type.kode} label={type.navn} value={type.kode} />)}
        </RadioGroupField>
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

const oldForeldetValue = (fvType: Kodeverk) => (fvType.kode !== foreldelseVurderingType.UDEFINERT ? fvType.kode : null);
const checkForeldetValue = (selectedItemData: ForeldelsesresultatActivity) => (selectedItemData.foreldet ? selectedItemData.foreldet
  : oldForeldetValue(selectedItemData.foreldelseVurderingType));

const buildInitalValues = (periode: ForeldelsesresultatActivity) => ({
  ...periode,
  foreldet: checkForeldetValue(periode),
});

interface PureOwnProps {
  periode: ForeldelsesresultatActivity;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  oppdaterPeriode: (values: any) => void;
}

const mapStateToPropsFactory = (_initialState: any, ownProps: PureOwnProps) => {
  const initialValues = buildInitalValues(ownProps.periode);
  const onSubmit = (values: any) => ownProps.oppdaterPeriode(values);
  const foreldelseVurderingTyper = ownProps.alleKodeverk[tilbakekrevingKodeverkTyper.FORELDELSE_VURDERING]
    .filter((fv: KodeverkMedNavn) => fv.kode !== foreldelseVurderingType.IKKE_VURDERT);
  return () => ({
    initialValues,
    onSubmit,
    foreldelseVurderingTyper,
  });
};

const ForeldelsePeriodeForm = connect(mapStateToPropsFactory)(behandlingForm({
  form: FORELDELSE_PERIODE_FORM_NAME,
  enableReinitialize: true,
})(ForeldelsePeriodeFormImpl));

export default ForeldelsePeriodeForm;
