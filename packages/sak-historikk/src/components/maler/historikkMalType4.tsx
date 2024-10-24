import React from 'react';
import { BodyShort } from '@navikt/ds-react';

import { decodeHtmlEntity } from '@navikt/ft-utils';
import { findHendelseText } from './felles/historikkUtils';
import BubbleText from './felles/bubbleText';
import HistorikkMal from '../HistorikkMalTsType';

const HistorikkMalType4 = ({ historikkinnslag, getKodeverknavn }: HistorikkMal) => (
  <>
    {historikkinnslag.historikkinnslagDeler.map((del, delIndex) => (
      <div key={`del${delIndex}`}>
        <BodyShort size="small" className="snakkeboble-panel__tekst">
          {findHendelseText(del.hendelse, getKodeverknavn)}
        </BodyShort>
        {del.årsaktekst && <BodyShort size="small">{del.årsaktekst}</BodyShort>}
        {del.begrunnelsetekst && <BubbleText bodyText={del.begrunnelsetekst} />}
        {del.begrunnelseFritekst && <BubbleText bodyText={decodeHtmlEntity(del.begrunnelseFritekst)} />}
      </div>
    ))}
  </>
);

HistorikkMalType4.displayName = 'HistorikkMalType4';

export default HistorikkMalType4;
