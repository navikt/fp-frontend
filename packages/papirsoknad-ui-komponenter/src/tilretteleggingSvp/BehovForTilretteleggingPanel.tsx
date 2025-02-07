import { useEffect } from 'react';
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
  SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME,
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
  const { watch, setError, clearErrors, formState } = useFormContext<FormValues>();

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
  }, [sokSN, sokFrilans, sokArbeid]);

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
                <VStack gap="4">
                  <Heading size="small">
                    <FormattedMessage id="BehovForTilretteleggingPanel.TittelSN" />
                  </Heading>
                  <Datepicker
                    name={`${TILRETTELEGGING_NAME_PREFIX}.behovsdatoSN`}
                    label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.TilretteleggingFra' })}
                    validate={[required]}
                    isReadOnly={readOnly}
                  />
                  <BehovForTilretteleggingFieldArray
                    name={`${TILRETTELEGGING_NAME_PREFIX}.${SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME}`}
                    readOnly={readOnly}
                  />
                </VStack>
              </ArrowBox>
            }
          />

          <TrueFalseInput
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForFrilans`}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForFrilans" />}
            readOnly={readOnly}
            trueContent={
              <ArrowBox marginTop={4}>
                <VStack gap="4">
                  <Heading size="small">
                    <FormattedMessage id="BehovForTilretteleggingPanel.TittelFrilans" />
                  </Heading>
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
                </VStack>
              </ArrowBox>
            }
          />
          <TrueFalseInput
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForArbeidsgiver`}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForArbeidsgiver" />}
            readOnly={readOnly}
            trueContent={
              <ArrowBox marginTop={4}>
                <VStack gap="4">
                  <Heading size="small">
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
