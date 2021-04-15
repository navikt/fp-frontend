import React, { FunctionComponent, ReactElement } from 'react';
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
import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';
import {
  Aksjonspunkt, AnkeVurdering, Kodeverk, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import { AnkeVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import PreviewAnkeLink, { BrevData } from './PreviewAnkeLink';
import FritekstBrevTextField from './FritekstAnkeBrevTextField';
import TempsaveAnkeButton, { AnkeData } from './TempsaveAnkeButton';

import styles from './behandleAnkeForm.less';

const ankeOmgjorArsakRekkefolge = [
  ankeOmgjorArsak.NYE_OPPLYSNINGER,
  ankeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
  ankeOmgjorArsak.ULIK_VURDERING,
  ankeOmgjorArsak.PROSESSUELL_FEIL,
];

export type BehandlingInfo = {
  id?: number;
  opprettet?: string;
  type?: Kodeverk;
  status?: Kodeverk;
}

type FormValuesUtrekk = {
  ankeVurdering?: Kodeverk;
  erSubsidiartRealitetsbehandles?: boolean;
  ankeOmgjoerArsak?: Kodeverk;
  ankeVurderingOmgjoer?: Kodeverk;
  vedtak?: string;
  begrunnelse?: string;
  fritekstTilBrev?: string;
};

type FormValues = {
  erGodkjentAvMedunderskriver?: boolean;
  erAnkerIkkePart?: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
} & FormValuesUtrekk

const skalViseForhaandlenke = (avr: Kodeverk): boolean => avr?.kode === ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE
  || avr?.kode === ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV || avr?.kode === ankeVurdering.ANKE_OMGJOER;

// TODO (TOR) Dette skal ikkje hardkodast!!! Hent fra kodeverk
const formatBehandlingType = (kode: string): string | null => {
  switch (kode) {
    case behandlingType.FORSTEGANGSSOKNAD: return 'Førstegangssøknad';
    case behandlingType.KLAGE: return 'Klage';
    case behandlingType.ANKE: return 'Anke';
    case behandlingType.REVURDERING: return 'Revurdering';
    case behandlingType.DOKUMENTINNSYN: return 'Dokumentinnsyn';
    case behandlingType.TILBAKEKREVING: return 'Tilbakekreving';
    default: return null;
  }
};

// TODO (TOR) Dette skal ikkje hardkodast!!! Hent fra kodeverk
const formatBehandlingStatus = (status: string): string | null => {
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

const canPreview = (begrunnelse: string, fritekstTilBrev: string): boolean => (begrunnelse && begrunnelse.length > 0)
  && (fritekstTilBrev && fritekstTilBrev.length > 0);
const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');
const formatBehandling = (b: BehandlingInfo): string => `${formatDate(b.opprettet)} - ${formatBehandlingType(b.type.kode)} `
  + `- ${formatBehandlingStatus(b.status.kode)}`;
const formatId = (id?: number): string => {
  if (id === null) {
    return `${IKKE_PAA_ANKET_BEHANDLING_ID}`;
  }
  return `${id}`;
};

const leggTilUkjent = (behandlinger: BehandlingInfo[] = []): BehandlingInfo[] => {
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

const buildOption = (b: BehandlingInfo, intl: IntlShape): ReactElement => {
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

const filtrerKlage = (behandlinger: BehandlingInfo[] = []): BehandlingInfo[] => behandlinger.filter((b) => b.type.kode === behandlingType.KLAGE);

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: AnkeVurderingResultatAp) => Promise<void>;
  ankeVurderingResultat: AnkeVurdering['ankeVurderingResultat'];
  previewCallback: (data: BrevData) => Promise<any>;
  saveAnke: (data: AnkeData) => Promise<any>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  sprakkode: Kodeverk;
  behandlinger: BehandlingInfo[];
  ankeOmgorArsaker: KodeverkMedNavn[];
}

interface MappedOwnProps {
  aksjonspunktCode: string;
  formValues?: FormValuesUtrekk;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling.
 */
const BehandleAnkeForm: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
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
  ankeOmgorArsaker,
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
    <VerticalSpacer sixteenPx />
    <Normaltekst><FormattedMessage id="Ankebehandling.Resultat" /></Normaltekst>
    <RadioGroupField
      name="ankeVurdering.kode"
      validate={[required]}
      direction="horizontal"
      readOnly={readOnly}
    >
      <RadioOption value={ankeVurdering.ANKE_OMGJOER} label={{ id: 'Ankebehandling.Resultat.Omgjør' }} />
      <RadioOption value={ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE} label={{ id: 'Ankebehandling.Resultat.OpphevHjemsend' }} />
      <RadioOption value={ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV} label={{ id: 'Ankebehandling.Resultat.Hjemsend' }} />
      <RadioOption value={ankeVurdering.ANKE_AVVIS} label={{ id: 'Ankebehandling.Resultat.Avvis' }} />
      <RadioOption value={ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK} label={{ id: 'Ankebehandling.Resultat.Stadfest' }} />
    </RadioGroupField>
    {ankeVurdering.ANKE_AVVIS === formValues.ankeVurdering?.kode
      && (
        <Row>
          <Column xs="7">
            <ArrowBox alignOffset={315}>
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
              <SelectField
                readOnly={readOnly}
                name="ankeOmgjoerArsak.kode"
                selectValues={ankeOmgjorArsakRekkefolge
                  .map((arsak) => <option key={arsak} value={arsak}>{ankeOmgorArsaker.find((aoa) => aoa.kode === arsak)?.navn}</option>)}
                className={readOnly ? styles.selectReadOnly : null}
                label={intl.formatMessage({ id: 'Ankebehandling.OmgjoeringArsak' })}
                validate={[required]}
                bredde="xl"
              />
              <VerticalSpacer sixteenPx />
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
            </ArrowBox>
          </Column>
        </Row>
      )}
    {(ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE === formValues.ankeVurdering?.kode
      || ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV === formValues.ankeVurdering?.kode) && (
      <Row>
        <Column xs="7">
          <ArrowBox alignOffset={ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE === formValues.ankeVurdering?.kode ? 98 : 198}>
            <SelectField
              readOnly={readOnly}
              name="ankeOmgjoerArsak.kode"
              selectValues={ankeOmgjorArsakRekkefolge
                .map((arsak) => <option key={arsak} value={arsak}>{ankeOmgorArsaker.find((aoa) => aoa.kode === arsak)?.navn}</option>)}
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
            isSubmittable={!readOnly && !readOnlySubmitButton}
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

const lagreOmgjoerAarsak = (values: FormValues): Kodeverk | string => (ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE === values.ankeVurdering?.kode
|| ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV === values.ankeVurdering?.kode
|| ankeVurdering.ANKE_OMGJOER === values.ankeVurdering?.kode ? values.ankeOmgjoerArsak : '-');

const lagreVurderingOmgjoer = (values: FormValues): Kodeverk | string => (ankeVurdering.ANKE_OMGJOER === values.ankeVurdering?.kode
  ? values.ankeVurderingOmgjoer : '-');

export const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingResultat], (resultat): FormValues => ({
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

export const transformValues = (values: FormValues): AnkeVurderingResultatAp => ({
  vedtak: values.vedtak === '0' || !values.vedtak ? null : parseInt(values.vedtak, 10),
  ankeVurdering: values.ankeVurdering,
  begrunnelse: values.begrunnelse,
  fritekstTilBrev: values.fritekstTilBrev,
  erGodkjentAvMedunderskriver: values.erGodkjentAvMedunderskriver,
  erAnkerIkkePart: values.erAnkerIkkePart,
  erIkkeKonkret: values.erIkkeKonkret,
  erFristIkkeOverholdt: values.erFristIkkeOverholdt,
  erIkkeSignert: values.erIkkeSignert,
  erSubsidiartRealitetsbehandles: values.erSubsidiartRealitetsbehandles,
  ankeOmgjoerArsak: lagreOmgjoerAarsak(values),
  ankeVurderingOmgjoer: lagreVurderingOmgjoer(values),
  kode: AksjonspunktKode.MANUELL_VURDERING_AV_ANKE,
});

const formName = 'BehandleAnkeForm';

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
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
