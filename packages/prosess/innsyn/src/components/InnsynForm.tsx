import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, ArrowBox } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  InnsynResultatType as innsynResultatTyperKV,
  Kommunikasjonsretning,
} from '@navikt/fp-kodeverk';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Dokument, Innsyn, InnsynDokument } from '@navikt/fp-types';
import type { VurderInnsynAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { DocumentListInnsyn } from './DocumentListInnsyn';
import { VedtakDocuments } from './VedtakDocuments';

type FormValues = {
  mottattDato?: string;
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

const getDefaultValues = (
  aksjonspunkter: Aksjonspunkt[],
  fristBehandlingPåVent: string | null,
  innsyn?: Innsyn,
): FormValues => ({
  mottattDato: innsyn?.innsynMottattDato,
  innsynResultatType: innsyn?.innsynResultatType,
  fristDato: fristBehandlingPåVent ?? dayjs().add(3, 'days').format(ISO_DATE_FORMAT),
  sattPaVent: aksjonspunkter[0].status === AksjonspunktStatus.OPPRETTET ? undefined : !!fristBehandlingPåVent,
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
  ...hentDokumenterMedNavnOgFikkInnsyn(innsyn?.dokumenter ?? []),
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
  innsyn?: Innsyn;
  alleDokumenter?: Dokument[];
}

/**
 * InnsynForm
 *
 * Viser panelet som håndterer avklaring av innsyn.
 */
export const InnsynForm = ({ innsyn, alleDokumenter = [] }: Props) => {
  const intl = useIntl();

  const { fagsak, alleKodeverk, isSubmittable, aksjonspunkterForPanel, submitCallback, isReadOnly, behandling } =
    usePanelDataContext<VurderInnsynAp>();

  const defaultValues = getDefaultValues(aksjonspunkterForPanel, behandling.fristBehandlingPåVent, innsyn);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? defaultValues,
  });

  const documents = getFilteredReceivedDocuments(alleDokumenter);

  const innsynResultatTyper = alleKodeverk['InnsynResultatType']
    .sort((t1, t2) => t1.navn.localeCompare(t2.navn))
    .reverse();

  const isApOpen = aksjonspunkterForPanel[0].status === AksjonspunktStatus.OPPRETTET;

  const innsynResultatTypeKode = formMethods.watch('innsynResultatType');
  const sattPaVent = formMethods.watch('sattPaVent');

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, alleDokumenter))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-16">
        <Heading size="small" level="2">
          <FormattedMessage id="InnsynForm.Innsynsbehandling" />
        </Heading>
        {isApOpen && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage id="InnsynForm.VurderKravetOmInnsyn" />
          </AksjonspunktHelpTextHTML>
        )}
        <RhfDatepicker
          name="mottattDato"
          control={formMethods.control}
          label={intl.formatMessage({ id: 'InnsynForm.DatoMottattKrav' })}
          isReadOnly={isReadOnly}
          isEdited={!isApOpen}
          validate={[required, hasValidDate]}
        />
        <VedtakDocuments
          vedtaksdokumenter={innsyn?.vedtaksdokumentasjon ?? []}
          behandlingTypes={alleKodeverk['BehandlingType']}
        />
        <DocumentListInnsyn saksNr={fagsak.saksnummer} documents={documents} readOnly={isReadOnly} />
        <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
        <VStack gap="space-12">
          <RhfRadioGroup
            name="innsynResultatType"
            control={formMethods.control}
            label={<FormattedMessage id="InnsynForm.Resultat" />}
            validate={[required]}
            isReadOnly={isReadOnly}
            isEdited={!isApOpen}
          >
            <HStack gap="space-16">
              {innsynResultatTyper.map(irt => (
                <Radio key={irt.kode} value={irt.kode} size="small">
                  {irt.navn}
                </Radio>
              ))}
            </HStack>
          </RhfRadioGroup>
          {(innsynResultatTypeKode === innsynResultatTyperKV.INNVILGET ||
            innsynResultatTypeKode === innsynResultatTyperKV.DELVISTINNVILGET) && (
            <ArrowBox alignOffset={innsynResultatTypeKode === innsynResultatTyperKV.INNVILGET ? 28 : 176}>
              <VStack gap="space-16">
                <RhfRadioGroup
                  name="sattPaVent"
                  control={formMethods.control}
                  label={<FormattedMessage id="InnsynForm.VelgVidereAksjon" />}
                  validate={[required]}
                  isReadOnly={isReadOnly}
                  isEdited={!isApOpen}
                >
                  <HStack gap="space-16">
                    <Radio value={true} size="small">
                      <FormattedMessage id="InnsynForm.SettBehandlingPåVent" />
                    </Radio>
                    <Radio value={false} size="small">
                      <FormattedMessage id="InnsynForm.ForeslåOgFatteVedtak" />
                    </Radio>
                  </HStack>
                </RhfRadioGroup>
                {sattPaVent && (
                  <RhfDatepicker
                    name="fristDato"
                    control={formMethods.control}
                    label={intl.formatMessage({ id: 'InnsynForm.FristDato' })}
                    isReadOnly={isReadOnly}
                    isEdited={!isApOpen}
                    validate={[required, hasValidDate]}
                  />
                )}
              </VStack>
            </ArrowBox>
          )}
        </VStack>
        <ProsessStegSubmitButtonNew
          isReadOnly={isReadOnly}
          isSubmittable={isSubmittable}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
          text={sattPaVent ? intl.formatMessage({ id: 'SubmitButton.SettPåVent' }) : undefined}
        />
      </VStack>
    </RhfForm>
  );
};
