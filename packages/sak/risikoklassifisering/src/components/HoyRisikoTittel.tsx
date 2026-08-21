import { useId } from 'react';
import { FormattedMessage } from 'react-intl';

import { XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { ExpansionCard, HStack, Label } from '@navikt/ds-react';

import type { Aksjonspunkt, KodeverkMedNavn, Risikoklassifisering } from '@navikt/fp-types';

import type { AvklartRisikoklassifiseringAp } from '../types/AvklartRisikoklassifiseringAp';
import { HoyRisikoPanel } from './HoyRisikoPanel';

interface Props {
  risikoklassifisering: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  submitCallback?: (data: AvklartRisikoklassifiseringAp) => void;
  isRiskPanelOpen: boolean;
  toggleRiskPanel: () => void;
  faresignalVurderinger: KodeverkMedNavn<'FaresignalVurdering'>[];
}

/**
 * HoyRisikoTittel
 *
 * Statisk visning av tittel i utvidbart panel dersom faresignaler er funnet.
 */
export const HoyRisikoTittel = ({
  risikoklassifisering,
  aksjonspunkt,
  readOnly,
  submitCallback,
  isRiskPanelOpen,
  toggleRiskPanel,
  faresignalVurderinger,
}: Props) => {
  const id = useId();
  return (
    <ExpansionCard
      aria-labelledby={id}
      open={isRiskPanelOpen}
      data-color="danger"
      className="bg-transparent"
      size="small"
    >
      <ExpansionCard.Header onClick={toggleRiskPanel}>
        <HStack wrap={false} gap="space-16" align="center">
          <XMarkOctagonFillIcon color="var(--ax-text-danger-decoration)" aria-hidden height={24} width={24} />
          <ExpansionCard.Title id={id} size="small">
            <Label size="small" as="span">
              <FormattedMessage id="Risikopanel.Tittel.Faresignaler" />
            </Label>
          </ExpansionCard.Title>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <HoyRisikoPanel
          risikoklassifisering={risikoklassifisering}
          aksjonspunkt={aksjonspunkt}
          readOnly={readOnly}
          submitCallback={submitCallback}
          faresignalVurderinger={faresignalVurderinger}
        />
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};
