import React, { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { UseFormGetValues } from 'react-hook-form';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import AlertStripe from 'nav-frontend-alertstriper';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  CheckboxField, Datepicker, SelectField, PeriodFieldArray, InputField, formHooks,
} from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  hasValidDecimal,
  maxValue,
  required,
} from '@navikt/ft-form-validators';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import uttakPeriodeType from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';

import styles from './renderPermisjonPeriodeFieldArray.less';

const maxValue100 = maxValue(100);

const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const PERMISJON_PERIODE_FIELD_ARRAY_NAME = 'permisjonsPerioder';

export const gyldigeUttakperioder = [
  uttakPeriodeType.FELLESPERIODE,
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.FORELDREPENGER,
  uttakPeriodeType.MODREKVOTE,
];

const mapPeriodeTyper = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeUttakperioder.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

const mapAktiviteter = (aktiviteter: KodeverkMedNavn[]): ReactElement[] => aktiviteter
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

export const periodsWithNoMorsAktivitet = [
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.MODREKVOTE];

const shouldDisableSelect = (selectedPeriodeTyper: string[], index: number): boolean => {
  if (typeof selectedPeriodeTyper === 'undefined' || typeof selectedPeriodeTyper[index] === 'undefined') {
    return true;
  }

  return periodsWithNoMorsAktivitet.includes(selectedPeriodeTyper[index])
    || selectedPeriodeTyper[index] === '';
};

const getLabel = (erForsteRad: boolean, text: string): string => (erForsteRad ? text : '');

const erPeriodeFormFør01012019 = (periodeFom: any) => periodeFom && moment(periodeFom).isBefore(moment('2019-01-01'));

export type FormValues = {
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}

const getOverlappingValidator = (
  getValues: UseFormGetValues<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: { [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: FormValues[] }}>,
) => () => {
  const perioder = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}`);
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return dateRangesNotOverlapping(periodeMap);
};

interface OwnProps {
  readOnly: boolean;
  sokerErMor: boolean;
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  transformValues: (values: FormValues[]) => any;
}

/**
 * RenderPermisjonPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av perioder med permijon.
 */
const RenderPermisjonPeriodeFieldArray: FunctionComponent<OwnProps> & StaticFunctions = ({
  sokerErMor,
  readOnly,
  alleKodeverk,
}) => {
  const intl = useIntl();

  const periodeTyper = alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE];
  const morsAktivitetTyper = alleKodeverk[KodeverkType.MORS_AKTIVITET];

  if (morsAktivitetTyper.filter(({
    kode,
  }) => kode === '-').length === 0) { morsAktivitetTyper.unshift({ kode: '-', navn: '', kodeverk: '' }); }

  const {
    control, getValues, trigger, formState: { isSubmitted },
  } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: FormValues[]
  }}>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}`,
  });

  const selectedPeriodeTyper = [''];

  return (
    <PeriodFieldArray
      readOnly={readOnly}
      fields={fields}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      emptyPeriodTemplate={{}}
      append={append}
      remove={remove}
    >
      {(field, index) => {
        const erForsteRad = (index === 0);
        const { periodeFom, harSamtidigUttak } = field;
        const periodeFomForTidlig = erPeriodeFormFør01012019(periodeFom);
        const visEllerSkulOverskriftStyle = erForsteRad ? styles.visOverskrift : styles.skjulOverskrift;

        const namePart1 = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}.${index}`;
        return (
          <div key={field.id}>
            <Row>
              <Column xs="12">
                <FlexContainer>
                  <FlexRow wrap>
                    <FlexColumn className={styles.selectFieldWidth}>
                      <SelectField
                        readOnly={readOnly}
                        name={`${namePart1}.periodeType`}
                        bredde="m"
                        label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeType' }))}
                        selectValues={mapPeriodeTyper(periodeTyper)}
                        validate={[required]}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      <Datepicker
                        isReadOnly={readOnly}
                        name={`${namePart1}.periodeFom`}
                        label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' }))}
                        validate={[
                          required,
                          hasValidDate,
                          () => {
                            const fomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`);
                            const tomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`);
                            return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                          },
                          getOverlappingValidator(getValues),
                        ]}
                        onChange={() => (isSubmitted ? trigger() : undefined)}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      <Datepicker
                        isReadOnly={readOnly}
                        name={`${namePart1}.periodeTom`}
                        label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' }))}
                        validate={[
                          required,
                          hasValidDate,
                          () => {
                            const fomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`);
                            const tomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`);
                            return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                          },
                          getOverlappingValidator(getValues),
                        ]}
                        onChange={() => (isSubmitted ? trigger() : undefined)}
                      />
                    </FlexColumn>
                    {!sokerErMor && (
                      <FlexColumn>
                        <SelectField
                          readOnly={readOnly}
                          disabled={sokerErMor || shouldDisableSelect(selectedPeriodeTyper, index)}
                          bredde="s"
                          name={`${namePart1}.morsAktivitet`}
                          label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.Fellesperiode.morsAktivitet' }))}
                          selectValues={mapAktiviteter(morsAktivitetTyper)}
                          hideValueOnDisable
                        />
                      </FlexColumn>
                    )}
                    <FlexColumn className={styles.smalHeader}>
                      <Undertekst className={visEllerSkulOverskriftStyle}>
                        <FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />
                      </Undertekst>
                      <CheckboxField
                        readOnly={readOnly}
                        name={`${namePart1}.flerbarnsdager`}
                        label=" "
                      />
                    </FlexColumn>
                    <FlexColumn className={styles.smalHeader}>
                      <Undertekst className={visEllerSkulOverskriftStyle}>
                        <FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />
                      </Undertekst>
                      <CheckboxField
                        readOnly={readOnly}
                        name={`${namePart1}.harSamtidigUttak`}
                        label=" "
                      />
                    </FlexColumn>
                    {harSamtidigUttak && (
                      <FlexColumn className={erForsteRad ? '' : styles.alignSamtidigUttak}>
                        <InputField
                          name={`${namePart1}.samtidigUttaksprosent`}
                          bredde="S"
                          validate={[hasValidDecimal, maxValue100]}
                          label={intl.formatMessage({ id: 'Registrering.Permisjon.SamtidigUttaksprosent' })}
                          normalizeOnBlur={(value: string) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                        />
                      </FlexColumn>
                    )}
                    <FlexColumn>
                      {!readOnly && (
                        <button
                          className={erForsteRad ? styles.buttonRemoveFirst : styles.buttonRemove}
                          type="button"
                          onClick={() => {
                            remove(index);
                          }}
                        />
                      )}
                    </FlexColumn>
                  </FlexRow>
                  {periodeFomForTidlig && (
                    <>
                      <FlexRow wrap>
                        <AlertStripe type="advarsel">
                          <FormattedMessage id="Registrering.Permisjon.PeriodeFomForTidlig" />
                        </AlertStripe>
                      </FlexRow>
                      <VerticalSpacer sixteenPx />
                    </>
                  )}
                </FlexContainer>
              </Column>
            </Row>
            <VerticalSpacer eightPx />
          </div>
        );
      }}
    </PeriodFieldArray>
  );
};

/*
RenderPermisjonPeriodeFieldArray.validate = (values) => {
  // eslint-disable-next-line react/destructuring-assignment
  const arrayErrors = values.map(({
    periodeType,
    periodeFom,
    periodeTom,
  }) => {
    if (!periodeFomError) {
      periodeTomError = periodeTomError || dateAfterOrEqual(periodeFomDate)(periodeTomDate);
    }
    return null;
  });

};
*/

RenderPermisjonPeriodeFieldArray.transformValues = (values: FormValues[]) => values.map((value) => {
  if (periodsWithNoMorsAktivitet.includes(value.periodeType)) {
    return {
      periodeType: value.periodeType,
      periodeFom: value.periodeFom,
      periodeTom: value.periodeTom,
      flerbarnsdager: value.flerbarnsdager ? value.flerbarnsdager : false,
      harSamtidigUttak: value.harSamtidigUttak ? value.harSamtidigUttak : false,
      samtidigUttaksprosent: value.samtidigUttaksprosent,
    };
  }
  return {
    periodeType: value.periodeType,
    periodeFom: value.periodeFom,
    periodeTom: value.periodeTom,
    morsAktivitet: value.morsAktivitet,
    flerbarnsdager: value.flerbarnsdager ? value.flerbarnsdager : false,
    harSamtidigUttak: value.harSamtidigUttak ? value.harSamtidigUttak : false,
    samtidigUttaksprosent: value.samtidigUttaksprosent,
  };
});

export default RenderPermisjonPeriodeFieldArray;
