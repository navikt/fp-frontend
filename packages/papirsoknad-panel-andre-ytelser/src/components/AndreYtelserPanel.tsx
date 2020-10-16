import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FieldArray, FormSection, formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Column, Row } from 'nav-frontend-grid';

import { CheckboxField } from '@fpsak-frontend/form';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import arbeidType from '@fpsak-frontend/kodeverk/src/arbeidType';
import { ArrowBox, BorderBox } from '@fpsak-frontend/shared-components';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import RenderAndreYtelserPerioderFieldArray from './RenderAndreYtelserPerioderFieldArray';

import styles from './andreYtelserPanel.less';

export const ANDRE_YTELSER_FORM_NAME_PREFIX = 'andreYtelser';

const ANDRE_YTELSER_PERIODE_SUFFIX = 'PERIODER';

const removeArbeidstyper = (andreYtelser: KodeverkMedNavn[], kunMiliterEllerSiviltjeneste?: boolean) => {
  if (kunMiliterEllerSiviltjeneste) {
    return andreYtelser.filter((ay) => ay.kode === arbeidType.MILITÆR_ELLER_SIVILTJENESTE);
  }
  return andreYtelser.filter((ay) => ay.kode !== arbeidType.UTENLANDSK_ARBEIDSFORHOLD
  && ay.kode !== arbeidType.FRILANSER && ay.kode !== arbeidType.LONN_UNDER_UTDANNING);
};

interface PureOwnProps {
  readOnly: boolean;
  form: string;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  kunMiliterEllerSiviltjeneste?: boolean;
}

interface MappedOwnProps {
  andreYtelser: KodeverkMedNavn[];
  selectedYtelser: {};
}

export type FormValues = {
  [ANDRE_YTELSER_FORM_NAME_PREFIX]: {};
}

interface StaticFunctions {
  buildInitialValues: (andreYtelser: KodeverkMedNavn[]) => any;
  validate?: (values: FormValues, andreYtelser: KodeverkMedNavn[]) => any,
  transformValues?: (values: FormValues, andreYtelser: KodeverkMedNavn[]) => any;
}

/**
 * AndreYtelserPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const AndreYtelserPanel: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  readOnly,
  andreYtelser,
  selectedYtelser,
  kunMiliterEllerSiviltjeneste,
}) => {
  const checkboxFields = removeArbeidstyper(andreYtelser, kunMiliterEllerSiviltjeneste)
    .map((ay) => {
      const ytelseFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
      return (
        <React.Fragment key={ay.kode}>
          <CheckboxField key={ay.kode} name={ay.kode} label={ay.navn} readOnly={readOnly} />
          {selectedYtelser && selectedYtelser[ay.kode]
          && (
          <Row>
            <Column xs="6">
              <ArrowBox>
                <FieldArray
                  name={ytelseFieldName}
                  component={RenderAndreYtelserPerioderFieldArray}
                  readOnly={readOnly}
                />
              </ArrowBox>
            </Column>
          </Row>
          )}
        </React.Fragment>
      );
    });
  return (
    <FormSection name={ANDRE_YTELSER_FORM_NAME_PREFIX}>
      <BorderBox>
        <SkjemaGruppe className={styles.fullWidth} legend={<FormattedMessage id="Registrering.AndreYtelser.Title" />}>
          {checkboxFields}
        </SkjemaGruppe>
      </BorderBox>
    </FormSection>
  );
};

AndreYtelserPanel.defaultProps = {
  kunMiliterEllerSiviltjeneste: false,
};

const mapStateToProps = (state: any, initialProps: PureOwnProps): MappedOwnProps => ({
  selectedYtelser: formValueSelector(initialProps.form)(state, ANDRE_YTELSER_FORM_NAME_PREFIX),
  andreYtelser: initialProps.alleKodeverk[kodeverkTyper.ARBEID_TYPE],
});

AndreYtelserPanel.buildInitialValues = (andreYtelser: KodeverkMedNavn[]) => {
  const ytelseInitialValues = {};
  removeArbeidstyper(andreYtelser).forEach((ay) => {
    const ytelsePeriodeFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
    ytelseInitialValues[ytelsePeriodeFieldName] = [{}];
  });
  return { [ANDRE_YTELSER_FORM_NAME_PREFIX]: ytelseInitialValues };
};

AndreYtelserPanel.validate = (values: FormValues, andreYtelser: KodeverkMedNavn[]) => {
  const ytelseValues = values[ANDRE_YTELSER_FORM_NAME_PREFIX];
  const errors = {
    [ANDRE_YTELSER_FORM_NAME_PREFIX]: {},
  };
  andreYtelser.filter((ay) => ytelseValues && ytelseValues[ay.kode]).forEach((ay) => {
    const ytelsePerioderFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
    errors[ANDRE_YTELSER_FORM_NAME_PREFIX][ytelsePerioderFieldName] = RenderAndreYtelserPerioderFieldArray.validate(ytelseValues[ytelsePerioderFieldName]);
  });
  return errors;
};

AndreYtelserPanel.transformValues = (values: FormValues, andreYtelser: KodeverkMedNavn[]) => {
  const ytelseValues = values[ANDRE_YTELSER_FORM_NAME_PREFIX];
  const newValues = [];

  andreYtelser.filter((ay) => ytelseValues && ytelseValues[ay.kode]).forEach((ay) => {
    const ytelsePerioderFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
    const ytelsePerioder = ytelseValues[ytelsePerioderFieldName];
    if (ytelsePerioder) {
      RenderAndreYtelserPerioderFieldArray.transformValues(ytelsePerioder, ay.kode).forEach((tv) => newValues.push(tv));
    }
  });

  return newValues;
};

export default connect(mapStateToProps)(AndreYtelserPanel);
