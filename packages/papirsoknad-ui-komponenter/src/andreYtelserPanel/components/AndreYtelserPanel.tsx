import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { CheckboxPanel } from '@navikt/ft-form-hooks';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';

import { ArbeidType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { ANDRE_YTELSER_NAME_PREFIX, ANDRE_YTELSER_PERIODER_NAME, ANDRE_YTELSER_TYPER_NAME } from '../constants';
import type { AndreYtelserFormValue, TransformValues } from '../types';
import { RenderAndreYtelserPerioderFieldArray } from './RenderAndreYtelserPerioderFieldArray';

const removeArbeidstyper = (
  andreYtelser: KodeverkMedNavn<ArbeidType>[],
  kunMiliterEllerSiviltjeneste?: boolean,
): KodeverkMedNavn<ArbeidType>[] => {
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
  const andreYtelser = alleKodeverk['ArbeidType'];

  const filtrerteArbeidstyper = useMemo(
    () => removeArbeidstyper(andreYtelser, kunMiliterEllerSiviltjeneste),
    [kunMiliterEllerSiviltjeneste],
  );

  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage id="Registrering.AndreYtelser.Title" />
        </Heading>
        <CheckboxPanel
          isReadOnly={readOnly}
          name={`${ANDRE_YTELSER_NAME_PREFIX}.${ANDRE_YTELSER_TYPER_NAME}`}
          checkboxes={filtrerteArbeidstyper.map(ay => ({
            label: ay.navn,
            value: ay.kode,
            element: (
              <ArrowBox>
                <RenderAndreYtelserPerioderFieldArray
                  name={`${ANDRE_YTELSER_NAME_PREFIX}.${ANDRE_YTELSER_PERIODER_NAME}.${ay.kode}`}
                  readOnly={readOnly}
                />
              </ArrowBox>
            ),
          }))}
        />
      </VStack>
    </BorderBox>
  );
};

AndreYtelserPanel.initialValues = (): AndreYtelserFormValue => {
  return {
    [ANDRE_YTELSER_NAME_PREFIX]: {
      [ANDRE_YTELSER_TYPER_NAME]: [],
      [ANDRE_YTELSER_PERIODER_NAME]: {},
    },
  };
};

AndreYtelserPanel.transformValues = ({
  andreYtelser: { andreYtelserTyper, andreYtelserPerioder },
}: AndreYtelserFormValue): TransformValues => ({
  [ANDRE_YTELSER_NAME_PREFIX]: andreYtelserTyper.flatMap(kode =>
    andreYtelserPerioder[kode].map(periode => ({
      ytelseType: kode,
      ...periode,
    })),
  ),
});
