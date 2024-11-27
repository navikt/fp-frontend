import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { ArbeidType, KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import {
  ANDRE_YTELSER_NAME_PREFIX,
  ANDRE_YTELSER_PERIODE_SUFFIX,
  FormValues as PerioderFormValues,
  RenderAndreYtelserPerioderFieldArray,
} from './RenderAndreYtelserPerioderFieldArray';

const removeArbeidstyper = (
  andreYtelser: KodeverkMedNavn[],
  kunMiliterEllerSiviltjeneste?: boolean,
): KodeverkMedNavn[] => {
  if (kunMiliterEllerSiviltjeneste) {
    return andreYtelser.filter(ay => ay.kode === ArbeidType.MILITÆR_ELLER_SIVILTJENESTE);
  }
  return andreYtelser.filter(
    ay =>
      ay.kode !== ArbeidType.UTENLANDSK_ARBEIDSFORHOLD &&
      ay.kode !== ArbeidType.FRILANSER &&
      ay.kode !== ArbeidType.LONN_UNDER_UTDANNING,
  );
};

export type AndreYtelserFormValue = {
  [ANDRE_YTELSER_NAME_PREFIX]?: {
    [key: string]: PerioderFormValues[];
  };
};
export type TransformValues = {
  [ANDRE_YTELSER_NAME_PREFIX]: {
    periodeFom: string;
    periodeTom: string;
    ytelseType: string;
  }[];
};

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  kunMiliterEllerSiviltjeneste?: boolean;
}

/**
 * AndreYtelserPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const AndreYtelserPanel = ({ readOnly, kunMiliterEllerSiviltjeneste = false, alleKodeverk }: Props) => {
  const { watch } = useFormContext<AndreYtelserFormValue>();
  const selectedYtelser = watch(ANDRE_YTELSER_NAME_PREFIX);

  const andreYtelser = alleKodeverk[KodeverkType.ARBEID_TYPE];

  const filtrerteArbeidstyper = useMemo(
    () => removeArbeidstyper(andreYtelser, kunMiliterEllerSiviltjeneste),
    [kunMiliterEllerSiviltjeneste],
  );

  return (
    <BorderBox>
      <Heading size="small">
        <FormattedMessage id="Registrering.AndreYtelser.Title" />
      </Heading>
      <VerticalSpacer sixteenPx />
      {filtrerteArbeidstyper.map(ay => {
        const ytelseFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
        return (
          <React.Fragment key={ay.kode}>
            <CheckboxField
              key={ay.kode}
              name={`${ANDRE_YTELSER_NAME_PREFIX}.${ay.kode}`}
              label={ay.navn}
              readOnly={readOnly}
            />
            {/* @ts-ignore TODO Er dette korrekt? Burde det vore selectedYtelser[ANDRE_YTELSER_NAME_PREFIX][ay.kode] */}
            {selectedYtelser?.[ay.kode] && (
              <>
                <VerticalSpacer eightPx />
                <ArrowBox>
                  <RenderAndreYtelserPerioderFieldArray name={ytelseFieldName} readOnly={readOnly} />
                </ArrowBox>
              </>
            )}
          </React.Fragment>
        );
      })}
    </BorderBox>
  );
};

AndreYtelserPanel.initialValues = (andreYtelser: KodeverkMedNavn[]): AndreYtelserFormValue => {
  const ytelseInitialValues = {} as Record<string, PerioderFormValues[]>;
  removeArbeidstyper(andreYtelser).forEach(ay => {
    const ytelsePeriodeFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
    ytelseInitialValues[ytelsePeriodeFieldName] = [{} as PerioderFormValues];
  });
  return { [ANDRE_YTELSER_NAME_PREFIX]: ytelseInitialValues };
};

AndreYtelserPanel.transformValues = (
  { andreYtelser }: AndreYtelserFormValue,
  kodeverkAndreYtelser: KodeverkMedNavn[],
): TransformValues => {
  const newValues: TransformValues['andreYtelser'] = [];

  kodeverkAndreYtelser
    .filter(ay => andreYtelser?.[ay.kode])
    .forEach(ay => {
      const ytelsePerioderFieldName = `${ay.kode}_${ANDRE_YTELSER_PERIODE_SUFFIX}`;
      const ytelsePerioder = andreYtelser ? andreYtelser[ytelsePerioderFieldName] : undefined;
      if (ytelsePerioder) {
        ytelsePerioder
          .map(RenderAndreYtelserPerioderFieldArray.transformValues)
          .forEach(tv => newValues.push({ ...tv, ytelseType: ay.kode }));
      }
    });

  return { [ANDRE_YTELSER_NAME_PREFIX]: newValues };
};
