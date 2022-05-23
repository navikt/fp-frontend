import React, { FunctionComponent, ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import {
  Datepicker, SelectField, PeriodFieldArray, formHooks,
} from '@navikt/ft-form-hooks';
import { KodeverkMedNavn } from '@navikt/ft-types';

import { gyldigeUttakperioder } from './RenderPermisjonPeriodeFieldArray';

import styles from './renderUtsettelsePeriodeFieldArray.less';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const UTSETTELSE_PERIODE_FIELD_ARRAY_NAME = 'utsettelsePeriode';

type PeriodeData = {
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
};

export type FormValues = PeriodeData[];

const defaultUtsettelsePeriode: PeriodeData = {
  periodeFom: '',
  periodeTom: '',
  arsakForUtsettelse: '',
};

const mapTyper = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

const mapKvoter = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeUttakperioder.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  utsettelseReasons: KodeverkMedNavn[];
  utsettelseKvoter: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 * RenderUtsettelsePeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av utsettelseperiode.
 */
const RenderUtsettelsePeriodeFieldArray: FunctionComponent<OwnProps> = ({
  utsettelseReasons,
  utsettelseKvoter,
  readOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: FormValues
  }}>();

  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}`,
  });

  const fieldArrayName = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}`;
  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultUtsettelsePeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.LeggTilPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index, getRemoveButton) => (
        <Row key={field.id}>
          <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
            <FlexContainer wrap>
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    name={`${fieldArrayName}.${index}.periodeForUtsettelse`}
                    bredde="xl"
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.Periode' }) : ''}
                    selectValues={mapKvoter(utsettelseKvoter)}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name={`${fieldArrayName}.${index}.periodeFom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' }) : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name={`${fieldArrayName}.${index}.periodeTom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' }) : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <SelectField
                    name={`${fieldArrayName}.${index}.arsakForUtsettelse`}
                    bredde="xl"
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.Arsak' }) : ''}
                    selectValues={mapTyper(utsettelseReasons)}
                  />
                </FlexColumn>
              </FlexRow>
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.ArbeidskategoriLabel' }) : ''}
                    name={`${fieldArrayName}.${index}.erArbeidstaker`}
                    bredde="xl"
                    selectValues={[
                      <option value="true" key="true">{intl.formatMessage({ id: 'Registrering.Permisjon.ErArbeidstaker' })}</option>,
                      <option value="false" key="false">{intl.formatMessage({ id: 'Registrering.Permisjon.ErIkkeArbeidstaker' })}</option>,
                    ]}
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

export default RenderUtsettelsePeriodeFieldArray;
