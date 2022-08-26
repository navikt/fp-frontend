import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import AlertStripe from 'nav-frontend-alertstriper';
import { Element } from 'nav-frontend-typografi';

import {
  Datepicker, SelectField, PeriodFieldArray, formHooks, InputField,
} from '@navikt/ft-form-hooks';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  hasValidDecimal, maxValue, minValue, required, hasValidDate,
} from '@navikt/ft-form-validators';
import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';
import { Permisjon } from '@fpsak-frontend/types';

import { UseFormGetValues } from 'react-hook-form';
import TilretteleggingUtbetalingsgrad, { OVERSTYRT_UTBETALINGSGRAD_FIELDNAME } from './TilretteleggingUtbetalingsgrad';
import { finnSkalTaHensynTilPermisjon } from './VelferdspermisjonSection';

import styles from './tilretteleggingFieldArray.less';

const maxValue100 = maxValue(100);
const minValue0 = minValue(0);

type FormValues = {
  type: string;
  stillingsprosent: number;
  overstyrtUtbetalingsgrad?: string;
  fom: string;
}

const validerAtDatoErUnik = (
  intl: IntlShape,
  getValues: UseFormGetValues<Record<string, FormValues[]>>,
  fieldPrefix: string,
  index: number,
) => () => {
  const tilretteleggingDatoer = getValues(fieldPrefix);
  const datoer = tilretteleggingDatoer.map((d) => d.fom);
  const aktuellDato = datoer[index];
  const harDuplikat = datoer.filter((dato) => dato === aktuellDato).length > 1;
  return harDuplikat
    ? intl.formatMessage({ id: 'FodselOgTilretteleggingFaktaForm.DuplikateDatoer' })
    : null;
};

export const finnUtbetalingsgradForTilrettelegging = (
  stillingsprosentArbeidsforhold: number,
  velferdspermisjonprosent: number,
  stillingsprosent?: number,
): string => {
  const effektivStillingsprosent = stillingsprosentArbeidsforhold - velferdspermisjonprosent;
  const defaultUtbetalingsgrad = effektivStillingsprosent <= 0 ? 0 : 100 * (1 - (stillingsprosent / effektivStillingsprosent));
  return defaultUtbetalingsgrad > 0 ? defaultUtbetalingsgrad.toFixed(2) : '0';
};

export const defaultFormValues = {
  type: undefined,
  stillingsprosent: undefined,
  fom: undefined,
};

interface OwnProps {
  readOnly: boolean;
  formSectionName: string;
  erOverstyrer: boolean;
  stillingsprosentArbeidsforhold: number;
  setOverstyrtUtbetalingsgrad: (erOverstyrt: boolean) => void;
  velferdspermisjoner: Permisjon[];
}

/**
 * BehovForTilretteleggingFieldArray
 *
 * Viser inputfelter for tilrettelegging av arbeidsforhold for selvstendig næringsdrivende eller frilans.
 */
const TilretteleggingFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
  formSectionName,
  erOverstyrer,
  stillingsprosentArbeidsforhold,
  setOverstyrtUtbetalingsgrad,
  velferdspermisjoner,
}) => {
  const intl = useIntl();

  const fieldPrefix = `${formSectionName}.tilretteleggingDatoer`;

  const {
    setValue, control, watch, getValues,
  } = formHooks.useFormContext<Record<string, FormValues[]>>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: fieldPrefix,
  });

  const tilretteleggingBehovFom = watch(`${formSectionName}.tilretteleggingBehovFom`);
  const velferdspermisjonprosent = velferdspermisjoner.filter((p) => finnSkalTaHensynTilPermisjon(tilretteleggingBehovFom, p))
    .filter((p) => getValues(`${formSectionName}.permisjon${p.permisjonFom}`))
    .map((p) => p.permisjonsprosent)
    .reduce((sum, prosent) => sum + prosent, 0);

  const tilretteleggingDatoer = watch(fieldPrefix);

  return (
    <PeriodFieldArray
      fields={fields}
      bodyText={intl.formatMessage({ id: 'TilretteleggingFieldArray.LeggTilTilretteleggingsbehov' })}
      readOnly={readOnly}
      remove={remove}
      append={append}
      emptyPeriodTemplate={defaultFormValues}
    >
      {(field, index, getRemoveButton) => {
        const data = tilretteleggingDatoer[index];
        const tilretteleggingKode = data?.type;
        return (
          <Row key={field.id} className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
            <Column xs="12">
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <SelectField
                      readOnly={readOnly}
                      name={`${fieldPrefix}.${index}.type`}
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
                      onChange={(event) => {
                        const value = event.target?.value;
                        if (value === tilretteleggingType.INGEN_TILRETTELEGGING) {
                          const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsforhold, velferdspermisjonprosent, 100);
                          setValue(`${formSectionName}.tilretteleggingDatoer[${index}].${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`, utbetalingsgrad);
                        }
                        if (value === tilretteleggingType.DELVIS_TILRETTELEGGING) {
                          const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsforhold,
                            velferdspermisjonprosent, data.stillingsprosent);
                          setValue(`${formSectionName}.tilretteleggingDatoer[${index}].${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`, utbetalingsgrad);
                        }
                      }}
                    />
                  </FlexColumn>
                  <FlexColumn className={styles.removeButtonMargin}>
                    {!readOnly && (
                      <>
                        {getRemoveButton()}
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
                    <Datepicker
                      isReadOnly={readOnly}
                      name={`${fieldPrefix}.${index}.fom`}
                      label={intl.formatMessage({ id: 'TilretteleggingFieldArray.Dato' })}
                      validate={[hasValidDate, required, validerAtDatoErUnik(intl, getValues, fieldPrefix, index)]}
                    />
                  </FlexColumn>
                  {tilretteleggingKode === tilretteleggingType.DELVIS_TILRETTELEGGING && (
                    <>
                      <FlexColumn>
                        <InputField
                          className={styles.textField}
                          readOnly={readOnly}
                          name={`${fieldPrefix}.${index}.stillingsprosent`}
                          label={intl.formatMessage({ id: 'TilretteleggingFieldArray.Stillingsprosent' })}
                          validate={[required, minValue0, maxValue100, hasValidDecimal]}
                          // @ts-ignore Fiks denne!
                          normalizeOnBlur={(value) => (new RegExp(/^-?\d+\.?\d*$/).test(value) ? parseFloat(value).toFixed(2) : value)}
                          onChange={(value) => {
                            const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsforhold, velferdspermisjonprosent, value);
                            setValue(`${formSectionName}.tilretteleggingDatoer.${index}.${OVERSTYRT_UTBETALINGSGRAD_FIELDNAME}`, utbetalingsgrad);
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
                        fieldPrefix={`${fieldPrefix}.${index}`}
                        erOverstyrer={erOverstyrer}
                        tilretteleggingKode={tilretteleggingKode}
                        readOnly={readOnly}
                        setOverstyrtUtbetalingsgrad={setOverstyrtUtbetalingsgrad}
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
};

export default TilretteleggingFieldArray;
