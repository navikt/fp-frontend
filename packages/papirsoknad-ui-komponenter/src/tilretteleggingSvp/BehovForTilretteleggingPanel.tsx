import React, { FunctionComponent, useEffect } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { ErrorMessage, Heading } from '@navikt/ds-react';
import { RadioGroupPanel, Datepicker } from '@navikt/ft-form-hooks';
import { BorderBox, ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import { useFormContext } from 'react-hook-form';
import BehovForTilretteleggingFieldArray, {
  frilansFieldArrayName,
  selvstendigNaringsdrivendeFieldArrayName,
} from './BehovForTilretteleggingFieldArray';
import TilretteleggingForArbeidsgiverFieldArray from './TilretteleggingForArbeidsgiverFieldArray';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const tilretteleggingForArbeidsgiverFieldArrayName = 'tilretteleggingForArbeidsgiver';
const TILRETTELEGGING_NAME_PREFIX = 'tilretteleggingArbeidsforhold';

export type Tilrettelegging = {
  tilretteleggingType: string;
  fomDato: string;
  stillingsprosent?: string;
};

type VirtuellFeilType = {
  notRegisteredInput?: boolean;
};

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
  } & VirtuellFeilType;
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
const BehovForTilretteleggingPanel: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => {
  const { watch, setError, clearErrors, formState } = useFormContext<FormValues>();

  const sokForSelvstendigNaringsdrivende = watch(`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`);
  const sokForFrilans = watch(`${TILRETTELEGGING_NAME_PREFIX}.sokForFrilans`);
  const sokForArbeidsgiver = watch(`${TILRETTELEGGING_NAME_PREFIX}.sokForArbeidsgiver`);

  const isError = !sokForSelvstendigNaringsdrivende && !sokForFrilans && !sokForArbeidsgiver;
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
        <Heading size="small">
          <FormattedMessage id="BehovForTilretteleggingPanel.BehovForTilrettelegging" />
        </Heading>
        <VerticalSpacer sixteenPx />
        {formState.isSubmitted && formState.errors[TILRETTELEGGING_NAME_PREFIX]?.notRegisteredInput?.message && (
          <ErrorMessage>{formState.errors[TILRETTELEGGING_NAME_PREFIX]?.notRegisteredInput?.message}</ErrorMessage>
        )}
        <RadioGroupPanel
          name={`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`}
          label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende" />}
          validate={[required]}
          isReadOnly={readOnly}
          isTrueOrFalseSelection
          isHorizontal
          radios={[
            {
              label: intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Ja' }),
              value: 'true',
            },
            {
              label: intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Nei' }),
              value: 'false',
            },
          ]}
        />
        <VerticalSpacer sixteenPx />
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
        <RadioGroupPanel
          name={`${TILRETTELEGGING_NAME_PREFIX}.sokForFrilans`}
          label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForFrilans" />}
          validate={[required]}
          isReadOnly={readOnly}
          isTrueOrFalseSelection
          isHorizontal
          radios={[
            {
              label: intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Ja' }),
              value: 'true',
            },
            {
              label: intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Nei' }),
              value: 'false',
            },
          ]}
        />
        <VerticalSpacer sixteenPx />
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
        <RadioGroupPanel
          name={`${TILRETTELEGGING_NAME_PREFIX}.sokForArbeidsgiver`}
          label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForArbeidsgiver" />}
          validate={[required]}
          isReadOnly={readOnly}
          isTrueOrFalseSelection
          isHorizontal
          radios={[
            {
              label: intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Ja' }),
              value: 'true',
            },
            {
              label: intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Nei' }),
              value: 'false',
            },
          ]}
        />
        <VerticalSpacer sixteenPx />
        {sokForArbeidsgiver && (
          <ArrowBox>
            <TilretteleggingForArbeidsgiverFieldArray readOnly={readOnly} />
          </ArrowBox>
        )}
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
