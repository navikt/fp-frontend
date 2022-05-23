import React, { FunctionComponent, ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import {
  Datepicker, SelectField, PeriodFieldArray, formHooks,
} from '@navikt/ft-form-hooks';
import { KodeverkMedNavn } from '@navikt/ft-types';

import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';

import styles from './renderOppholdPeriodeFieldArray.less';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const OPPHOLD_PERIODE_FIELD_ARRAY_NAME = 'oppholdPerioder';

type Periode = {
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}

export type FormValues = Periode[];

const defaultOppholdPeriode: Periode = {
  periodeFom: '',
  periodeTom: '',
  årsak: '',
};

const gyldigeÅrsaker = [
  oppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER];

const mapTyper = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeÅrsaker.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  oppholdsReasons: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 * RenderOppholdPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av oppholdsperiode.
 */
const RenderOppholdPeriodeFieldArray: FunctionComponent<OwnProps> = ({
  oppholdsReasons,
  readOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]: FormValues
  }}>();

  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}`,
  });

  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultOppholdPeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Opphold.LeggTilPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(periodeElementFieldId, index, getRemoveButton) => (
        <Row key={periodeElementFieldId}>
          <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
            <FlexContainer wrap>
              <FlexRow>
                <FlexColumn>
                  <Datepicker
                    name={`${periodeElementFieldId}.periodeFom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' }) : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name={`${periodeElementFieldId}.periodeTom`}
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' }) : ''}
                  />
                </FlexColumn>
                <FlexColumn>
                  <SelectField
                    name={`${periodeElementFieldId}.årsak`}
                    bredde="xl"
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.Opphold.Arsak' }) : ''}
                    selectValues={mapTyper(oppholdsReasons)}
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

export default RenderOppholdPeriodeFieldArray;
