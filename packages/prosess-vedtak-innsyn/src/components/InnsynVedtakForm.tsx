import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';

import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { TextAreaField } from '@fpsak-frontend/form';
import {
  decodeHtmlEntity, getLanguageFromSprakkode, hasValidText, maxLength, minLength, requiredIfNotPristine,
} from '@fpsak-frontend/utils';
import innsynResultatType from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import {
  Aksjonspunkt, Dokument, InnsynDokument, Kodeverk,
} from '@fpsak-frontend/types';
import { ForeslaVedtakAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

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
  formProps: InjectedFormProps,
  begrunnelse: string,
  previewCallback: (data: ForhandsvisData) => Promise<any>,
) => (e: React.KeyboardEvent | React.MouseEvent): void => {
  if (formProps.valid || formProps.pristine) {
    const data = {
      fritekst: begrunnelse || ' ',
      mottaker: '',
      dokumentMal: 'INSSKR',
      gjelderVedtak: true,
    };
    previewCallback(data);
  } else {
    // @ts-ignore
    formProps.submit();
  }
  e.preventDefault();
};

const findResultTypeMessage = (resultat: string): string => {
  if (resultat === innsynResultatType.AVVIST) {
    return 'InnsynVedtakForm.Avslatt';
  }
  if (resultat === innsynResultatType.DELVISTINNVILGET) {
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

interface PureOwnProps {
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
}

interface MappedOwnProps {
  apBegrunnelse: string;
  resultat: string;
  begrunnelse?: string;
  documents: DokumentMedInnsynMarkor[];
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * InnsynVedtakForm
 *
 * Presentasjonskomponent. Viser panelet som håndterer vedtaksforslag av innsyn.
 */
export const InnsynVedtakFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  readOnly,
  previewCallback,
  saksNr,
  documents,
  sprakkode,
  apBegrunnelse,
  begrunnelse,
  resultat,
  ...formProps
}) => {
  const previewBrev = getPreviewCallback(formProps, begrunnelse, previewCallback);
  return (
    <form onSubmit={formProps.handleSubmit}>
      <Undertittel><FormattedMessage id={readOnly ? 'InnsynVedtakForm.Vedtak' : 'InnsynVedtakForm.ForslagVedtak'} /></Undertittel>
      <VerticalSpacer eightPx />
      <Undertekst><FormattedMessage id="InnsynVedtakForm.Resultat" /></Undertekst>
      <Normaltekst>
        <FormattedMessage id={findResultTypeMessage(resultat)} />
      </Normaltekst>
      <VerticalSpacer eightPx />
      <Undertekst><FormattedMessage id="InnsynVedtakForm.Vurdering" /></Undertekst>
      <Normaltekst className={styles.wordwrap}>{decodeHtmlEntity(apBegrunnelse)}</Normaltekst>
      <VerticalSpacer twentyPx />
      {(resultat !== innsynResultatType.INNVILGET) && (
      <Row>
        <Column xs="8">
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'InnsynVedtakForm.Fritekst' })}
            validate={[requiredIfNotPristine, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
            badges={[{
              type: 'fokus',
              text: getLanguageFromSprakkode(sprakkode),
              title: 'Malform.Beskrivelse',
            }]}
          />
        </Column>
      </Row>
      )}
      <VerticalSpacer twentyPx />
      {resultat !== innsynResultatType.AVVIST && (
      <DocumentListVedtakInnsyn saksNr={saksNr} documents={documents.filter((document) => document.fikkInnsyn === true)} />
      )}
      <VerticalSpacer twentyPx />
      <Row>
        {!readOnly && (
        <Column xs="3">
          <ProsessStegSubmitButton
            formName={formProps.form}
            isReadOnly={readOnly}
            isSubmittable
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
    </form>
  );
};

const buildInitialValues = (innsynMottattDato: string, aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  mottattDato: innsynMottattDato,
  begrunnelse: aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.FORESLA_VEDTAK).begrunnelse,
});

const transformValues = (values: FormValues): ForeslaVedtakAp => ({
  kode: aksjonspunktCodes.FORESLA_VEDTAK,
  ...values,
});

// Samme dokument kan ligge på flere behandlinger under samme fagsak.
const getFilteredReceivedDocuments = createSelector([(ownProps: PureOwnProps) => ownProps.alleDokumenter], (allDocuments): Dokument[] => {
  const filteredDocuments = allDocuments.filter((doc) => doc.kommunikasjonsretning === kommunikasjonsretning.INN);
  allDocuments.forEach((doc) => !filteredDocuments.some((fd) => fd.dokumentId === doc.dokumentId) && filteredDocuments.push(doc));
  return filteredDocuments;
});

const getDocumenterMedFikkInnsynVerdi = createSelector(
  [getFilteredReceivedDocuments, (ownProps: PureOwnProps) => ownProps.innsynDokumenter],
  (alleDokumenter, valgteDokumenter): DokumentMedInnsynMarkor[] => alleDokumenter
    .filter((dokAlle) => valgteDokumenter.find((dokValgte) => dokValgte.dokumentId === dokAlle.dokumentId))
    .map((dokAlle) => ({
      ...dokAlle,
      fikkInnsyn: valgteDokumenter.find((dokValgte) => dokValgte.dokumentId === dokAlle.dokumentId).fikkInnsyn,
    })),
);

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const formName = 'InnsynVedtakForm';

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  documents: getDocumenterMedFikkInnsynVerdi(ownProps),
  initialValues: buildInitialValues(ownProps.innsynMottattDato, ownProps.aksjonspunkter),
  apBegrunnelse: ownProps.aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.VURDER_INNSYN).begrunnelse,
  begrunnelse: formValueSelector(formName)(state, 'begrunnelse'),
  resultat: ownProps.innsynResultatType.kode,
  onSubmit: lagSubmitFn(ownProps),
});

const InnsynVedtakForm = connect(mapStateToProps)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(injectIntl(InnsynVedtakFormImpl)));

export default InnsynVedtakForm;
