import React from 'react';

import { BodyShort, Chat, VStack } from '@navikt/ds-react';
import { Location } from 'history';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { Historikkinnslag } from '@navikt/fp-types';

import { Avatar } from './Avatar';
import { HistorikkDokumentLenke } from './HistorikkDokumentLenke';
import { Skjermlenke } from './Skjermlenke';
import { formatDate, getStyle, parseBoldText, utledPlassering } from './snakkebobleUtils';

interface Props {
  behandlingLocation: Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string;
  historikkInnslag: Historikkinnslag;
  kjønn: string;
  saksnummer: string;
}

export const Snakkeboble = ({
  behandlingLocation,
  createLocationForSkjermlenke,
  getKodeverknavn,
  historikkInnslag: { aktør, opprettetTidspunkt, tittel, linjer, dokumenter, skjermlenke },
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

        {skjermlenke && (
          <Skjermlenke
            skjermlenke={skjermlenke}
            behandlingLocation={behandlingLocation}
            getKodeverknavn={getKodeverknavn}
            createLocationForSkjermlenke={createLocationForSkjermlenke}
          />
        )}

        {linjer.map((linje, index) =>
          linje.type === 'TEKST' ? (
            <BodyShort key={index} size="small">
              {parseBoldText(linje.tekst)}
            </BodyShort>
          ) : (
            <div key={index} style={{ marginTop: '10px' }} /> // TODO: OK å bruke div er med margin
          ),
        )}

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
