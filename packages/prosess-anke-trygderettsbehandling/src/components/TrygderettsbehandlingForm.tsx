import React, { FunctionComponent, ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { BodyShort, Heading } from '@navikt/ds-react';

import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import {
  AksjonspunktHelpTextTemp, VerticalSpacer, ArrowBox,
} from '@navikt/ft-ui-komponenter';
import {
  RadioGroupField, RadioOption, SelectField, DatepickerField,
} from '@fpsak-frontend/form';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import {
  Aksjonspunkt, AlleKodeverk, AnkeVurdering, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import CheckboxField from '@fpsak-frontend/form/src/CheckboxField';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AnkeMerknaderResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import FritekstAnkeMerknaderTextField from './FritekstAnkeMerknaderTextField';
import styles from './trygderettsbehandlingForm.less';

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

const IKKE_PAA_ANKET_BEHANDLING_ID = '0';

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

const filtrerKlage = (behandlinger: BehandlingInfo[] = []): BehandlingInfo[] => behandlinger.filter((b) => b.type === behandlingType.KLAGE);

type FormValues = {
  erMerknaderMottatt?: boolean;
  merknadKommentar?: string;
  avsluttBehandling?: boolean;
  trygderettVurdering?: string;
  trygderettOmgjoerArsak?: string;
  trygderettVurderingOmgjoer?: string;
  sendTilKabal?: boolean;
  klageHjemmel?: string;
  vedtak?: string;
  sendtTilTrygderetten?: string;
}

interface PureOwnProps {
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: AnkeMerknaderResultatAp) => Promise<void>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  sprakkode: string;
  ankeVurderingInput?: AnkeVurdering;
  alleKodeverk: AlleKodeverk;
  alleAktuelleHjemler: string[];
  behandlinger: BehandlingInfo[];
}

interface MappedOwnProps {
  aksjonspunktCode: string;
  formValues?: FormValues;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

const lagHjemler = (kodeverkNavn: KodeverkMedNavn[], kodeverkVerdier: string[]): KodeverkMedNavn[] => kodeverkNavn
  .filter(({ kode }) => kodeverkVerdier.includes(kode))
  .sort((a, b) => a.kode.localeCompare(b.kode));
const lagHjemmelsKoder = (kodeverkVerdier: string[]): string[] => kodeverkVerdier.map((kode) => kode);

export const TrygderettsbehandlingForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  handleSubmit,
  readOnlySubmitButton,
  aksjonspunktCode,
  sprakkode,
  formValues,
  ankeVurderingInput,
  alleKodeverk,
  alleAktuelleHjemler,
  behandlinger,
  ...formProps
}) => {
  const alleHjemler = alleKodeverk[kodeverkTyper.KLAGE_HJEMMEL];
  const ankeOmgorArsaker = alleKodeverk[kodeverkTyper.ANKE_OMGJOER_AARSAK];
  const hjemmelOptions = lagHjemler(alleHjemler, lagHjemmelsKoder(alleAktuelleHjemler))
    .map((mo: KodeverkMedNavn) => <option key={mo.kode} value={mo.kode}>{mo.navn}</option>);
  const kabalEnabled = ankeVurderingInput && ankeVurderingInput.enableKabal ? ankeVurderingInput.enableKabal : false;
  const behandlesKabal = ankeVurderingInput && ankeVurderingInput.underBehandlingKabal ? ankeVurderingInput.underBehandlingKabal : false;
  const behandletKabal = ankeVurderingInput && ankeVurderingInput.behandletAvKabal ? ankeVurderingInput.behandletAvKabal : false;
  const behandlingTyper = alleKodeverk[kodeverkTyper.BEHANDLING_TYPE];
  const behandlingStatuser = alleKodeverk[kodeverkTyper.BEHANDLING_STATUS];

  return (
    <form onSubmit={handleSubmit}>
      {behandlesKabal && readOnly && (
        <Row>
          <Column xs="6">
            <Heading size="small">{intl.formatMessage({ id: 'Ankebehandling.Merknad.SeKabalText' })}</Heading>
            <VerticalSpacer sixteenPx />
          </Column>
        </Row>
      )}
      {kabalEnabled && !readOnly && (
        <Row>
          <Column xs="6">
            <Heading size="small">{intl.formatMessage({ id: 'Ankebehandling.Merknad.SendTilKabal' })}</Heading>
            <VerticalSpacer fourPx />
            <CheckboxField name="sendTilKabal" label={<FormattedMessage id="Ankebehandling.Merknad.KabalText" />} />
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
              label={intl.formatMessage({ id: 'Ankebehandling.Merknad.Hjemmel' })}
              validate={[required]}
              bredde="xl"
            />
            <VerticalSpacer sixteenPx />
          </Column>
        </Row>
      )}
      {kabalEnabled && !readOnly && formValues.sendTilKabal && (
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
            <VerticalSpacer sixteenPx />
          </Column>
        </Row>
      )}
      {kabalEnabled && !readOnly && formValues.sendTilKabal && (
        <Row>
          <Column xs="4">
            <DatepickerField
              name="sendtTilTrygderetten"
              label={intl.formatMessage({ id: 'Ankebehandling.Resultat.SendtTrygderett' })}
              validate={[required, hasValidDate]}
              readOnly={readOnly}
            />
            <VerticalSpacer sixteenPx />
          </Column>
        </Row>
      )}
      {kabalEnabled && !readOnly && formValues.sendTilKabal && (
        <Row>
          <Column xs="6">
            { /* @ts-ignore Fiks cannot be used as a JSX component */ }
            <ProsessStegSubmitButton
              formName={formProps.form}
              isReadOnly={readOnly}
              isSubmittable={!readOnly}
              text={intl.formatMessage({ id: 'Ankebehandling.Merknad.SendTilKabal' })}
            />
          </Column>
        </Row>
      )}
      {!formValues.sendTilKabal && !behandlesKabal && !behandletKabal && (
        <Row>
          <Heading size="small"><FormattedMessage id="Ankebehandling.Merknad.Title" /></Heading>
          <VerticalSpacer sixteenPx />
          <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
            {[<FormattedMessage id="Ankebehandling.Merknad.HelpText" key={aksjonspunktCode} />]}
          </AksjonspunktHelpTextTemp>
          <VerticalSpacer sixteenPx />
        </Row>
      )}
      {!formValues.sendTilKabal && !behandlesKabal && !behandletKabal && (
        <>
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
          <BodyShort size="small"><FormattedMessage id="Ankebehandling.Resultat" /></BodyShort>
          <VerticalSpacer
            fourPx
          />
          <RadioGroupField
            name="trygderettVurdering"
            validate={[required]}
            direction="horizontal"
            readOnly={readOnly}
          >
            <RadioOption value={ankeVurderingType.ANKE_OMGJOER} label={{ id: 'Ankebehandling.Resultat.Omgjør' }} />
            <RadioOption
              value={ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE}
              label={{ id: 'Ankebehandling.Resultat.Opphev' }}
            />
            <RadioOption
              value={ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV}
              label={{ id: 'Ankebehandling.Resultat.Hjemsend' }}
            />
            <RadioOption value={ankeVurderingType.ANKE_AVVIS} label={{ id: 'Ankebehandling.Resultat.Avvis' }} />
            <RadioOption
              value={ankeVurderingType.ANKE_STADFESTE_YTELSESVEDTAK}
              label={{ id: 'Ankebehandling.Resultat.Stadfest' }}
            />
          </RadioGroupField>
        </>
      )}
      {ankeVurderingType.ANKE_OMGJOER === formValues.trygderettVurdering && (
        <Row>
          <Column xs="7">
            <ArrowBox>
              <SelectField
                readOnly={readOnly}
                name="trygderettOmgjoerArsak"
                selectValues={ankeOmgjorArsakRekkefolge
                  .map((arsak) => <option key={arsak} value={arsak}>{ankeOmgorArsaker.find((aoa) => aoa.kode === arsak)?.navn}</option>)}
                className={readOnly ? styles.selectReadOnly : null}
                label={<FormattedMessage id="Ankebehandling.OmgjoeringArsak" />}
                validate={[required]}
                bredde="xl"
              />
              <VerticalSpacer sixteenPx />
              <RadioGroupField
                name="trygderettVurderingOmgjoer"
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
      {(ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE === formValues.trygderettVurdering
        || ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV === formValues.trygderettVurdering) && (
        <Row>
          <Column xs="7">
            <ArrowBox alignOffset={180}>
              <SelectField
                readOnly={readOnly}
                name="trygderettOmgjoerArsak"
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
      {!formValues.sendTilKabal && !behandlesKabal && !behandletKabal && (
      <Row>
        <Column xs="8">
          { /* @ts-ignore Fiks cannot be used as a JSX component */ }
          <ProsessStegSubmitButton
            formName={formProps.form}
            isReadOnly={readOnly}
            isSubmittable={!readOnly}
            text={intl.formatMessage({ id: 'Ankebehandling.Merknad.Merknader.LagreKommentarer' })}
          />
        </Column>
        {!readOnly && (
          <Column xs="3">
            <CheckboxField name="avsluttBehandling" label={<FormattedMessage id="Ankebehandling.Merknad.AvsluttBehandling" />} />
          </Column>
        )}
      </Row>
      )}
    </form>
  );
};

TrygderettsbehandlingForm.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

const ankeMerknaderFormName = 'ankeMerknaderForm';

const lagreOmgjoerAarsak = (values: FormValues): string | string => (ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE === values.trygderettVurdering
    || ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV === values.trygderettVurdering
    || ankeVurderingType.ANKE_OMGJOER === values.trygderettVurdering ? values.trygderettOmgjoerArsak : '-');

const lagreVurderingOmgjoer = (values: FormValues): string | string => (ankeVurderingType.ANKE_OMGJOER === values.trygderettVurdering
  ? values.trygderettVurderingOmgjoer : '-');

const transformValues = (values: FormValues): AnkeMerknaderResultatAp => ({
  erMerknaderMottatt: values.erMerknaderMottatt,
  merknadKommentar: values.merknadKommentar,
  avsluttBehandling: values.avsluttBehandling,
  trygderettVurdering: values.trygderettVurdering,
  trygderettOmgjoerArsak: lagreOmgjoerAarsak(values),
  trygderettVurderingOmgjoer: lagreVurderingOmgjoer(values),
  påAnketKlageBehandlingUuid: values.vedtak === '0' || !values.vedtak ? null : values.vedtak,
  sendTilKabal: values.sendTilKabal,
  klageHjemmel: values.klageHjemmel,
  sendtTilTrygderetten: values.sendtTilTrygderetten,
  kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
});

const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingInput], (resultat): FormValues => {
  const avr = resultat ? resultat.ankeVurderingResultat : null;
  return {
    klageHjemmel: resultat && resultat.klageHjemmel !== '-' ? resultat.klageHjemmel : null,
    vedtak: avr ? formatId(avr.påAnketKlageBehandlingUuid) : null,
    sendtTilTrygderetten: resultat.sendtTilTrygderetten,
    sendTilKabal: false,
    merknadKommentar: avr ? avr.merknadKommentar : null,
    erMerknaderMottatt: avr ? avr.erMerknaderMottatt : null,
    trygderettVurdering: avr ? avr.trygderettVurdering : null,
    trygderettOmgjoerArsak: avr ? avr.trygderettOmgjoerArsak : null,
    trygderettVurderingOmgjoer: avr ? avr.trygderettVurderingOmgjoer : null,
    avsluttBehandling: false,
  };
});

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  aksjonspunktCode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
  formValues: formValueSelector(ankeMerknaderFormName)(state,
    'trygderettVurdering',
    'sendTilKabal',
    'klageHjemmel'),
});

export default connect(mapStateToProps)(reduxForm({
  form: ankeMerknaderFormName,
  destroyOnUnmount: false,
})(injectIntl(TrygderettsbehandlingForm)));
