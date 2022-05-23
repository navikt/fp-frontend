import React, { FunctionComponent, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { required, maxValue } from '@navikt/ft-form-validators';
import {
  Datepicker, InputField, SelectField, PeriodFieldArray, formHooks,
} from '@navikt/ft-form-hooks';

import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';

import styles from './behovForTilretteleggingFieldArray.less';

const TILRETTELEGGING_NAME_PREFIX = 'tilretteleggingArbeidsforhold';

// TODO const selvstendigNaringsdrivendeFieldArrayName = 'tilretteleggingSelvstendigNaringsdrivende';
const frilansFieldArrayName = 'tilretteleggingFrilans';

const maxValue3 = maxValue(100);

type FormValues = {
  tilretteleggingType: string;
  dato: string;
  stillingsprosent: string;
}

const defaultTilrettelegging = {
  tilretteleggingType: '',
  dato: '',
  stillingsprosent: '',
};

interface OwnProps {
  readOnly: boolean;
}

/**
 * BehovForTilrettteleggingFieldArray
 *
 * Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.
 */
const BehovForTilretteleggingFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [TILRETTELEGGING_NAME_PREFIX]: {[frilansFieldArrayName]: FormValues[] }}>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TILRETTELEGGING_NAME_PREFIX}.${frilansFieldArrayName}`,
  });

  useEffect(() => {
    if (fields.length === 0) {
      fields.push(defaultTilrettelegging);
    }
  }, []);
  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultTilrettelegging}
      bodyText={intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(tilretteleggingFieldId, index, getRemoveButton) => (
        <Row key={tilretteleggingFieldId} className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <Column xs="12">
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    readOnly={readOnly}
                    name={`${tilretteleggingFieldId}.tilretteleggingType`}
                    label={index === 0 ? intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.BehovForTilrettelegging' }) : ''}
                    validate={[required]}
                    selectValues={[
                      <option value={tilretteleggingType.HEL_TILRETTELEGGING} key={tilretteleggingType.HEL_TILRETTELEGGING}>
                        {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanGjennomfores' })}
                      </option>,
                      <option value={tilretteleggingType.DELVIS_TILRETTELEGGING} key={tilretteleggingType.DELVIS_TILRETTELEGGING}>
                        {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.RedusertArbeid' })}
                      </option>,
                      <option value={tilretteleggingType.INGEN_TILRETTELEGGING} key={tilretteleggingType.INGEN_TILRETTELEGGING}>
                        {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores' })}
                      </option>,
                    ]}
                    bredde="xxl"
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    isReadOnly={readOnly}
                    name={`${tilretteleggingFieldId}.dato`}
                    label={index === 0 ? intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.FraDato' }) : ''}
                    validate={[required]}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    readOnly={readOnly}
                    name={`${tilretteleggingFieldId}.stillingsprosent`}
                    label={index === 0 ? intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.Stillingsprosent' }) : ''}
                    bredde="XXL"
                    validate={[required, maxValue3]}
                    maxLength={99}
                  />
                </FlexColumn>
                {getRemoveButton && (
                  <FlexColumn>
                    {getRemoveButton()}
                  </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
          </Column>
        </Row>
      )}
    </PeriodFieldArray>
  );
};

export default BehovForTilretteleggingFieldArray;
