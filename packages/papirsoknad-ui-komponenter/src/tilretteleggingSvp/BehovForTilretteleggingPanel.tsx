import React, { FunctionComponent } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import {
  RadioGroupField, RadioOption, Datepicker, formHooks,
} from '@navikt/ft-form-hooks';
import { BorderBox, ArrowBox } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import BehovForTilretteleggingFieldArray from './BehovForTilretteleggingFieldArray';
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
  }
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
  const { watch } = formHooks.useFormContext<FormValues>();

  const sokForSelvstendigNaringsdrivende = watch(`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`);
  const sokForFrilans = watch(`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`);
  const sokForArbeidsgiver = watch(`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`);

  return (
    <RawIntlProvider value={intl}>
      <BorderBox>
        <SkjemaGruppe legend={<FormattedMessage id="BehovForTilretteleggingPanel.BehovForTilrettelegging" />}>
          <RadioGroupField
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForSelvstendigNaringsdrivende`}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende" />}
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
                readOnly={readOnly}
              />
            </ArrowBox>
          )}
          <RadioGroupField
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForFrilans`}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForFrilans" />}
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
                readOnly={readOnly}
              />
            </ArrowBox>
          )}
          <RadioGroupField
            name={`${TILRETTELEGGING_NAME_PREFIX}.sokForArbeidsgiver`}
            label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForArbeidsgiver" />}
            validate={[required]}
            readOnly={readOnly}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption value="true" label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Ja' })} />
            <RadioOption value="false" label={intl.formatMessage({ id: 'BehovForTilretteleggingPanel.Nei' })} />
          </RadioGroupField>
          {sokForArbeidsgiver && (
            <ArrowBox>
              <TilretteleggingForArbeidsgiverFieldArray
                readOnly={readOnly}
              />
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
