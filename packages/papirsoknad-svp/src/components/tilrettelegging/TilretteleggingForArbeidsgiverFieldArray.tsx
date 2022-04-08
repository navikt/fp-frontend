import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { FieldArray, FieldArrayFieldsProps } from 'redux-form';
import { Knapp } from 'nav-frontend-knapper';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import {
  VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, InputField } from '@fpsak-frontend/form';
import { required, hasValidOrgNumberOrFodselsnr, hasNoWhiteSpace } from '@fpsak-frontend/utils';

import BehovForTilrettteleggingFieldArray from './BehovForTilrettteleggingFieldArray';

const behovForTilretteleggingFieldArrayName = 'tilretteleggingArbeidsgiver';

const defaultTilrettelegging = {
  organisasjonsnummer: '',
  behovsdato: '',
};

const leggTilArbeidsgiver = (fields: FieldArrayFieldsProps<any>) => () => {
  fields.push(defaultTilrettelegging);
};

interface OwnProps {
  fields: FieldArrayFieldsProps<{ arbeidsgiverOrgNr: number }>;
  readOnly: boolean;
}

/*
 * TilretteleggingForArbeidsgiverFieldArray
 *
 * Form som brukes for registrere om det er behov for tilrettelegging for arbeidsgiver.
 */
const TilretteleggingForArbeidsgiverFieldArray: FunctionComponent<OwnProps> = ({
  fields,
  readOnly,
}) => (
  <>
    {fields.map((fieldId, index: number) => (
      <div key={fieldId}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <InputField
                readOnly={readOnly}
                name={`${fieldId}.organisasjonsnummer`}
                label={{ id: 'TilretteleggingForArbeidsgiverFieldArray.OrgNr' }}
                bredde="XL"
                validate={[required, hasNoWhiteSpace, hasValidOrgNumberOrFodselsnr]}
                maxLength={99}
              />
            </FlexColumn>
            <FlexColumn>
              <DatepickerField
                name={`${fieldId}.behovsdato`}
                label={{ id: 'TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra' }}
                validate={[required]}
                readOnly={readOnly}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <FieldArray
          name={`${fieldId}.${behovForTilretteleggingFieldArrayName}` as string}
          component={BehovForTilrettteleggingFieldArray}
          readOnly={readOnly}
        />
        {fields.length > index + 1 && (
          <>
            <hr />
            <VerticalSpacer sixteenPx />
          </>
        )}
        {fields.length === index + 1 && (
          <Knapp mini htmlType="button" onClick={leggTilArbeidsgiver(fields)}>
            <FormattedMessage id="TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver" />
          </Knapp>
        )}
      </div>
    ))}
  </>
);

export default TilretteleggingForArbeidsgiverFieldArray;
