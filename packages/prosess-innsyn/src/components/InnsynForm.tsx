import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Undertittel } from 'nav-frontend-typografi';
import { Row } from 'nav-frontend-grid';

import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  Form, DatepickerField, RadioGroupField, RadioOption,
} from '@fpsak-frontend/form-hooks';
import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { hasValidDate, ISO_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@fpsak-frontend/prosess-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import innsynResultatTyperKV from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import {
  Aksjonspunkt, Dokument, InnsynDokument, InnsynVedtaksdokument, AlleKodeverk,
} from '@fpsak-frontend/types';
import { VurderInnsynAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import DocumentListInnsyn from './DocumentListInnsyn';
import VedtakDocuments from './VedtakDocuments';

const EMPTY_ARRAY = [];

type FormValues = {
  mottattDato: string;
  innsynResultatType: string;
  fristDato?: string;
  sattPaVent?: boolean;
}

const hentDokumenterMedNavnOgFikkInnsyn = (
  dokumenter: InnsynDokument[],
): Record<string, boolean> => dokumenter
  .reduce((acc: Record<string, boolean>, d: InnsynDokument) => {
    const dokumentNavn = `dokument_${d.dokumentId}`;
    return {
      [dokumentNavn]: d.fikkInnsyn,
      ...acc,
    };
  }, {});

const buildInitialValues = (
  innsynMottattDato: string,
  innsynResultatType: string,
  dokumenter: InnsynDokument[],
  aksjonspunkter: Aksjonspunkt[],
  fristBehandlingPåVent?: string,
): FormValues => ({
  mottattDato: innsynMottattDato,
  innsynResultatType: innsynResultatType || undefined,
  fristDato: fristBehandlingPåVent || moment().add(3, 'days').format(ISO_DATE_FORMAT),
  sattPaVent: isAksjonspunktOpen(aksjonspunkter[0].status) ? undefined : !!fristBehandlingPåVent,
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
  ...hentDokumenterMedNavnOgFikkInnsyn(dokumenter || []),
});

const getDocumentsStatus = (
  values: FormValues,
  documents: Dokument[],
) => documents.map((document) => ({
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

const transformValues = (
  values: FormValues,
  documents: Dokument[],
): VurderInnsynAp => ({
  kode: aksjonspunktCodes.VURDER_INNSYN,
  innsynDokumenter: getDocumentsStatus(values, documents),
  ...getFilteredValues(values) as FormValues,
});

// Samme dokument kan ligge på flere behandlinger under samme fagsak.
const getFilteredReceivedDocuments = (allDocuments: Dokument[]): Dokument[] => {
  const filteredDocuments = allDocuments.filter((doc) => doc.kommunikasjonsretning === kommunikasjonsretning.INN);
  allDocuments.forEach((doc) => !filteredDocuments.some((fd) => fd.dokumentId === doc.dokumentId) && filteredDocuments.push(doc));
  return filteredDocuments;
};

interface OwnProps {
  saksNr: string;
  fristBehandlingPåVent?: string;
  innsynMottattDato: string;
  innsynDokumenter: InnsynDokument[];
  innsynResultatType: string;
  vedtaksdokumentasjon: InnsynVedtaksdokument[];
  alleDokumenter: Dokument[];
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: AlleKodeverk;
  submitCallback: (data: VurderInnsynAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * InnsynForm
 *
 * Presentasjonskomponent. Viser panelet som håndterer avklaring av innsyn.
 */
export const InnsynForm: FunctionComponent<OwnProps> = ({
  readOnly,
  readOnlySubmitButton,
  innsynMottattDato,
  alleKodeverk,
  vedtaksdokumentasjon,
  innsynResultatType,
  fristBehandlingPåVent,
  innsynDokumenter,
  alleDokumenter,
  aksjonspunkter,
  submitCallback,
  saksNr,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(
    innsynMottattDato,
    innsynResultatType,
    innsynDokumenter,
    aksjonspunkter,
    fristBehandlingPåVent),
  [innsynMottattDato, innsynResultatType, fristBehandlingPåVent, innsynDokumenter, aksjonspunkter]);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const documents = useMemo(() => getFilteredReceivedDocuments(alleDokumenter), [alleDokumenter]);

  const innsynResultatTyper = useMemo(() => alleKodeverk[kodeverkTyper.INNSYN_RESULTAT_TYPE]
    .filter((irt) => irt.kode !== '-')
    .sort((t1, t2) => t1.navn.localeCompare(t2.navn))
    .reverse(), [alleKodeverk]);

  const isApOpen = isAksjonspunktOpen(aksjonspunkter[0].status);

  const innsynResultatTypeKode = formMethods.watch('innsynResultatType');
  const sattPaVent = formMethods.watch('sattPaVent');

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, alleDokumenter))}
      setDataOnUnmount={setFormData}
    >
      <Undertittel><FormattedMessage id="InnsynForm.Innsynsbehandling" /></Undertittel>
      <VerticalSpacer twentyPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
        {[<FormattedMessage id="InnsynForm.VurderKravetOmInnsyn" key="1" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer twentyPx />
      <DatepickerField
        name="mottattDato"
        label={intl.formatMessage({ id: 'InnsynForm.DatoMottattKrav' })}
        readOnly={readOnly}
        isEdited={!isApOpen}
        validate={[required, hasValidDate]}
      />
      <VerticalSpacer sixteenPx />
      <VedtakDocuments vedtaksdokumenter={vedtaksdokumentasjon || EMPTY_ARRAY} behandlingTypes={alleKodeverk[kodeverkTyper.BEHANDLING_TYPE]} />
      <VerticalSpacer twentyPx />
      <DocumentListInnsyn saksNr={saksNr} documents={documents} readOnly={readOnly} />
      <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
      <VerticalSpacer sixteenPx />
      <RadioGroupField
        name="innsynResultatType"
        validate={[required]}
        readOnly={readOnly}
        label={<FormattedMessage id="InnsynForm.Resultat" key="1" />}
        isEdited={!isApOpen}
      >
        {innsynResultatTyper.map((irt) => <RadioOption key={irt.kode} value={irt.kode} label={irt.navn} />)}
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
            parse={(value) => value === 'true'}
          >
            <RadioOption label={intl.formatMessage({ id: 'InnsynForm.SettBehandlingPåVent' })} value="true" />
            <RadioOption label={intl.formatMessage({ id: 'InnsynForm.ForeslåOgFatteVedtak' })} value="false" />
          </RadioGroupField>
          <Row>
            {sattPaVent && (
            <DatepickerField
              name="fristDato"
              label={intl.formatMessage({ id: 'InnsynForm.FristDato' })}
              readOnly={readOnly}
              isEdited={!isApOpen}
              validate={[required, hasValidDate]}
            />
            )}
          </Row>
        </ArrowBox>
      )}
      <VerticalSpacer sixteenPx />
      <ProsessStegSubmitButtonNew
        isReadOnly={readOnly}
        isSubmittable={!readOnlySubmitButton}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
        text={sattPaVent ? intl.formatMessage({ id: 'SubmitButton.SettPåVent' }) : undefined}
      />
    </Form>
  );
};

export default InnsynForm;
