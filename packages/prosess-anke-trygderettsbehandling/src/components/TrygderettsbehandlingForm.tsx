import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';

import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import {
  AksjonspunktHelpTextTemp, VerticalSpacer, ArrowBox,
} from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, behandlingForm, SelectField, behandlingFormValueSelector,
  hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import {
  Aksjonspunkt, AnkeVurdering, Kodeverk, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import CheckboxField from '@fpsak-frontend/form/src/CheckboxField';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AnkeMerknaderResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import FritekstAnkeMerknaderTextField from './FritekstAnkeMerknaderTextField';
import { BrevData } from './PreviewAnkeLink';

import styles from './trygderettsbehandlingForm.less';

const ankeOmgjorArsakRekkefolge = [
  ankeOmgjorArsak.NYE_OPPLYSNINGER,
  ankeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
  ankeOmgjorArsak.ULIK_VURDERING,
  ankeOmgjorArsak.PROSESSUELL_FEIL,
];

type FormValues = {
  erMerknaderMottatt?: boolean;
  merknadKommentar?: string;
  avsluttBehandling?: boolean;
  trygderettVurdering?: Kodeverk;
  trygderettOmgjoerArsak?: Kodeverk;
  trygderettVurderingOmgjoer?: Kodeverk;
}

interface PureOwnProps {
  ankeVurderingResultat: AnkeVurdering['ankeVurderingResultat'];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: AnkeMerknaderResultatAp) => Promise<void>;
  behandlingId: number;
  behandlingVersjon: number;
  previewCallback: (data: BrevData) => Promise<any>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  sprakkode: Kodeverk;
  ankeOmgorArsaker: KodeverkMedNavn[];
}

interface MappedOwnProps {
  aksjonspunktCode: string;
  valgtTrygderettVurdering?: Kodeverk;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

export const TrygderettsbehandlingForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  handleSubmit,
  readOnlySubmitButton,
  aksjonspunktCode,
  behandlingId,
  behandlingVersjon,
  sprakkode,
  valgtTrygderettVurdering,
  ankeOmgorArsaker,
  ...formProps
}) => (
  <form onSubmit={handleSubmit}>
    <Undertittel><FormattedMessage id="Ankebehandling.Merknad.Title" /></Undertittel>
    <VerticalSpacer sixteenPx />
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
      {[<FormattedMessage id="Ankebehandling.Merknad.HelpText" key={aksjonspunktCode} />]}
    </AksjonspunktHelpTextTemp>
    <VerticalSpacer sixteenPx />
    <Row>
      <Column xs="7">
        <FormattedMessage id="Ankebehandling.Merknad.Merknader" />
        <RadioGroupField
          name="erMerknaderMottatt"
          validate={[required]}
          direction="horizontal"
          readOnly={readOnly}
        >
          <RadioOption value label={{ id: 'Ankebehandling.Merknad.Merknader.Ja' }} />
          <RadioOption value={false} label={{ id: 'Ankebehandling.Merknad.Merknader.Nei' }} />
        </RadioGroupField>
      </Column>
    </Row>

    <VerticalSpacer sixteenPx />
    <FritekstAnkeMerknaderTextField
      sprakkode={sprakkode}
      readOnly={readOnly}
    />
    <VerticalSpacer sixteenPx />
    <Normaltekst><FormattedMessage id="Ankebehandling.Resultat" /></Normaltekst>
    <VerticalSpacer fourPx />
    <RadioGroupField
      name="trygderettVurdering.kode"
      validate={[required]}
      direction="horizontal"
      readOnly={readOnly}
    >
      <RadioOption value={ankeVurderingType.ANKE_OMGJOER} label={{ id: 'Ankebehandling.Resultat.Omgjør' }} />
      <RadioOption value={ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE} label={{ id: 'Ankebehandling.Resultat.Opphev' }} />
      <RadioOption value={ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV} label={{ id: 'Ankebehandling.Resultat.Hjemsend' }} />
      <RadioOption value={ankeVurderingType.ANKE_AVVIS} label={{ id: 'Ankebehandling.Resultat.Avvis' }} />
      <RadioOption value={ankeVurderingType.ANKE_STADFESTE_YTELSESVEDTAK} label={{ id: 'Ankebehandling.Resultat.Stadfest' }} />
    </RadioGroupField>
    {ankeVurderingType.ANKE_OMGJOER === valgtTrygderettVurdering?.kode && (
      <Row>
        <Column xs="7">
          <ArrowBox>
            <SelectField
              readOnly={readOnly}
              name="trygderettOmgjoerArsak.kode"
              selectValues={ankeOmgjorArsakRekkefolge
                .map((arsak) => <option key={arsak} value={arsak}>{ankeOmgorArsaker.find((aoa) => aoa.kode === arsak)?.navn}</option>)}
              className={readOnly ? styles.selectReadOnly : null}
              label={<FormattedMessage id="Ankebehandling.OmgjoeringArsak" />}
              validate={[required]}
              bredde="xl"
            />
            <VerticalSpacer sixteenPx />
            <RadioGroupField
              name="trygderettVurderingOmgjoer.kode"
              validate={[required]}
              readOnly={readOnly}
              className={readOnly ? styles.selectReadOnly : null}
              direction="horizontal"
            >
              <RadioOption value={ankeVurderingOmgjoer.ANKE_TIL_GUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Gunst' }} />
              <RadioOption value={ankeVurderingOmgjoer.ANKE_TIL_UGUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Ugunst' }} />
              <RadioOption value={ankeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Delvis' }} />
            </RadioGroupField>
          </ArrowBox>
        </Column>
      </Row>
    )}
    {(ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE === valgtTrygderettVurdering?.kode
      || ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV === valgtTrygderettVurdering?.kode) && (
      <Row>
        <Column xs="7">
          <ArrowBox alignOffset={180}>
            <SelectField
              readOnly={readOnly}
              name="trygderettOmgjoerArsak.kode"
              selectValues={ankeOmgjorArsakRekkefolge
                .map((arsak) => <option key={arsak} value={arsak}>{ankeOmgorArsaker.find((aoa) => aoa.kode === arsak)?.navn}</option>)}
              className={readOnly ? styles.selectReadOnly : null}
              label={<FormattedMessage id="Ankebehandling.OmgjoeringArsak" />}
              validate={[required]}
              bredde="xl"
            />
          </ArrowBox>
        </Column>
      </Row>
    )}
    <VerticalSpacer sixteenPx />
    <Row>
      <Column xs="8">
        <ProsessStegSubmitButton
          formName={formProps.form}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          isReadOnly={readOnly}
          isSubmittable={!readOnly}
          isBehandlingFormSubmitting={isBehandlingFormSubmitting}
          isBehandlingFormDirty={isBehandlingFormDirty}
          hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
          text={intl.formatMessage({ id: 'Ankebehandling.Merknad.Merknader.LagreKommentarer' })}
        />
      </Column>
      {!readOnly && (
      <Column xs="3">
        <CheckboxField name="avsluttBehandling" label={<FormattedMessage id="Ankebehandling.Merknad.AvsluttBehandling" />} />
      </Column>
      )}
    </Row>
  </form>
);

TrygderettsbehandlingForm.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

const ankeMerknaderFormName = 'ankeMerknaderForm';

const lagreOmgjoerAarsak = (values: FormValues): Kodeverk | string => (ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE === values.trygderettVurdering?.kode
    || ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV === values.trygderettVurdering?.kode
    || ankeVurderingType.ANKE_OMGJOER === values.trygderettVurdering?.kode ? values.trygderettOmgjoerArsak : '-');

const lagreVurderingOmgjoer = (values: FormValues): Kodeverk | string => (ankeVurderingType.ANKE_OMGJOER === values.trygderettVurdering?.kode
  ? values.trygderettVurderingOmgjoer : '-');

const transformValues = (values: FormValues): AnkeMerknaderResultatAp => ({
  erMerknaderMottatt: values.erMerknaderMottatt,
  merknadKommentar: values.merknadKommentar,
  avsluttBehandling: values.avsluttBehandling,
  trygderettVurdering: values.trygderettVurdering,
  trygderettOmgjoerArsak: lagreOmgjoerAarsak(values),
  trygderettVurderingOmgjoer: lagreVurderingOmgjoer(values),
  kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
});

const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingResultat], (resultat): FormValues => ({
  merknadKommentar: resultat ? resultat.merknadKommentar : null,
  erMerknaderMottatt: resultat ? resultat.erMerknaderMottatt : null,
  trygderettVurdering: resultat ? resultat.trygderettVurdering : null,
  trygderettOmgjoerArsak: resultat ? resultat.trygderettOmgjoerArsak : null,
  trygderettVurderingOmgjoer: resultat ? resultat.trygderettVurderingOmgjoer : null,
  avsluttBehandling: false,
}));

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  aksjonspunktCode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
  valgtTrygderettVurdering: behandlingFormValueSelector(ankeMerknaderFormName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'trygderettVurdering'),
});

export default connect(mapStateToProps)(behandlingForm({
  form: ankeMerknaderFormName,
})(injectIntl(TrygderettsbehandlingForm)));
