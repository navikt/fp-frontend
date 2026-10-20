import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import type { Aksjonspunkt, KodeverkMedNavn, Risikoklassifisering } from '@navikt/fp-types';

import type { AvklartRisikoklassifiseringAp } from '../types/AvklartRisikoklassifiseringAp';
import { AvklarFaresignalerForm } from './AvklarFaresignalerForm';
import { Faresignaler } from './Faresignaler';

interface Props {
  risikoklassifisering: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  submitCallback?: (data: AvklartRisikoklassifiseringAp) => void;
  faresignalVurderinger: KodeverkMedNavn<'FaresignalVurdering'>[];
}

/**
 * AvklarFaresignaler
 *
 * Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
export const HoyRisikoPanel = ({
  risikoklassifisering,
  aksjonspunkt,
  submitCallback,
  faresignalVurderinger,
}: Props) => (
  <VStack gap="space-16">
    {aksjonspunkt?.status === 'OPPR' && (
      <AksjonspunktHelpTextHTML>
        <FormattedMessage id="Risikopanel.Panel.Tittel" />
      </AksjonspunktHelpTextHTML>
    )}
    <VStack gap="space-16">
      <Faresignaler risikoklassifisering={risikoklassifisering} />
      {!!aksjonspunkt && (
        <AvklarFaresignalerForm
          aksjonspunkt={aksjonspunkt}
          submitCallback={submitCallback}
          risikoklassifisering={risikoklassifisering}
          faresignalVurderinger={faresignalVurderinger}
        />
      )}
    </VStack>
  </VStack>
);
