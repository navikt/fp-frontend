import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort, Heading } from '@navikt/ds-react';

import {
  AksjonspunktCode,
  kommunikasjonsretning,
  innsynResultatType as InnsynResultatType,
  dokumentMalType,
} from '@navikt/fp-kodeverk';
import { ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { decodeHtmlEntity, formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { Aksjonspunkt, Dokument, InnsynDokument } from '@navikt/fp-types';
import { ForeslaVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import DocumentListVedtakInnsyn from './DocumentListVedtakInnsyn';

import styles from './innsynVedtakForm.module.css';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

export type ForhandsvisData = {
  fritekst: string;
  mottaker: string;
  dokumentMal: string;
  gjelderVedtak: boolean;
};

const getPreviewCallback =
  (previewCallback: (data: ForhandsvisData) => Promise<any>, begrunnelse?: string) =>
  (e: React.KeyboardEvent | React.MouseEvent): void => {
    e.preventDefault();

    const data = {
      fritekst: begrunnelse || ' ',
      mottaker: '',
      dokumentMal: dokumentMalType.INNSYN_SVAR,
      gjelderVedtak: true,
    };
    previewCallback(data);
  };

// Samme dokument kan ligge på flere behandlinger under samme fagsak.
const getFilteredReceivedDocuments = (allDocuments: Dokument[]): Dokument[] => {
  const filteredDocuments = allDocuments.filter(doc => doc.kommunikasjonsretning === kommunikasjonsretning.INN);
  allDocuments.forEach(
    doc => !filteredDocuments.some(fd => fd.dokumentId === doc.dokumentId) && filteredDocuments.push(doc),
  );
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

const findResultTypeMessage = (resultat: string): string => {
  if (resultat === InnsynResultatType.AVVIST) {
    return 'InnsynVedtakForm.Avslatt';
  }
  if (resultat === InnsynResultatType.DELVISTINNVILGET) {
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
  begrunnelse: aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.FORESLA_VEDTAK)?.begrunnelse,
});

const transformValues = (values: FormValues): ForeslaVedtakAp => ({
  kode: AksjonspunktCode.FORESLA_VEDTAK,
  ...values,
});

interface OwnProps {
  sprakkode: string;
  innsynDokumenter: InnsynDokument[];
  innsynMottattDato: string;
  innsynResultatType: string;
  alleDokumenter: Dokument[];
  saksNr: string;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: ForeslaVedtakAp) => Promise<void>;
  previewCallback: (data: ForhandsvisData) => Promise<any>;
  readOnly: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * InnsynVedtakForm
 *
 * Presentasjonskomponent. Viser panelet som håndterer vedtaksforslag av innsyn.
 */
const InnsynVedtakForm: FunctionComponent<OwnProps> = ({
  readOnly,
  previewCallback,
  saksNr,
  innsynMottattDato,
  aksjonspunkter,
  submitCallback,
  innsynResultatType,
  innsynDokumenter,
  sprakkode,
  alleDokumenter,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(
    () => buildInitialValues(innsynMottattDato, aksjonspunkter),
    [innsynMottattDato, aksjonspunkter],
  );
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const documents = useMemo(
    () => getDocumenterMedFikkInnsynVerdi(getFilteredReceivedDocuments(alleDokumenter), innsynDokumenter),
    [alleDokumenter, innsynDokumenter],
  );

  const apBegrunnelse = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.VURDER_INNSYN)?.begrunnelse;

  const begrunnelse = formMethods.watch('begrunnelse');

  const previewBrev = getPreviewCallback(previewCallback, begrunnelse);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <Heading size="small">
        <FormattedMessage id={readOnly ? 'InnsynVedtakForm.Vedtak' : 'InnsynVedtakForm.ForslagVedtak'} />
      </Heading>
      <VerticalSpacer eightPx />
      <Label size="small">
        <FormattedMessage id="InnsynVedtakForm.Resultat" />
      </Label>
      <BodyShort size="small">
        <FormattedMessage id={findResultTypeMessage(innsynResultatType)} />
      </BodyShort>
      <VerticalSpacer eightPx />
      <Label size="small">
        <FormattedMessage id="InnsynVedtakForm.Vurdering" />
      </Label>
      <BodyShort size="small" className={styles.wordwrap}>
        {decodeHtmlEntity(apBegrunnelse)}
      </BodyShort>
      <VerticalSpacer twentyPx />
      {innsynResultatType !== InnsynResultatType.INNVILGET && (
        <TextAreaField
          name="begrunnelse"
          label={intl.formatMessage({ id: 'InnsynVedtakForm.Fritekst' })}
          validate={[minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
          parse={formaterFritekst}
          badges={[
            {
              type: 'info',
              titleText: getLanguageFromSprakkode(sprakkode),
            },
          ]}
        />
      )}
      <VerticalSpacer twentyPx />
      {innsynResultatType !== InnsynResultatType.AVVIST && (
        <DocumentListVedtakInnsyn
          saksNr={saksNr}
          documents={documents.filter(document => document.fikkInnsyn === true)}
        />
      )}
      <VerticalSpacer twentyPx />
      <FlexContainer>
        <FlexRow>
          {!readOnly && (
            <FlexColumn>
              <ProsessStegSubmitButtonNew
                isReadOnly={readOnly}
                isSubmittable
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
                hasEmptyRequiredFields={false}
              />
            </FlexColumn>
          )}
          <FlexColumn>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              onClick={previewBrev}
              onKeyDown={e => (e.key === 'Enter' ? previewBrev(e) : null)}
              className="lenke lenke--frittstaende"
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              tabIndex={0}
            >
              <FormattedMessage
                id={readOnly ? 'InnsynVedtakForm.VisVedtaksbrev' : 'InnsynVedtakForm.ForhåndsvisBrev'}
              />
            </a>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Form>
  );
};

export default InnsynVedtakForm;
