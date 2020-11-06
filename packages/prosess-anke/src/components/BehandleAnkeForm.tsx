import React, { FunctionComponent } from 'react';
import moment from 'moment';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';

import {
  CheckboxField, RadioGroupField, RadioOption, SelectField, TextAreaField, behandlingForm, behandlingFormValueSelector,
  hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { Aksjonspunkt, AnkeVurdering, Kodeverk } from '@fpsak-frontend/types';

import ankeOmgjorArsak from '../kodeverk/ankeOmgjorArsak';
import PreviewAnkeLink from './PreviewAnkeLink';
import FritekstBrevTextField from './FritekstAnkeBrevTextField';
import TempsaveAnkeButton from './TempsaveAnkeButton';

import styles from './behandleAnkeForm.less';

const omgjorArsakValues = [
  { kode: ankeOmgjorArsak.PROSESSUELL_FEIL, navn: 'Ankebehandling.OmgjoeringArsak.ProsessuellFeil' },
  { kode: ankeOmgjorArsak.ULIK_VURDERING, navn: 'Ankebehandling.OmgjoeringArsak.UlikVurdering' },
  { kode: ankeOmgjorArsak.ULIK_REGELVERKSTOLKNING, navn: 'Ankebehandling.OmgjoeringArsak.UlikRegelverkstolkning' },
  { kode: ankeOmgjorArsak.NYE_OPPLYSNINGER, navn: 'Ankebehandling.OmgjoeringArsak.NyeOpplysninger' },
];

export type BehandlingInfo = {
  id?: number;
  opprettet?: string;
  type?: Kodeverk;
  status?: Kodeverk;
}

type FormValuesUtrekk = {
  ankeVurdering: Kodeverk;
  erSubsidiartRealitetsbehandles: boolean;
  ankeOmgjoerArsak: Kodeverk;
  ankeVurderingOmgjoer: Kodeverk;
  vedtak: string;
  begrunnelse?: string;
  fritekstTilBrev?: string;
};

type FormValues = {
  erMerknaderMottatt: boolean;
  erGodkjentAvMedunderskriver: boolean;
  erAnkerIkkePart: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
} & FormValuesUtrekk

const skalViseForhaandlenke = (avr: Kodeverk) => avr?.kode === ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE || avr?.kode === ankeVurdering.ANKE_OMGJOER;

const canSubmit = (formValues: FormValuesUtrekk) => {
  if (ankeVurdering.ANKE_AVVIS === formValues.ankeVurdering?.kode && !formValues.erSubsidiartRealitetsbehandles) {
    return false;
  }
  if (ankeVurdering.ANKE_OMGJOER === formValues.ankeVurdering?.kode && (!formValues.ankeOmgjoerArsak || !formValues.ankeVurderingOmgjoer)) {
    return false;
  }
  return formValues.ankeVurdering != null && formValues.vedtak != null;
};

// TODO (TOR) Dette skal ikkje hardkodast!!! Hent fra kodeverk
const formatBehandlingType = (kode: string) => {
  switch (kode) {
    case behandlingType.FORSTEGANGSSOKNAD: return 'Førstegangssøknad';
    case behandlingType.KLAGE: return 'Klage';
    case behandlingType.ANKE: return 'Anke';
    case behandlingType.REVURDERING: return 'Revurdering';
    case behandlingType.SOKNAD: return 'Søknad';
    case behandlingType.DOKUMENTINNSYN: return 'Dokumentinnsyn';
    case behandlingType.TILBAKEKREVING: return 'Tilbakekreving';
    default: return null;
  }
};

// TODO (TOR) Dette skal ikkje hardkodast!!! Hent fra kodeverk
const formatBehandlingStatus = (status: string) => {
  switch (status) {
    case behandlingStatus.OPPRETTET: return 'Opprettet';
    case behandlingStatus.BEHANDLING_UTREDES: return 'Behandling utredes';
    case behandlingStatus.AVSLUTTET: return 'Avsluttet';
    case behandlingStatus.IVERKSETTER_VEDTAK: return 'Iverksetter vedtak';
    case behandlingStatus.FATTER_VEDTAK: return 'Fatter vedtak';
    default: return null;
  }
};

const IKKE_PAA_ANKET_BEHANDLING_ID = 0;

const canPreview = (begrunnelse: string, fritekstTilBrev: string) => (begrunnelse && begrunnelse.length > 0) && (fritekstTilBrev && fritekstTilBrev.length > 0);
const formatDate = (date: string) => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');
const formatBehandling = (b: BehandlingInfo) => `${formatDate(b.opprettet)} - ${formatBehandlingType(b.type.kode)} - ${formatBehandlingStatus(b.status.kode)}`;
const formatId = (id?: number) => {
  if (id === null) {
    return `${IKKE_PAA_ANKET_BEHANDLING_ID}`;
  }
  return `${id}`;
};

const leggTilUkjent = (behandlinger: BehandlingInfo[] = []) => {
  const arr = [].concat(behandlinger);
  arr.unshift({
    id: IKKE_PAA_ANKET_BEHANDLING_ID,
    opprettet: null,
    type: {
    },
    status: {
    },
  });
  return arr;
};

const buildOption = (b: BehandlingInfo, intl: IntlShape) => {
  const formattedId = formatId(b.id);
  if (b.id === IKKE_PAA_ANKET_BEHANDLING_ID) {
    return (<option key={formattedId} value={formattedId}>{intl.formatMessage({ id: 'Ankebehandling.Resultat.IkkePaaAnketVedtak' })}</option>);
  }
  return (<option key={formattedId} value={formattedId}>{formatBehandling(b)}</option>);
};

const SKAL_REALITETSBEHANDLES = {
  JA: true,
  NEI: false,
};

const filtrerKlage = (behandlinger: BehandlingInfo[] = []) => behandlinger.filter((b) => b.type.kode === behandlingType.KLAGE);

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  previewCallback: (...args: any[]) => any;
  saveAnke: (...args: any[]) => any;
  aksjonspunktCode: string;
  formValues?: FormValuesUtrekk;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  sprakkode: Kodeverk;
  behandlinger: BehandlingInfo[];
}

/**
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling.
 */
const BehandleAnkeForm: FunctionComponent<OwnProps & WrappedComponentProps & InjectedFormProps> = ({
  behandlingId,
  behandlingVersjon,
  readOnly,
  handleSubmit,
  saveAnke,
  previewCallback,
  readOnlySubmitButton,
  aksjonspunktCode,
  sprakkode,
  formValues,
  behandlinger,
  intl,
  ...formProps
}) => (
  <form onSubmit={handleSubmit}>
    <Undertittel><FormattedMessage id="Ankebehandling.Title" /></Undertittel>
    <VerticalSpacer fourPx />
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
      {[<FormattedMessage id="Ankebehandling.HelpText" key={aksjonspunktCode} />]}
    </AksjonspunktHelpTextTemp>
    <VerticalSpacer sixteenPx />
    <Row>
      <Column xs="7">
        <SelectField
          readOnly={readOnly}
          name="vedtak"
          selectValues={leggTilUkjent(filtrerKlage(behandlinger)).map((b) => buildOption(b, intl))}
          className={readOnly ? styles.selectReadOnly : null}
          label={intl.formatMessage({ id: 'Ankebehandling.Resultat.Vedtak' })}
          validate={[required]}
          bredde="xl"
        />
      </Column>
    </Row>

    <Normaltekst><FormattedMessage id="Ankebehandling.Resultat" /></Normaltekst>
    <Row>
      <Column xs="4">
        <RadioGroupField
          name="ankeVurdering.kode"
          validate={[required]}
          direction="vertical"
          readOnly={readOnly}
        >
          <RadioOption value={ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK} label={{ id: 'Ankebehandling.Resultat.Stadfest' }} />
          <RadioOption value={ankeVurdering.ANKE_OMGJOER} label={{ id: 'Ankebehandling.Resultat.Omgjør' }} />
        </RadioGroupField>
      </Column>
      <Column xs="4">
        <RadioGroupField
          name="ankeVurdering.kode"
          validate={[required]}
          readOnly={readOnly}
          className={readOnly ? styles.selectReadOnly : null}
          direction="vertical"
        >
          <RadioOption value={ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE} label={{ id: 'Ankebehandling.Resultat.OpphevHjemsend' }} />
          <RadioOption value={ankeVurdering.ANKE_AVVIS} label={{ id: 'Ankebehandling.Resultat.Avvis' }} />
        </RadioGroupField>
      </Column>
    </Row>
    {ankeVurdering.ANKE_AVVIS === formValues.ankeVurdering?.kode
      && (
        <Row>
          <Column xs="7">
            <ArrowBox alignOffset={355}>
              <Normaltekst><FormattedMessage id="Ankebehandling.Avvisning" /></Normaltekst>
              <VerticalSpacer fourPx />
              <CheckboxField name="erAnkerIkkePart" label={<FormattedMessage id="Ankebehandling.Avvisning.IkkePart" />} />
              <VerticalSpacer fourPx />
              <CheckboxField name="erIkkeKonkret" label={<FormattedMessage id="Ankebehandling.Avvisning.IkkeKonkret" />} />
              <VerticalSpacer fourPx />
              <CheckboxField name="erFristIkkeOverholdt" label={<FormattedMessage id="Ankebehandling.Avvisning.IkkeFrist" />} />
              <VerticalSpacer fourPx />
              <CheckboxField name="erIkkeSignert" label={<FormattedMessage id="Ankebehandling.Avvisning.IkkeSignert" />} />
              <VerticalSpacer sixteenPx />
              <Normaltekst><FormattedMessage id="Ankebehandling.Realitetsbehandles" /></Normaltekst>
              <VerticalSpacer fourPx />
              <RadioGroupField
                name="erSubsidiartRealitetsbehandles"
                validate={[required]}
                readOnly={readOnly}
                className={readOnly ? styles.selectReadOnly : null}
                direction="horizontal"
              >
                <RadioOption value={SKAL_REALITETSBEHANDLES.JA} label={{ id: 'Ankebehandling.Realitetsbehandles.Ja' }} />
                <RadioOption value={SKAL_REALITETSBEHANDLES.NEI} label={{ id: 'Ankebehandling.Realitetsbehandles.Nei' }} />
              </RadioGroupField>
            </ArrowBox>
          </Column>
        </Row>
      )}
    {ankeVurdering.ANKE_OMGJOER === formValues.ankeVurdering?.kode
      && (
        <Row>
          <Column xs="7">
            <ArrowBox>
              <RadioGroupField
                name="ankeVurderingOmgjoer.kode"
                validate={[required]}
                readOnly={readOnly}
                className={readOnly ? styles.selectReadOnly : null}
                direction="horizontal"
              >
                <RadioOption name="a1" value={ankeVurderingOmgjoer.ANKE_TIL_GUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Gunst' }} />
                <RadioOption name="a2" value={ankeVurderingOmgjoer.ANKE_TIL_UGUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Ugunst' }} />
                <RadioOption name="a3" value={ankeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Delvis' }} />
              </RadioGroupField>
              <VerticalSpacer fourPx />
              <SelectField
                readOnly={readOnly}
                name="ankeOmgjoerArsak.kode"
                selectValues={omgjorArsakValues.map((arsak) => <option key={arsak.kode} value={arsak.kode}>{intl.formatMessage({ id: arsak.navn })}</option>)}
                className={readOnly ? styles.selectReadOnly : null}
                label={intl.formatMessage({ id: 'Ankebehandling.OmgjoeringArsak' })}
                validate={[required]}
                bredde="xl"
              />
            </ArrowBox>
          </Column>
        </Row>
      )}

    <Row>
      <Column xs="7">
        <TextAreaField label="Begrunnelse" name="begrunnelse" readOnly={readOnly} />
      </Column>
    </Row>

    <div className={styles.confirmVilkarForm}>
      <VerticalSpacer sixteenPx />
      <FritekstBrevTextField
        sprakkode={sprakkode}
        readOnly={readOnly}
      />
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="8">
          <ProsessStegSubmitButton
            formName={formProps.form}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            isReadOnly={readOnly}
            isSubmittable={!readOnly && canSubmit(formValues)}
            isBehandlingFormSubmitting={isBehandlingFormSubmitting}
            isBehandlingFormDirty={isBehandlingFormDirty}
            hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
          />
          {skalViseForhaandlenke(formValues.ankeVurdering)
          && (
            <PreviewAnkeLink
              readOnly={!canPreview(formValues.begrunnelse, formValues.fritekstTilBrev)}
              previewCallback={previewCallback}
              fritekstTilBrev={formValues.fritekstTilBrev}
              ankeVurdering={formValues.ankeVurdering}
            />
          )}
        </Column>
        <Column xs="2">
          <TempsaveAnkeButton
            fritekstTilBrev={formValues.fritekstTilBrev}
            begrunnelse={formValues.begrunnelse}
            saveAnke={saveAnke}
            readOnly={readOnly}
            aksjonspunktCode={aksjonspunktCode}
          />
        </Column>
      </Row>
    </div>
  </form>
);

BehandleAnkeForm.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (...args: any[]) => any;
  ankeVurderingResultat: AnkeVurdering['ankeVurderingResultat'];
}

export const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingResultat], (resultat) => ({
  vedtak: resultat ? formatId(resultat.paAnketBehandlingId) : null,
  ankeVurdering: resultat ? resultat.ankeVurdering : null,
  begrunnelse: resultat ? resultat.begrunnelse : null,
  fritekstTilBrev: resultat ? resultat.fritekstTilBrev : null,
  erAnkerIkkePart: resultat ? resultat.erAnkerIkkePart : false,
  erIkkeKonkret: resultat ? resultat.erIkkeKonkret : false,
  erFristIkkeOverholdt: resultat ? resultat.erFristIkkeOverholdt : false,
  erIkkeSignert: resultat ? resultat.erIkkeSignert : false,
  erSubsidiartRealitetsbehandles: resultat ? resultat.erSubsidiartRealitetsbehandles : null,
  ankeOmgjoerArsak: resultat ? resultat.ankeOmgjoerArsak : null,
  ankeVurderingOmgjoer: resultat ? resultat.ankeVurderingOmgjoer : null,
}));

export const transformValues = (values: FormValues, aksjonspunktCode: string) => ({
  vedtak: values.vedtak === '0' ? null : values.vedtak,
  ankeVurdering: values.ankeVurdering,
  begrunnelse: values.begrunnelse,
  erMerknaderMottatt: values.erMerknaderMottatt,
  fritekstTilBrev: values.fritekstTilBrev,
  erGodkjentAvMedunderskriver: values.erGodkjentAvMedunderskriver,
  erAnkerIkkePart: values.erAnkerIkkePart,
  erIkkeKonkret: values.erIkkeKonkret,
  erFristIkkeOverholdt: values.erFristIkkeOverholdt,
  erIkkeSignert: values.erIkkeSignert,
  erSubsidiartRealitetsbehandles: values.erSubsidiartRealitetsbehandles,
  ankeOmgjoerArsak: values.ankeOmgjoerArsak,
  ankeVurderingOmgjoer: values.ankeVurderingOmgjoer,
  gjelderVedtak: values.vedtak !== '0',
  kode: aksjonspunktCode,
});

const formName = 'BehandleAnkeForm';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback([transformValues(values, aksjonspunkter[0].definisjon.kode)]));

const mapStateToProps = (state: any, ownProps: PureOwnProps) => ({
  aksjonspunktCode: ownProps.aksjonspunkter[0].definisjon.kode,
  initialValues: buildInitialValues(ownProps),
  formValues: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state,
    'vedtak',
    'ankeVurdering',
    'begrunnelse',
    'fritekstTilBrev',
    'erSubsidiartRealitetsbehandles',
    'ankeOmgjoerArsak',
    'ankeVurderingOmgjoer') || {},
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(behandlingForm({
  form: formName,
})(injectIntl(BehandleAnkeForm)));
