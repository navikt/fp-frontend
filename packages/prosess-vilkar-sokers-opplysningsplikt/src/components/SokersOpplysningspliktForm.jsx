import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import moment from 'moment';
import { FormattedMessage, injectIntl } from 'react-intl';
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

const formName = 'SokersOpplysningspliktForm';

const orgPrefix = 'org_';
const aktørPrefix = 'aktør_';

const findRadioButtonTextCode = (erVilkarOk) => (erVilkarOk ? 'SokersOpplysningspliktForm.VilkarOppfylt' : 'SokersOpplysningspliktForm.VilkarIkkeOppfylt');
const getLabel = (intl) => (
  <div>
    <div>
      <FormattedMessage
        id={findRadioButtonTextCode(false)}
        values={{
          b: (chunks) => <b>{chunks}</b>,
        }}
      />
    </div>
    <div>{intl.formatMessage({ id: 'SokersOpplysningspliktForm.VilkarIkkeOppfyltMerInfo' })}</div>
  </div>
);
const capitalizeFirstLetters = (navn) => navn.toLowerCase().split(' ').map((w) => w.charAt(0).toUpperCase() + w.substr(1)).join(' ');

const lagArbeidsgiverNavnOgFødselsdatoTekst = (arbeidsgiver) => `${capitalizeFirstLetters(arbeidsgiver.navn)} (${moment(arbeidsgiver.fødselsdato)
  .format(DDMMYYYY_DATE_FORMAT)})`;

const lagArbeidsgiverNavnOgOrgnrTekst = (arbeidsgiver) => `${capitalizeFirstLetters(arbeidsgiver.navn)} (${arbeidsgiver.organisasjonsnummer})`;

const formatArbeidsgiver = (arbeidsgiver) => {
  if (!arbeidsgiver) {
    return '';
  }
  if (arbeidsgiver.fødselsdato) {
    return lagArbeidsgiverNavnOgFødselsdatoTekst(arbeidsgiver);
  }
  return lagArbeidsgiverNavnOgOrgnrTekst(arbeidsgiver);
};

/**
 * SokersOpplysningspliktForm
 *
 * Presentasjonskomponent. Informasjon om søkers informasjonsplikt er godkjent eller avvist.
 */
export const SokersOpplysningspliktFormImpl = ({
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
                <TableRow key={vedlegg.dokumentType.kode + (vedlegg.arbeidsgiver ? vedlegg.arbeidsgiver.organisasjonsnummer : '')}>
                  <TableColumn>
                    {dokumentTypeIds.find((dti) => dti.kode === vedlegg.dokumentType.kode).navn}
                  </TableColumn>
                  <TableColumn>
                    {vedlegg.dokumentType.kode === dokumentTypeId.INNTEKTSMELDING
                    && formatArbeidsgiver(vedlegg.arbeidsgiver)}
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
        {originalErVilkarOk === false && behandlingsresultat.avslagsarsak && (
          <>
            <VerticalSpacer sixteenPx />
            <Normaltekst>{getKodeverknavn(behandlingsresultat.avslagsarsak, vilkarType.SOKERSOPPLYSNINGSPLIKT)}</Normaltekst>
          </>
        )}
      </div>
    )}
  </ProsessPanelTemplate>
);

SokersOpplysningspliktFormImpl.propTypes = {
  intl: PropTypes.shape().isRequired,
  /**
   * Skal input-felter vises eller ikke
   */
  readOnly: PropTypes.bool.isRequired,
  /**
   * Skal knapp for å bekrefte data være trykkbar
   */
  readOnlySubmitButton: PropTypes.bool.isRequired,
  hasSoknad: PropTypes.bool,
  erVilkarOk: PropTypes.bool,
  originalErVilkarOk: PropTypes.bool,
  hasAksjonspunkt: PropTypes.bool,
  behandlingsresultat: PropTypes.shape(),
  manglendeVedlegg: PropTypes.arrayOf(PropTypes.shape()),
  dokumentTypeIds: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getKodeverknavn: PropTypes.func.isRequired,
  behandlingId: PropTypes.number.isRequired,
  behandlingVersjon: PropTypes.number.isRequired,
};

SokersOpplysningspliktFormImpl.defaultProps = {
  hasSoknad: undefined,
  erVilkarOk: undefined,
  originalErVilkarOk: undefined,
  hasAksjonspunkt: false,
  behandlingsresultat: {},
  manglendeVedlegg: [],
};

export const getSortedManglendeVedlegg = createSelector([
  (state, ownProps) => ownProps.soknad], (soknad) => (soknad && soknad.manglendeVedlegg
  ? soknad.manglendeVedlegg.slice().sort((mv1) => (mv1.dokumentType.kode === dokumentTypeId.DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL ? 1 : -1))
  : []));

const hasSoknad = createSelector([(state, ownProps) => ownProps.soknad], (soknad) => soknad !== null && isObject(soknad));

const lagArbeidsgiverKey = (arbeidsgiver) => {
  if (arbeidsgiver.aktørId) {
    return `${aktørPrefix}${arbeidsgiver.aktørId}`;
  } return `${orgPrefix}${arbeidsgiver.organisasjonsnummer}`;
};

export const buildInitialValues = createSelector(
  [getSortedManglendeVedlegg,
    hasSoknad,
    (state, ownProps) => ownProps.status,
    (state, ownProps) => ownProps.aksjonspunkter],
  (manglendeVedlegg, soknadExists, status, aksjonspunkter) => {
    const aksjonspunkt = aksjonspunkter.length > 0 ? aksjonspunkter[0] : undefined;
    const isOpenAksjonspunkt = aksjonspunkt && isAksjonspunktOpen(aksjonspunkt.status.kode);
    const isVilkarGodkjent = soknadExists && vilkarUtfallType.OPPFYLT === status;

    // TODO Mogleg inntektsmeldingerSomIkkeKommer kan fjernast, men trur fjerning av bruken av denne i render er ein midlertidig
    // fiks og at dette derfor skal brukast etterkvart. Sjå TFP-3076
    const inntektsmeldingerSomIkkeKommer = manglendeVedlegg
      .filter((mv) => mv.dokumentType.kode === dokumentTypeId.INNTEKTSMELDING)
      .reduce((acc, mv) => ({
        ...acc,
        [lagArbeidsgiverKey(mv.arbeidsgiver)]: mv.brukerHarSagtAtIkkeKommer,
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

const transformValues = (values, manglendeVedlegg) => {
  const arbeidsgivere = manglendeVedlegg
    .filter((mv) => mv.dokumentType.kode === dokumentTypeId.INNTEKTSMELDING)
    .map((mv) => mv.arbeidsgiver);
  return {
    kode: values.aksjonspunktKode,
    erVilkarOk: values.erVilkarOk,
    inntektsmeldingerSomIkkeKommer: arbeidsgivere.map((ag) => ({
      organisasjonsnummer: ag.aktørId ? null : ag.organisasjonsnummer, // backend sender fødselsdato i orgnummer feltet for privatpersoner... fiks dette
      aktørId: ag.aktørId,
      brukerHarSagtAtIkkeKommer: values.inntektsmeldingerSomIkkeKommer[lagArbeidsgiverKey(ag)],
    }), {}),
    ...ProsessStegBegrunnelseTextField.transformValues(values),
  };
};

const submitSelector = createSelector(
  [getSortedManglendeVedlegg, (state, props) => props.submitCallback],
  (manglendeVedlegg, submitCallback) => (values) => submitCallback([transformValues(values, manglendeVedlegg)]),
);

const mapStateToPropsFactory = (initialState, initialOwnProps) => {
  const getKodeverknavn = getKodeverknavnFn(initialOwnProps.alleKodeverk, kodeverkTyper);
  const isOpenAksjonspunkt = initialOwnProps.aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const erVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === initialOwnProps.status;

  return (state, ownProps) => {
    const { behandlingId, behandlingVersjon, alleKodeverk } = ownProps;
    return {
      getKodeverknavn,
      onSubmit: submitSelector(state, ownProps),
      hasSoknad: hasSoknad(state, ownProps),
      originalErVilkarOk: erVilkarOk,
      dokumentTypeIds: alleKodeverk[kodeverkTyper.DOKUMENT_TYPE_ID],
      manglendeVedlegg: getSortedManglendeVedlegg(state, ownProps),
      initialValues: buildInitialValues(state, ownProps),
      ...behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'hasAksjonspunkt', 'erVilkarOk'),
    };
  };
};

export default connect(mapStateToPropsFactory)(injectIntl(behandlingForm({
  form: formName,
})(SokersOpplysningspliktFormImpl)));
