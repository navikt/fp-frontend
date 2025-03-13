import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktStatus } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, KodeverkMedNavn, Risikoklassifisering } from '@navikt/fp-types';

import type { AvklartRisikoklassifiseringAp } from '../types/AvklartRisikoklassifiseringAp';
import { AvklarFaresignalerForm } from './AvklarFaresignalerForm';
import { Faresignaler } from './Faresignaler';

interface Props {
  risikoklassifisering: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  submitCallback?: (data: AvklartRisikoklassifiseringAp) => void;
  faresignalVurderinger: KodeverkMedNavn[];
}

/**
 * AvklarFaresignaler
 *
 * Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
export const HoyRisikoPanel = ({
  risikoklassifisering,
  aksjonspunkt,
  readOnly,
  submitCallback,
  faresignalVurderinger,
}: Props) => (
  <VStack gap="4">
    {aksjonspunkt && aksjonspunkt.status === AksjonspunktStatus.OPPRETTET && (
      <AksjonspunktHelpTextHTML>
        <FormattedMessage id="Risikopanel.Panel.Tittel" />
      </AksjonspunktHelpTextHTML>
    )}
    <div>
      <Faresignaler risikoklassifisering={risikoklassifisering} />
      {!!aksjonspunkt && (
        <AvklarFaresignalerForm
          aksjonspunkt={aksjonspunkt}
          readOnly={readOnly}
          submitCallback={submitCallback}
          risikoklassifisering={risikoklassifisering}
          faresignalVurderinger={faresignalVurderinger}
        />
      )}
    </div>
  </VStack>
);
