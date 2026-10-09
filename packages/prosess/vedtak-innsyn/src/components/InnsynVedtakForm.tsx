import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HStack, Link, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { LabeledValue } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity, formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegSubmitButton } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Dokument, DokumentMalType, InnsynDokument, InnsynResultatType } from '@navikt/fp-types';
import type { ForeslaVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { DocumentListVedtakInnsyn } from './DocumentListVedtakInnsyn';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

export type VedtakInnsynForhandsvisData = {
  fritekst: string;
  mottaker: string;
  dokumentMal: DokumentMalType;
};

type FormValues = {
  mottattDato?: string;
  begrunnelse?: string;
};

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

  const apVurderInnsynBegrunnelse =
    behandling.aksjonspunkt.find(ap => ap.definisjon === AksjonspunktKode.VURDER_INNSYN)?.begrunnelse ?? undefined;

  const begrunnelse = useWatch({ control: formMethods.control, name: 'begrunnelse' });

  const previewBrev = getPreviewCallback(previewCallback, begrunnelse);

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={values => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-16">
        <Heading size="small" level="2">
          <FormattedMessage id="InnsynVedtakForm.Tittel" />
        </Heading>

        <LabeledValue
          size="small"
          label={<FormattedMessage id="InnsynVedtakForm.Resultat" />}
          value={<FormattedMessage id={findResultTypeMessage(innsynResultatType)} />}
        />

        <LabeledValue
          size="small"
          label={<FormattedMessage id="InnsynVedtakForm.Vurdering" />}
          value={<span className="whitespace-pre-wrap">{decodeHtmlEntity(apVurderInnsynBegrunnelse)}</span>}
        />

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
            alleDokumenter={alleDokumenter}
            innsynDokumenter={innsynDokumenter}
          />
        )}
        <HStack gap="space-16">
          <ProsessStegSubmitButton
            isReadOnly={isReadOnly}
            isSubmittable
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
            hasEmptyRequiredFields={false}
          />
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

const buildInitialValues = (innsynMottattDato: string, aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  mottattDato: innsynMottattDato,
  begrunnelse: aksjonspunkter.find(ap => ap.definisjon === AksjonspunktKode.FORESLÅ_VEDTAK)?.begrunnelse ?? undefined,
});

const transformValues = (values: FormValues): ForeslaVedtakAp => ({
  kode: AksjonspunktKode.FORESLÅ_VEDTAK,
  ...values,
  begrunnelse: values.begrunnelse === '' ? undefined : values.begrunnelse,
});

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

const findResultTypeMessage = (resultat: InnsynResultatType): string => {
  if (resultat === 'AVVIST') {
    return 'InnsynVedtakForm.Avslatt';
  }
  if (resultat === 'DELV') {
    return 'InnsynVedtakForm.Delvis';
  }
  return 'InnsynVedtakForm.Innvilget';
};
