import { FormattedMessage } from 'react-intl';

import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import { TrueFalseInput } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import type { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = AksjonspunktKode;

export type FormValues = {
  omsorg?: boolean;
};

interface Props {
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export const OmsorgFaktaFields = ({ readOnly, alleMerknaderFraBeslutter }: Props) => {
  return (
    <FaktaGruppe
      withoutBorder
      merknaderFraBeslutter={alleMerknaderFraBeslutter[MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]}
    >
      <TrueFalseInput
        name="omsorg"
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
    omsorgAp.length > 0 &&
    omsorgAp[0]?.status !== AksjonspunktStatus.OPPRETTET &&
    ytelsefordeling.overstyrtOmsorg !== null
      ? ytelsefordeling.overstyrtOmsorg
      : undefined,
});

OmsorgFaktaFields.transformValues = (values: FormValues): BekreftOmsorgVurderingAp => ({
  kode: MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
  omsorg: values.omsorg || false,
});
