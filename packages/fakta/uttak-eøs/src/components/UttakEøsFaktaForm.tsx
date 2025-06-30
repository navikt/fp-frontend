import { FormattedMessage } from 'react-intl';

import { Heading, HStack, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktStatus, isAksjonspunktOpen } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';
import type { BekreftUttaksperioderAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { UttakEøsFaktaTable } from './UttakEøsFaktaTable';

interface Props {
  annenForelderUttakEøs?: AnnenforelderUttakEøsPeriode[];
  kanOverstyre: boolean;
  submittable: boolean;
}

const finnAksjonspunktTekster = (aksjonspunkter: Aksjonspunkt[]) =>
  aksjonspunkter
    .filter(ap => ap.status === AksjonspunktStatus.OPPRETTET)
    .map(ap => {
      return (
        <FormattedMessage
          key={`UttakFaktaForm.Aksjonspunkt.${ap.definisjon}`}
          id={`UttakFaktaForm.Aksjonspunkt.${ap.definisjon}`}
        />
      );
    });

export const UttakESFaktaForm = ({ annenForelderUttakEøs }: Props) => {
  //const intl = useIntl();
  const { aksjonspunkterForPanel } = usePanelDataContext<BekreftUttaksperioderAp[]>();
  const harApneAksjonspunkter = aksjonspunkterForPanel.some(ap => isAksjonspunktOpen(ap.status));
  const aksjonspunktTekster = finnAksjonspunktTekster(aksjonspunkterForPanel);
  return (
    <VStack gap="8">
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="UttakFaktaForm.FaktaUttakEos" />
        </Heading>
      </HStack>
      {harApneAksjonspunkter && <AksjonspunktHelpTextHTML>{aksjonspunktTekster}</AksjonspunktHelpTextHTML>}
      {annenForelderUttakEøs && <UttakEøsFaktaTable annenForelderUttakEøs={annenForelderUttakEøs} />}
    </VStack>
  );
};
