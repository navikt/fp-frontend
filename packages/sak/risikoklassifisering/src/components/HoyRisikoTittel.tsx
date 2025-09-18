import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { ExpansionCard, HStack, Label } from '@navikt/ds-react';

import type { Aksjonspunkt, KodeverkMedNavn, Risikoklassifisering } from '@navikt/fp-types';

import type { AvklartRisikoklassifiseringAp } from '../types/AvklartRisikoklassifiseringAp';
import { HoyRisikoPanel } from './HoyRisikoPanel';

import styles from './hoyRisikoTittel.module.css';

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
  const intl = useIntl();
  return (
    <ExpansionCard
      aria-label={intl.formatMessage({ id: 'Risikopanel.Tittel' })}
      open={isRiskPanelOpen}
      className={styles['hoyRisikoPanel']}
    >
      <ExpansionCard.Header onClick={toggleRiskPanel}>
        <ExpansionCard.Title>
          <HStack gap="space-16" align="center">
            <XMarkOctagonFillIcon
              title={intl.formatMessage({ id: 'Risikopanel.Tittel' })}
              color="var(--ax-danger-600)"
              height={24}
              width={24}
            />
            <Label size="small">
              <FormattedMessage id="Risikopanel.Tittel.Faresignaler" />
            </Label>
          </HStack>
        </ExpansionCard.Title>
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
