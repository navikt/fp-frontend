import React, { FunctionComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Column, Row } from 'nav-frontend-grid';
import { injectIntl, FormattedMessage, WrappedComponentProps } from 'react-intl';
import { FieldArrayFieldsProps, FieldArrayMetaProps, formValueSelector } from 'redux-form';
import AlertStripe from 'nav-frontend-alertstriper';
import { Element } from 'nav-frontend-typografi';

import { DatepickerField, SelectField, DecimalField } from '@fpsak-frontend/form';
import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  hasValidDecimal, maxValue, minValue, required, hasValidDate,
} from '@fpsak-frontend/utils';
import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';
import { Kodeverk, Permisjon } from '@fpsak-frontend/types';

import TilretteleggingUtbetalingsgrad, { OVERSTYRT_UTBETALINGSGRAD_FIELDNAME } from './TilretteleggingUtbetalingsgrad';
import { finnSkalTaHensynTilPermisjon, finnPermisjonFieldName } from './VelferdspermisjonSection';

import styles from './tilretteleggingFieldArray.less';

const maxValue100 = maxValue(100);
const minValue0 = minValue(0);

export const finnUtbetalingsgradForTilrettelegging = (
  stillingsprosentArbeidsforhold: number,
  velferdspermisjonprosent: number,
  stillingsprosent?: number,
): string => {
  const effektivStillingsprosent = stillingsprosentArbeidsforhold - velferdspermisjonprosent;
  const defaultUtbetalingsgrad = effektivStillingsprosent <= 0 ? 0 : 100 * (1 - (stillingsprosent / effektivStillingsprosent));
  return defaultUtbetalingsgrad > 0 ? defaultUtbetalingsgrad.toFixed(2) : '0';
};

interface TilretteleggingDato {
  type: Kodeverk;
  stillingsprosent: number;
}

interface PureOwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta?: FieldArrayMetaProps;
  readOnly: boolean;
  formSectionName: string;
  erOverstyrer: boolean;
  changeField: (field: string, value: string) => void;
  stillingsprosentArbeidsforhold: number;
  setOverstyrtUtbetalingsgrad: (erOverstyrt: boolean) => void;
  formName: string;
  velferdspermisjoner: Permisjon[];
}

interface MappedOwnProps {
  tilretteleggingDatoer: TilretteleggingDato[];
  velferdspermisjonprosent: number;
}

/**
 * BehovForTilrettteleggingFieldArray
 *
 * Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.
 */
export const TilretteleggingFieldArray: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps> = ({
  intl,
  fields,
  meta,
  readOnly,
  formSectionName,
  erOverstyrer,
  changeField,
  tilretteleggingDatoer,
  stillingsprosentArbeidsforhold,
  setOverstyrtUtbetalingsgrad,
  velferdspermisjonprosent,
  formName,
}) => (
  <PeriodFieldArray
    fields={fields}
    meta={meta}
    bodyText={intl.formatMessage({ id: 'TilretteleggingFieldArray.LeggTilTilretteleggingsbehov' })}
    readOnly={readOnly}
  >
    {(fieldId: string, index, getRemoveButton: () => ReactNode) => {
      const data = tilretteleggingDatoer[index];
      const tilretteleggingKode = data && data.type ? data.type.kode : undefined;
      return (
        <Row key={fieldId} className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <Column xs="12">
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    readOnly={readOnly}
                    name={`${fieldId}.type.kode`}
                    label={intl.formatMessage({ id: 'TilretteleggingFieldArray.Tilretteleggingsbehov' })}
                    validate={[required]}
                    placeholder={intl.formatMessage({ id: 'TilretteleggingFieldArray.VelgTilretteleggingPlaceholder' })}
                    selectValues={[
                      <option value={tilretteleggingType.HEL_TILRETTELEGGING} key={tilretteleggingType.HEL_TILRETTELEGGING}>
                        {intl.formatMessage({ id: 'TilretteleggingFieldArray.KanGjennomfores' })}
                      </option>,
                      <option value={tilretteleggingType.DELVIS_TILRETTELEGGING} key={tilretteleggingType.DELVIS_TILRETTELEGGING}>
                        {intl.formatMessage({ id: 'TilretteleggingFieldArray.RedusertArbeid' })}
                      </option>,
                      <option value={tilretteleggingType.INGEN_TILRETTELEGGING} key={tilretteleggingType.INGEN_TILRETTELEGGING}>
                        {intl.formatMessage({ id: 'TilretteleggingFieldArray.KanIkkeGjennomfores' })}
                      </option>,
                    ]}
                    onChange={(_elmt, value) => {
                      if (value === tilretteleggingType.INGEN_TILRETTELEGGING) {
                        changeField(`${formSectionName}.tilretteleggingDatoer[${index}].${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`,
                          finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsforhold,
                            velferdspermisjonprosent, 100));
                      }
                      if (value === tilretteleggingType.DELVIS_TILRETTELEGGING) {
                        const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsforhold,
                          velferdspermisjonprosent, data.stillingsprosent);
                        changeField(`${formSectionName}.tilretteleggingDatoer[${index}].${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`,
                          utbetalingsgrad);
                      }
                    }}
                  />
                </FlexColumn>
                <FlexColumn className={styles.removeButtonMargin}>
                  {!readOnly && (
                    <>
                        { getRemoveButton() }
                    </>
                  )}
                </FlexColumn>
              </FlexRow>
              {tilretteleggingKode === tilretteleggingType.DELVIS_TILRETTELEGGING && (
                <FlexRow>
                  <FlexColumn>
                    <AlertStripe type="info" form="inline">
                      <Element>
                        <FormattedMessage id="TilretteleggingFieldArray.StillingsprosentUtvidet" />
                      </Element>
                    </AlertStripe>
                    <VerticalSpacer eightPx />
                  </FlexColumn>
                </FlexRow>
              )}
              <FlexRow>
                <FlexColumn>
                  <DatepickerField
                    readOnly={readOnly}
                    name={`${fieldId}.fom`}
                    label={intl.formatMessage({ id: 'TilretteleggingFieldArray.Dato' })}
                    validate={[hasValidDate, required]}
                  />
                </FlexColumn>
                {tilretteleggingKode === tilretteleggingType.DELVIS_TILRETTELEGGING && (
                  <>
                    <FlexColumn>
                      <DecimalField
                        className={styles.textField}
                        readOnly={readOnly}
                        name={`${fieldId}.stillingsprosent`}
                        label={intl.formatMessage({ id: 'TilretteleggingFieldArray.Stillingsprosent' })}
                        validate={[required, minValue0, maxValue100, hasValidDecimal]}
                        // @ts-ignore TODO Fiks denne!
                        normalizeOnBlur={(value) => (new RegExp(/^-?\d+\.?\d*$/).test(value) ? parseFloat(value).toFixed(2) : value)}
                        alignRightCenterOnReadOnly={readOnly}
                        onChange={(_elmt, value) => {
                          const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsforhold, velferdspermisjonprosent, value);
                          changeField(`${formSectionName}.tilretteleggingDatoer[${index}].${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`,
                            utbetalingsgrad);
                        }}
                      />
                    </FlexColumn>
                    <FlexColumn className={readOnly ? styles.buttonMarginReadOnly : styles.buttonMargin}>
                      %
                    </FlexColumn>
                  </>
                )}
                {((data && data.stillingsprosent && tilretteleggingKode === tilretteleggingType.DELVIS_TILRETTELEGGING)
                    || tilretteleggingKode === tilretteleggingType.INGEN_TILRETTELEGGING) && (
                    <TilretteleggingUtbetalingsgrad
                      fieldId={fieldId}
                      erOverstyrer={erOverstyrer}
                      tilretteleggingKode={tilretteleggingKode}
                      readOnly={readOnly}
                      formSectionName={formSectionName}
                      changeField={changeField}
                      index={index}
                      utbetalingsgrad={finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsforhold, velferdspermisjonprosent,
                        tilretteleggingKode === tilretteleggingType.INGEN_TILRETTELEGGING ? 0 : data.stillingsprosent)}
                      setOverstyrtUtbetalingsgrad={setOverstyrtUtbetalingsgrad}
                      formName={formName}
                    />
                )}
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer sixteenPx />
          </Column>
        </Row>
      );
    }}
  </PeriodFieldArray>
);

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => {
  const { formSectionName, velferdspermisjoner, formName } = ownProps;
  const velferdspermisjonprosent = velferdspermisjoner.filter((p) => finnSkalTaHensynTilPermisjon(
    formValueSelector(formName)(state, `${formSectionName}.tilretteleggingBehovFom`),
    p,
  ))
    .filter((p) => formValueSelector(formName)(state, `${formSectionName}.${finnPermisjonFieldName(p)}`))
    .map((p) => p.permisjonsprosent)
    .reduce((sum, prosent) => sum + prosent, 0);
  return {
    velferdspermisjonprosent,
    tilretteleggingDatoer: formValueSelector(formName)(state, `${formSectionName}.tilretteleggingDatoer`),
  };
};

export default connect(mapStateToProps)(injectIntl(TilretteleggingFieldArray));
