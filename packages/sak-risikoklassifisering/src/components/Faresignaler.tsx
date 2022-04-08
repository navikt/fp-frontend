import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import { Risikoklassifisering } from '@fpsak-frontend/types';

export const FarePanel: FunctionComponent<{
  risikoFaresignaler: {
    faresignaler: string[];
  },
  labelId: string,
}> = ({
  risikoFaresignaler,
  labelId,
}) => (
  <div>
    <FlexRow>
      <FlexColumn>
        <Element><FormattedMessage id={labelId} /></Element>
        <ul>
          {risikoFaresignaler.faresignaler.map((faresignal) => (
            <li key={faresignal}>
              <Normaltekst>{decodeHtmlEntity(faresignal)}</Normaltekst>
            </li>
          ))}
        </ul>
      </FlexColumn>
    </FlexRow>
  </div>
);

interface OwnProps {
  risikoklassifisering: Risikoklassifisering;
}

/**
 * Faresignaler
 *
 * Presentasjonskomponent. Viser en liste over faresignaler knyttet til behandlingen.
 */
const Faresignaler: FunctionComponent<OwnProps> = ({
  risikoklassifisering,
}) => (
  <FlexContainer>
    {risikoklassifisering.medlFaresignaler && risikoklassifisering.medlFaresignaler.faresignaler && (
      <FarePanel
        risikoFaresignaler={risikoklassifisering.medlFaresignaler}
        labelId="Risikopanel.Panel.Medlemskap"
      />
    )}
    {risikoklassifisering.iayFaresignaler && risikoklassifisering.iayFaresignaler.faresignaler && (
      <FarePanel
        risikoFaresignaler={risikoklassifisering.iayFaresignaler}
        labelId="Risikopanel.Panel.ArbeidsforholdInntekt"
      />
    )}
  </FlexContainer>
);

export default Faresignaler;
