import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage, WrappedComponentProps, injectIntl } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import moment from 'moment';
import { Undertittel } from 'nav-frontend-typografi';
import { Row } from 'nav-frontend-grid';

import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  DatepickerField, RadioGroupField, RadioOption, behandlingForm, behandlingFormValueSelector,
  isBehandlingFormDirty, isBehandlingFormSubmitting, hasBehandlingFormErrorsOfType,
} from '@fpsak-frontend/form';
import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { hasValidDate, ISO_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import { ProsessStegBegrunnelseTextField, ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import innsynResultatTyperKV from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import {
  Aksjonspunkt, Dokument, InnsynDokument, InnsynVedtaksdokument, Kodeverk, KodeverkMedNavn,
} from '@fpsak-frontend/types';

import DocumentListInnsyn from './DocumentListInnsyn';
import VedtakDocuments from './VedtakDocuments';

type FormValues = {
  mottattDato?: string;
  innsynResultatType?: string;
  fristDato?: string;
  sattPaVent?: boolean;
}

interface PureOwnProps {
  saksNr: string;
  behandlingId: number;
  behandlingVersjon: number;
  behandlingPaaVent: boolean;
  innsynMottattDato: string;
  innsynDokumenter: InnsynDokument[];
  innsynResultatType: Kodeverk;
  vedtaksdokumentasjon: InnsynVedtaksdokument[];
  alleDokumenter: Dokument[];
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  submitCallback: (data: any) => Promise<any>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
}

interface MappedOwnProps {
  innsynResultatTypeKode?: string;
  documents: Dokument[];
  vedtaksdokumenter?: InnsynVedtaksdokument[];
  innsynResultatTyper: KodeverkMedNavn[];
  behandlingTypes: KodeverkMedNavn[];
  isApOpen: boolean;
  sattPaVent?: boolean;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * InnsynForm
 *
 * Presentasjonskomponent. Viser panelet som håndterer avklaring av innsyn.
 */
export const InnsynFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  readOnlySubmitButton,
  innsynResultatTyper,
  innsynResultatTypeKode,
  behandlingTypes,
  sattPaVent,
  saksNr,
  documents,
  vedtaksdokumenter,
  isApOpen,
  behandlingId,
  behandlingVersjon,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <Undertittel><FormattedMessage id="InnsynForm.Innsynsbehandling" /></Undertittel>
    <VerticalSpacer twentyPx />
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
      {[<FormattedMessage id="InnsynForm.VurderKravetOmInnsyn" key="1" />]}
    </AksjonspunktHelpTextTemp>
    <VerticalSpacer twentyPx />
    <DatepickerField
      name="mottattDato"
      label={{ id: 'InnsynForm.DatoMottattKrav' }}
      readOnly={readOnly}
      isEdited={!isApOpen}
      validate={[required, hasValidDate]}
    />
    <VerticalSpacer sixteenPx />
    <VedtakDocuments vedtaksdokumenter={vedtaksdokumenter} behandlingTypes={behandlingTypes} />
    <VerticalSpacer twentyPx />
    <DocumentListInnsyn saksNr={saksNr} documents={documents} readOnly={readOnly} />
    <ProsessStegBegrunnelseTextField readOnly={readOnly} />
    <VerticalSpacer sixteenPx />
    <RadioGroupField
      name="innsynResultatType"
      validate={[required]}
      readOnly={readOnly}
      label={<FormattedMessage id="InnsynForm.Resultat" key="1" />}
      isEdited={!isApOpen}
    >
      {innsynResultatTyper
        .filter((irt) => irt.kode !== '-')
        .sort((t1, t2) => t1.navn.localeCompare(t2.navn))
        .reverse()
        .map((irt) => <RadioOption key={irt.kode} value={irt.kode} label={irt.navn} />)}
    </RadioGroupField>
    {(innsynResultatTypeKode === innsynResultatTyperKV.INNVILGET || innsynResultatTypeKode === innsynResultatTyperKV.DELVISTINNVILGET) && (
    <ArrowBox alignOffset={(innsynResultatTypeKode === innsynResultatTyperKV.INNVILGET) ? 28 : 176}>
      <RadioGroupField
        name="sattPaVent"
        label={<FormattedMessage id="InnsynForm.VelgVidereAksjon" key="1" />}
        direction="vertical"
        readOnly={readOnly}
        isEdited={!isApOpen}
        validate={[required]}
      >
        <RadioOption label={{ id: 'InnsynForm.SettBehandlingPåVent' }} value />
        <RadioOption label={{ id: 'InnsynForm.ForeslåOgFatteVedtak' }} value={false} />
      </RadioGroupField>
      <Row>
        {sattPaVent && (
        <DatepickerField
          name="fristDato"
          label={{ id: 'InnsynForm.FristDato' }}
          readOnly={readOnly}
          isEdited={!isApOpen}
          validate={[required, hasValidDate]}
        />
        )}
      </Row>
    </ArrowBox>
    )}
    <VerticalSpacer sixteenPx />
    <ProsessStegSubmitButton
      formName={formProps.form}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      text={sattPaVent ? intl.formatMessage({ id: 'SubmitButton.SettPåVent' }) : undefined}
      isReadOnly={readOnly}
      isSubmittable={!readOnlySubmitButton}
      isBehandlingFormSubmitting={isBehandlingFormSubmitting}
      isBehandlingFormDirty={isBehandlingFormDirty}
      hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
    />
  </form>
);

InnsynFormImpl.defaultProps = {
  vedtaksdokumenter: [],
};

const hentDokumenterMedNavnOgFikkInnsyn = (dokumenter: InnsynDokument[]): Record<string, boolean> => dokumenter
  .reduce((acc: Record<string, boolean>, d: InnsynDokument) => {
    const dokumentNavn = `dokument_${d.dokumentId}`;
    return {
      [dokumentNavn]: d.fikkInnsyn,
      ...acc,
    };
  }, {});

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.innsynMottattDato,
    (ownProps) => ownProps.innsynResultatType,
    (ownProps) => ownProps.behandlingPaaVent,
    (ownProps) => ownProps.innsynDokumenter,
    (ownProps) => ownProps.aksjonspunkter],
  (innsynMottattDato, innsynResultatType, fristBehandlingPaaVent, dokumenter, aksjonspunkter): FormValues => ({
    mottattDato: innsynMottattDato,
    innsynResultatType: innsynResultatType ? innsynResultatType.kode : undefined,
    fristDato: moment().add(3, 'days').format(ISO_DATE_FORMAT),
    sattPaVent: isAksjonspunktOpen(aksjonspunkter[0].status.kode) ? undefined : !!fristBehandlingPaaVent,
    ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
    ...hentDokumenterMedNavnOgFikkInnsyn(dokumenter || []),
  }),
);

const getDocumentsStatus = (values: FormValues, documents: Dokument[]) => documents.map((document) => ({
  dokumentId: document.dokumentId,
  journalpostId: document.journalpostId,
  fikkInnsyn: !!values[`dokument_${document.dokumentId}`],
}));

const getFilteredValues = (values: FormValues) => Object.keys(values)
  .filter((valueKey) => !valueKey.startsWith('dokument_'))
  .reduce((acc, valueKey) => ({
    ...acc,
    [valueKey]: values[valueKey],
  }), {});

const transformValues = (values: FormValues, documents: Dokument[]): any => ({
  kode: aksjonspunktCodes.VURDER_INNSYN,
  innsynDokumenter: getDocumentsStatus(values, documents),
  ...getFilteredValues(values),
});

// Samme dokument kan ligge på flere behandlinger under samme fagsak.
const getFilteredReceivedDocuments = createSelector([(ownProps: PureOwnProps) => ownProps.alleDokumenter], (allDocuments): Dokument[] => {
  const filteredDocuments = allDocuments.filter((doc) => doc.kommunikasjonsretning === kommunikasjonsretning.INN);
  allDocuments.forEach((doc) => !filteredDocuments.some((fd) => fd.dokumentId === doc.dokumentId) && filteredDocuments.push(doc));
  return filteredDocuments;
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.alleDokumenter],
(submitCallback, alleDokumenter) => (values: FormValues) => submitCallback([transformValues(values, alleDokumenter)]));

const formName = 'InnsynForm';

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  documents: getFilteredReceivedDocuments(ownProps),
  vedtaksdokumenter: ownProps.vedtaksdokumentasjon,
  innsynResultatTyper: ownProps.alleKodeverk[kodeverkTyper.INNSYN_RESULTAT_TYPE],
  behandlingTypes: ownProps.alleKodeverk[kodeverkTyper.BEHANDLING_TYPE],
  isApOpen: isAksjonspunktOpen(ownProps.aksjonspunkter[0].status.kode),
  innsynResultatTypeKode: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'innsynResultatType'),
  sattPaVent: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'sattPaVent'),
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
});

const InnsynForm = connect(mapStateToProps)(behandlingForm({
  form: formName,
})(injectIntl(InnsynFormImpl)));

export default InnsynForm;
