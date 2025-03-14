import { useState } from 'react';
import { useIntl } from 'react-intl';

import { BodyLong, BodyShort, Box, type BoxProps, Button, Detail, HStack, VStack } from '@navikt/ds-react';
import { type Location } from 'history';

import { HistorikkAktor, KodeverkType } from '@navikt/fp-kodeverk';
import type { Historikkinnslag, Linje } from '@navikt/fp-types';

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
  const intl = useIntl();
  const rolleNavn = getKodeverknavn(aktør.type, KodeverkType.HISTORIKK_AKTOER);

  const name = `${rolleNavn} ${aktør.ident ?? ''}`;
  const timestamp = formatDateTime(opprettetTidspunkt);
  const MAX_LINES = 2;
  const MIN_LINES = 3;

  const initialVisMer = linjer && linjer.length === 3;
  const [visMer, setVisMer] = useState(initialVisMer);

  const toggleVisMer = () => {
    setVisMer(!visMer);
  };

  let linjerSomSkalVises: Linje[] = [];
  if (linjer) {
    linjerSomSkalVises = visMer || linjer.length === MIN_LINES ? linjer : linjer.slice(0, MAX_LINES);
  }

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
              {linjerSomSkalVises.map((linje, index) =>
                linje.type === 'TEKST' ? (
                  <BodyLong key={`${linje.tekst}-${index}`} size="medium">
                    {parseBoldText(linje.tekst)}
                  </BodyLong>
                ) : (
                  <br key={`${linje.type}-${index}`} />
                ),
              )}
              {linjer.length > MAX_LINES && linjer.length !== MIN_LINES && (
                <Button variant="tertiary" size="small" onClick={toggleVisMer}>
                  {visMer
                    ? intl.formatMessage({ id: 'Historikkinnslag.VisMindre' })
                    : intl.formatMessage({ id: 'Historikkinnslag.VisMer' })}
                </Button>
              )}
            </div>
          )}

          {dokumenter && (
            <div>
              {dokumenter.map(dokumentLenke => (
                <HistorikkDokumentLenke
                  key={`${dokumentLenke.tag}@${dokumentLenke.url}`}
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
