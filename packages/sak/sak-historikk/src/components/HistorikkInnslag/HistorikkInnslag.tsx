import { BodyLong, BodyShort, Box, type BoxProps, Detail, HStack, VStack } from '@navikt/ds-react';
import { type Location } from 'history';

import { HistorikkAktor, KodeverkType } from '@navikt/fp-kodeverk';
import type { Historikkinnslag } from '@navikt/fp-types';

import { Avatar } from './Avatar';
import { HistorikkDokumentLenke } from './HistorikkDokumentLenke';
import { formatDateTime, parseBoldText } from './historikkInnslagUtils';
import { Skjermlenke } from './Skjermlenke';

interface Props {
  behandlingLocation?: Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string;
  historikkInnslag: Historikkinnslag;
  saksnummer: string;
}

const backgrounds: Record<HistorikkAktor, BoxProps['background']> = {
  [HistorikkAktor.ARBEIDSGIVER]: 'surface-info-subtle',
  [HistorikkAktor.BESLUTTER]: 'surface-success-subtle',
  [HistorikkAktor.VEDTAKSLOSNINGEN]: 'bg-subtle',
  [HistorikkAktor.SAKSBEHANDLER]: 'surface-alt-1-subtle',
  [HistorikkAktor.SOKER]: 'surface-warning-subtle',
};

export const HistorikkInnslag = ({
  behandlingLocation,
  createLocationForSkjermlenke,
  getKodeverknavn,
  historikkInnslag: { aktør, opprettetTidspunkt, tittel, linjer, dokumenter, skjermlenke },
  saksnummer,
}: Props) => {
  const rolleNavn = getKodeverknavn(aktør.type, KodeverkType.HISTORIKK_AKTOER);

  const name = `${rolleNavn} ${aktør.ident || ''}`;
  const timestamp = formatDateTime(opprettetTidspunkt);

  return (
    <HStack data-testid="historikkinnslag" wrap={false} gap="5" justify="end" align="center">
      <Box padding="4" background={backgrounds[aktør.type]}>
        <VStack gap="2">
          <HStack gap="2">
            <Detail weight="semibold">{name}</Detail>
            <Detail>{timestamp}</Detail>
          </HStack>

          {tittel && <BodyShort size="medium">{tittel}</BodyShort>}

          {skjermlenke && (
            <Skjermlenke
              skjermlenke={skjermlenke}
              behandlingLocation={behandlingLocation}
              getKodeverknavn={getKodeverknavn}
              createLocationForSkjermlenke={createLocationForSkjermlenke}
            />
          )}

          {linjer && linjer.length > 0 && (
            <div>
              {linjer.map((linje, index) =>
                linje.type === 'TEKST' ? (
                  <BodyLong key={`tekstlinje-${index}`} size="medium">
                    {parseBoldText(linje.tekst)}
                  </BodyLong>
                ) : (
                  <br key={`linjeskift-${index}`} />
                ),
              )}
            </div>
          )}

          {dokumenter && (
            <div>
              {dokumenter.map(dokumentLenke => (
                <HistorikkDokumentLenke
                  key={`${dokumentLenke.journalpostId}.${dokumentLenke.dokumentId}`}
                  dokumentLenke={dokumentLenke}
                  saksnummer={saksnummer}
                />
              ))}
            </div>
          )}
        </VStack>
      </Box>
      <Box>
        <Avatar aktørType={aktør.type} />
      </Box>
    </HStack>
  );
};
