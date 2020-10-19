import React from 'react';
import { injectIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__prop-types... Remove this comment to see the full error message
import { kodeverkPropType } from '@fpsak-frontend/prop-types';

import { gyldigeUttakperioder } from './RenderPermisjonPeriodeFieldArray';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './renderUtsettelsePeriodeField... Remove this comment to see the full error message
import styles from './renderUtsettelsePeriodeFieldArray.less';

const defaultUtsettelsePeriode = {
  periodeFom: '',
  periodeTom: '',
  arsakForUtsettelse: '',
};

const mapTyper = (typer: any) => typer
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

const mapKvoter = (typer: any) => typer
  .filter(({
    kode,
  }: any) => gyldigeUttakperioder.includes(kode))
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

type RenderUtsettelsePeriodeFieldArrayProps = {
    fields: {};
    utsettelseReasons: any; // TODO: kodeverkPropType
    utsettelseKvoter: any; // TODO: kodeverkPropType
    meta: {};
    intl: {};
    readOnly: boolean;
};

/**
 *  RenderUtsettelsePeriodeFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av utsettelseperiode.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderUtsettelsePeriodeFieldArray = ({
  fields, utsettelseReasons, utsettelseKvoter, meta, intl, readOnly,
}: RenderUtsettelsePeriodeFieldArrayProps) => (
  <PeriodFieldArray
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    fields={fields}
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    meta={meta}
    emptyPeriodTemplate={defaultUtsettelsePeriode}
    textCode="Registrering.Permisjon.Utsettelse.LeggTilPeriode"
    readOnly={readOnly}
  >
    {(periodeElementFieldId, index, getRemoveButton) => (
      <Row key={periodeElementFieldId}>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'length' does not exist on type '{}'. */}
        <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <FlexContainer wrap>
            <FlexRow>
              <FlexColumn>
                <SelectField
                  name={`${periodeElementFieldId}.periodeForUtsettelse`}
                  bredde="xl"
                  label={index === 0 ? { id: 'Registrering.Permisjon.Utsettelse.Periode' } : ''}
                  selectValues={mapKvoter(utsettelseKvoter)}
                />
              </FlexColumn>
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
                  name={`${periodeElementFieldId}.arsakForUtsettelse`}
                  bredde="xl"
                  label={index === 0 ? { id: 'Registrering.Permisjon.Utsettelse.Arsak' } : ''}
                  selectValues={mapTyper(utsettelseReasons)}
                />
              </FlexColumn>
            </FlexRow>
            <FlexRow>
              <FlexColumn>
                <SelectField
                  label={index === 0 ? { id: 'Registrering.Permisjon.ArbeidskategoriLabel' } : ''}
                  name={`${periodeElementFieldId}.erArbeidstaker`}
                  bredde="xl"
                  selectValues={[
                    // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
                    <option value="true" key="true">{intl.formatMessage({ id: 'Registrering.Permisjon.ErArbeidstaker' })}</option>,
                    // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
                    <option value="false" key="false">{intl.formatMessage({ id: 'Registrering.Permisjon.ErIkkeArbeidstaker' })}</option>,
                  ]}
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

// @ts-expect-error ts-migrate(2769) FIXME: Type '({ fields, utsettelseReasons, utsettelseKvot... Remove this comment to see the full error message
export default injectIntl(RenderUtsettelsePeriodeFieldArray);
