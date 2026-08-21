import type { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import type { Risikoklassifisering } from '@navikt/fp-types';

interface FarePanelProps {
  risikoFaresignaler: {
    faresignaler: string[];
  };
  label: ReactNode;
}

const FarePanel = ({ risikoFaresignaler, label }: FarePanelProps) => (
  <div>
    <Label size="small">{label}</Label>
    <ul>
      {risikoFaresignaler.faresignaler.map(faresignal => (
        <li key={faresignal}>
          <BodyShort as="span" size="small">
            {decodeHtmlEntity(faresignal)}
          </BodyShort>
        </li>
      ))}
    </ul>
  </div>
);

interface Props {
  risikoklassifisering: Risikoklassifisering;
}

/**
 * Faresignaler
 *
 * Presentasjonskomponent. Viser en liste over faresignaler knyttet til behandlingen.
 */
export const Faresignaler = ({ risikoklassifisering }: Props) => (
  <>
    {risikoklassifisering.medlFaresignaler?.faresignaler && (
      <FarePanel
        risikoFaresignaler={risikoklassifisering.medlFaresignaler}
        label={<FormattedMessage id="Risikopanel.Panel.Medlemskap" />}
      />
    )}
    {risikoklassifisering.iayFaresignaler?.faresignaler && (
      <FarePanel
        risikoFaresignaler={risikoklassifisering.iayFaresignaler}
        label={<FormattedMessage id="Risikopanel.Panel.ArbeidsforholdInntekt" />}
      />
    )}
  </>
);
