import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import moment from 'moment/moment';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import AlertStripe from 'nav-frontend-alertstriper';

import {
  FlexColumn, FlexContainer, FlexRow, PeriodFieldArray, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { hasValidDecimal, maxValue, required } from '@fpsak-frontend/utils';
import {
  CheckboxField, DatepickerField, DecimalField, InputField, SelectField,
} from '@fpsak-frontend/form';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__prop-types... Remove this comment to see the full error message
import { kodeverkPropType } from '@fpsak-frontend/prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import arbeidskategori from '@fpsak-frontend/kodeverk/src/arbeidskategori';

import { gyldigeUttakperioder } from './RenderPermisjonPeriodeFieldArray';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './renderGraderingPeriodeFieldA... Remove this comment to see the full error message
import styles from './renderGraderingPeriodeFieldArray.less';

const defaultGraderingPeriode = {
  periodeFom: '',
  periodeTom: '',
  periodeForGradering: '',
  prosentandelArbeid: '',
  skalGraderes: false,
};

export const gyldigArbeidskategori = [
  arbeidskategori.ARBEIDSTAKER,
  arbeidskategori.SELVSTENDIG_NAERINGSDRIVENDE,
  arbeidskategori.FRILANSER,
];

const maxValue100 = maxValue(100);

const mapKvoter = (typer: any) => typer
  .filter(({
    kode,
  }: any) => gyldigeUttakperioder.includes(kode))
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

const mapArbeidskategori = (typer: any) => typer
  .filter(({
    kode,
  }: any) => gyldigArbeidskategori.includes(kode))
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

type RenderGraderingPeriodeFieldArrayProps = {
    fields: {};
    graderingKvoter: any; // TODO: kodeverkPropType
    meta: {};
    readOnly: boolean;
    graderingValues: {}[];
    arbeidskategoriTyper: any; // TODO: kodeverkPropType
};

/**
 *  RenderGraderingPeriodeFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av graderingperiode.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderGraderingPeriodeFieldArray = ({
  fields, meta, graderingKvoter, readOnly, graderingValues, arbeidskategoriTyper,
}: RenderGraderingPeriodeFieldArrayProps) => (
  <PeriodFieldArray
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    fields={fields}
    // @ts-expect-error ts-migrate(2740) FIXME: Type '{}' is missing the following properties from... Remove this comment to see the full error message
    meta={meta}
    emptyPeriodTemplate={defaultGraderingPeriode}
    textCode="Registrering.Permisjon.Gradering.LeggTilPeriode"
    readOnly={readOnly}
  >
    {(periodeElementFieldId, index, getRemoveButton) => {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'get' does not exist on type '{}'.
      const { periodeFom } = fields.get(index);
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'harSamtidigUttak' does not exist on type... Remove this comment to see the full error message
      const { harSamtidigUttak } = graderingValues[index];
      const periodeFomForTidlig = periodeFom && moment(periodeFom).isBefore(moment('2019-01-01'));
      return (
        <Row key={periodeElementFieldId}>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'length' does not exist on type '{}'. */}
          <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
            <FlexContainer wrap>
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    name={`${periodeElementFieldId}.periodeForGradering`}
                    bredde="s"
                    selectValues={mapKvoter(graderingKvoter)}
                    label={{ id: 'Registrering.Permisjon.Gradering.Periode' }}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    label={{ id: 'Registrering.Permisjon.periodeFom' }}
                    name={`${periodeElementFieldId}.periodeFom`}
                    // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                    defaultValue={null}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    label={{ id: 'Registrering.Permisjon.periodeTom' }}
                    name={`${periodeElementFieldId}.periodeTom`}
                    // @ts-expect-error ts-migrate(2322) FIXME: Property 'defaultValue' does not exist on type 'In... Remove this comment to see the full error message
                    defaultValue={null}
                  />
                </FlexColumn>
                <FlexColumn className={styles.prosentHeader}>
                  <Undertekst>
                    <FormattedMessage id="Registrering.Permisjon.Gradering.Prosentandel" />
                  </Undertekst>
                  <DecimalField
                    name={`${periodeElementFieldId}.prosentandelArbeid`}
                    bredde="S"
                    // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
                    validate={[hasValidDecimal,
                      // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
                      maxValue100,
                    ]}
                    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number'.
                    normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    label={{ id: 'Registrering.Permisjon.Orgnr' }}
                    name={`${periodeElementFieldId}.arbeidsgiverIdentifikator`}
                    bredde="S"
                  />
                </FlexColumn>
              </FlexRow>
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    label={{ id: 'Registrering.Permisjon.ArbeidskategoriLabel' }}
                    name={`${periodeElementFieldId}.arbeidskategoriType`}
                    bredde="m"
                    selectValues={mapArbeidskategori(arbeidskategoriTyper)}
                    // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type '({ id:... Remove this comment to see the full error message
                    validate={[required]}
                  />
                </FlexColumn>
                <FlexColumn>
                  <div className={styles.graderesHeader}>
                    <Undertekst>
                      <FormattedMessage id="Registrering.Permisjon.Gradering.SkalGraderes" />
                    </Undertekst>
                  </div>
                  <CheckboxField
                    name={`${periodeElementFieldId}.skalGraderes`}
                    label=" "
                  />
                </FlexColumn>
                <FlexColumn>
                  <div className={styles.smalHeader}>
                    <Undertekst>
                      <FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />
                    </Undertekst>
                    <CheckboxField
                      readOnly={readOnly}
                      name={`${periodeElementFieldId}.flerbarnsdager`}
                      label=" "
                    />
                  </div>
                </FlexColumn>
                <FlexColumn>
                  <div className={styles.smalHeader}>
                    <Undertekst>
                      <FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />
                    </Undertekst>
                  </div>
                  <CheckboxField
                    name={`${periodeElementFieldId}.harSamtidigUttak`}
                    label=""
                  />
                </FlexColumn>
                <FlexColumn>
                  {harSamtidigUttak
                  && (
                    <DecimalField
                      name={`${periodeElementFieldId}.samtidigUttaksprosent`}
                      bredde="S"
                      // @ts-expect-error ts-migrate(2322) FIXME: Type '(text: any) => ({ id: string; text?: undefin... Remove this comment to see the full error message
                      validate={[hasValidDecimal, maxValue100]}
                      label={{ id: 'Registrering.Permisjon.SamtidigUttaksprosent' }}
                      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number'.
                      normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                    />
                  )}
                </FlexColumn>
                <FlexColumn className={styles.placeRemoveButton}>
                  {/* @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message */}
                  {getRemoveButton()}
                </FlexColumn>
              </FlexRow>
              {periodeFomForTidlig
              && (
                <div>
                  <FlexRow wrap>
                    <AlertStripe type="advarsel">
                      <FormattedMessage id="Registrering.Permisjon.PeriodeFomForTidlig" />
                    </AlertStripe>
                  </FlexRow>
                  <VerticalSpacer eightPx />
                </div>
              )}
            </FlexContainer>
          </Column>
        </Row>
      );
    }}
  </PeriodFieldArray>
);

const arrayMedTomtElement = [{}];

const mapStateToProps = (state: any, ownProps: any) => {
  const values = getFormValues(ownProps.meta.form)(state);
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const graderingValues = values ? values[ownProps.namePrefix][ownProps.graderingPrefix] : arrayMedTomtElement;
  return {
    graderingValues,
  };
};

export default connect(mapStateToProps)(RenderGraderingPeriodeFieldArray);
