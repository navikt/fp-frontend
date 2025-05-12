import { useState } from 'react';
import { useIntl } from 'react-intl';

import { BodyLong, BodyShort, Box, type BoxProps, Button, Detail, HStack, VStack } from '@navikt/ds-react';
import { dateTimeFormat } from '@navikt/ft-utils';
import { type Location } from 'history';

import { HistorikkAktor, KodeverkType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, AlleKodeverkTilbakekreving, Historikkinnslag } from '@navikt/fp-types';

import { Avatar } from './Avatar';
import { HistorikkDokumentLenke } from './HistorikkDokumentLenke';
import { parseBoldText } from './historikkInnslagUtils';
import { Skjermlenke } from './Skjermlenke';

interface Props {
  behandlingLocation?: Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  alleKodeverk: AlleKodeverkTilbakekreving | AlleKodeverk;
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
  alleKodeverk,
  historikkInnslag: { aktør, opprettetTidspunkt, tittel, linjer, dokumenter, skjermlenke },
  saksnummer,
}: Props) => {
  const intl = useIntl();
  const rolleNavn = alleKodeverk[KodeverkType.HISTORIKK_AKTOER].find(rolle => rolle.kode === aktør.type)?.navn ?? '';

  const name = `${rolleNavn} ${aktør.ident ?? ''}`;
  const timestamp = dateTimeFormat(opprettetTidspunkt, { separator: 'kl', month: 'long', day: 'numeric' });

  const erMerEnnToLinjer = linjer.length > 3;
  const [erLinjerSkjult, setErLinjerSkjult] = useState(erMerEnnToLinjer);
  const linjerSomSkalVises = linjer.slice(0, erLinjerSkjult ? 3 : linjer.length);

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
              alleKodeverk={alleKodeverk}
              createLocationForSkjermlenke={createLocationForSkjermlenke}
            />
          )}

          {linjer.length > 0 && (
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
              {erMerEnnToLinjer && (
                <Button variant="tertiary" size="small" onClick={() => setErLinjerSkjult(!erLinjerSkjult)}>
                  {erLinjerSkjult
                    ? intl.formatMessage({ id: 'Historikkinnslag.VisMer' })
                    : intl.formatMessage({ id: 'Historikkinnslag.VisMindre' })}
                </Button>
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
