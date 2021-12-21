import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import { ProsessStegSubmitButtonNew } from '@fpsak-frontend/prosess-felles';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Form, TextAreaField } from '@fpsak-frontend/form-hooks';
import {
  decodeHtmlEntity, getLanguageFromSprakkode, hasValidText, maxLength, minLength,
} from '@fpsak-frontend/utils';
import InnsynResultatType from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import {
  Aksjonspunkt, Dokument, InnsynDokument, Kodeverk,
} from '@fpsak-frontend/types';
import { ForeslaVedtakAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';

import DocumentListVedtakInnsyn from './DocumentListVedtakInnsyn';

import styles from './innsynVedtakForm.less';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

export type ForhandsvisData = {
  fritekst: string;
  mottaker: string;
  dokumentMal: string;
  gjelderVedtak: boolean;
}

const getPreviewCallback = (
  begrunnelse: string,
  previewCallback: (data: ForhandsvisData) => Promise<any>,
) => (e: React.KeyboardEvent | React.MouseEvent): void => {
  e.preventDefault();

  const data = {
    fritekst: begrunnelse || ' ',
    mottaker: '',
    dokumentMal: dokumentMalType.INNSYN,
    gjelderVedtak: true,
  };
  previewCallback(data);
};

// Samme dokument kan ligge på flere behandlinger under samme fagsak.
const getFilteredReceivedDocuments = (allDocuments: Dokument[]): Dokument[] => {
  const filteredDocuments = allDocuments.filter((doc) => doc.kommunikasjonsretning === kommunikasjonsretning.INN);
  allDocuments.forEach((doc) => !filteredDocuments.some((fd) => fd.dokumentId === doc.dokumentId) && filteredDocuments.push(doc));
  return filteredDocuments;
};

const getDocumenterMedFikkInnsynVerdi = (
  alleDokumenter: Dokument[],
  valgteDokumenter: InnsynDokument[],
): DokumentMedInnsynMarkor[] => alleDokumenter
  .filter((dokAlle) => valgteDokumenter.find((dokValgte) => dokValgte.dokumentId === dokAlle.dokumentId))
  .map((dokAlle) => ({
    ...dokAlle,
    fikkInnsyn: valgteDokumenter.find((dokValgte) => dokValgte.dokumentId === dokAlle.dokumentId).fikkInnsyn,
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
}

const buildInitialValues = (
  innsynMottattDato: string,
  aksjonspunkter: Aksjonspunkt[],
): FormValues => ({
  mottattDato: innsynMottattDato,
  begrunnelse: aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.FORESLA_VEDTAK).begrunnelse,
});

const transformValues = (values: FormValues): ForeslaVedtakAp => ({
  kode: aksjonspunktCodes.FORESLA_VEDTAK,
  ...values,
});

interface OwnProps {
  sprakkode: Kodeverk;
  innsynDokumenter: InnsynDokument[];
  innsynMottattDato: string;
  innsynResultatType: Kodeverk;
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

  const initialValues = useMemo(() => buildInitialValues(innsynMottattDato, aksjonspunkter), [innsynMottattDato, aksjonspunkter]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const documents = useMemo(() => getDocumenterMedFikkInnsynVerdi(getFilteredReceivedDocuments(alleDokumenter), innsynDokumenter),
    [alleDokumenter, innsynDokumenter]);

  const apBegrunnelse = aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.VURDER_INNSYN)?.begrunnelse;

  const begrunnelse = formMethods.watch('begrunnelse');

  const previewBrev = getPreviewCallback(begrunnelse, previewCallback);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <Undertittel><FormattedMessage id={readOnly ? 'InnsynVedtakForm.Vedtak' : 'InnsynVedtakForm.ForslagVedtak'} /></Undertittel>
      <VerticalSpacer eightPx />
      <Undertekst><FormattedMessage id="InnsynVedtakForm.Resultat" /></Undertekst>
      <Normaltekst><FormattedMessage id={findResultTypeMessage(innsynResultatType.kode)} /></Normaltekst>
      <VerticalSpacer eightPx />
      <Undertekst><FormattedMessage id="InnsynVedtakForm.Vurdering" /></Undertekst>
      <Normaltekst className={styles.wordwrap}>{decodeHtmlEntity(apBegrunnelse)}</Normaltekst>
      <VerticalSpacer twentyPx />
      {(innsynResultatType.kode !== InnsynResultatType.INNVILGET) && (
        <Row>
          <Column xs="8">
            <TextAreaField
              name="begrunnelse"
              label={intl.formatMessage({ id: 'InnsynVedtakForm.Fritekst' })}
              validate={[minLength3, maxLength1500, hasValidText]}
              maxLength={1500}
              readOnly={readOnly}
              badges={[{
                type: 'fokus',
                text: getLanguageFromSprakkode(sprakkode),
                titleText: intl.formatMessage({ id: 'Malform.Beskrivelse' }),
              }]}
            />
          </Column>
        </Row>
      )}
      <VerticalSpacer twentyPx />
      {innsynResultatType.kode !== InnsynResultatType.AVVIST && (
        <DocumentListVedtakInnsyn saksNr={saksNr} documents={documents.filter((document) => document.fikkInnsyn === true)} />
      )}
      <VerticalSpacer twentyPx />
      <Row>
        {!readOnly && (
          <Column xs="3">
            <ProsessStegSubmitButtonNew
              isReadOnly={readOnly}
              isSubmittable
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
              hasEmptyRequiredFields={false}
            />
          </Column>
        )}
        <Column xs="4">
          <a
            onClick={previewBrev}
            onKeyDown={(e) => (e.key === 'Enter' ? previewBrev(e) : null)}
            className="lenke lenke--frittstaende"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            tabIndex={0}
          >
            <FormattedMessage id={readOnly ? 'InnsynVedtakForm.VisVedtaksbrev' : 'InnsynVedtakForm.ForhåndsvisBrev'} />
          </a>
        </Column>
      </Row>
    </Form>
  );
};

export default InnsynVedtakForm;
