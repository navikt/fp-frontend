import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, HStack, Link, VStack } from '@navikt/ds-react';
import { RhfForm, RhfSelect, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import { UkjentAdresseMeldingIndex } from '@navikt/fp-sak-ukjent-adresse';
import type {
  DokumentMalType,
  DokumentMalTypeFpTilbake,
  FagsakBehandlingDto,
  KodeverkMedNavn,
  RevurderingVarslingÅrsak,
} from '@navikt/fp-types';

import styles from './messages.module.css';

const maxLength4000 = maxLength(4000);
const maxLength10000 = maxLength(10000);
const minLength3 = minLength(3);

export type FormValues = {
  brevmalkode?: DokumentMalType | DokumentMalTypeFpTilbake;
  fritekst?: string;
  årsakskode?: RevurderingVarslingÅrsak;
};

export type ForhåndsvisBrevParams = {
  brevmalkode: DokumentMalType | DokumentMalTypeFpTilbake;
  fritekst?: string;
  årsakskode?: RevurderingVarslingÅrsak;
};

interface Props {
  behandling: FagsakBehandlingDto;
  submitCallback: (values: FormValues) => void;
  forhåndsvisBrev: (params: ForhåndsvisBrevParams) => void;
  revurderingVarslingArsak: KodeverkMedNavn<'RevurderingVarslingÅrsak'>[];
  fagsakYtelseType: string;
  kanVeilede: boolean;
  meldingFormData?: FormValues;
  setMeldingFormData: (data?: FormValues) => void;
  brukerManglerAdresse: boolean;
}

/**
 * Messages
 *
 * Gir mulighet for å forhåndsvise og sende brev. Mottaker og brevtype velges fra predefinerte lister,
 * og fritekst som skal flettes inn i brevet skrives inn i et eget felt.
 */
export const Messages = ({
  behandling,
  forhåndsvisBrev,
  submitCallback,
  revurderingVarslingArsak,
  fagsakYtelseType,
  kanVeilede,
  meldingFormData,
  setMeldingFormData,
  brukerManglerAdresse,
}: Props) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: meldingFormData ?? buildInitialValues(behandling),
  });

  const brevmalkode = formMethods.watch('brevmalkode');
  const fritekst = formMethods.watch('fritekst');
  const årsakskode = formMethods.watch('årsakskode');

  const filtrerteRevurderingVarslingArsaker = getfiltrerteRevurderingVarslingArsaker(
    revurderingVarslingArsak,
    fagsakYtelseType,
  );

  const { formState, control } = formMethods;

  const forhåndsvis = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (brevmalkode) {
      forhåndsvisBrev({ brevmalkode, fritekst, årsakskode: årsakskode });
    }
    e.preventDefault();
  };

  const language = getLanguageFromSprakkode(behandling.språkkode);

  const erVarselOmRevurdering = brevmalkode === 'VARREV';

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMeldingFormData}
    >
      <VStack gap="space-16">
        <RhfSelect
          name="brevmalkode"
          control={control}
          label={intl.formatMessage({ id: 'Messages.Template' })}
          validate={[required]}
          selectValues={behandling.brevmaler.map(mal => (
            <option key={mal.kode} value={mal.kode} disabled={!mal.tilgjengelig}>
              {mal.navn}
            </option>
          ))}
          className={styles['bredde']}
        />
        {erVarselOmRevurdering && (
          <RhfSelect
            name="årsakskode"
            control={control}
            label={intl.formatMessage({ id: 'Messages.Årsak' })}
            validate={[required]}
            selectValues={filtrerteRevurderingVarslingArsaker.map(cause => (
              <option key={cause.kode} value={cause.kode}>
                {cause.navn}
              </option>
            ))}
            className={styles['bredde']}
          />
        )}
        {showFritekst(brevmalkode, årsakskode) && (
          <RhfTextarea
            name="fritekst"
            control={control}
            label={intl.formatMessage({ id: getFritekstMessage(brevmalkode) })}
            validate={[required, erVarselOmRevurdering ? maxLength10000 : maxLength4000, minLength3, hasValidText]}
            maxLength={erVarselOmRevurdering ? 10000 : 4000}
            badges={[{ type: 'info', titleText: language }]}
            parse={formaterFritekst}
          />
        )}
        {brukerManglerAdresse && <UkjentAdresseMeldingIndex />}
        <HStack justify="space-between">
          {(!erVarselOmRevurdering || årsakskode !== undefined) && (
            <Link href="#" onClick={forhåndsvis} onKeyDown={e => (e.key === 'Enter' ? forhåndsvis(e) : null)}>
              <FormattedMessage id="Messages.Preview" />
            </Link>
          )}
          <Button
            size="small"
            variant="primary"
            loading={formState.isSubmitting}
            disabled={formState.isSubmitting || kanVeilede}
          >
            <FormattedMessage id="Messages.Submit" />
          </Button>
        </HStack>
      </VStack>
    </RhfForm>
  );
};

const getFritekstMessage = (brevmalkode?: DokumentMalType | DokumentMalTypeFpTilbake): string =>
  brevmalkode === 'INNOPP' || brevmalkode === 'INNHEN' ? 'Messages.DocumentList' : 'Messages.Fritekst';

// TODO (TOR) Bør erstattast av ein markør fra backend
const showFritekst = (
  brevmalkode?: DokumentMalType | DokumentMalTypeFpTilbake,
  årsakskode?: RevurderingVarslingÅrsak,
): boolean =>
  brevmalkode === 'INNOPP' ||
  brevmalkode === 'KORRIGVARS' ||
  brevmalkode === 'VARS' ||
  brevmalkode === 'INNHEN' ||
  (brevmalkode === 'VARREV' && årsakskode === 'ANNET');

const getfiltrerteRevurderingVarslingArsaker = (
  revurderingVarslingArsaker: KodeverkMedNavn<'RevurderingVarslingÅrsak'>[],
  fagsakYtelseType: string,
): KodeverkMedNavn<'RevurderingVarslingÅrsak'>[] => {
  if (fagsakYtelseType === 'ES') {
    return revurderingVarslingArsaker.filter(arsak => arsak.kode === 'BARNIKKEREG' || arsak.kode === 'ANNET');
  }
  if (fagsakYtelseType === 'SVP') {
    return revurderingVarslingArsaker.filter(arsak => arsak.kode !== 'BARNIKKEREG' && arsak.kode !== 'AKTIVITET');
  }
  return revurderingVarslingArsaker;
};

const buildInitialValues = (behandling: FagsakBehandlingDto): FormValues => {
  const initialValues = {
    brevmalkode: (behandling.brevmaler[0]?.kode as DokumentMalType | DokumentMalTypeFpTilbake | undefined) ?? undefined,
    fritekst: '',
  };

  if ('ugunstAksjonspunkt' in behandling && behandling.ugunstAksjonspunkt) {
    return { ...initialValues, brevmalkode: 'VARREV' satisfies DokumentMalType };
  }

  return { ...initialValues };
};

const transformValues = (values: FormValues) => {
  const newValues = values;
  if (values.brevmalkode === 'VARREV' && newValues.årsakskode !== 'ANNET') {
    newValues.fritekst = ' ';
  }
  return newValues;
};
