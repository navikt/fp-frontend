import { FormattedMessage } from 'react-intl';
import { type Location } from 'react-router';

import { BodyShort, VStack } from '@navikt/ds-react';

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
}

/**
 * Historikk
 *
 * Historikken for en behandling
 */
export const Historikk = ({
  historikkFpSak,
  historikkFpTilbake,
  alleKodeverkFpSak, // TODO: Kodeverk brukes bare får å hente navn på aktør
  alleKodeverkFpTilbake, // TODO: Kodeverk brukes bare får å hente navn på aktør
  saksnummer,
  getBehandlingLocation,
  createLocationForSkjermlenke,
}: Props) => {
  const alleHistorikkInnslag = sortAndTagTilbakekreving(historikkFpSak, historikkFpTilbake);

  return (
    <VStack gap="space-8" padding="space-16" className="min-h-32">
      {alleHistorikkInnslag.length === 0 && (
        <BodyShort textColor="subtle" className="m-auto py-4">
          <FormattedMessage id="History.IngenHistorikk" />
        </BodyShort>
      )}
      {alleHistorikkInnslag.map(historikkinnslag => {
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
  );
};
