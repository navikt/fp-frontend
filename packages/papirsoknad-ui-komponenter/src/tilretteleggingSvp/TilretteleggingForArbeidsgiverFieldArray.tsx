import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Knapp } from 'nav-frontend-knapper';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { Datepicker, formHooks, InputField } from '@navikt/ft-form-hooks';
import { required, hasValidOrgNumberOrFodselsnr, hasNoWhiteSpace } from '@navikt/ft-form-validators';

import BehovForTilretteleggingFieldArray from './BehovForTilretteleggingFieldArray';

const TILRETTELEGGING_NAME_PREFIX = 'tilretteleggingArbeidsforhold';

const tilretteleggingForArbeidsgiverFieldArrayName = 'tilretteleggingForArbeidsgiver';

const behovForTilretteleggingFieldArrayName = 'tilretteleggingArbeidsgiver';

type FormValues = {
  organisasjonsnummer: string;
  behovsdato: string;
}

const defaultTilrettelegging: FormValues = {
  organisasjonsnummer: '',
  behovsdato: '',
};

interface OwnProps {
  readOnly: boolean;
}

/*
 * TilretteleggingForArbeidsgiverFieldArray
 *
 * Form som brukes for registrere om det er behov for tilrettelegging for arbeidsgiver.
 */
const TilretteleggingForArbeidsgiverFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [TILRETTELEGGING_NAME_PREFIX]: {[tilretteleggingForArbeidsgiverFieldArrayName]: FormValues[] }}>();
  const { fields, append } = formHooks.useFieldArray({
    control,
    name: `${TILRETTELEGGING_NAME_PREFIX}.${tilretteleggingForArbeidsgiverFieldArrayName}`,
  });

  const leggTilArbeidsgiver = () => {
    append(defaultTilrettelegging);
  };

  return (
    <>
      {fields.map((fieldId, index: number) => (
        <div key={fieldId}>
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <InputField
                  readOnly={readOnly}
                  name={`${fieldId}.organisasjonsnummer`}
                  label={intl.formatMessage({ id: 'TilretteleggingForArbeidsgiverFieldArray.OrgNr' })}
                  bredde="XL"
                  validate={[required, hasNoWhiteSpace, hasValidOrgNumberOrFodselsnr]}
                  maxLength={99}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  name={`${fieldId}.behovsdato`}
                  label={intl.formatMessage({ id: 'TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                />
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
          <BehovForTilretteleggingFieldArray
            name={`${fieldId}.${behovForTilretteleggingFieldArrayName}` as string}
            readOnly={readOnly}
          />
          {fields.length > index + 1 && (
            <>
              <hr />
              <VerticalSpacer sixteenPx />
            </>
          )}
          {fields.length === index + 1 && (
            <Knapp mini htmlType="button" onClick={leggTilArbeidsgiver()}>
              <FormattedMessage id="TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver" />
            </Knapp>
          )}
        </div>
      ))}
    </>
  );
};

export default TilretteleggingForArbeidsgiverFieldArray;
