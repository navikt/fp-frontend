import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import {
  formValueSelector, getFormValues, reduxForm, InjectedFormProps,
} from 'redux-form';
import { connect } from 'react-redux';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp } from 'nav-frontend-knapper';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { ariaCheck, required } from '@fpsak-frontend/utils';
import { BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './soknadTypePickerForm.less';

const SOKNAD_TYPE_PICKER_FORM = 'SoknadTypePickerForm';

export const soeknadsTyper = [
  familieHendelseType.ADOPSJON,
  familieHendelseType.FODSEL];

interface FormValues {
  fagsakYtelseType?: string;
  familieHendelseType?: string;
  foreldreType?: string;
}

interface PureOwnProps {
  setSoknadData: (soknadData: SoknadData) => SoknadData;
  soknadData?: SoknadData;
  fagsakYtelseType: Kodeverk;
  alleKodeverk: AlleKodeverk;
}

interface MappedOwnProps {
  fagsakYtelseTyper: KodeverkMedNavn[];
  familieHendelseTyper: KodeverkMedNavn[];
  foreldreTyper: KodeverkMedNavn[];
  selectedFagsakYtelseType?: string;
  ytelseErSatt: boolean;
  initialValues: FormValues;
  onSubmit: (values: Required<FormValues>) => void;
}

/**
 * SoknadTypePickerForm
 *
 * Presentasjonskomponent: Toppkomponent for registrering av papirsøknad der søknadstype, tema og søker/foreldretype blir valgt.
 */
export const SoknadTypePickerForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  fagsakYtelseTyper,
  familieHendelseTyper,
  foreldreTyper,
  handleSubmit,
  selectedFagsakYtelseType,
  ytelseErSatt,
  submitSucceeded,
}) => (
  <form onSubmit={handleSubmit}>
    <BorderBox className={styles.container}>
      <Undertittel>
        <FormattedMessage id="Registrering.Omsoknaden.Title" />
      </Undertittel>
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="4">
          <Undertekst><FormattedMessage id="Registrering.Omsoknaden.soknadstype" /></Undertekst>
          <VerticalSpacer fourPx />
          <RadioGroupField name="fagsakYtelseType" validate={[required]} direction="vertical">
            { fagsakYtelseTyper.map((fyt) => <RadioOption disabled={ytelseErSatt} key={fyt.kode} label={fyt.navn} value={fyt.kode} />) }
          </RadioGroupField>
        </Column>
        <Column xs="4">
          <Undertekst><FormattedMessage id="Registrering.Omsoknaden.Tema" /></Undertekst>
          <VerticalSpacer fourPx />
          <RadioGroupField
            name="familieHendelseType"
            validate={selectedFagsakYtelseType === fagsakYtelseType.SVANGERSKAPSPENGER ? [] : [required]}
            direction="vertical"
          >
            { familieHendelseTyper.filter(({ kode }) => soeknadsTyper.includes(kode)).map((bmt) => (
              <RadioOption
                key={bmt.kode}
                label={bmt.navn}
                value={bmt.kode}
                disabled={selectedFagsakYtelseType === fagsakYtelseType.SVANGERSKAPSPENGER}
              />
            ))}
          </RadioGroupField>
        </Column>
        <Column xs="4">
          <Undertekst>
            <FormattedMessage id="Registrering.Omsoknaden.Soker" />
          </Undertekst>
          <VerticalSpacer fourPx />
          <RadioGroupField
            name="foreldreType"
            validate={[required]}
            direction="vertical"
          >
            { foreldreTyper.map((ft) => (
              <RadioOption
                key={ft.kode}
                label={ft.navn}
                value={ft.kode}
              />
            ))}
          </RadioGroupField>
        </Column>
      </Row>
      <Row>
        <Column xs="12">
          <div className={styles.right}>
            <Hovedknapp
              mini
              onClick={ariaCheck}
              disabled={submitSucceeded}
            >
              <FormattedMessage id="Registrering.Omsoknaden.VisSkjema" />
            </Hovedknapp>
          </div>
        </Column>
      </Row>
    </BorderBox>
  </form>
);

const buildInitialValues = createSelector(
  [(_state: any, ownProps: PureOwnProps) => ownProps.fagsakYtelseType, getFormValues(SOKNAD_TYPE_PICKER_FORM)],
  (sakstype, formValues: FormValues) => {
    const { ...selectedValues } = formValues;
    const initialFagsakYtelseType = selectedValues.fagsakYtelseType ? selectedValues.fagsakYtelseType : sakstype.kode;

    const initialValues = {
      ...selectedValues,
      fagsakYtelseType: initialFagsakYtelseType,
      familieHendelseType: undefined,
      foreldreType: undefined,
    };

    const initialFamilieHendelseType = selectedValues.familieHendelseType ? selectedValues.familieHendelseType : undefined;
    const initialForeldreType = selectedValues.foreldreType ? selectedValues.foreldreType : undefined;
    return {
      ...initialValues,
      familieHendelseType: initialFamilieHendelseType === '-' ? undefined : initialFamilieHendelseType,
      foreldreType: initialForeldreType,
    };
  },
);

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: Required<FormValues>) => initialOwnProps
    .setSoknadData(new SoknadData(values.fagsakYtelseType, values.familieHendelseType, values.foreldreType));
  return (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
    selectedFagsakYtelseType: formValueSelector(SOKNAD_TYPE_PICKER_FORM)(state, 'fagsakYtelseType'),
    ytelseErSatt: !!ownProps.fagsakYtelseType.kode,
    // @ts-ignore
    initialValues: buildInitialValues(state, ownProps),
    fagsakYtelseTyper: ownProps.alleKodeverk[kodeverkTyper.FAGSAK_YTELSE],
    familieHendelseTyper: ownProps.alleKodeverk[kodeverkTyper.FAMILIE_HENDELSE_TYPE],
    foreldreTyper: ownProps.alleKodeverk[kodeverkTyper.FORELDRE_TYPE],
    onSubmit,
  });
};

export default connect(mapStateToPropsFactory)(reduxForm({ form: SOKNAD_TYPE_PICKER_FORM, enableReinitialize: true })(SoknadTypePickerForm));
