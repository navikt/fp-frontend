import { type ComponentType } from 'react';
import { useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon, ExternalLinkIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import type { BehandlingLenkeProps } from '../BehandlingVelgerSakIndex';
import { BehandlingInformasjon } from './BehandlingInformasjon';

interface Props {
  listeId: string;
  behandling: FagsakBehandlingDto;
  erKunEnBehandling: boolean;
  erAktiv: boolean;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  behandlingLenke: ComponentType<BehandlingLenkeProps>;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

export const BehandlingListeRad = ({
  listeId,
  behandling,
  erKunEnBehandling,
  erAktiv,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  behandlingLenke: BehandlingLenke,
  alleKodeverk,
  alleKodeverkTilbakekreving,
}: Props) => {
  const intl = useIntl();

  if (!erKunEnBehandling && !skalViseAlleBehandlinger && !erAktiv) {
    return null;
  }

  const åpneINyttVinduTekst = intl.formatMessage({ id: 'BehandlingPickerItemContent.OpenInNewWindow' });
  const visBehandlingslisteTekst = intl.formatMessage({
    id: skalViseAlleBehandlinger ? 'BehandlingPickerItemContent.Close' : 'BehandlingPickerItemContent.Open',
  });

  return (
    <BehandlingInformasjon
      skalFremheves={erAktiv && skalViseAlleBehandlinger}
      erInteraktiv={!(erKunEnBehandling && erAktiv)}
      behandling={behandling}
      alleKodeverk={alleKodeverk}
      alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
      renderTittel={tittel => {
        if (erKunEnBehandling && erAktiv) {
          return tittel;
        }
        if (erAktiv) {
          return (
            <button
              type="button"
              onClick={toggleVisAlleBehandlinger}
              aria-current="page"
              aria-expanded={skalViseAlleBehandlinger}
              aria-controls={listeId}
            >
              {tittel}
            </button>
          );
        }
        return (
          <BehandlingLenke behandlingUuid={behandling.uuid} onClick={toggleVisAlleBehandlinger}>
            {tittel}
          </BehandlingLenke>
        );
      }}
      handling={
        erAktiv ? (
          !erKunEnBehandling && (
            <Button
              type="button"
              variant="tertiary"
              size="small"
              onClick={toggleVisAlleBehandlinger}
              onKeyDown={event => {
                if (event.key === ' ') {
                  // Aksel håndterer mellomrom selv; unngå et ekstra klikk fra nettleseren.
                  event.preventDefault();
                }
              }}
              aria-expanded={skalViseAlleBehandlinger}
              aria-controls={listeId}
              icon={
                skalViseAlleBehandlinger ? (
                  <ChevronUpIcon title={visBehandlingslisteTekst} />
                ) : (
                  <ChevronDownIcon title={visBehandlingslisteTekst} />
                )
              }
            />
          )
        ) : (
          <Button
            as={BehandlingLenke}
            behandlingUuid={behandling.uuid}
            role="link"
            target="_blank"
            rel="noopener noreferrer"
            variant="tertiary"
            size="small"
            icon={<ExternalLinkIcon title={åpneINyttVinduTekst} />}
          />
        )
      }
    />
  );
};
