import React, { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Form, formValueSelector, InjectedFormProps, reduxForm,
} from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';

import {
  CheckboxField, RadioGroupField, RadioOption, SelectField, TextAreaField,
} from '@fpsak-frontend/form';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';
import {
  Aksjonspunkt, AnkeVurdering, Kodeverk, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import { AnkeVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import PreviewAnkeLink, { BrevData } from './PreviewAnkeLink';
import FritekstBrevTextField from './FritekstAnkeBrevTextField';
import TempsaveAnkeButton, { transformValues } from './TempsaveAnkeButton';

import styles from './behandleAnkeForm.less';

const ankeOmgjorArsakRekkefolge = [
  ankeOmgjorArsak.NYE_OPPLYSNINGER,
  ankeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
  ankeOmgjorArsak.ULIK_VURDERING,
  ankeOmgjorArsak.PROSESSUELL_FEIL,
];

export type BehandlingInfo = {
  uuid?: string;
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

const IKKE_PAA_ANKET_BEHANDLING_ID = '0';

const canPreview = (begrunnelse: string, fritekstTilBrev: string): boolean => (begrunnelse && begrunnelse.length > 0)
  && (fritekstTilBrev && fritekstTilBrev.length > 0);
const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const formatBehandling = (
  b: BehandlingInfo,
  behandlingTyper: KodeverkMedNavn[],
  behandlingStatuser: KodeverkMedNavn[],
): string => `${formatDate(b.opprettet)} - ${behandlingTyper.find((bt) => bt.kode === b.type.kode)?.navn} `
  + `- ${behandlingStatuser.find((bs) => bs.kode === b.status.kode)?.navn}`;

const formatId = (id?: string): string => {
  if (id === null || id === undefined || id === '-') {
    return IKKE_PAA_ANKET_BEHANDLING_ID;
  }
  return id;
};

const leggTilUkjent = (behandlinger: BehandlingInfo[] = []): BehandlingInfo[] => {
  const arr = [].concat(behandlinger);
  arr.unshift({
    uuid: IKKE_PAA_ANKET_BEHANDLING_ID,
    opprettet: null,
    type: {
    },
    status: {
    },
  });
  return arr;
};

const buildOption = (
  b: BehandlingInfo,
  intl: IntlShape,
  behandlingTyper: KodeverkMedNavn[],
  behandlingStatuser: KodeverkMedNavn[],
): ReactElement => {
  const formattedId = formatId(b.uuid);
  if (b.uuid === IKKE_PAA_ANKET_BEHANDLING_ID) {
    return (<option key={formattedId} value={formattedId}>{intl.formatMessage({ id: 'Ankebehandling.Resultat.IkkePaaAnketVedtak' })}</option>);
  }
  return (<option key={formattedId} value={formattedId}>{formatBehandling(b, behandlingTyper, behandlingStatuser)}</option>);
};

const SKAL_REALITETSBEHANDLES = {
  JA: true,
  NEI: false,
};

const filtrerKlage = (behandlinger: BehandlingInfo[] = []): BehandlingInfo[] => behandlinger.filter((b) => b.type.kode === behandlingType.KLAGE);

interface PureOwnProps {
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: AnkeVurderingResultatAp) => Promise<void>;
  ankeVurderingResultat: AnkeVurdering['ankeVurderingResultat'];
  previewCallback: (data: BrevData) => Promise<any>;
  saveAnke: (data: AnkeVurderingResultatAp) => Promise<any>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  sprakkode: Kodeverk;
  behandlinger: BehandlingInfo[];
  ankeOmgorArsaker: KodeverkMedNavn[];
  behandlingTyper: KodeverkMedNavn[],
  behandlingStatuser: KodeverkMedNavn[],
}

interface MappedOwnProps {
  aksjonspunktCode: string;
  formValues?: FormValuesUtrekk;
  initialValues: FormValues;
}

/**
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling.
 */
export const BehandleAnkeForm: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
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
  behandlingTyper,
  behandlingStatuser,
  submitCallback,
  ...formProps
}) => (
  <Form onSubmit={handleSubmit((values: FormValues) => submitCallback(transformValues(values)))}>
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
          selectValues={leggTilUkjent(filtrerKlage(behandlinger)).map((b) => buildOption(b, intl, behandlingTyper, behandlingStatuser))}
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
            isReadOnly={readOnly}
            isSubmittable={!readOnly && !readOnlySubmitButton}
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
            saveAnke={saveAnke}
            readOnly={readOnly}
            handleSubmit={handleSubmit}
            spinner={formProps.submitting}
          />
        </Column>
      </Row>
    </div>
  </Form>
);

BehandleAnkeForm.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

export const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingResultat], (resultat): FormValues => ({
  vedtak: resultat ? formatId(resultat.påAnketKlageBehandlingUuid) : null,
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

const formName = 'BehandleAnkeForm';

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  aksjonspunktCode: ownProps.aksjonspunkter[0].definisjon.kode,
  initialValues: buildInitialValues(ownProps),
  formValues: formValueSelector(formName)(state,
    'vedtak',
    'ankeVurdering',
    'begrunnelse',
    'fritekstTilBrev',
    'erSubsidiartRealitetsbehandles',
    'ankeOmgjoerArsak',
    'ankeVurderingOmgjoer') || {},
});

export default connect(mapStateToProps)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(injectIntl(BehandleAnkeForm)));
