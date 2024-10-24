import React from 'react';
import { Location } from 'history';

import { BodyShort, Chat, Heading, VStack } from '@navikt/ds-react';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { HistorikkinnslagV2 } from '@navikt/fp-types';

import { HistorikkDokumentLenke } from './HistorikkDokumentLenke';
import { formatDate, getStyle, utledPlassering, visNavn } from './snakkebobleUtils';
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
  historikkInnslag: { aktør, opprettetTidspunkt, title, body, dokumenter, skjermlenke },
  kjønn,
  saksnummer,
}: Props) => {
  const rolleNavn = getKodeverknavn(aktør.type, KodeverkType.HISTORIKK_AKTOER);

  return (
    <Chat
      data-testid={`snakkeboble-${opprettetTidspunkt}`}
      avatar={<Avatar aktørType={aktør.type} kjønn={kjønn} />}
      name={visNavn(rolleNavn, aktør)}
      timestamp={formatDate(opprettetTidspunkt)}
      position={utledPlassering(aktør.type)}
      className={getStyle(aktør.type, kjønn)}
    >
      <Chat.Bubble>
        <Heading size="small">{title}</Heading>

        <Skjermlenke
          skjermlenke={skjermlenke}
          behandlingLocation={behandlingLocation}
          getKodeverknavn={getKodeverknavn}
          createLocationForSkjermlenke={createLocationForSkjermlenke}
        />

        {body.map((linje, index) => {
          // @ts-ignore
          return <BodyShort key={index} size="small" dangerouslySetInnerHTML={{ __html: linje }} />;
        })}

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
