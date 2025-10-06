import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import { TrueFalseInput } from '@navikt/fp-fakta-felles';
import type { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import type { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

export type FormValues = {
  omsorg?: boolean;
};

interface Props {
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export const OmsorgFaktaFields = ({ readOnly, alleMerknaderFraBeslutter }: Props) => {
  const { control } = useFormContext<FormValues>();
  return (
    <FaktaGruppe withoutBorder merknaderFraBeslutter={alleMerknaderFraBeslutter['5061']}>
      <TrueFalseInput
        name="omsorg"
        control={control}
        label={<FormattedMessage id="OmsorgFaktaFields.OppgittOmsorg" />}
        readOnly={readOnly}
        trueLabel={<FormattedMessage id="OmsorgFaktaFields.HarOmsorg" />}
        falseLabel={<FormattedMessage id="OmsorgFaktaFields.HarIkkeOmsorg" values={{ b: BTag }} />}
      />
    </FaktaGruppe>
  );
};

OmsorgFaktaFields.initialValues = (ytelsefordeling: Ytelsefordeling, omsorgAp: Aksjonspunkt[]): FormValues => ({
  omsorg:
    omsorgAp.length > 0 && omsorgAp[0]?.status !== 'OPPR' && ytelsefordeling.overstyrtOmsorg !== undefined
      ? ytelsefordeling.overstyrtOmsorg
      : undefined,
});

OmsorgFaktaFields.transformValues = (values: FormValues): BekreftOmsorgVurderingAp => ({
  kode: '5061',
  omsorg: values.omsorg || false,
});
