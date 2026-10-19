import { type ReactElement, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { type Location } from 'react-router';

import { Badge, BodyShort, Box, Checkbox, Heading, HStack, VStack } from '@navikt/ds-react';

import type {
  AlleKodeverk,
  AlleKodeverkTilbakekreving,
  Historikkinnslag,
  HistorikkinnslagDtoFpTilbake,
  SkjermlenkeType,
  SkjermlenkeTypeFpTilbake,
} from '@navikt/fp-types';

import { sortAndTagTilbakekreving } from '../utils/historikkUtils';
import { HistorikkInnslag } from './HistorikkInnslag/HistorikkInnslag';

interface Props {
  valgtBehandlingUuid?: string;
  historikkFpSak: Historikkinnslag[];
  historikkFpTilbake: HistorikkinnslagDtoFpTilbake[];
  alleKodeverkFpTilbake?: AlleKodeverkTilbakekreving;
  alleKodeverkFpSak: AlleKodeverk;
  saksnummer: string;
  getBehandlingLocation: (behandlingUuid: string) => Location;
  createLocationForSkjermlenke: (
    behandlingLocation: Location,
    skjermlenkeCode: SkjermlenkeType | SkjermlenkeTypeFpTilbake,
  ) => Location | undefined;
  utvidEllerMinskBehandlingDetaljerKnapp: ReactElement;
}

/**
 * Historikk
 *
 * Historikken for en behandling
 */
export const Historikk = ({
  valgtBehandlingUuid,
  historikkFpSak,
  historikkFpTilbake,
  alleKodeverkFpSak, // TODO: Kodeverk brukes bare får å hente navn på aktør
  alleKodeverkFpTilbake, // TODO: Kodeverk brukes bare får å hente navn på aktør
  saksnummer,
  getBehandlingLocation,
  createLocationForSkjermlenke,
  utvidEllerMinskBehandlingDetaljerKnapp,
}: Props) => {
  const [skalSortertePaValgtBehandling, setSkalSortertePaValgtBehandling] = useState(false);

  const alleHistorikkInnslag = sortAndTagTilbakekreving(historikkFpSak, historikkFpTilbake);

  const filtrerteInnslag =
    valgtBehandlingUuid && skalSortertePaValgtBehandling
      ? alleHistorikkInnslag.filter(i => i.behandlingUuid === valgtBehandlingUuid)
      : alleHistorikkInnslag;

  return (
    <div className="min-h-32">
      <Box background="neutral-soft" borderColor="neutral-subtle" borderWidth="0 0 1 0" padding="space-20">
        <HStack justify="space-between">
          <HStack gap="space-4" align="center">
            <Heading size="small" level="2">
              <FormattedMessage id="History.Historikk" />
            </Heading>
            {utvidEllerMinskBehandlingDetaljerKnapp}
          </HStack>
          <HStack align="center" gap="space-32" as="span">
            {valgtBehandlingUuid && (
              <Checkbox size="small" onChange={() => setSkalSortertePaValgtBehandling(!skalSortertePaValgtBehandling)}>
                <FormattedMessage id="History.FiltrerPaBehandling" />
              </Checkbox>
            )}
            <Badge count={filtrerteInnslag.length} data-color="neutral" />
          </HStack>
        </HStack>
      </Box>
      <VStack gap="space-8" padding="space-16">
        {filtrerteInnslag.length === 0 && (
          <BodyShort textColor="subtle" className="m-auto py-4">
            <FormattedMessage id="History.IngenHistorikk" />
          </BodyShort>
        )}
        {filtrerteInnslag.map(historikkinnslag => {
          const alleKodeverk = historikkinnslag.erTilbakekreving ? alleKodeverkFpTilbake : alleKodeverkFpSak;

          if (!alleKodeverk) {
            return null;
          }
          return (
            <HistorikkInnslag
              key={historikkinnslag.opprettetTidspunkt}
              saksnummer={saksnummer}
              historikkInnslag={historikkinnslag}
              createLocationForSkjermlenke={createLocationForSkjermlenke}
              alleKodeverk={alleKodeverk}
              behandlingLocation={
                historikkinnslag.behandlingUuid ? getBehandlingLocation(historikkinnslag.behandlingUuid) : undefined
              }
            />
          );
        })}
      </VStack>
    </div>
  );
};
