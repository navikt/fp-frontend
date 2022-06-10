import React, { FunctionComponent, useEffect } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import {
  RadioGroupField, RadioOption, Datepicker, formHooks,
} from '@navikt/ft-form-hooks';
import { BorderBox, ArrowBox } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import { Undertekst } from 'nav-frontend-typografi';
import BehovForTilretteleggingFieldArray, { frilansFieldArrayName, selvstendigNaringsdrivendeFieldArrayName } from './BehovForTilretteleggingFieldArray';
import TilretteleggingForArbeidsgiverFieldArray from './TilretteleggingForArbeidsgiverFieldArray';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const tilretteleggingForArbeidsgiverFieldArrayName = 'tilretteleggingForArbeidsgiver';
const TILRETTELEGGING_NAME_PREFIX = 'tilretteleggingArbeidsforhold';

export type Tilrettelegging = {
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
}

type VirtuellFeilType = {
  notRegisteredInput?: boolean;
}

export type FormValues = {
  [TILRETTELEGGING_NAME_PREFIX]: {
    [tilretteleggingForArbeidsgiverFieldArrayName]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      tilretteleggingArbeidsgiver?: Tilrettelegging[];
    }[];
    sokForArbeidsgiver?: boolean;
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    tilretteleggingFrilans?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    tilretteleggingSelvstendigNaringsdrivende?: Tilrettelegging[];
  } & VirtuellFeilType
};

interface OwnProps {
  readOnly: boolean;
}

interface StaticFunctions {
  buildInitialValues?: () => FormValues;
}

/*
 * BehovForTilretteleggingPanel
 *
 * Form som brukes for registrere om det er behov for tilrettelegging.
 */
const BehovForTilretteleggingPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
}) => {
  const {
    watch, setError, clearErrors, formState,
  } = formHooks.useFormContext<FormValues>();

  const sokForSelvstendigNaringsdrivende = watch(`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`);
  const sokForFrilans = watch(`${TILRETTELEGGING_NAME_PREFIX}.sokForFrilans`);
  const sokForArbeidsgiver = watch(`${TILRETTELEGGING_NAME_PREFIX}.sokForArbeidsgiver`);

  const isError = !sokForSelvstendigNaringsdrivende && !sokForFrilans && !sokForArbeidsgiver && formState.isSubmitted;
  useEffect(() => {
    if (isError) {
      setError(`${TILRETTELEGGING_NAME_PREFIX}.notRegisteredInput`, {
        type: 'custom',
        message: intl.formatMessage({ id: 'BehovForTilretteleggingPanel.MinstEnMaaVereJa' }),
      });
    }
    if (!isError) {
      clearErrors(`${TILRETTELEGGING_NAME_PREFIX}.notRegisteredInput`);
    }
  }, [isError]);

  return (
    <RawIntlProvider value={intl}>
      <BorderBox>
        <SkjemaGruppe
          legend={<FormattedMessage id="BehovForTilretteleggingPanel.BehovForTilrettelegging" />}
          feil={formState.errors[TILRETTELEGGING_NAME_PREFIX]?.notRegisteredInput?.message}
        >
          <RadioGroupField
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`}
            label={<Undertekst><FormattedMessage id="BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende" /></Undertekst>}
            validate={[required]}
            readOnly={readOnly}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption value="true" label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Ja' })} />
            <RadioOption value="false" label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Nei' })} />
          </RadioGroupField>
          {sokForSelvstendigNaringsdrivende && (
            <ArrowBox>
              <Datepicker
                name={`${TILRETTELEGGING_NAME_PREFIX}.behovsdatoSN`}
                label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.TilretteleggingFra' })}
                validate={[required]}
                isReadOnly={readOnly}
              />
              <BehovForTilretteleggingFieldArray
                name={`${TILRETTELEGGING_NAME_PREFIX}.${selvstendigNaringsdrivendeFieldArrayName}`}
                readOnly={readOnly}
              />
            </ArrowBox>
          )}
          <RadioGroupField
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForFrilans`}
            label={<Undertekst><FormattedMessage id="BehovForTilretteleggingPanel.SokForFrilans" /></Undertekst>}
            validate={[required]}
            readOnly={readOnly}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption value="true" label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Ja' })} />
            <RadioOption value="false" label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Nei' })} />
          </RadioGroupField>
          {sokForFrilans && (
            <ArrowBox>
              <Datepicker
                name={`${TILRETTELEGGING_NAME_PREFIX}.behovsdatoFrilans`}
                label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.TilretteleggingFra' })}
                validate={[required]}
                isReadOnly={readOnly}
              />
              <BehovForTilretteleggingFieldArray
                name={`${TILRETTELEGGING_NAME_PREFIX}.${frilansFieldArrayName}`}
                readOnly={readOnly}
              />
            </ArrowBox>
          )}
          <RadioGroupField
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForArbeidsgiver`}
            label={<Undertekst><FormattedMessage id="BehovForTilretteleggingPanel.SokForArbeidsgiver" /></Undertekst>}
            validate={[required]}
            readOnly={readOnly}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption value="true" label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Ja' })} />
            <RadioOption value="false" label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Nei' })} />
          </RadioGroupField>
          {sokForArbeidsgiver && (
            <ArrowBox>
              <TilretteleggingForArbeidsgiverFieldArray readOnly={readOnly} />
            </ArrowBox>
          )}
        </SkjemaGruppe>
      </BorderBox>
    </RawIntlProvider>
  );
};

BehovForTilretteleggingPanel.buildInitialValues = (): FormValues => ({
  [TILRETTELEGGING_NAME_PREFIX]: {
    [tilretteleggingForArbeidsgiverFieldArrayName]: [{}],
  },
});

export default BehovForTilretteleggingPanel;
