import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import moment from 'moment';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';

import {
  ProsessStegBegrunnelseTextField, ProsessPanelTemplate,
} from '@fpsak-frontend/prosess-felles';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  Table, TableColumn, TableRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  DDMMYYYY_DATE_FORMAT, isObject, required, getKodeverknavnFn,
} from '@fpsak-frontend/utils';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  behandlingForm, behandlingFormValueSelector, RadioGroupField, RadioOption,
} from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import dokumentTypeId from '@fpsak-frontend/kodeverk/src/dokumentTypeId';
import { InjectedFormProps } from 'redux-form';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, Kodeverk, KodeverkMedNavn, ManglendeVedleggSoknad, Soknad, ArbeidsgiverOpplysninger,
} from '@fpsak-frontend/types';

const formName = 'SokersOpplysningspliktForm';

const orgPrefix = 'org_';
const aktørPrefix = 'aktør_';

const findRadioButtonTextCode = (erVilkarOk: boolean): string => (erVilkarOk
  ? 'SokersOpplysningspliktForm.VilkarOppfylt' : 'SokersOpplysningspliktForm.VilkarIkkeOppfylt');

const getLabel = (intl: IntlShape): ReactElement => (
  <div>
    <div>
      <FormattedMessage
        id={findRadioButtonTextCode(false)}
        values={{
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    </div>
    <div>{intl.formatMessage({ id: 'SokersOpplysningspliktForm.VilkarIkkeOppfyltMerInfo' })}</div>
  </div>
);
const capitalizeFirstLetters = (navn: string): string => navn.toLowerCase().split(' ').map((w: string) => w.charAt(0).toUpperCase() + w.substr(1)).join(' ');

const lagArbeidsgiverNavnOgFødselsdatoTekst = (
  navn: string,
  fodselsdato: string,
): string => `${capitalizeFirstLetters(navn)} (${moment(fodselsdato).format(DDMMYYYY_DATE_FORMAT)})`;

const lagArbeidsgiverNavnOgOrgnrTekst = (
  navn: string,
  organisasjonsnummer: string,
): string => `${capitalizeFirstLetters(navn)} (${organisasjonsnummer})`;

const formatArbeidsgiver = (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId, arbeidsgiverReferanse?: string): string => {
  if (!arbeidsgiverReferanse) {
    return '';
  }
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];
  if (!arbeidsgiverOpplysninger) {
    return '';
  }
  if (arbeidsgiverOpplysninger.erPrivatPerson) {
    return lagArbeidsgiverNavnOgFødselsdatoTekst(arbeidsgiverOpplysninger.navn, arbeidsgiverOpplysninger.fødselsdato);
  }
  return lagArbeidsgiverNavnOgOrgnrTekst(arbeidsgiverOpplysninger.navn, arbeidsgiverOpplysninger.identifikator);
};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  soknad: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: { kode: string }[]) => Promise<any>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface MappedOwnProps {
  getKodeverknavn: (kodeverk: Kodeverk, undertype?: string) => string;
  hasSoknad: boolean;
  originalErVilkarOk: boolean;
  dokumentTypeIds: KodeverkMedNavn[];
  manglendeVedlegg: ManglendeVedleggSoknad[],
  erVilkarOk?: boolean;
  hasAksjonspunkt: boolean;
  initialValues: {
    erVilkarOk?: boolean;
  }
}

/**
 * SokersOpplysningspliktForm
 *
 * Presentasjonskomponent. Informasjon om søkers informasjonsplikt er godkjent eller avvist.
 */
export const SokersOpplysningspliktFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  readOnly,
  readOnlySubmitButton,
  behandlingsresultat,
  hasSoknad,
  erVilkarOk,
  originalErVilkarOk,
  hasAksjonspunkt,
  manglendeVedlegg,
  dokumentTypeIds,
  getKodeverknavn,
  behandlingId,
  behandlingVersjon,
  arbeidsgiverOpplysningerPerId,
  ...formProps
}) => (
  <ProsessPanelTemplate
    titleCode="SokersOpplysningspliktForm.SokersOpplysningsplikt"
    isAksjonspunktOpen={!readOnlySubmitButton}
    formName={formProps.form}
    handleSubmit={formProps.handleSubmit}
    isDirty={hasAksjonspunkt ? formProps.dirty : erVilkarOk !== formProps.initialValues.erVilkarOk}
    readOnlySubmitButton={hasSoknad ? readOnlySubmitButton : !formProps.dirty || readOnlySubmitButton}
    readOnly={readOnly}
    behandlingId={behandlingId}
    behandlingVersjon={behandlingVersjon}
    originalErVilkarOk={originalErVilkarOk}
  >
    {manglendeVedlegg.length > 0 && (
      <>
        <VerticalSpacer twentyPx />
        <Normaltekst><FormattedMessage id="SokersOpplysningspliktForm.ManglendeDokumentasjon" /></Normaltekst>
        <VerticalSpacer eightPx />
        <Row>
          <Column xs="11">
            <Table noHover>
              {manglendeVedlegg.map((vedlegg) => (
                <TableRow key={vedlegg.dokumentType.kode + (vedlegg.arbeidsgiverReferanse ? vedlegg.arbeidsgiverReferanse : '')}>
                  <TableColumn>
                    {dokumentTypeIds.find((dti) => dti.kode === vedlegg.dokumentType.kode).navn}
                  </TableColumn>
                  <TableColumn>
                    {vedlegg.dokumentType.kode === dokumentTypeId.INNTEKTSMELDING
                  && formatArbeidsgiver(arbeidsgiverOpplysningerPerId, vedlegg.arbeidsgiverReferanse)}
                  </TableColumn>
                </TableRow>
              ))}
            </Table>
          </Column>
        </Row>
      </>
    )}
    <ProsessStegBegrunnelseTextField readOnly={readOnly} />
    {!readOnly && (
      <>
        <VerticalSpacer sixteenPx />
        <Row>
          <Column xs="6">
            <RadioGroupField name="erVilkarOk" validate={[required]}>
              <RadioOption
                label={(
                  <FormattedMessage
                    id={findRadioButtonTextCode(true)}
                  />
              )}
                value
                disabled={!hasSoknad}
              />
              <RadioOption label={getLabel(intl)} value={false} />
            </RadioGroupField>
          </Column>
        </Row>
      </>
    )}
    {readOnly && (
      <div>
        {originalErVilkarOk === false && behandlingsresultat?.avslagsarsak && (
          <>
            <VerticalSpacer sixteenPx />
            <Normaltekst>{getKodeverknavn(behandlingsresultat.avslagsarsak, vilkarType.SOKERSOPPLYSNINGSPLIKT)}</Normaltekst>
          </>
        )}
      </div>
    )}
  </ProsessPanelTemplate>
);

SokersOpplysningspliktFormImpl.defaultProps = {
  hasAksjonspunkt: false,
  manglendeVedlegg: [],
};

export const getSortedManglendeVedlegg = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad], (soknad): ManglendeVedleggSoknad[] => (soknad && soknad.manglendeVedlegg
  ? soknad.manglendeVedlegg.slice().sort((mv1) => (mv1.dokumentType.kode === dokumentTypeId.DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL ? 1 : -1))
  : []));

const hasSoknad = createSelector([(ownProps: PureOwnProps) => ownProps.soknad], (soknad): boolean => soknad !== null && isObject(soknad));

const lagArbeidsgiverKey = (arbeidsgiverOpplysninger: ArbeidsgiverOpplysninger): string => {
  if (arbeidsgiverOpplysninger.erPrivatPerson) {
    return `${aktørPrefix}${arbeidsgiverOpplysninger.referanse}`;
  }
  return `${orgPrefix}${arbeidsgiverOpplysninger.identifikator}`;
};

interface FormValues {
  erVilkarOk?: boolean;
  begrunnelse?: string;
  aksjonspunktKode: string;
  inntektsmeldingerSomIkkeKommer: { [key: string]: boolean };
  hasAksjonspunkt: boolean;
}

export const buildInitialValues = createSelector(
  [getSortedManglendeVedlegg,
    hasSoknad,
    (ownProps: PureOwnProps) => ownProps.status,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId],
  (manglendeVedlegg, soknadExists, status, aksjonspunkter, arbeidsgiverOpplysningerPerId): FormValues => {
    const aksjonspunkt = aksjonspunkter.length > 0 ? aksjonspunkter[0] : undefined;
    const isOpenAksjonspunkt = aksjonspunkt && isAksjonspunktOpen(aksjonspunkt.status.kode);
    const isVilkarGodkjent = soknadExists && vilkarUtfallType.OPPFYLT === status;

    // TODO Mogleg inntektsmeldingerSomIkkeKommer kan fjernast, men trur fjerning av bruken av denne i render er ein midlertidig
    // fiks og at dette derfor skal brukast etterkvart. Sjå TFP-3076
    const inntektsmeldingerSomIkkeKommer = manglendeVedlegg
      .filter((mv) => mv.dokumentType.kode === dokumentTypeId.INNTEKTSMELDING)
      .reduce((acc, mv) => ({
        ...acc,
        [lagArbeidsgiverKey(arbeidsgiverOpplysningerPerId[mv.arbeidsgiverReferanse])]: mv.brukerHarSagtAtIkkeKommer,
      }), {});

    return {
      inntektsmeldingerSomIkkeKommer,
      erVilkarOk: isOpenAksjonspunkt && soknadExists ? undefined : isVilkarGodkjent,
      aksjonspunktKode: aksjonspunkt ? aksjonspunkt.definisjon.kode : aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_OVST,
      hasAksjonspunkt: aksjonspunkt !== undefined,
      ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
    };
  },
);

const transformValues = (
  values: FormValues,
  manglendeVedlegg: ManglendeVedleggSoknad[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): any => {
  const arbeidsgiverReferanser = manglendeVedlegg
    .filter((mv) => mv.dokumentType.kode === dokumentTypeId.INNTEKTSMELDING)
    .map((mv) => mv.arbeidsgiverReferanse);

  return {
    kode: values.aksjonspunktKode,
    erVilkarOk: values.erVilkarOk,
    inntektsmeldingerSomIkkeKommer: arbeidsgiverReferanser.map((agRef) => {
      const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[agRef];
      return {
        // backend sender fødselsdato i orgnummer feltet for privatpersoner... fiks dette
        organisasjonsnummer: arbeidsgiverOpplysninger.erPrivatPerson ? null : arbeidsgiverOpplysninger.identifikator,
        aktørId: arbeidsgiverOpplysninger.erPrivatPerson ? arbeidsgiverOpplysninger.referanse : null,
        brukerHarSagtAtIkkeKommer: values.inntektsmeldingerSomIkkeKommer[lagArbeidsgiverKey(arbeidsgiverOpplysninger)],
      };
    }, {}),
    ...ProsessStegBegrunnelseTextField.transformValues(values),
  };
};

const submitSelector = createSelector(
  [getSortedManglendeVedlegg,
    (props: PureOwnProps) => props.submitCallback,
    (props: PureOwnProps) => props.arbeidsgiverOpplysningerPerId],
  (manglendeVedlegg, submitCallback, arbeidsgiverOpplysningerPerId) => (
    values: FormValues,
  ) => submitCallback([transformValues(values, manglendeVedlegg, arbeidsgiverOpplysningerPerId)]),
);

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const getKodeverknavn = getKodeverknavnFn(initialOwnProps.alleKodeverk, kodeverkTyper);
  const isOpenAksjonspunkt = initialOwnProps.aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === initialOwnProps.status;

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => {
    const { behandlingId, behandlingVersjon, alleKodeverk } = ownProps;
    return {
      getKodeverknavn,
      onSubmit: submitSelector(ownProps),
      hasSoknad: hasSoknad(ownProps),
      originalErVilkarOk: erVilkarOk,
      dokumentTypeIds: alleKodeverk[kodeverkTyper.DOKUMENT_TYPE_ID],
      manglendeVedlegg: getSortedManglendeVedlegg(ownProps),
      initialValues: buildInitialValues(ownProps),
      ...behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'hasAksjonspunkt', 'erVilkarOk'),
    };
  };
};

export default connect(mapStateToPropsFactory)(injectIntl(behandlingForm({
  form: formName,
})(SokersOpplysningspliktFormImpl)));
