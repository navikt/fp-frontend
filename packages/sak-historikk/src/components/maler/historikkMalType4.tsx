import React, { FunctionComponent } from 'react';
import { WrappedComponentProps } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';

import { decodeHtmlEntity } from '@navikt/ft-utils';
import { findHendelseText } from './felles/historikkUtils';
import BubbleText from './felles/bubbleText';
import HistorikkMal from '../HistorikkMalTsType';

const HistorikkMalType4: FunctionComponent<HistorikkMal & WrappedComponentProps> = ({
  historikkinnslag,
  getKodeverknavn,
}) => (
  <>
    {historikkinnslag.historikkinnslagDeler.map((del, delIndex) => (
      <div key={
        `del${delIndex}` // eslint-disable-line react/no-array-index-key
      }
      >
        <Label size="small" className="snakkeboble-panel__tekst">{findHendelseText(del.hendelse, getKodeverknavn)}</Label>
        {del.årsaktekst && <BodyShort size="small">{del.årsaktekst}</BodyShort>}
        {del.begrunnelsetekst && <BubbleText bodyText={del.begrunnelsetekst} />}
        {del.begrunnelseFritekst && <BubbleText bodyText={decodeHtmlEntity(del.begrunnelseFritekst)} />}
      </div>
    ))}
  </>
);

export default HistorikkMalType4;
