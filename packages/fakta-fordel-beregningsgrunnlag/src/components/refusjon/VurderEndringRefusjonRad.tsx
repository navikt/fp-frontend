import React, { FunctionComponent } from 'react';
import {
  dateFormat,
  hasValidDate,
  required,
  dateAfterOrEqual,
  parseCurrencyInput,
  minValueFormatted,
  maxValueFormatted,
  removeSpacesFromNumber,
  formatCurrencyNoKr,
} from '@fpsak-frontend/utils';
import { Column, Row } from 'nav-frontend-grid';
import {
  behandlingFormValueSelector, CheckboxField, DatepickerField, InputField,
} from '@fpsak-frontend/form';
import { FormattedMessage } from 'react-intl';

import { Normaltekst } from 'nav-frontend-typografi';
import { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel } from '@fpsak-frontend/types';
import { connect } from 'react-redux';
import styles from './vurderEndringRefusjonRad.less';
import { createVisningsnavnForAktivitetRefusjon } from '../util/visningsnavnHelper';

const FIELD_KEY_REFUSJONSTART = 'REFUSJON_ENDRING_DATO';
const FIELD_KEY_DELVIS_REF = 'DELVIS_REFUSJON_FØR_START_BELØP';
const FIELD_KEY_MÅ_SETTE_REFUSJON_SLUTT = 'MA_SETTE_REFUSJON_SLUTT';
const FIELD_KEY_REFUSJON_SLUTT = 'REFUSJON_SLUTT_DATO';

const lagNøkkel = (prefix: string, andel: RefusjonTilVurderingAndel): string => {
  if (andel.arbeidsgiver.arbeidsgiverOrgnr) {
    return `${prefix}${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef}`;
  }
  return `${prefix}${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef}`;
};

export const lagNøkkelRefusjonsstart = (andel: RefusjonTilVurderingAndel): string => lagNøkkel(FIELD_KEY_REFUSJONSTART, andel);
export const lagNøkkelDelvisRefusjon = (andel: RefusjonTilVurderingAndel) : string => lagNøkkel(FIELD_KEY_DELVIS_REF, andel);
export const lagNøkkelMåSetteRefusjonsslutt = (andel: RefusjonTilVurderingAndel) : string => lagNøkkel(FIELD_KEY_MÅ_SETTE_REFUSJON_SLUTT, andel);
export const lagNøkkelRefusjonsslutt = (andel: RefusjonTilVurderingAndel) : string => lagNøkkel(FIELD_KEY_REFUSJON_SLUTT, andel);

type OwnProps = {
    refusjonAndel?: RefusjonTilVurderingAndel;
    readOnly: boolean;
    erAksjonspunktÅpent: boolean;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
    behandlingId: number;
    behandlingVersjon: number;
    skjæringstidspunkt: string;
    formName: string;
};

type TransformedValues = {
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktoerId?: string;
  internArbeidsforholdRef?: string;
  fastsattRefusjonFom: string;
  delvisRefusjonPrMndFørStart?: number;
}

type MappedOwnProps = {
  valgtDatoErLikSTP?: boolean;
  skalSetteTOM?: boolean;
}

interface StaticFunctions {
  buildInitialValues: (andel: RefusjonTilVurderingAndel) => any;
  transformValues: (values: any, andel: RefusjonTilVurderingAndel, skjæringstidspunkt: string) => TransformedValues;
}

export const VurderEndringRefusjonRadImpl: FunctionComponent<OwnProps & MappedOwnProps> & StaticFunctions = ({
  refusjonAndel,
  readOnly,
  erAksjonspunktÅpent,
  arbeidsgiverOpplysningerPerId,
  valgtDatoErLikSTP,
  skalSetteTOM,
}) => {
  if (!refusjonAndel) {
    return null;
  }
  const navn = createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId);
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
            isEdited={!!refusjonAndel.fastsattNyttRefusjonskravFom && !erAksjonspunktÅpent}
          />
        </Column>
      </Row>
      {refusjonAndel.skalKunneFastsetteDelvisRefusjon && !valgtDatoErLikSTP && (
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
              isEdited={!!refusjonAndel.fastsattDelvisRefusjonPrMnd && !erAksjonspunktÅpent}
            />
          </Column>
        </Row>
      )}
      <Row>
        <Column xs="6">
          <CheckboxField
            readOnly={readOnly}
            name={lagNøkkelMåSetteRefusjonsslutt(refusjonAndel)}
            label={<FormattedMessage id="BeregningInfoPanel.RefusjonBG.MåSetteSlutt" />}
          />
        </Column>
      </Row>
      {skalSetteTOM && (
        <Row>
          <Column xs="4">
            <Normaltekst className={styles.marginTopp}>
              <FormattedMessage
                id="BeregningInfoPanel.RefusjonBG.RefusjonTil"
              />
            </Normaltekst>
          </Column>
          <Column xs="4">
            <DatepickerField
              name={lagNøkkelRefusjonsslutt(refusjonAndel)}
              readOnly={readOnly}
              validate={[required, hasValidDate, dateAfterOrEqual(refusjonAndel.tidligsteMuligeRefusjonsdato)]}
              isEdited={!!refusjonAndel.fastsattNyttRefusjonskravFom && !erAksjonspunktÅpent}
            />
          </Column>
        </Row>
      )}
    </>
  );
};

VurderEndringRefusjonRadImpl.buildInitialValues = (refusjonAndel: RefusjonTilVurderingAndel) => {
  const initialValues = {};
  initialValues[lagNøkkelRefusjonsstart(refusjonAndel)] = refusjonAndel.fastsattNyttRefusjonskravFom;
  initialValues[lagNøkkelDelvisRefusjon(refusjonAndel)] = formatCurrencyNoKr(refusjonAndel.fastsattDelvisRefusjonPrMnd);
  return initialValues;
};

VurderEndringRefusjonRadImpl.transformValues = (values, andel: RefusjonTilVurderingAndel, skjæringstidspunkt: string) => {
  const datoNøkkel = lagNøkkelRefusjonsstart(andel);
  const fastsattDato = values[datoNøkkel];
  let delvisRefusjonPrMnd = null;
  if (andel.skalKunneFastsetteDelvisRefusjon && fastsattDato !== skjæringstidspunkt) {
    const delvisNøkkel = lagNøkkelDelvisRefusjon(andel);
    delvisRefusjonPrMnd = removeSpacesFromNumber(values[delvisNøkkel]);
  }
  return {
    arbeidsgiverOrgnr: andel.arbeidsgiver.arbeidsgiverOrgnr,
    arbeidsgiverAktoerId: andel.arbeidsgiver.arbeidsgiverAktørId,
    internArbeidsforholdRef: andel.internArbeidsforholdRef,
    fastsattRefusjonFom: fastsattDato,
    delvisRefusjonPrMndFørStart: delvisRefusjonPrMnd,
  };
};

const erValgtDatoLikSTP = (stp: string, verdiFraForm?: string): boolean => {
  if (!verdiFraForm) {
    return false;
  }
  return new Date(verdiFraForm).getTime() === new Date(stp).getTime();
};

const mapStateToProps = (state: any, ownProps: OwnProps): MappedOwnProps => ({
  valgtDatoErLikSTP: (erValgtDatoLikSTP(ownProps.skjæringstidspunkt,
    behandlingFormValueSelector(ownProps.formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, lagNøkkelRefusjonsstart(ownProps.refusjonAndel)))),
  skalSetteTOM: behandlingFormValueSelector(ownProps.formName,
    ownProps.behandlingId,
    ownProps.behandlingVersjon)(state, lagNøkkelMåSetteRefusjonsslutt(ownProps.refusjonAndel)),
});

const VurderEndringRefusjonRad = connect(mapStateToProps)(VurderEndringRefusjonRadImpl);

export default VurderEndringRefusjonRad;
