import { FormattedMessage, useIntl } from 'react-intl';

import { ExternalLinkIcon } from '@navikt/aksel-icons';
import { BodyShort, Link } from '@navikt/ds-react';
import dayjs from 'dayjs';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import { BehandlingInformasjon, finnBehandlingNavn } from './BehandlingInformasjon';
import { CardSelect, type CardSelectOption } from './card-select/CardSelect';

interface Props {
  behandlinger: FagsakBehandlingDto[];
  behandlingHref: (behandlingUuid: string) => string;
  behandlingUuid?: string;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  velgBehandling: (behandlingUuid: string) => void;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

export const BehandlingerListe = ({
  behandlinger,
  behandlingHref,
  behandlingUuid,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  velgBehandling,
  alleKodeverk,
  alleKodeverkTilbakekreving,
}: Props) => {
  const intl = useIntl();
  const klageTekst = intl.formatMessage({ id: 'Behandlingspunkt.Årsak.Klage' });
  const valg: CardSelectOption[] = behandlinger.toSorted(sorterBehandlinger).map(behandling => {
    const navn = finnBehandlingNavn(behandling, alleKodeverk, alleKodeverkTilbakekreving, klageTekst);
    return {
      value: behandling.uuid,
      ariaLabel: [navn.type, navn.årsak].filter(Boolean).join(' - '),
      label: (
        <BehandlingInformasjon
          behandling={behandling}
          navn={navn}
          alleKodeverk={alleKodeverk}
          alleKodeverkTilbakekreving={alleKodeverkTilbakekreving}
          eksternLenke={
            behandling.uuid !== behandlingUuid && (
              <Link
                href={behandlingHref(behandling.uuid)}
                aria-label={intl.formatMessage({ id: 'BehandlingPickerItemContent.OpenInNewTab' })}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
              >
                <ExternalLinkIcon aria-hidden fontSize="1.5rem" />
              </Link>
            )
          }
        />
      ),
    };
  });

  return (
    <CardSelect
      options={valg}
      value={behandlingUuid}
      placeholder={
        <BodyShort size="small" textColor="subtle">
          <FormattedMessage id="BehandlingList.Placeholder" />
        </BodyShort>
      }
      emptyContent={
        <BodyShort size="small" textColor="subtle">
          <FormattedMessage id="BehandlingList.ZeroBehandlinger" />
        </BodyShort>
      }
      open={skalViseAlleBehandlinger}
      onOpenChange={åpen => {
        if (åpen !== skalViseAlleBehandlinger) {
          toggleVisAlleBehandlinger();
        }
      }}
      onChange={velgBehandling}
      openLabel={intl.formatMessage({ id: 'BehandlingPickerItemContent.Open' })}
      closeLabel={intl.formatMessage({ id: 'BehandlingPickerItemContent.Close' })}
    />
  );
};

const sorterBehandlinger = (a: FagsakBehandlingDto, b: FagsakBehandlingDto): number => {
  if (a.avsluttet && !b.avsluttet) {
    return 1;
  }
  if (!a.avsluttet && b.avsluttet) {
    return -1;
  }
  if (a.avsluttet && b.avsluttet) {
    return dayjs(b.avsluttet).diff(dayjs(a.avsluttet));
  }
  return dayjs(b.opprettet).diff(dayjs(a.opprettet));
};
