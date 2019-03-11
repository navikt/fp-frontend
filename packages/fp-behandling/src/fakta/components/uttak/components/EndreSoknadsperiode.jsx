import React from 'react';
import PropTypes from 'prop-types';

import { FlexColumn, FlexRow, ArrowBox } from '@fpsak-frontend/shared-components';
import { DecimalField, SelectField, PeriodpickerField } from '@fpsak-frontend/form';
import oppholdArsakType, { oppholdArsakKontoNavn } from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import {
  required,
  hasValidDecimal,
  maxValue,
  minValue,
} from '@fpsak-frontend/utils';
import { uttakPeriodeNavn, stonadskontoType } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';

import styles from '../perioder/periodeTyper.less';

const maxValue100 = maxValue(100);
const minValue1 = minValue(1);

const selectValues = () => Object.keys(stonadskontoType)
  .map(key => (<option key={key} value={key}>{uttakPeriodeNavn[key]}</option>));

const gyldigeÅrsaker = [
  oppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER];

const mapPeriodeTyper = () => Object.keys(oppholdArsakType)
  .filter(key => gyldigeÅrsaker.includes(key))
  .map(key => (<option key={key} value={key}>{oppholdArsakKontoNavn[key]}</option>));

const ElementWrapper = ({ children }) => children;

export const EndreSoknadsperiode = ({ withGradering, oppholdArsak }) => (
  <ArrowBox marginTop={10}>
    <FlexRow>
      <FlexColumn>
        <PeriodpickerField
          names={['nyFom', 'nyTom']}
          label={{ id: 'UttakInfoPanel.Periode' }}
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
        )
        }
        {oppholdArsak && oppholdArsak.kode !== oppholdArsakType.UDEFINERT
        && (
        <SelectField
          name="oppholdArsak"
          selectValues={mapPeriodeTyper()}
          label={{ id: 'UttakInfoPanel.StonadsKonto' }}
          validate={[required]}
        />
        )
        }
      </FlexColumn>
      {withGradering
        && (
        <ElementWrapper>
          <FlexColumn>
            <DecimalField
              name="nyArbeidstidsprosent"
              label={{ id: 'UttakInfoPanel.AndelIArbeid' }}
              bredde="XS"
              validate={[required, maxValue100, minValue1, hasValidDecimal]}
              normalizeOnBlur={value => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
            />
          </FlexColumn>
          <div className={styles.suffix}>%</div>
        </ElementWrapper>
        )
      }
    </FlexRow>
  </ArrowBox>
);

EndreSoknadsperiode.propTypes = {
  withGradering: PropTypes.bool,
  oppholdArsak: PropTypes.shape(),
};

EndreSoknadsperiode.defaultProps = {
  withGradering: false,
  oppholdArsak: undefined,
};

export default EndreSoknadsperiode;
