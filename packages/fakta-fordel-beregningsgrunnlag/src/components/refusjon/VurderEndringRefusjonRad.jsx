import React from 'react';
import {
  dateFormat, hasValidDate, required, dateAfterOrEqual,
} from '@fpsak-frontend/utils';
import { Column, Row } from 'nav-frontend-grid';
import { DatepickerField } from '@fpsak-frontend/form';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Normaltekst } from 'nav-frontend-typografi';
import { refusjonAndelTilVurderingPropType } from '../../propTypes/beregningsgrunnlagPropType';
import styles from './vurderEndringRefusjonRad.less';

const visningsnavn = (andel) => {
  if (andel.arbeidsgiverId.arbeidsgiverOrgnr) {
    return `${andel.arbeidsgiverNavn} (${andel.arbeidsgiverId.arbeidsgiverOrgnr})`;
  }
  return `${andel.arbeidsgiverNavn}`;
};

const FIELD_KEY = 'REFUSJON_ENDRING_DATO';

export const lagNøkkel = (andel) => {
  if (andel.arbeidsgiverId.arbeidsgiverOrgnr) {
    return `${FIELD_KEY}${andel.arbeidsgiverId.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef}`;
  }
  return `${FIELD_KEY}${andel.arbeidsgiverId.arbeidsgiverAktørId}${andel.internArbeidsforholdRef}`;
};

export const VurderEndringRefusjonRad = ({
  refusjonAndel,
  readOnly,
}) => {
  if (!refusjonAndel) {
    return null;
  }
  const navn = visningsnavn(refusjonAndel);
  return (
    <>
      <Row>
        <Column xs="8">
          <FormattedMessage
            id="BeregningInfoPanel.RefusjonBG.Arbeidsgiver"
            values={{
              ag: navn,
              dato: dateFormat(refusjonAndel.nyttRefusjonskravFom),
              b: (chunks) => <b>{chunks}</b>,
            }}
          />
        </Column>
      </Row>
      <Row>
        <Column xs="4">
          <Normaltekst className={styles.marginTopp}>
            <FormattedMessage
              id="BeregningInfoPanel.RefusjonBG.RefusjonFra"
            />
          </Normaltekst>
        </Column>
        <Column xs="4">
          <DatepickerField
            name={lagNøkkel(refusjonAndel)}
            readOnly={readOnly}
            validate={[required, hasValidDate, dateAfterOrEqual(refusjonAndel.tidligsteMuligeRefusjonsdato)]}
            isEdited={!!refusjonAndel.fastsattNyttRefusjonskravFom}
          />
        </Column>
      </Row>
    </>
  );
};

VurderEndringRefusjonRad.buildInitialValues = (refusjonAndel) => (refusjonAndel.fastsattNyttRefusjonskravFom);

VurderEndringRefusjonRad.transformValues = (values, andel) => {
  const nøkkel = lagNøkkel(andel);
  const fastsattDato = values[nøkkel];
  return {
    arbeidsgiverOrgnr: andel.arbeidsgiverId.arbeidsgiverOrgnr,
    arbeidsgiverAktoerId: andel.arbeidsgiverId.arbeidsgiverAktørId,
    internArbeidsforholdRef: andel.internArbeidsforholdRef,
    fastsattRefusjonFom: fastsattDato,
  };
};

VurderEndringRefusjonRad.propTypes = {
  refusjonAndel: refusjonAndelTilVurderingPropType,
  readOnly: PropTypes.bool.isRequired,
};

export default VurderEndringRefusjonRad;
