import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { FieldArrayFieldsProps, FieldArrayMetaProps, getFormValues } from 'redux-form';
import moment from 'moment/moment';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import AlertStripe from 'nav-frontend-alertstriper';

import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { hasValidDecimal, maxValue, required } from '@navikt/ft-utils';
import {
  CheckboxField, DatepickerField, DecimalField, InputField, SelectField, PeriodFieldArray,
} from '@fpsak-frontend/form';
import arbeidskategori from '@fpsak-frontend/kodeverk/src/arbeidskategori';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import { gyldigeUttakperioder } from './RenderPermisjonPeriodeFieldArray';

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

const mapKvoter = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeUttakperioder.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

const mapArbeidskategori = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigArbeidskategori.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface PureOwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  graderingKvoter: KodeverkMedNavn[];
  readOnly: boolean;
  arbeidskategoriTyper: KodeverkMedNavn[];
  graderingPrefix: string;
  namePrefix: string;
  form: string;
}

interface MappedOwnProps {
  graderingValues: { harSamtidigUttak: boolean; }[];
}

/**
 *  RenderGraderingPeriodeFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for dato for bestemmelse av graderingperiode.
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderGraderingPeriodeFieldArray: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps> = ({
  intl,
  fields,
  meta,
  graderingKvoter,
  readOnly,
  graderingValues,
  arbeidskategoriTyper,
}) => (
  <PeriodFieldArray
    fields={fields}
    meta={meta}
    emptyPeriodTemplate={defaultGraderingPeriode}
    bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Gradering.LeggTilPeriode' })}
    readOnly={readOnly}
  >
    {(periodeElementFieldId, index, getRemoveButton) => {
      const { periodeFom } = fields.get(index);
      const { harSamtidigUttak } = graderingValues[index];
      const periodeFomForTidlig = periodeFom && moment(periodeFom).isBefore(moment('2019-01-01'));
      return (
        <Row key={periodeElementFieldId}>
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
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    label={{ id: 'Registrering.Permisjon.periodeTom' }}
                    name={`${periodeElementFieldId}.periodeTom`}
                  />
                </FlexColumn>
                <FlexColumn className={styles.prosentHeader}>
                  <Undertekst>
                    <FormattedMessage id="Registrering.Permisjon.Gradering.Prosentandel" />
                  </Undertekst>
                  <DecimalField
                    name={`${periodeElementFieldId}.prosentandelArbeid`}
                    bredde="S"
                    validate={[hasValidDecimal,
                      maxValue100,
                    ]}
                    // @ts-ignore Fiks
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
                      validate={[hasValidDecimal, maxValue100]}
                      label={{ id: 'Registrering.Permisjon.SamtidigUttaksprosent' }}
                      // @ts-ignore Fiks
                      normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                    />
                  )}
                </FlexColumn>
                {getRemoveButton && (
                  <FlexColumn className={styles.placeRemoveButton}>
                    {getRemoveButton()}
                  </FlexColumn>
                )}
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

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const values = getFormValues(ownProps.meta.form)(state);
  const graderingValues = values ? values[ownProps.namePrefix][ownProps.graderingPrefix] : arrayMedTomtElement;
  return {
    graderingValues,
  };
};

export default connect(mapStateToProps)(injectIntl(RenderGraderingPeriodeFieldArray));
