import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Column, Row } from 'nav-frontend-grid';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { CheckboxField, formHooks } from '@navikt/ft-form-hooks';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/ft-kodeverk';

import arbeidType from '@fpsak-frontend/kodeverk/src/arbeidType';

import RenderAndreYtelserPerioderFieldArray, {
  FormValues as PerioderFormValues,
  ANDRE_YTELSER_PERIODE_SUFFIX, ANDRE_YTELSER_NAME_PREFIX,
} from './RenderAndreYtelserPerioderFieldArray';

import styles from './andreYtelserPanel.less';

const removeArbeidstyper = (andreYtelser: KodeverkMedNavn[], kunMiliterEllerSiviltjeneste?: boolean): KodeverkMedNavn[] => {
  if (kunMiliterEllerSiviltjeneste) {
    return andreYtelser.filter((ay) => ay.kode === arbeidType.MILITÆR_ELLER_SIVILTJENESTE);
  }
  return andreYtelser.filter((ay) => ay.kode !== arbeidType.UTENLANDSK_ARBEIDSFORHOLD
  && ay.kode !== arbeidType.FRILANSER && ay.kode !== arbeidType.LONN_UNDER_UTDANNING);
};

export type FormValues = {
  [ANDRE_YTELSER_NAME_PREFIX]?: {
    [key: string ]: PerioderFormValues[]};
}

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  kunMiliterEllerSiviltjeneste?: boolean;
}

interface StaticFunctions {
  buildInitialValues: (andreYtelser: KodeverkMedNavn[]) => FormValues;
  transformValues: (values: FormValues, andreYtelser: KodeverkMedNavn[]) => any;
}

/**
 * AndreYtelserPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
const AndreYtelserPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  kunMiliterEllerSiviltjeneste = false,
  alleKodeverk,
}) => {
  const { watch } = formHooks.useFormContext<{ [ANDRE_YTELSER_NAME_PREFIX]: FormValues}>();
  const selectedYtelser = watch(ANDRE_YTELSER_NAME_PREFIX);

  const andreYtelser = alleKodeverk[KodeverkType.ARBEID_TYPE];

  const filtrerteArbeidstyper = useMemo(() => removeArbeidstyper(andreYtelser, kunMiliterEllerSiviltjeneste), [kunMiliterEllerSiviltjeneste]);

  return (
    <BorderBox>
      <SkjemaGruppe className={styles.fullWidth} legend={<FormattedMessage id="Registrering.AndreYtelser.Title" />}>
        {filtrerteArbeidstyper.map((ay) => {
          const ytelseFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
          return (
            <React.Fragment key={ay.kode}>
              <CheckboxField
                key={ay.kode}
                name={`${ANDRE_YTELSER_NAME_PREFIX}.${ay.kode}`}
                label={ay.navn}
                readOnly={readOnly}
              />
              {selectedYtelser && selectedYtelser[ay.kode] && (
                <Row>
                  <Column xs="6">
                    <ArrowBox>
                      <RenderAndreYtelserPerioderFieldArray
                        name={ytelseFieldName}
                        readOnly={readOnly}
                      />
                    </ArrowBox>
                  </Column>
                </Row>
              )}
            </React.Fragment>
          );
        })}
      </SkjemaGruppe>
    </BorderBox>
  );
};

AndreYtelserPanel.buildInitialValues = (andreYtelser: KodeverkMedNavn[]): FormValues => {
  const ytelseInitialValues = {};
  removeArbeidstyper(andreYtelser).forEach((ay) => {
    const ytelsePeriodeFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
    ytelseInitialValues[ytelsePeriodeFieldName] = [{}];
  });
  return { [ANDRE_YTELSER_NAME_PREFIX]: ytelseInitialValues };
};

AndreYtelserPanel.transformValues = (values: FormValues, andreYtelser: KodeverkMedNavn[]): any => {
  const ytelseValues = values[ANDRE_YTELSER_NAME_PREFIX];
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

export default AndreYtelserPanel;
