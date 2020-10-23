import React from 'react';
import {
  dateFormat, hasValidDate, required, dateAfterOrEqual, parseCurrencyInput, minValueFormatted, maxValueFormatted, removeSpacesFromNumber,
} from '@fpsak-frontend/utils';
import { Column, Row } from 'nav-frontend-grid';
import { DatepickerField, InputField } from '@fpsak-frontend/form';
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

const FIELD_KEY_REFUSJONSTART = 'REFUSJON_ENDRING_DATO';
const FIELD_KEY_DELVIS_REF = 'DELVIS_REFUSJON_FØR_START_BELØP';

const lagNøkkel = (prefix, andel) => {
  if (andel.arbeidsgiverId.arbeidsgiverOrgnr) {
    return `${prefix}${andel.arbeidsgiverId.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef}`;
  }
  return `${prefix}${andel.arbeidsgiverId.arbeidsgiverAktørId}${andel.internArbeidsforholdRef}`;
};

export const lagNøkkelRefusjonsstart = (andel) => lagNøkkel(FIELD_KEY_REFUSJONSTART, andel);
export const lagNøkkelDelvisRefusjon = (andel) => lagNøkkel(FIELD_KEY_DELVIS_REF, andel);

export const VurderEndringRefusjonRad = ({
  refusjonAndel,
  readOnly,
}) => {
  if (!refusjonAndel) {
    return null;
  }
  const navn = visningsnavn(refusjonAndel);
  const andelTekst = refusjonAndel.skalKunneFastsetteDelvisRefusjon
    ? 'BeregningInfoPanel.RefusjonBG.TidligereRefusjon'
    : 'BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon';
  return (
    <>
      <Row>
        <Column xs="8">
          <FormattedMessage
            id={andelTekst}
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
            name={lagNøkkelRefusjonsstart(refusjonAndel)}
            readOnly={readOnly}
            validate={[required, hasValidDate, dateAfterOrEqual(refusjonAndel.tidligsteMuligeRefusjonsdato)]}
            isEdited={!!refusjonAndel.fastsattNyttRefusjonskravFom}
          />
        </Column>
      </Row>
      {refusjonAndel.skalKunneFastsetteDelvisRefusjon && (
        <Row>
          <Column xs="4">
            <Normaltekst className={styles.marginTopp}>
              <FormattedMessage
                id="BeregningInfoPanel.RefusjonBG.DelvisPrMnd"
              />
            </Normaltekst>
          </Column>
          <Column xs="4">
            <InputField
              name={lagNøkkelDelvisRefusjon(refusjonAndel)}
              bredde="S"
              validate={[required, minValueFormatted(1), maxValueFormatted(refusjonAndel.maksTillattDelvisRefusjonPrMnd)]}
              parse={parseCurrencyInput}
              readOnly={readOnly}
              isEdited={!!refusjonAndel.fastsattDelvisRefusjonPrMnd}
            />
          </Column>
        </Row>
      )}
    </>
  );
};

VurderEndringRefusjonRad.buildInitialValues = (refusjonAndel) => (refusjonAndel.fastsattNyttRefusjonskravFom);

VurderEndringRefusjonRad.transformValues = (values, andel) => {
  let delvisRefusjonPrMnd = null;
  if (andel.skalKunneFastsetteDelvisRefusjon) {
    const delvisNøkkel = lagNøkkelDelvisRefusjon(andel);
    delvisRefusjonPrMnd = removeSpacesFromNumber(values[delvisNøkkel]);
  }
  const datoNøkkel = lagNøkkelRefusjonsstart(andel);
  const fastsattDato = values[datoNøkkel];
  return {
    arbeidsgiverOrgnr: andel.arbeidsgiverId.arbeidsgiverOrgnr,
    arbeidsgiverAktoerId: andel.arbeidsgiverId.arbeidsgiverAktørId,
    internArbeidsforholdRef: andel.internArbeidsforholdRef,
    fastsattRefusjonFom: fastsattDato,
    delvisRefusjonPrMndFørStart: delvisRefusjonPrMnd,
    skalKunneFastsetteDelvisRefusjon: andel.skalKunneFastsetteDelvisRefusjon,
  };
};

VurderEndringRefusjonRad.propTypes = {
  refusjonAndel: refusjonAndelTilVurderingPropType,
  readOnly: PropTypes.bool.isRequired,
};

export default VurderEndringRefusjonRad;
