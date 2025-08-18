import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Checkbox, Heading, VStack } from '@navikt/ds-react';
import { RhfCheckboxGroup } from '@navikt/ft-form-hooks';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';

import { ArbeidType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { ANDRE_YTELSER_NAME_PREFIX, ANDRE_YTELSER_PERIODER_NAME, ANDRE_YTELSER_TYPER_NAME } from '../constants';
import type { AndreYtelserFormValue, TransformValues } from '../types';
import { RenderAndreYtelserPerioderFieldArray } from './RenderAndreYtelserPerioderFieldArray';

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
  const { control } = useFormContext<AndreYtelserFormValue>();

  const filtrerteArbeidstyper = filtrerArbeidstyper(alleKodeverk['ArbeidType'], kunMiliterEllerSiviltjeneste);

  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
          <FormattedMessage id="Registrering.AndreYtelser.Title" />
        </Heading>
        <RhfCheckboxGroup
          name={`${ANDRE_YTELSER_NAME_PREFIX}.${ANDRE_YTELSER_TYPER_NAME}`}
          control={control}
          isReadOnly={readOnly}
        >
          {filtrerteArbeidstyper.map(at => (
            <CheckboxWithInfo key={at.kode} arbeidstype={at} readOnly={readOnly} />
          ))}
        </RhfCheckboxGroup>
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

const CheckboxWithInfo = ({
  arbeidstype,
  readOnly,
}: {
  arbeidstype: KodeverkMedNavn<'ArbeidType'>;
  readOnly: boolean;
}) => {
  const { watch } = useFormContext<AndreYtelserFormValue>();
  const valgteArbeidstyper = watch(`${ANDRE_YTELSER_NAME_PREFIX}.${ANDRE_YTELSER_TYPER_NAME}`);

  const [visPerioder, setVisPeriode] = useState(valgteArbeidstyper.includes(arbeidstype.kode));

  return (
    <VStack gap="space-12">
      <Checkbox value={arbeidstype.kode} onClick={() => setVisPeriode(!visPerioder)} disabled={readOnly}>
        {arbeidstype.navn}
      </Checkbox>
      {visPerioder && (
        <ArrowBox>
          <RenderAndreYtelserPerioderFieldArray
            name={`${ANDRE_YTELSER_NAME_PREFIX}.${ANDRE_YTELSER_PERIODER_NAME}.${arbeidstype.kode}`}
            readOnly={readOnly}
          />
        </ArrowBox>
      )}
    </VStack>
  );
};

const filtrerArbeidstyper = (
  andreYtelser: KodeverkMedNavn<'ArbeidType'>[],
  kunMiliterEllerSiviltjeneste?: boolean,
): KodeverkMedNavn<'ArbeidType'>[] => {
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
