import React, { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import { ArrowBox, FlexColumn, FlexRow } from '@fpsak-frontend/shared-components';
import { DecimalField, PeriodpickerField, SelectField } from '@fpsak-frontend/form';
import oppholdArsakType, { oppholdArsakKontoNavn } from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import {
  hasValidDecimal, maxValue, minValue, required,
} from '@fpsak-frontend/utils';
import { stonadskontoType, uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import { Kodeverk } from '@fpsak-frontend/types';

import styles from './perioder/periodeTyper.less';

const maxValue100 = maxValue(100);
const minValue1 = minValue(1);

const selectValues = (): ReactElement[] => Object.keys(stonadskontoType)
  .map((key) => (<option key={key} value={key}>{uttakPeriodeNavn[key]}</option>));

const gyldigeÅrsaker = [
  oppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER];

const mapPeriodeTyper = (): ReactElement[] => Object.keys(oppholdArsakType)
  .filter((key) => gyldigeÅrsaker.includes(key))
  .map((key) => (<option key={key} value={key}>{oppholdArsakKontoNavn[key]}</option>));

interface OwnProps {
  withGradering?: boolean;
  oppholdArsak?: Kodeverk;
  førsteUttaksdato?: string;
}

export const EndreSoknadsperiode: FunctionComponent<OwnProps> = ({
  withGradering,
  oppholdArsak,
  førsteUttaksdato,
}) => (
  <ArrowBox marginTop={10}>
    <FlexRow>
      <FlexColumn>
        <PeriodpickerField
          names={['nyFom', 'nyTom']}
          label={{ id: 'UttakInfoPanel.Periode' }}
          disabledDays={{ before: moment(førsteUttaksdato).toDate() }}
        />
      </FlexColumn>
    </FlexRow>
    <FlexRow>
      <FlexColumn>
        {(!oppholdArsak || oppholdArsak.kode === oppholdArsakType.UDEFINERT)
        && (
        <SelectField
          name="kontoType"
          selectValues={selectValues()}
          label={{ id: 'UttakInfoPanel.StonadsKonto' }}
        />
        )}
        {oppholdArsak && oppholdArsak.kode !== oppholdArsakType.UDEFINERT
        && (
        <SelectField
          name="oppholdArsak"
          selectValues={mapPeriodeTyper()}
          label={{ id: 'UttakInfoPanel.StonadsKonto' }}
          validate={[required]}
        />
        )}
      </FlexColumn>
      {withGradering
        && (
          <>
            <FlexColumn>
              <DecimalField
                name="nyArbeidstidsprosent"
                label={{ id: 'UttakInfoPanel.AndelIArbeid' }}
                bredde="XS"
                validate={[required, maxValue100, minValue1, hasValidDecimal]}
                // @ts-ignore Fiks
                normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
              />
            </FlexColumn>
            <div className={styles.suffix}>%</div>
          </>
        )}
    </FlexRow>
  </ArrowBox>
);

EndreSoknadsperiode.defaultProps = {
  withGradering: false,
};

export default EndreSoknadsperiode;
