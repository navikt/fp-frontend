import React from 'react';
import { connect } from 'react-redux';
import { FieldArray, FormSection, formValueSelector } from 'redux-form';
import { injectIntl } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Column, Row } from 'nav-frontend-grid';

import { CheckboxField } from '@fpsak-frontend/form';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__prop-types... Remove this comment to see the full error message
import { kodeverkPropType } from '@fpsak-frontend/prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import arbeidType from '@fpsak-frontend/kodeverk/src/arbeidType';
import { ArrowBox, BorderBox } from '@fpsak-frontend/shared-components';

import RenderAndreYtelserPerioderFieldArray from './RenderAndreYtelserPerioderFieldArray';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './andreYtelserPanel.less' or i... Remove this comment to see the full error message
import styles from './andreYtelserPanel.less';

export const ANDRE_YTELSER_FORM_NAME_PREFIX = 'andreYtelser';

const ANDRE_YTELSER_PERIODE_SUFFIX = 'PERIODER';

const removeArbeidstyper = (andreYtelser: any, kunMiliterEllerSiviltjeneste: any) => {
  if (kunMiliterEllerSiviltjeneste) {
    return andreYtelser.filter((ay: any) => ay.kode === arbeidType.MILITÆR_ELLER_SIVILTJENESTE);
  }
  return andreYtelser.filter((ay: any) => ay.kode !== arbeidType.UTENLANDSK_ARBEIDSFORHOLD
  && ay.kode !== arbeidType.FRILANSER && ay.kode !== arbeidType.LONN_UNDER_UTDANNING);
};

type OwnAndreYtelserPanelImplProps = {
    intl: {};
    readOnly: boolean;
    andreYtelser: any; // TODO: kodeverkPropType
    selectedYtelser: {};
    kunMiliterEllerSiviltjeneste?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'AndreYtelserPanelImplProps' circularly... Remove this comment to see the full error message
type AndreYtelserPanelImplProps = OwnAndreYtelserPanelImplProps & typeof AndreYtelserPanelImpl.defaultProps;

/**
 * AndreYtelserPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'AndreYtelserPanelImpl' implicitly has type 'any' ... Remove this comment to see the full error message
export const AndreYtelserPanelImpl = ({
  intl, readOnly, andreYtelser, selectedYtelser, kunMiliterEllerSiviltjeneste,
}: AndreYtelserPanelImplProps) => {
  const checkboxFields = removeArbeidstyper(andreYtelser, kunMiliterEllerSiviltjeneste)
    .map((ay: any) => {
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
        <SkjemaGruppe className={styles.fullWidth} legend={intl.formatMessage({ id: 'Registrering.AndreYtelser.Title' })}>
          {checkboxFields}
        </SkjemaGruppe>
      </BorderBox>
    </FormSection>
  );
};

AndreYtelserPanelImpl.defaultProps = {
  kunMiliterEllerSiviltjeneste: false,
};

const mapStateToProps = (state: any, initialProps: any) => ({
  selectedYtelser: formValueSelector(initialProps.form)(state, ANDRE_YTELSER_FORM_NAME_PREFIX),
  andreYtelser: initialProps.alleKodeverk[kodeverkTyper.ARBEID_TYPE],
});

const AndreYtelserPanel = injectIntl(AndreYtelserPanelImpl);

// @ts-expect-error ts-migrate(2339) FIXME: Property 'buildInitialValues' does not exist on ty... Remove this comment to see the full error message
AndreYtelserPanel.buildInitialValues = (andreYtelser: any) => {
  const ytelseInitialValues = {};
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
  removeArbeidstyper(andreYtelser).forEach((ay: any) => {
    const ytelsePeriodeFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
    // @ts-expect-error ts-migrate(7053) FIXME: No index signature with a parameter of type 'strin... Remove this comment to see the full error message
    ytelseInitialValues[ytelsePeriodeFieldName] = [{}];
  });
  return { [ANDRE_YTELSER_FORM_NAME_PREFIX]: ytelseInitialValues };
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'validate' does not exist on type 'FC<Wit... Remove this comment to see the full error message
AndreYtelserPanel.validate = (values: any, andreYtelser: any) => {
  const ytelseValues = values[ANDRE_YTELSER_FORM_NAME_PREFIX];
  const errors = {
    [ANDRE_YTELSER_FORM_NAME_PREFIX]: {},
  };
  andreYtelser.filter((ay: any) => ytelseValues && ytelseValues[ay.kode]).forEach((ay: any) => {
    const ytelsePerioderFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
    // @ts-expect-error ts-migrate(7053) FIXME: No index signature with a parameter of type 'strin... Remove this comment to see the full error message
    errors[ANDRE_YTELSER_FORM_NAME_PREFIX][ytelsePerioderFieldName] = RenderAndreYtelserPerioderFieldArray.validate(ytelseValues[ytelsePerioderFieldName]);
  });
  return errors;
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'transformValues' does not exist on type ... Remove this comment to see the full error message
AndreYtelserPanel.transformValues = (values: any, andreYtelser: any) => {
  const ytelseValues = values[ANDRE_YTELSER_FORM_NAME_PREFIX];
  const newValues: any = [];

  andreYtelser.filter((ay: any) => ytelseValues && ytelseValues[ay.kode]).forEach((ay: any) => {
    const ytelsePerioderFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
    const ytelsePerioder = ytelseValues[ytelsePerioderFieldName];
    if (ytelsePerioder) {
      RenderAndreYtelserPerioderFieldArray.transformValues(ytelsePerioder, ay.kode).forEach((tv: any) => newValues.push(tv));
    }
  });

  return newValues;
};

export default connect(mapStateToProps)(AndreYtelserPanel);
