import React from 'react';
import { ExpansionCard, HStack, Label } from '@navikt/ds-react';

import { XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@navikt/fp-types';

import { FormattedMessage, useIntl } from 'react-intl';
import { HoyRisikoPanel } from './HoyRisikoPanel';
import { AvklartRisikoklassifiseringAp } from '../types/AvklartRisikoklassifiseringAp';

import styles from './hoyRisikoTittel.module.css';

interface Props {
  risikoklassifisering: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  submitCallback: (data: AvklartRisikoklassifiseringAp) => Promise<void>;
  isRiskPanelOpen: boolean;
  toggleRiskPanel: () => void;
  faresignalVurderinger: KodeverkMedNavn[];
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
      className={styles.hoyRisikoPanel}
    >
      <ExpansionCard.Header onClick={toggleRiskPanel}>
        <ExpansionCard.Title>
          <HStack gap="4" align="center">
            <XMarkOctagonFillIcon
              title={intl.formatMessage({ id: 'Risikopanel.Tittel' })}
              color="var(--a-red-500)"
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
