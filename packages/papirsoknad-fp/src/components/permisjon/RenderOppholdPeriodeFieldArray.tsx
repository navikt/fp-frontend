import React, { FunctionComponent, ReactElement } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import {
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField, PeriodFieldArray } from '@fpsak-frontend/form';
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

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

const mapTyper = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeÅrsaker.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  oppholdsReasons: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 *  RenderOppholdPeriodeFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av oppholdsperiode.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
const RenderOppholdPeriodeFieldArray: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  fields,
  meta,
  oppholdsReasons,
  readOnly,
}) => (
  <PeriodFieldArray
    fields={fields}
    meta={meta}
    emptyPeriodTemplate={defaultOppholdPeriode}
    bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Opphold.LeggTilPeriode' })}
    readOnly={readOnly}
  >
    {(periodeElementFieldId, index, getRemoveButton) => (
      <Row key={periodeElementFieldId}>
        <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <FlexContainer wrap>
            <FlexRow>
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
                  name={`${periodeElementFieldId}.årsak`}
                  bredde="xl"
                  label={index === 0 ? { id: 'Registrering.Permisjon.Opphold.Arsak' } : ''}
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

export default injectIntl(RenderOppholdPeriodeFieldArray);
