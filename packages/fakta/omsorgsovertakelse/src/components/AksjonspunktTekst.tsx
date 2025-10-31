import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import type { OmsorgsovertakelseDto } from '@navikt/fp-types';

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const AksjonspunktTekst = ({
  omsorgsovertakelse: {
    andreSakerSammeFamiliehendelse,
    gjeldende: { antallBarn },
  },
}: Props) => (
  <AksjonspunktHelpTextHTML>
    <FormattedMessage id="OmsorgsovertakelseFaktaIndex.AksjonspunktTekst.Generell" />
    {andreSakerSammeFamiliehendelse.length > 0 && (
      <FormattedMessage
        id="OmsorgsovertakelseFaktaIndex.AksjonspunktTekst.VurderMotattStøtte"
        values={{
          antallBarn,
          saksnummere: andreSakerSammeFamiliehendelse.map(({ saksnummer }, index, arr) => (
            <React.Fragment key={saksnummer}>
              <Link href={`/fagsak/${saksnummer}`} target="_blank">
                {saksnummer}
              </Link>
              {index < arr.length - 1 && ', '}
            </React.Fragment>
          )),
        }}
      />
    )}
  </AksjonspunktHelpTextHTML>
);
