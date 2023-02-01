import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';

import BubbleText from './felles/bubbleText';
import { findHendelseText } from './felles/historikkUtils';
import HistorikkDokumentLenke from './felles/HistorikkDokumentLenke';
import HistorikkMal from '../HistorikkMalTsType';

const HistorikkMalType1: FunctionComponent<HistorikkMal> = ({
  historikkinnslag,
  getKodeverknavn,
  saksnummer,
}) => {
  const { historikkinnslagDeler, dokumentLinks } = historikkinnslag;
  return (
    <>
      {historikkinnslagDeler[0] && historikkinnslagDeler[0].hendelse && (
        <BodyShort size="small" className="snakkeboble-panel__tekst">{findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}</BodyShort>
      )}
      {historikkinnslagDeler[0].begrunnelsetekst && (
        <BubbleText
          bodyText={historikkinnslagDeler[0].begrunnelsetekst}
          cutOffLength={70}
        />
      )}
      {historikkinnslagDeler[0].begrunnelseFritekst && <BubbleText bodyText={historikkinnslagDeler[0].begrunnelseFritekst} />}
      {dokumentLinks && dokumentLinks.map((dokumentLenke) => (
        <HistorikkDokumentLenke
          key={`${dokumentLenke.tag}@${dokumentLenke.url}`}
          dokumentLenke={dokumentLenke}
          saksnummer={saksnummer}
        />
      ))}
    </>
  );
};

export default HistorikkMalType1;
