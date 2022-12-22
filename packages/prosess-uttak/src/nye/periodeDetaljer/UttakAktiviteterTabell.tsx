import React, {
  FunctionComponent, ReactElement, useMemo,
} from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { formHooks, SelectField, NumberField } from '@navikt/ft-form-hooks';
import {
  hasValidDecimal, hasValidInteger, maxLength, maxValue, minValue, notDash, required,
} from '@navikt/ft-form-validators';
import {
  FlexColumn, FlexContainer, FlexRow, Table, TableColumn, TableRow,
} from '@navikt/ft-ui-komponenter';

import UttakArbeidType from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import { ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, PeriodeSokerAktivitet } from '@fpsak-frontend/types';
import uttakPeriodeType from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';

import uttakArbeidTypeTekstCodes from '../../utils/uttakArbeidTypeCodes';
import lagVisningsNavn from '../../utils/lagVisningsNavn';

import styles from './uttakAktiviteterTabell.less';

const maxLength3 = maxLength(3);
const minValue0 = minValue(0);
const maxProsentValue100 = maxValue(100);

const HEADER_TEXT_CODES = [
  'RenderUttakTable.PeriodeData.Aktivitet',
  'RenderUttakTable.PeriodeData.Stonadskonto',
  'RenderUttakTable.PeriodeData.Trekk',
  'RenderUttakTable.PeriodeData.Andel',
  'RenderUttakTable.PeriodeData.Utbetalingsgrad',
];

const finnArbeidsforholdNavnOgProsentArbeid = (
  aktivitet: PeriodeSokerAktivitet,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  const {
    prosentArbeid, arbeidsgiverReferanse, eksternArbeidsforholdId, uttakArbeidType,
  } = aktivitet;

  const prosentArbeidText = (typeof prosentArbeid !== 'undefined') ? `${prosentArbeid}%` : '';
  let arbeidsforhold;
  if (uttakArbeidType && uttakArbeidType !== UttakArbeidType.ORDINÆRT_ARBEID) {
    arbeidsforhold = <FormattedMessage id={uttakArbeidTypeTekstCodes[uttakArbeidType]} />;
  }
  if (arbeidsgiverReferanse) {
    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];
    arbeidsforhold = arbeidsgiverOpplysninger ? lagVisningsNavn(arbeidsgiverOpplysninger, eksternArbeidsforholdId) : arbeidsgiverReferanse;
  }
  return {
    prosentArbeidText,
    arbeidsforhold: arbeidsforhold || '',
  };
};

const getNoMoreThanZeroIfRejectedAndNotUtsettelse = (
  intl: IntlShape,
  erOppfylt: boolean,
  utsettelseType?: string,
) => (
  value: any,
): string | null => {
  const harUtsettelse = !erOppfylt && (!utsettelseType || utsettelseType === '-');
  if (harUtsettelse && parseFloat(value) > 0) {
    return intl.formatMessage({ id: 'RenderUttakTable.MerEnNullUtaksprosent' });
  }
  return null;
};

const GYLDIGE_UTTAK_PERIODER = [
  uttakPeriodeType.FELLESPERIODE,
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.FORELDREPENGER,
  uttakPeriodeType.MODREKVOTE,
  uttakPeriodeType.UDEFINERT];

const lagPeriodeTypeOptions = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => GYLDIGE_UTTAK_PERIODER.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

export type FormValues = {
  stønadskontoType: string;
  weeks: string;
  days: string;
  utbetalingsgrad: number;
}

interface OwnProps {
  periodeTyper: KodeverkMedNavn[];
  isReadOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aktiviteter: PeriodeSokerAktivitet[];
  erOppfylt: boolean;
  utsettelseType: string;
}

const UttakAktiviteterTabell: FunctionComponent<OwnProps> = ({
  periodeTyper,
  isReadOnly,
  arbeidsgiverOpplysningerPerId,
  aktiviteter,
  erOppfylt,
  utsettelseType,
}) => {
  const intl = useIntl();

  const { control, getValues } = formHooks.useFormContext<{ aktiviteter: FormValues[] }>();
  const { fields } = formHooks.useFieldArray({
    control,
    name: 'aktiviteter',
  });

  const periodeTypeOptions = useMemo(() => lagPeriodeTypeOptions(periodeTyper), [periodeTyper]);

  return (
    <div className={styles.tableOverflow}>
      {fields.length > 0 && (
        <Table headerTextCodes={HEADER_TEXT_CODES} noHover>
          {fields.map((field, index: number) => {
            const arbeidsforholdData = finnArbeidsforholdNavnOgProsentArbeid(aktiviteter[index], arbeidsgiverOpplysningerPerId);
            return (
              <TableRow key={field.id}>
                <TableColumn><BodyShort size="small" className={styles.forsteKolWidth}>{arbeidsforholdData.arbeidsforhold}</BodyShort></TableColumn>
                <TableColumn>
                  <div className={styles.selectStonad}>
                    <SelectField
                      name={`aktiviteter.${index}.stønadskontoType`}
                      selectValues={periodeTypeOptions}
                      hideLabel
                      label=""
                      readOnly={isReadOnly}
                      validate={[(value: string) => {
                        const weeks = getValues(`aktiviteter.${index}.weeks`);
                        const days = getValues(`aktiviteter.${index}.days`);
                        const skalSjekke = weeks !== '0' || (days !== '0' && days !== '0.0');
                        if (skalSjekke) {
                          const requiredMessage = required(value);
                          if (requiredMessage) {
                            return [requiredMessage];
                          }
                          const notDashMessage = notDash(value);
                          if (notDashMessage) {
                            return [notDashMessage];
                          }
                        }
                        return [];
                      }]}
                    />
                  </div>
                </TableColumn>
                <TableColumn>
                  <FlexContainer>
                    <FlexRow>
                      <FlexColumn className={styles.ukeOgDag}>
                        <span className={styles.weekPosition}>
                          <NumberField
                            name={`aktiviteter.${index}.weeks`}
                            readOnly={isReadOnly}
                            validate={[required, hasValidInteger, maxLength3]}
                          />
                        </span>
                      </FlexColumn>
                      <FlexColumn>
                        {isReadOnly ? <span>/</span> : <span className={styles.verticalCharPlacementInTable}>/</span>}
                      </FlexColumn>
                      <FlexColumn className={styles.ukeOgDag}>
                        <NumberField
                          name={`aktiviteter.${index}.days`}
                          readOnly={isReadOnly}
                          validate={[required, hasValidDecimal, maxLength3]}
                        />
                      </FlexColumn>
                    </FlexRow>
                  </FlexContainer>
                </TableColumn>
                <TableColumn>
                  <BodyShort size="small">
                    {arbeidsforholdData.prosentArbeidText}
                  </BodyShort>
                </TableColumn>
                <TableColumn>
                  <FlexContainer>
                    <FlexRow>
                      <FlexColumn className={styles.utbetalingsgrad}>
                        <NumberField
                          name={`aktiviteter.${index}.utbetalingsgrad`}
                          validate={[
                            required,
                            minValue0,
                            maxProsentValue100,
                            hasValidDecimal,
                            getNoMoreThanZeroIfRejectedAndNotUtsettelse(intl, erOppfylt, utsettelseType),
                          ]}
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
