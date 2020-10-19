import React from 'react';
import { Column, Row } from 'nav-frontend-grid';

import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__prop-types... Remove this comment to see the full error message
import { kodeverkPropType } from '@fpsak-frontend/prop-types';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './renderOppholdPeriodeFieldArr... Remove this comment to see the full error message
import styles from './renderOppholdPeriodeFieldArray.less';

const defaultOppholdPeriode = {
  periodeFom: '',
  periodeTom: '',
  årsak: '',
};

const gyldigeÅrsaker = [
  oppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER];

const mapTyper = (typer: any) => typer
  .filter(({
    kode,
  }: any) => gyldigeÅrsaker.includes(kode))
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

type RenderOppholdPeriodeFieldArrayProps = {
    fields: {};
    oppholdsReasons: any; // TODO: kodeverkPropType
    meta: {};
    readOnly: boolean;
};

/**
 *  RenderOppholdPeriodeFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av oppholdsperiode.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderOppholdPeriodeFieldArray = ({
  fields, oppholdsReasons, meta, readOnly,
}: RenderOppholdPeriodeFieldArrayProps) => (
  <PeriodFieldArray
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    fields={fields}
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    meta={meta}
    emptyPeriodTemplate={defaultOppholdPeriode}
    textCode="Registrering.Permisjon.Opphold.LeggTilPeriode"
    readOnly={readOnly}
  >
    {(periodeElementFieldId, index, getRemoveButton) => (
      <Row key={periodeElementFieldId}>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'length' does not exist on type '{}'. */}
        <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <FlexContainer wrap>
            <FlexRow>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.periodeFom`}
                  // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                  defaultValue={null}
                  label={index === 0 ? { id: 'Registrering.Permisjon.periodeFom' } : ''}
                />
              </FlexColumn>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.periodeTom`}
                  // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                  defaultValue={null}
                  label={index === 0 ? { id: 'Registrering.Permisjon.periodeTom' } : ''}
                />
              </FlexColumn>
              <FlexColumn>
                <SelectField
                  name={`${periodeElementFieldId}.årsak`}
                  bredde="xl"
                  label={index === 0 ? { id: 'Registrering.Permisjon.Opphold.Arsak' } : ''}
                  selectValues={mapTyper(oppholdsReasons)}
                />
              </FlexColumn>
              <FlexColumn>
                {/* @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message */}
                {getRemoveButton()}
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Column>
      </Row>
    )}
  </PeriodFieldArray>
);

export default RenderOppholdPeriodeFieldArray;
