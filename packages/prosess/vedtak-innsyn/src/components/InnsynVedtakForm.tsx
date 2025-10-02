import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Heading, HStack, Label, Link, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { decodeHtmlEntity, formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Dokument, DokumentMalType, InnsynDokument, InnsynResultatType } from '@navikt/fp-types';
import type { ForeslaVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { DocumentListVedtakInnsyn } from './DocumentListVedtakInnsyn';

import styles from './innsynVedtakForm.module.css';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

export type VedtakInnsynForhandsvisData = {
  fritekst: string;
  mottaker: string;
  dokumentMal: DokumentMalType;
};

const getPreviewCallback =
  (previewCallback: (data: VedtakInnsynForhandsvisData) => void, begrunnelse?: string) =>
  (e: React.KeyboardEvent | React.MouseEvent): void => {
    e.preventDefault();

    const data = {
      fritekst: begrunnelse ?? ' ',
      mottaker: '',
      dokumentMal: 'INNSYN' as const,
    };
    previewCallback(data);
  };

// Samme dokument kan ligge på flere behandlinger under samme fagsak.
const getFilteredReceivedDocuments = (allDocuments: Dokument[]): Dokument[] => {
  const filteredDocuments = allDocuments.filter(doc => doc.kommunikasjonsretning === 'INN');
  for (const doc of allDocuments) {
    if (!filteredDocuments.some(fd => fd.dokumentId === doc.dokumentId)) {
      filteredDocuments.push(doc);
    }
  }
  return filteredDocuments;
};

const getDocumenterMedFikkInnsynVerdi = (
  alleDokumenter: Dokument[],
  valgteDokumenter: InnsynDokument[],
): DokumentMedInnsynMarkor[] =>
  alleDokumenter
    .filter(dokAlle => valgteDokumenter.find(dokValgte => dokValgte.dokumentId === dokAlle.dokumentId))
    .map(dokAlle => ({
      ...dokAlle,
      fikkInnsyn: valgteDokumenter.find(dokValgte => dokValgte.dokumentId === dokAlle.dokumentId)?.fikkInnsyn || false,
    }));

const findResultTypeMessage = (resultat: InnsynResultatType): string => {
  if (resultat === 'AVVIST') {
    return 'InnsynVedtakForm.Avslatt';
  }
  if (resultat === 'DELV') {
    return 'InnsynVedtakForm.Delvis';
  }
  return 'InnsynVedtakForm.Innvilget';
};

type DokumentMedInnsynMarkor = {
  fikkInnsyn: boolean;
} & Dokument;

type FormValues = {
  mottattDato?: string;
  begrunnelse?: string;
};

const buildInitialValues = (innsynMottattDato: string, aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  mottattDato: innsynMottattDato,
  begrunnelse: aksjonspunkter.find(ap => ap.definisjon === AksjonspunktKode.FORESLA_VEDTAK)?.begrunnelse ?? undefined,
});

const transformValues = (values: FormValues): ForeslaVedtakAp => ({
  kode: AksjonspunktKode.FORESLA_VEDTAK,
  ...values,
  begrunnelse: values.begrunnelse === '' ? undefined : values.begrunnelse,
});

interface Props {
  innsynDokumenter: InnsynDokument[];
  innsynMottattDato: string;
  innsynResultatType: InnsynResultatType;
  alleDokumenter: Dokument[];
  previewCallback: (data: VedtakInnsynForhandsvisData) => void;
}

/**
 * InnsynVedtakForm
 *
 * Presentasjonskomponent. Viser panelet som håndterer vedtaksforslag av innsyn.
 */
export const InnsynVedtakForm = ({
  previewCallback,
  innsynMottattDato,
  innsynResultatType,
  innsynDokumenter,
  alleDokumenter,
}: Props) => {
  const intl = useIntl();

  const { fagsak, aksjonspunkterForPanel, submitCallback, isReadOnly, behandling } =
    usePanelDataContext<ForeslaVedtakAp>();

  const initialValues = buildInitialValues(innsynMottattDato, aksjonspunkterForPanel);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const documents = getDocumenterMedFikkInnsynVerdi(getFilteredReceivedDocuments(alleDokumenter), innsynDokumenter);

  const apVurderInnsynBegrunnelse =
    aksjonspunkterForPanel.find(ap => ap.definisjon === AksjonspunktKode.VURDER_INNSYN)?.begrunnelse ?? undefined;

  const begrunnelse = formMethods.watch('begrunnelse');

  const previewBrev = getPreviewCallback(previewCallback, begrunnelse);

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-16">
        <Heading size="small" level="2">
          <FormattedMessage id={isReadOnly ? 'InnsynVedtakForm.Vedtak' : 'InnsynVedtakForm.ForslagVedtak'} />
        </Heading>
        <VStack gap="space-4">
          <Label size="small">
            <FormattedMessage id="InnsynVedtakForm.Resultat" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage id={findResultTypeMessage(innsynResultatType)} />
          </BodyShort>
        </VStack>
        <VStack gap="space-4">
          <Label size="small">
            <FormattedMessage id="InnsynVedtakForm.Vurdering" />
          </Label>
          <BodyShort size="small" className={styles['wordwrap']}>
            {decodeHtmlEntity(apVurderInnsynBegrunnelse)}
          </BodyShort>
        </VStack>
        {innsynResultatType !== 'INNV' && (
          <RhfTextarea
            name="begrunnelse"
            control={formMethods.control}
            label={intl.formatMessage({ id: 'InnsynVedtakForm.Fritekst' })}
            validate={[minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={isReadOnly}
            parse={formaterFritekst}
            badges={[
              {
                type: 'info',
                titleText: getLanguageFromSprakkode(behandling.språkkode),
              },
            ]}
          />
        )}
        {innsynResultatType !== 'AVVIST' && (
          <DocumentListVedtakInnsyn
            saksNr={fagsak.saksnummer}
            documents={documents.filter(document => document.fikkInnsyn === true)}
          />
        )}
        <HStack gap="space-16">
          {!isReadOnly && (
            <ProsessStegSubmitButtonNew
              isReadOnly={isReadOnly}
              isSubmittable
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
              hasEmptyRequiredFields={false}
            />
          )}
          <Link
            href="#"
            onClick={previewBrev}
            onKeyDown={e => (e.key === 'Enter' ? previewBrev(e) : null)}
            target="_blank"
          >
            {isReadOnly ? (
              <FormattedMessage id="InnsynVedtakForm.VisVedtaksbrev" />
            ) : (
              <FormattedMessage id="InnsynVedtakForm.ForhåndsvisBrev" />
            )}
          </Link>
        </HStack>
      </VStack>
    </RhfForm>
  );
};
