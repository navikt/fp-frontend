import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, HStack, Link, VStack } from '@navikt/ds-react';
import { Form,SelectField, TextAreaField } from '@navikt/ft-form-hooks';
import { ariaCheck, hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import { DokumentMalType, FagsakYtelseType,UgunstAarsakType } from '@navikt/fp-kodeverk';
import { UkjentAdresseMeldingIndex } from '@navikt/fp-sak-ukjent-adresse';
import { KodeverkMedNavn } from '@navikt/fp-types';

import styles from './messages.module.css';

const maxLength4000 = maxLength(4000);
const maxLength10000 = maxLength(10000);
const minLength3 = minLength(3);

export type FormValues = {
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
};

export type Template = {
  kode: string;
  navn: string;
  tilgjengelig: boolean;
};

const getFritekstMessage = (brevmalkode?: string): string =>
  brevmalkode === DokumentMalType.INNHENTE_OPPLYSNINGER || brevmalkode === DokumentMalType.TBK_INNHENTE_OPPLYSNINGER
    ? 'Messages.DocumentList'
    : 'Messages.Fritekst';

// TODO (TOR) Bør erstattast av ein markør fra backend
const showFritekst = (brevmalkode?: string, arsakskode?: string): boolean =>
  brevmalkode === DokumentMalType.INNHENTE_OPPLYSNINGER ||
  brevmalkode === DokumentMalType.FRITEKST ||
  brevmalkode === DokumentMalType.KORRIGERT_VARSEL_OM_TILBAKEKREVING ||
  brevmalkode === DokumentMalType.VARSEL_OM_TILBAKEKREVING ||
  brevmalkode === DokumentMalType.TBK_INNHENTE_OPPLYSNINGER ||
  (brevmalkode === DokumentMalType.VARSEL_OM_REVURDERING && arsakskode === UgunstAarsakType.ANNET);

const getfiltrerteRevurderingVarslingArsaker = (
  revurderingVarslingArsaker: KodeverkMedNavn[],
  fagsakYtelseType: string,
): KodeverkMedNavn[] => {
  if (fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD) {
    return revurderingVarslingArsaker.filter(
      arsak =>
        arsak.kode === UgunstAarsakType.BARN_IKKE_REGISTRERT_FOLKEREGISTER || arsak.kode === UgunstAarsakType.ANNET,
    );
  }
  if (fagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER) {
    return revurderingVarslingArsaker.filter(
      arsak =>
        arsak.kode !== UgunstAarsakType.BARN_IKKE_REGISTRERT_FOLKEREGISTER &&
        arsak.kode !== UgunstAarsakType.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT,
    );
  }
  return revurderingVarslingArsaker;
};

const buildInitalValues = (templates?: Template[], isKontrollerRevurderingApOpen?: boolean): FormValues => {
  const initialValues = {
    brevmalkode: templates?.[0]?.kode ?? undefined,
    fritekst: '',
  };

  if (isKontrollerRevurderingApOpen) {
    return { ...initialValues, brevmalkode: DokumentMalType.VARSEL_OM_REVURDERING };
  }
  return { ...initialValues };
};

const transformValues = (values: FormValues) => {
  const newValues = values;
  if (values.brevmalkode === DokumentMalType.VARSEL_OM_REVURDERING && newValues.arsakskode !== UgunstAarsakType.ANNET) {
    newValues.fritekst = ' ';
  }
  return newValues;
};

interface Props {
  submitCallback: (values: FormValues) => void;
  previewCallback: (brevmalkode?: string, fritekst?: string, arsakskode?: string) => void;
  // TODO (TOR) Er templates optional eller ikkje?
  templates: Template[];
  sprakKode?: string;
  revurderingVarslingArsak: KodeverkMedNavn[];
  isKontrollerRevurderingApOpen?: boolean;
  fagsakYtelseType: string;
  kanVeilede: boolean;
  meldingFormData?: any;
  setMeldingFormData: (data?: any) => void;
  brukerManglerAdresse: boolean;
}

/**
 * Messages
 *
 * Presentasjonskomponent. Gir mulighet for å forhåndsvise og sende brev. Mottaker og brevtype velges fra predefinerte lister,
 * og fritekst som skal flettes inn i brevet skrives inn i et eget felt.
 */
export const Messages = ({
  templates,
  previewCallback,
  submitCallback,
  sprakKode,
  revurderingVarslingArsak,
  fagsakYtelseType,
  kanVeilede,
  meldingFormData,
  setMeldingFormData,
  isKontrollerRevurderingApOpen,
  brukerManglerAdresse,
}: Props) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues: meldingFormData || buildInitalValues(templates, isKontrollerRevurderingApOpen),
  });

  const brevmalkode = formMethods.watch('brevmalkode');
  const fritekst = formMethods.watch('fritekst');
  const arsakskode = formMethods.watch('arsakskode');

  const filtrerteRevurderingVarslingArsaker = useMemo(
    () => getfiltrerteRevurderingVarslingArsaker(revurderingVarslingArsak, fagsakYtelseType),
    [],
  );

  if (!sprakKode) {
    return null;
  }

  const { formState } = formMethods;

  const previewMessage = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (brevmalkode) {
      previewCallback(brevmalkode, fritekst, arsakskode);
    }
    e.preventDefault();
  };

  const language = getLanguageFromSprakkode(sprakKode);

  const erVarselOmRevurdering = brevmalkode === DokumentMalType.VARSEL_OM_REVURDERING;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMeldingFormData}
    >
      <VStack gap="4">
        <SelectField
          name="brevmalkode"
          label={intl.formatMessage({ id: 'Messages.Template' })}
          validate={[required]}
          selectValues={templates.map(template => (
            <option key={template.kode} value={template.kode} disabled={!template.tilgjengelig}>
              {template.navn}
            </option>
          ))}
          className={styles.bredde}
        />
        {erVarselOmRevurdering && (
          <SelectField
            name="arsakskode"
            label={intl.formatMessage({ id: 'Messages.Årsak' })}
            validate={[required]}
            selectValues={filtrerteRevurderingVarslingArsaker.map(cause => (
              <option key={cause.kode} value={cause.kode}>
                {cause.navn}
              </option>
            ))}
            className={styles.bredde}
          />
        )}
        {showFritekst(brevmalkode, arsakskode) && (
          <TextAreaField
            name="fritekst"
            label={intl.formatMessage({ id: getFritekstMessage(brevmalkode) })}
            validate={[required, erVarselOmRevurdering ? maxLength10000 : maxLength4000, minLength3, hasValidText]}
            maxLength={erVarselOmRevurdering ? 10000 : 4000}
            badges={[{ type: 'info', titleText: language }]}
            parse={formaterFritekst}
          />
        )}
        {brukerManglerAdresse && <UkjentAdresseMeldingIndex />}
        <HStack justify="space-between">
          <Link href="#" onClick={previewMessage} onKeyDown={e => (e.key === 'Enter' ? previewMessage(e) : null)}>
            <FormattedMessage id="Messages.Preview" />
          </Link>
          <Button
            size="small"
            variant="primary"
            loading={formState.isSubmitting}
            disabled={formState.isSubmitting || kanVeilede}
            onClick={ariaCheck}
          >
            <FormattedMessage id="Messages.Submit" />
          </Button>
        </HStack>
      </VStack>
    </Form>
  );
};
