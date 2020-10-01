import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { InjectedFormProps } from 'redux-form';

import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  TextAreaField, behandlingForm, behandlingFormValueSelector, hasBehandlingFormErrorsOfType,
  isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import {
  decodeHtmlEntity, getLanguageCodeFromSprakkode, hasValidText, maxLength, minLength, requiredIfNotPristine,
} from '@fpsak-frontend/utils';
import innsynResultatType from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import {
  Aksjonspunkt, Dokument, InnsynDokument, Kodeverk,
} from '@fpsak-frontend/types';

import DocumentListVedtakInnsyn from './DocumentListVedtakInnsyn';

import styles from './innsynVedtakForm.less';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const getPreviewCallback = (formProps: InjectedFormProps, begrunnelse: string, previewCallback: (data: any) => Promise<any>) => (e: any) => {
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

const findResultTypeMessage = (resultat: string) => {
  if (resultat === innsynResultatType.AVVIST) {
    return 'InnsynVedtakForm.Avslatt';
  }
  if (resultat === innsynResultatType.DELVISTINNVILGET) {
    return 'InnsynVedtakForm.Delvis';
  }
  return 'InnsynVedtakForm.Innvilget';
};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  sprakkode: Kodeverk;
  innsynDokumenter: InnsynDokument[];
  innsynMottattDato: string;
  innsynResultatType: Kodeverk;
  alleDokumenter: Dokument[];
  saksNr: number;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => Promise<any>;
  previewCallback: (data: any) => Promise<any>;
  readOnly: boolean;
}

interface MappedOwnProps {
  apBegrunnelse: string;
  resultat: string;
  begrunnelse?: string;
  documents: ({
    fikkInnsyn: boolean;
  } & Dokument)[];
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
  behandlingId,
  behandlingVersjon,
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
              textId: getLanguageCodeFromSprakkode(sprakkode),
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
            textCode="SubmitButton.ConfirmInformation"
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            formName={formProps.form}
            isReadOnly={readOnly}
            isSubmittable
            isBehandlingFormSubmitting={isBehandlingFormSubmitting}
            isBehandlingFormDirty={isBehandlingFormDirty}
            hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
          />
        </Column>
        )}
        <Column xs="4">
          <a
            onClick={previewBrev}
            onKeyDown={(e) => (e.keyCode === 13 ? previewBrev(e) : null)}
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

const buildInitialValues = (innsynMottattDato: string, aksjonspunkter: Aksjonspunkt[]) => ({
  mottattDato: innsynMottattDato,
  begrunnelse: aksjonspunkter.find((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCodes.FORESLA_VEDTAK).begrunnelse,
});

const transformValues = (values: any) => ({
  kode: aksjonspunktCodes.FORESLA_VEDTAK,
  ...values,
});

// Samme dokument kan ligge på flere behandlinger under samme fagsak.
const getFilteredReceivedDocuments = createSelector([(ownProps: PureOwnProps) => ownProps.alleDokumenter], (allDocuments) => {
  const filteredDocuments = allDocuments.filter((doc: Dokument) => doc.kommunikasjonsretning === kommunikasjonsretning.INN);
  allDocuments.forEach((doc: Dokument) => !filteredDocuments.some((fd: Dokument) => fd.dokumentId === doc.dokumentId) && filteredDocuments.push(doc));
  return filteredDocuments;
});

const getDocumenterMedFikkInnsynVerdi = createSelector(
  [getFilteredReceivedDocuments, (ownProps: PureOwnProps) => ownProps.innsynDokumenter],
  (alleDokumenter, valgteDokumenter) => alleDokumenter
    .filter((dokAlle: Dokument) => valgteDokumenter.find((dokValgte: InnsynDokument) => dokValgte.dokumentId === dokAlle.dokumentId))
    .map((dokAlle: Dokument) => ({
      ...dokAlle,
      fikkInnsyn: valgteDokumenter.find((dokValgte: InnsynDokument) => dokValgte.dokumentId === dokAlle.dokumentId).fikkInnsyn,
    })),
);

const formName = 'InnsynVedtakForm';

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: any) => initialOwnProps.submitCallback([transformValues(values)]);
  return (state: any, ownProps: PureOwnProps) => ({
    documents: getDocumenterMedFikkInnsynVerdi(ownProps),
    initialValues: buildInitialValues(ownProps.innsynMottattDato, ownProps.aksjonspunkter),
    apBegrunnelse: ownProps.aksjonspunkter.find((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCodes.VURDER_INNSYN).begrunnelse,
    begrunnelse: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'begrunnelse'),
    resultat: ownProps.innsynResultatType.kode,
    onSubmit,
  });
};

const InnsynVedtakForm = connect(mapStateToPropsFactory)(injectIntl(behandlingForm({
  form: formName,
})(InnsynVedtakFormImpl)));

export default InnsynVedtakForm;
