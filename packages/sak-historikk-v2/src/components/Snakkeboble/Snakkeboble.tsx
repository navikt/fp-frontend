import React from 'react';
import { Location } from 'history';

import { BodyShort, Chat, VStack } from '@navikt/ds-react';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { HistorikkinnslagV2 } from '@navikt/fp-types';

import { HistorikkDokumentLenke } from './HistorikkDokumentLenke';
import { formatDate, getStyle, parseBoldText, utledPlassering } from './snakkebobleUtils';
import { Avatar } from './Avatar';
import { Skjermlenke } from './Skjermlenke';

interface Props {
  behandlingLocation: Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string;
  historikkInnslag: HistorikkinnslagV2;
  kjønn: string;
  saksnummer: string;
}

export const Snakkeboble = ({
  behandlingLocation,
  createLocationForSkjermlenke,
  getKodeverknavn,
  historikkInnslag: { aktør, opprettetTidspunkt, tittel, body, dokumenter, skjermlenke },
  kjønn,
  saksnummer,
}: Props) => {
  const rolleNavn = getKodeverknavn(aktør.type, KodeverkType.HISTORIKK_AKTOER);

  return (
    <Chat
      data-testid={`snakkeboble-${opprettetTidspunkt}`}
      avatar={<Avatar aktørType={aktør.type} kjønn={kjønn} />}
      timestamp={`${formatDate(opprettetTidspunkt)} // ${rolleNavn} ${aktør.ident || ''}`}
      position={utledPlassering(aktør.type)}
      toptextPosition="left"
      className={getStyle(aktør.type, kjønn)}
    >
      <Chat.Bubble>
        {tittel && <BodyShort size="small">{tittel}</BodyShort>}

        <Skjermlenke
          skjermlenke={skjermlenke}
          behandlingLocation={behandlingLocation}
          getKodeverknavn={getKodeverknavn}
          createLocationForSkjermlenke={createLocationForSkjermlenke}
        />

        {body.map((linje, index) => (
          <BodyShort key={index} size="small">
            {parseBoldText(linje)}
          </BodyShort>
        ))}

        {dokumenter && (
          <VStack gap="1">
            {dokumenter.map(dokumentLenke => (
              <HistorikkDokumentLenke
                key={`${dokumentLenke.tag}@${dokumentLenke.url}`}
                dokumentLenke={dokumentLenke}
                saksnummer={saksnummer}
              />
            ))}
          </VStack>
        )}
      </Chat.Bubble>
    </Chat>
  );
};
