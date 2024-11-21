import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ErrorMessage, Heading, VStack } from '@navikt/ds-react';
import { Datepicker } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { TrueFalseInput } from '../felles/TrueFalseInput';
import { BehovForTilretteleggingFieldArray } from './components/BehovForTilretteleggingFieldArray';
import { TilretteleggingForArbeidsgiverFieldArray } from './components/TilretteleggingForArbeidsgiverFieldArray';
import {
  FRILANS_FIELD_ARRAY_NAME,
  SELVSTENDIG_NARINGS_DRIVENDE_FIELD_ARRAY_NAME,
  TILRETTELEGGING_NAME_PREFIX,
} from './constants';
import { transformTilretteleggingsArbeidsforhold } from './transformer';
import { FormValues } from './types';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
}

/*
 * BehovForTilretteleggingPanel
 *
 * Form som brukes for registrere om det er behov for tilrettelegging.
 */
export const BehovForTilretteleggingPanel = ({ readOnly }: Props) => {
  const { watch, setError, clearErrors, formState } = useFormContext<FormValues>();

  const { sokForSelvstendigNaringsdrivende, sokForFrilans, sokForArbeidsgiver } = watch(TILRETTELEGGING_NAME_PREFIX);

  useEffect(() => {
    const isError = !sokForSelvstendigNaringsdrivende && !sokForFrilans && !sokForArbeidsgiver;
    if (isError) {
      setError(`${TILRETTELEGGING_NAME_PREFIX}.notRegisteredInput`, {
        type: 'custom',
        message: intl.formatMessage({ id: 'BehovForTilretteleggingPanel.MinstEnMaaVereJa' }),
      });
    } else {
      clearErrors(`${TILRETTELEGGING_NAME_PREFIX}.notRegisteredInput`);
    }
  }, [sokForArbeidsgiver, sokForFrilans, sokForArbeidsgiver]);

  return (
    <RawIntlProvider value={intl}>
      <BorderBox>
        <VStack gap="4">
          <Heading size="small">
            <FormattedMessage id="BehovForTilretteleggingPanel.BehovForTilrettelegging" />
          </Heading>

          {formState.isSubmitted && formState.errors[TILRETTELEGGING_NAME_PREFIX]?.notRegisteredInput?.message && (
            <ErrorMessage>{formState.errors[TILRETTELEGGING_NAME_PREFIX]?.notRegisteredInput?.message}</ErrorMessage>
          )}

          <TrueFalseInput
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende" />}
            readOnly={readOnly}
            trueContent={
              <ArrowBox marginTop={4}>
                <Datepicker
                  name={`${TILRETTELEGGING_NAME_PREFIX}.behovsdatoSN`}
                  label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.TilretteleggingFra' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                />
                <BehovForTilretteleggingFieldArray
                  name={`${TILRETTELEGGING_NAME_PREFIX}.${SELVSTENDIG_NARINGS_DRIVENDE_FIELD_ARRAY_NAME}`}
                  readOnly={readOnly}
                />
              </ArrowBox>
            }
          />

          <TrueFalseInput
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForFrilans`}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForFrilans" />}
            readOnly={readOnly}
            trueContent={
              <ArrowBox marginTop={4}>
                <Datepicker
                  name={`${TILRETTELEGGING_NAME_PREFIX}.behovsdatoFrilans`}
                  label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.TilretteleggingFra' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                />
                <BehovForTilretteleggingFieldArray
                  name={`${TILRETTELEGGING_NAME_PREFIX}.${FRILANS_FIELD_ARRAY_NAME}`}
                  readOnly={readOnly}
                />
              </ArrowBox>
            }
          />
          <TrueFalseInput
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForArbeidsgiver`}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForArbeidsgiver" />}
            readOnly={readOnly}
            trueContent={
              <ArrowBox marginTop={4}>
                <TilretteleggingForArbeidsgiverFieldArray readOnly={readOnly} />
              </ArrowBox>
            }
          />
        </VStack>
      </BorderBox>
    </RawIntlProvider>
  );
};

BehovForTilretteleggingPanel.initialValues = (): FormValues => ({
  [TILRETTELEGGING_NAME_PREFIX]: {},
});

BehovForTilretteleggingPanel.transformValues = ({ tilretteleggingArbeidsforhold }: FormValues) => ({
  [TILRETTELEGGING_NAME_PREFIX]: transformTilretteleggingsArbeidsforhold(tilretteleggingArbeidsforhold),
});
