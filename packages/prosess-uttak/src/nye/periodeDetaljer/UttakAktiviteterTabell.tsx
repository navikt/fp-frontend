import React, { FunctionComponent } from 'react';
import { BodyShort, Table } from '@navikt/ds-react';
import { useIntl } from 'react-intl';
import {
  formHooks, SelectField, InputField, NumberField,
} from '@navikt/ft-form-hooks';
import { hasValidDecimal, hasValidInteger, maxLength, minValue, notDash, required } from '@navikt/ft-form-validators';
import {
  FlexColumn, FlexContainer, FlexRow, TableColumn, TableRow,
} from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './uttakAktiviteterTabell.less';

const maxLength3 = maxLength(3);
const minValue0 = minValue(0);
const maxProsentValue100 = maxValue(100);

const headerTextCodes = [
  'RenderUttakTable.PeriodeData.Aktivitet',
  'RenderUttakTable.PeriodeData.Stonadskonto',
  'RenderUttakTable.PeriodeData.Trekk',
  'RenderUttakTable.PeriodeData.Andel',
  'RenderUttakTable.PeriodeData.Utbetalingsgrad',
];

const getNoMoreThanZeroIfRejectedAndNotUtsettelse = (intl: IntlShape) => (
  value: string, { erOppfylt, utsettelseType }: FormValues,
): string | null => (utsettelse(
  erOppfylt, utsettelseType,
) && parseFloat(value) > 0
  ? intl.formatMessage({ id: 'RenderUttakTable.MerEnNullUtaksprosent' }) : null);

const checkForMonthsOrDays = (fieldName: string): boolean => {
  // @ts-ignore Fiks
  const weeksValue = document.getElementById(`${fieldName}.weeks`) ? document.getElementById(`${fieldName}.weeks`).value : null;
  // @ts-ignore Fiks
  const daysValue = document.getElementById(`${fieldName}.days`) ? document.getElementById(`${fieldName}.days`).value : null;
  return weeksValue !== '0' || (daysValue !== '0' && daysValue !== '0.0');
};

type FormValuesTabell = {
  stønadskontoType: string;
  weeks: number;
  days: number;
  utbetalingsgrad: number;
}

interface OwnProps {
  periodeTyper: KodeverkMedNavn[];
  isReadOnly: boolean;
}

const UttakAktiviteterTabell: FunctionComponent<OwnProps> = ({
  periodeTyper,
  isReadOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<FormValuesTabell>();
  const { fields } = formHooks.useFieldArray({
    control,
    name: 'UttakFieldArray',
  });

  return (
    <div className={styles.tableOverflow}>
      {fields.length > 0 && (
        <Table headerTextCodes={headerTextCodes}>
          {fields.map((field, index: number) => {
            const textStrings = createTextStrings(fields.get(index), arbeidsgiverOpplysningerPerId);
            return (
              <TableRow key={field.id}>
                <TableColumn><BodyShort size="small" className={styles.forsteKolWidth}>{textStrings.arbeidsforhold}</BodyShort></TableColumn>
                <TableColumn>
                  <div className={styles.selectStonad}>
                    <SelectField
                      name={`${index}.stønadskontoType`}
                      selectValues={mapPeriodeTyper(periodeTyper)}
                      label=""
                      readOnly={isReadOnly}
                      validate={checkForMonthsOrDays(uttakElementFieldId) ? [required, notDash] : []}
                    />
                  </div>
                </TableColumn>
                <TableColumn>
                  <FlexContainer>
                    <FlexRow>
                      <FlexColumn>
                        <span className={styles.weekPosition}>
                          <InputField
                            name={`${index}.weeks`}
                            readOnly={isReadOnly}
                            validate={[required, hasValidInteger, maxLength3]}
                            parse={(value: string) => {
                              const parsedValue = parseInt(value, 10);
                              return Number.isNaN(parsedValue) ? value : parsedValue;
                            }}
                          />
                        </span>
                      </FlexColumn>
                      <FlexColumn>
                        {isReadOnly ? <span>/</span> : <span className={styles.verticalCharPlacementInTable}>/</span>}
                      </FlexColumn>
                      <FlexColumn>
                        <NumberField
                          name={`${index}.days`}
                          readOnly={isReadOnly}
                          validate={[required, hasValidDecimal, maxLength3]}
                          forceTwoDecimalDigits
                        />
                      </FlexColumn>
                    </FlexRow>
                  </FlexContainer>
                </TableColumn>
                <TableColumn><BodyShort size="small">{textStrings.prosentArbeidText}</BodyShort></TableColumn>
                <TableColumn>
                  <FlexContainer>
                    <FlexRow>
                      <FlexColumn>
                        <NumberField
                          name={`${index}.utbetalingsgrad`}
                          validate={[required, minValue0, maxProsentValue100, hasValidDecimal, getNoMoreThanZeroIfRejectedAndNotUtsettelse(intl)]}
                          readOnly={isReadOnly}
                          forceTwoDecimalDigits
                        />
                      </FlexColumn>
                      <FlexColumn>
                        {!isReadOnly && (
                          <span className={styles.verticalCharPlacementInTable}>
                            %
                          </span>
                        )}
                      </FlexColumn>
                    </FlexRow>
                  </FlexContainer>
                </TableColumn>
              </TableRow>
            );
          })}
        </Table>
      )}
    </div>
  );
};

export default UttakAktiviteterTabell;
