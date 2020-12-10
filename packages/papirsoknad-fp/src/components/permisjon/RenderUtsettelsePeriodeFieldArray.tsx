import React, { FunctionComponent, ReactElement } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import { gyldigeUttakperioder } from './RenderPermisjonPeriodeFieldArray';

import styles from './renderUtsettelsePeriodeFieldArray.less';

const defaultUtsettelsePeriode = {
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
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  utsettelseReasons: KodeverkMedNavn[];
  utsettelseKvoter: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 *  RenderUtsettelsePeriodeFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av utsettelseperiode.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderUtsettelsePeriodeFieldArray: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  fields,
  utsettelseReasons,
  utsettelseKvoter,
  meta,
  intl,
  readOnly,
}) => (
  <PeriodFieldArray
    fields={fields}
    meta={meta}
    emptyPeriodTemplate={defaultUtsettelsePeriode}
    bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.LeggTilPeriode' })}
    readOnly={readOnly}
  >
    {(periodeElementFieldId, index, getRemoveButton) => (
      <Row key={periodeElementFieldId}>
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
                  label={index === 0 ? { id: 'Registrering.Permisjon.periodeFom' } : ''}
                />
              </FlexColumn>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.periodeTom`}
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
                    <option value="true" key="true">{intl.formatMessage({ id: 'Registrering.Permisjon.ErArbeidstaker' })}</option>,
                    <option value="false" key="false">{intl.formatMessage({ id: 'Registrering.Permisjon.ErIkkeArbeidstaker' })}</option>,
                  ]}
                />
              </FlexColumn>
              <FlexColumn>
                {getRemoveButton()}
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Column>
      </Row>
    )}
  </PeriodFieldArray>
);

export default injectIntl(RenderUtsettelsePeriodeFieldArray);
