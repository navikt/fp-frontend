import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ErrorMessage, Heading, VStack } from '@navikt/ds-react';
import { RhfDatepicker } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { TrueFalseInput } from '../felles/TrueFalseInput';
import { BehovForTilretteleggingFieldArray } from './components/BehovForTilretteleggingFieldArray';
import { TilretteleggingForArbeidsgiverFieldArray } from './components/TilretteleggingForArbeidsgiverFieldArray';
import {
  BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME,
  FRILANS_FIELD,
  SELVSTENDIG_NARINGSDRIVENDE_FIELD,
  TILRETTELEGGING_NAME_PREFIX,
} from './constants';
import { transformTilretteleggingsArbeidsforhold } from './transformer';
import type { FormValues } from './types';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
}

export const BehovForTilretteleggingPanel = ({ readOnly }: Props) => {
  const { watch, setError, clearErrors, formState, control } = useFormContext<FormValues>();

  const [sokSN, sokFrilans, sokArbeid] = watch([
    `${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`,
    `${TILRETTELEGGING_NAME_PREFIX}.sokForFrilans`,
    `${TILRETTELEGGING_NAME_PREFIX}.sokForArbeidsgiver`,
  ]);

  useEffect(() => {
    const isError = !sokSN && !sokFrilans && !sokArbeid;
    if (isError) {
      setError(`${TILRETTELEGGING_NAME_PREFIX}.notRegisteredInput`, {
        type: 'custom',
        message: intl.formatMessage({ id: 'BehovForTilretteleggingPanel.MinstEnMaaVereJa' }),
      });
    } else {
      clearErrors(`${TILRETTELEGGING_NAME_PREFIX}.notRegisteredInput`);
    }
  }, [sokSN, sokFrilans, sokArbeid, setError, clearErrors]);

  return (
    <RawIntlProvider value={intl}>
      <BorderBox>
        <VStack gap="space-16">
          <Heading size="small" level="3">
            <FormattedMessage id="BehovForTilretteleggingPanel.BehovForTilrettelegging" />
          </Heading>

          {formState.isSubmitted && formState.errors[TILRETTELEGGING_NAME_PREFIX]?.notRegisteredInput?.message && (
            <ErrorMessage>{formState.errors[TILRETTELEGGING_NAME_PREFIX].notRegisteredInput.message}</ErrorMessage>
          )}

          <TrueFalseInput
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`}
            control={control}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende" />}
            readOnly={readOnly}
            trueContent={
              <ArrowBox>
                <VStack gap="space-16">
                  <Heading size="small" level="4">
                    <FormattedMessage id="BehovForTilretteleggingPanel.TittelSN" />
                  </Heading>
                  <RhfDatepicker
                    name={`${TILRETTELEGGING_NAME_PREFIX}.${SELVSTENDIG_NARINGSDRIVENDE_FIELD}.behovsdato`}
                    control={control}
                    label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.TilretteleggingFra' })}
                    validate={[required]}
                    readOnly={readOnly}
                  />
                  <BehovForTilretteleggingFieldArray
                    name={`${TILRETTELEGGING_NAME_PREFIX}.${SELVSTENDIG_NARINGSDRIVENDE_FIELD}.tilrettelegginger`}
                    readOnly={readOnly}
                  />
                </VStack>
              </ArrowBox>
            }
          />

          <TrueFalseInput
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForFrilans`}
            control={control}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForFrilans" />}
            readOnly={readOnly}
            trueContent={
              <ArrowBox>
                <VStack gap="space-16">
                  <Heading size="small" level="4">
                    <FormattedMessage id="BehovForTilretteleggingPanel.TittelFrilans" />
                  </Heading>
                  <RhfDatepicker
                    name={`${TILRETTELEGGING_NAME_PREFIX}.${FRILANS_FIELD}.behovsdato`}
                    control={control}
                    label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.TilretteleggingFra' })}
                    validate={[required]}
                    readOnly={readOnly}
                  />
                  <BehovForTilretteleggingFieldArray
                    name={`${TILRETTELEGGING_NAME_PREFIX}.${FRILANS_FIELD}.${BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME}`}
                    readOnly={readOnly}
                  />
                </VStack>
              </ArrowBox>
            }
          />
          <TrueFalseInput
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForArbeidsgiver`}
            control={control}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForArbeidsgiver" />}
            readOnly={readOnly}
            trueContent={
              <ArrowBox>
                <VStack gap="space-16">
                  <Heading size="small" level="4">
                    <FormattedMessage id="BehovForTilretteleggingPanel.TittelArbeidstaker" />
                  </Heading>
                  <TilretteleggingForArbeidsgiverFieldArray readOnly={readOnly} />
                </VStack>
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
