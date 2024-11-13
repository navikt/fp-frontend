import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Label } from '@navikt/ds-react';

import { decodeHtmlEntity } from '@navikt/ft-utils';
import { Risikoklassifisering } from '@navikt/fp-types';

export const FarePanel: FunctionComponent<{
  risikoFaresignaler: {
    faresignaler: string[];
  };
  labelId: string;
}> = ({ risikoFaresignaler, labelId }) => (
  <>
    <Label size="small">
      <FormattedMessage id={labelId} />
    </Label>
    <ul>
      {risikoFaresignaler.faresignaler.map(faresignal => (
        <li key={faresignal}>
          <BodyShort size="small">{decodeHtmlEntity(faresignal)}</BodyShort>
        </li>
      ))}
    </ul>
  </>
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
    {risikoklassifisering.medlFaresignaler && risikoklassifisering.medlFaresignaler.faresignaler && (
      <FarePanel risikoFaresignaler={risikoklassifisering.medlFaresignaler} labelId="Risikopanel.Panel.Medlemskap" />
    )}
    {risikoklassifisering.iayFaresignaler && risikoklassifisering.iayFaresignaler.faresignaler && (
      <FarePanel
        risikoFaresignaler={risikoklassifisering.iayFaresignaler}
        labelId="Risikopanel.Panel.ArbeidsforholdInntekt"
      />
    )}
  </>
);
