import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { Datepicker, Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import moment from 'moment';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  InnsynResultatType as innsynResultatTyperKV,
  KodeverkType,
  Kommunikasjonsretning,
} from '@navikt/fp-kodeverk';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Dokument, InnsynDokument, InnsynVedtaksdokument } from '@navikt/fp-types';
import type { VurderInnsynAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

import { DocumentListInnsyn } from './DocumentListInnsyn';
import { VedtakDocuments } from './VedtakDocuments';

const EMPTY_ARRAY = [] as InnsynVedtaksdokument[];

type FormValues = {
  mottattDato: string;
  innsynResultatType?: string;
  fristDato?: string;
  sattPaVent?: boolean;
  begrunnelse?: string;
};

const hentDokumenterMedNavnOgFikkInnsyn = (dokumenter: InnsynDokument[]): Record<string, boolean> =>
  dokumenter.reduce((acc: Record<string, boolean>, d: InnsynDokument) => {
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
  sattPaVent: aksjonspunkter[0].status === AksjonspunktStatus.OPPRETTET ? undefined : !!fristBehandlingPåVent,
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
  ...hentDokumenterMedNavnOgFikkInnsyn(dokumenter || []),
});

const getDocumentsStatus = (values: FormValues, documents: Dokument[]) =>
  documents.map(document => ({
    dokumentId: document.dokumentId,
    journalpostId: document.journalpostId,
    // @ts-expect-error Fiks
    fikkInnsyn: !!values[`dokument_${document.dokumentId}`],
  }));

const getFilteredValues = (values: FormValues) =>
  Object.keys(values)
    .filter(valueKey => !valueKey.startsWith('dokument_'))
    .reduce(
      (acc, valueKey) => ({
        ...acc,
        // @ts-expect-error Fiks
        [valueKey]: values[valueKey],
      }),
      {},
    );

// @ts-expect-error Fiks
const transformValues = (values: FormValues, documents: Dokument[]): VurderInnsynAp => ({
  kode: AksjonspunktKode.VURDER_INNSYN,
  innsynDokumenter: getDocumentsStatus(values, documents),
  ...(getFilteredValues(values) as FormValues),
});

// Samme dokument kan ligge på flere behandlinger under samme fagsak.
const getFilteredReceivedDocuments = (allDocuments: Dokument[]): Dokument[] => {
  const filteredDocuments = allDocuments.filter(doc => doc.kommunikasjonsretning === Kommunikasjonsretning.INN);
  allDocuments.forEach(
    doc => !filteredDocuments.some(fd => fd.dokumentId === doc.dokumentId) && filteredDocuments.push(doc),
  );
  return filteredDocuments;
};

interface Props {
  innsynMottattDato: string;
  innsynDokumenter: InnsynDokument[];
  innsynResultatType: string;
  vedtaksdokumentasjon: InnsynVedtaksdokument[];
  alleDokumenter?: Dokument[];
  readOnlySubmitButton: boolean;
}

/**
 * InnsynForm
 *
 * Viser panelet som håndterer avklaring av innsyn.
 */
export const InnsynForm = ({
  readOnlySubmitButton,
  innsynMottattDato,
  vedtaksdokumentasjon,
  innsynResultatType,
  innsynDokumenter,
  alleDokumenter = [],
}: Props) => {
  const intl = useIntl();

  const { fagsak, alleKodeverk, aksjonspunkterForPanel, submitCallback, isReadOnly, behandling } =
    usePanelDataContext<VurderInnsynAp>();

  const initialValues = buildInitialValues(
    innsynMottattDato,
    innsynResultatType,
    innsynDokumenter,
    aksjonspunkterForPanel,
    behandling.fristBehandlingPåVent,
  );

  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const documents = getFilteredReceivedDocuments(alleDokumenter);

  const innsynResultatTyper = alleKodeverk[KodeverkType.INNSYN_RESULTAT_TYPE]
    .filter(irt => irt.kode !== '-')
    .sort((t1, t2) => t1.navn.localeCompare(t2.navn))
    .reverse();

  const isApOpen = aksjonspunkterForPanel[0].status === AksjonspunktStatus.OPPRETTET;

  const innsynResultatTypeKode = formMethods.watch('innsynResultatType');
  const sattPaVent = formMethods.watch('sattPaVent');

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, alleDokumenter))}
      setDataOnUnmount={setFormData}
    >
      <Heading size="small">
        <FormattedMessage id="InnsynForm.Innsynsbehandling" />
      </Heading>
      <VerticalSpacer twentyPx />
      {isApOpen && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="InnsynForm.VurderKravetOmInnsyn" />
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer twentyPx />
      <Datepicker
        name="mottattDato"
        label={intl.formatMessage({ id: 'InnsynForm.DatoMottattKrav' })}
        isReadOnly={isReadOnly}
        isEdited={!isApOpen}
        validate={[required, hasValidDate]}
      />
      <VerticalSpacer sixteenPx />
      <VedtakDocuments
        vedtaksdokumenter={vedtaksdokumentasjon || EMPTY_ARRAY}
        behandlingTypes={alleKodeverk[KodeverkType.BEHANDLING_TYPE]}
      />
      <VerticalSpacer twentyPx />
      <DocumentListInnsyn saksNr={fagsak.saksnummer} documents={documents} readOnly={isReadOnly} />
      <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="innsynResultatType"
        label={<FormattedMessage id="InnsynForm.Resultat" />}
        validate={[required]}
        isReadOnly={isReadOnly}
        isHorizontal
        isEdited={!isApOpen}
        radios={innsynResultatTyper.map(irt => ({
          value: irt.kode,
          label: irt.navn,
        }))}
      />
      {(innsynResultatTypeKode === innsynResultatTyperKV.INNVILGET ||
        innsynResultatTypeKode === innsynResultatTyperKV.DELVISTINNVILGET) && (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox alignOffset={innsynResultatTypeKode === innsynResultatTyperKV.INNVILGET ? 28 : 176}>
            <RadioGroupPanel
              name="sattPaVent"
              label={<FormattedMessage id="InnsynForm.VelgVidereAksjon" />}
              validate={[required]}
              isReadOnly={isReadOnly}
              isEdited={!isApOpen}
              isHorizontal
              isTrueOrFalseSelection
              radios={[
                {
                  value: 'true',
                  label: intl.formatMessage({ id: 'InnsynForm.SettBehandlingPåVent' }),
                },
                {
                  value: 'false',
                  label: intl.formatMessage({ id: 'InnsynForm.ForeslåOgFatteVedtak' }),
                },
              ]}
            />
            {sattPaVent && (
              <>
                <VerticalSpacer eightPx />
                <Datepicker
                  name="fristDato"
                  label={intl.formatMessage({ id: 'InnsynForm.FristDato' })}
                  isReadOnly={isReadOnly}
                  isEdited={!isApOpen}
                  validate={[required, hasValidDate]}
                />
              </>
            )}
          </ArrowBox>
        </>
      )}
      <VerticalSpacer sixteenPx />
      <ProsessStegSubmitButtonNew
        isReadOnly={isReadOnly}
        isSubmittable={!readOnlySubmitButton}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
        text={sattPaVent ? intl.formatMessage({ id: 'SubmitButton.SettPåVent' }) : undefined}
      />
    </Form>
  );
};
