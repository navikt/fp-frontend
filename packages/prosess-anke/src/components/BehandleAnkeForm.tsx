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
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, required } from '@navikt/ft-utils';
import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';
import {
  Aksjonspunkt, AlleKodeverk, AnkeVurdering, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import { AnkeVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
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
  type?: string;
  status?: string;
}

type FormValuesUtrekk = {
  ankeVurdering?: string;
  erSubsidiartRealitetsbehandles?: boolean;
  ankeOmgjoerArsak?: string;
  ankeVurderingOmgjoer?: string;
  vedtak?: string;
  begrunnelse?: string;
  fritekstTilBrev?: string;
  sendTilKabal?: boolean;
  klageHjemmel?: string;
};

type FormValues = {
  erGodkjentAvMedunderskriver?: boolean;
  erAnkerIkkePart?: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
} & FormValuesUtrekk

const skalViseForhaandlenke = (avr?: string): boolean => avr === ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE
  || avr === ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV || avr === ankeVurdering.ANKE_OMGJOER;

const IKKE_PAA_ANKET_BEHANDLING_ID = '0';

const canPreview = (begrunnelse: string, fritekstTilBrev: string): boolean => (begrunnelse && begrunnelse.length > 0)
  && (fritekstTilBrev && fritekstTilBrev.length > 0);
const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const formatBehandling = (
  b: BehandlingInfo,
  behandlingTyper: KodeverkMedNavn[],
  behandlingStatuser: KodeverkMedNavn[],
): string => `${formatDate(b.opprettet)} - ${behandlingTyper.find((bt) => bt.kode === b.type)?.navn} `
  + `- ${behandlingStatuser.find((bs) => bs.kode === b.status)?.navn}`;

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

const filtrerKlage = (behandlinger: BehandlingInfo[] = []): BehandlingInfo[] => behandlinger.filter((b) => b.type === behandlingType.KLAGE);

interface PureOwnProps {
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: AnkeVurderingResultatAp) => Promise<void>;
  ankeVurderingInput?: AnkeVurdering;
  previewCallback: (data: BrevData) => Promise<any>;
  saveAnke: (data: AnkeVurderingResultatAp) => Promise<any>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  sprakkode: string;
  behandlinger: BehandlingInfo[];
  alleKodeverk: AlleKodeverk;
  alleAktuelleHjemler: string[];
}

interface MappedOwnProps {
  aksjonspunktCode: string;
  formValues?: FormValuesUtrekk;
  initialValues: FormValues;
}

const lagHjemler = (kodeverkNavn: KodeverkMedNavn[], kodeverkVerdier: string[]): KodeverkMedNavn[] => kodeverkNavn
  .filter(({ kode }) => kodeverkVerdier.includes(kode))
  .sort((a, b) => a.kode.localeCompare(b.kode));
const lagHjemmelsKoder = (kodeverkVerdier: string[]): string[] => kodeverkVerdier.map((kode) => kode);

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
  ankeVurderingInput,
  alleKodeverk,
  alleAktuelleHjemler,
  submitCallback,
  ...formProps
}) => {
  const alleHjemler = alleKodeverk[kodeverkTyper.KLAGE_HJEMMEL];
  const ankeOmgorArsaker = alleKodeverk[kodeverkTyper.ANKE_OMGJOER_AARSAK];
  const behandlingTyper = alleKodeverk[kodeverkTyper.BEHANDLING_TYPE];
  const behandlingStatuser = alleKodeverk[kodeverkTyper.BEHANDLING_STATUS];
  const hjemmelOptions = lagHjemler(alleHjemler, lagHjemmelsKoder(alleAktuelleHjemler))
    .map((mo: KodeverkMedNavn) => <option key={mo.kode} value={mo.kode}>{mo.navn}</option>);
  const kabalEnabled = ankeVurderingInput && ankeVurderingInput.enableKabal ? ankeVurderingInput.enableKabal : false;
  const behandlesKabal = ankeVurderingInput && ankeVurderingInput.underBehandlingKabal ? ankeVurderingInput.underBehandlingKabal : false;
  const behandletKabal = ankeVurderingInput && ankeVurderingInput.behandletAvKabal ? ankeVurderingInput.behandletAvKabal : false;

  return (
    <Form onSubmit={handleSubmit((values: FormValues) => submitCallback(transformValues(values)))}>
      {behandlesKabal && readOnly && (
        <Row>
          <Column xs="6">
            <Undertittel>{intl.formatMessage({ id: 'Ankebehandling.SeKabalText' })}</Undertittel>
            <VerticalSpacer sixteenPx />
          </Column>
        </Row>
      )}
      {kabalEnabled && !readOnly && (
        <Row>
          <Column xs="6">
            <Undertittel>{intl.formatMessage({ id: 'Ankebehandling.SendTilKabal' })}</Undertittel>
            <VerticalSpacer fourPx />
            <CheckboxField name="sendTilKabal" label={<FormattedMessage id="Ankebehandling.KabalText" />} />
            <VerticalSpacer sixteenPx />
          </Column>
        </Row>
      )}
      {kabalEnabled && !readOnly && formValues.sendTilKabal && (
        <Row>
          <Column xs="6">
            <SelectField
              readOnly={readOnly}
              name="klageHjemmel"
              selectValues={hjemmelOptions}
              className={readOnly ? styles.selectReadOnly : null}
              label={intl.formatMessage({ id: 'Ankebehandling.Hjemmel' })}
              validate={[required]}
              bredde="xl"
            />
            <VerticalSpacer sixteenPx />
          </Column>
        </Row>
      )}
      {!formValues.sendTilKabal && !behandlesKabal && !behandletKabal && (
        <Row>
          <Undertittel><FormattedMessage id="Ankebehandling.Title" /></Undertittel>
          <VerticalSpacer fourPx />
          <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
            {[<FormattedMessage id="Ankebehandling.HelpText" key={aksjonspunktCode} />]}
          </AksjonspunktHelpTextTemp>
          <VerticalSpacer sixteenPx />
        </Row>
      )}
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
      {kabalEnabled && !readOnly && formValues.sendTilKabal && (
        <div className={styles.confirmVilkarForm}>
          { /* @ts-ignore Fiks cannot be used as a JSX component */ }
          <ProsessStegSubmitButton
            formName={formProps.form}
            isReadOnly={readOnly}
            isSubmittable={!readOnly && !readOnlySubmitButton}
            text={intl.formatMessage({ id: 'Ankebehandling.SendTilKabal' })}
          />
        </div>
      )}
      {!formValues.sendTilKabal && !behandlesKabal && !behandletKabal && (
        <Row>
          <Normaltekst><FormattedMessage id="Ankebehandling.Resultat" /></Normaltekst>
          <RadioGroupField
            name="ankeVurdering"
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
        </Row>
      )}
      {ankeVurdering.ANKE_AVVIS === formValues.ankeVurdering && !formValues.sendTilKabal && !behandlesKabal && !behandletKabal
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
      {ankeVurdering.ANKE_OMGJOER === formValues.ankeVurdering && !formValues.sendTilKabal && !behandlesKabal && !behandletKabal
      && (
        <Row>
          <Column xs="7">
            <ArrowBox>
              <SelectField
                readOnly={readOnly}
                name="ankeOmgjoerArsak"
                selectValues={ankeOmgjorArsakRekkefolge
                  .map((arsak) => <option key={arsak} value={arsak}>{ankeOmgorArsaker.find((aoa) => aoa.kode === arsak)?.navn}</option>)}
                className={readOnly ? styles.selectReadOnly : null}
                label={intl.formatMessage({ id: 'Ankebehandling.OmgjoeringArsak' })}
                validate={[required]}
                bredde="xl"
              />
              <VerticalSpacer sixteenPx />
              <RadioGroupField
                name="ankeVurderingOmgjoer"
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
      {(ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE === formValues.ankeVurdering
        || ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV === formValues.ankeVurdering) && !formValues.sendTilKabal && !behandlesKabal && !behandletKabal && (
        <Row>
          <Column xs="7">
            <ArrowBox alignOffset={ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE === formValues.ankeVurdering ? 98 : 198}>
              <SelectField
                readOnly={readOnly}
                name="ankeOmgjoerArsak"
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

      {!formValues.sendTilKabal && !behandlesKabal && !behandletKabal && (
        <Row>
          <Column xs="7">
            <TextAreaField label="Begrunnelse" name="begrunnelse" readOnly={readOnly} />
          </Column>
        </Row>
      )}

      {!formValues.sendTilKabal && !behandlesKabal && !behandletKabal && (
      <div className={styles.confirmVilkarForm}>
        <VerticalSpacer sixteenPx />
        <FritekstBrevTextField
          sprakkode={sprakkode}
          readOnly={readOnly}
        />
        <VerticalSpacer sixteenPx />
        <Row>
          <Column xs="8">
            { /* @ts-ignore Fiks cannot be used as a JSX component */ }
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
      )}
    </Form>
  );
};

BehandleAnkeForm.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

export const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingInput], (resultat): FormValues => {
  const avr = resultat ? resultat.ankeVurderingResultat : null;
  return {
    vedtak: avr ? formatId(avr.påAnketKlageBehandlingUuid) : null,
    ankeVurdering: avr ? avr.ankeVurdering : null,
    begrunnelse: avr ? avr.begrunnelse : null,
    fritekstTilBrev: avr ? avr.fritekstTilBrev : null,
    erAnkerIkkePart: avr ? avr.erAnkerIkkePart : false,
    erIkkeKonkret: avr ? avr.erIkkeKonkret : false,
    erFristIkkeOverholdt: avr ? avr.erFristIkkeOverholdt : false,
    erIkkeSignert: avr ? avr.erIkkeSignert : false,
    erSubsidiartRealitetsbehandles: avr ? avr.erSubsidiartRealitetsbehandles : null,
    ankeOmgjoerArsak: avr ? avr.ankeOmgjoerArsak : null,
    ankeVurderingOmgjoer: avr ? avr.ankeVurderingOmgjoer : null,
    klageHjemmel: resultat && resultat.klageHjemmel !== '-' ? resultat.klageHjemmel : null,
    sendTilKabal: false,
  };
});

const formName = 'BehandleAnkeForm';

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  aksjonspunktCode: ownProps.aksjonspunkter[0].definisjon,
  initialValues: buildInitialValues(ownProps),
  formValues: formValueSelector(formName)(state,
    'vedtak',
    'sendTilKabal',
    'klageHjemmel',
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
