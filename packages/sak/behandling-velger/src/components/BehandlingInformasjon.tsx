import { type ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Tag, VStack } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import styles from './behandlingInformasjon.module.css';

interface Props {
  navn: { type: string; årsak?: string };
  behandling: FagsakBehandlingDto;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
  eksternLenke?: ReactNode;
}

export const BehandlingInformasjon = ({
  navn,
  behandling,
  alleKodeverk,
  alleKodeverkTilbakekreving,
  eksternLenke,
}: Props) => {
  const erTilbakekreving = behandling.type === 'BT-007' || behandling.type === 'BT-009';
  const behandlingResultatType = erTilbakekreving
    ? alleKodeverkTilbakekreving['BehandlingResultatType']
    : alleKodeverk['BehandlingResultatType'];

  return (
    <VStack gap="space-4" className={styles['innhold']}>
      <HStack gap="space-4 space-8" align="center">
        <Label as="span" size="small">
          {navn.type}
        </Label>

        {eksternLenke}

        <BodyShort as="span" size="small">
          {navn.årsak && ` - ${navn.årsak}`}
        </BodyShort>

        {'gjeldendeVedtak' in behandling && behandling.gjeldendeVedtak && (
          <Tag size="small" variant="moderate" data-color="neutral">
            <FormattedMessage id="BehandlingPickerItemContent.GjeldendeVedtak" />
          </Tag>
        )}
      </HStack>
      <dl className={styles['detaljer']}>
        <BodyShort as="dt" size="small">
          <FormattedMessage id="BehandlingPickerItemContent.Behandlingstatus" />
        </BodyShort>
        <BodyShort as="dd" size="small">
          {alleKodeverk['BehandlingStatus'].find(bs => bs.kode === behandling.status)?.navn ?? ''}
        </BodyShort>

        {behandling.behandlingsresultat?.type && (
          <>
            <BodyShort as="dt" size="small">
              <FormattedMessage id="BehandlingPickerItemContent.Resultat" />
            </BodyShort>
            <BodyShort as="dd" size="small">
              {behandlingResultatType.find(brt => brt.kode === behandling.behandlingsresultat?.type)?.navn ?? '-'}
            </BodyShort>
          </>
        )}

        <BodyShort as="dt" size="small">
          <FormattedMessage id="BehandlingPickerItemContent.Opprettet" />
        </BodyShort>
        <BodyShort as="dd" size="small">
          <DateTimeLabel dateTimeString={behandling.opprettet} separator="kl" />
        </BodyShort>

        {behandling.avsluttet && (
          <>
            <BodyShort as="dt" size="small">
              <FormattedMessage id="BehandlingPickerItemContent.Avsluttet" />
            </BodyShort>
            <BodyShort as="dd" size="small">
              <DateTimeLabel dateTimeString={behandling.avsluttet} separator="kl" />
            </BodyShort>
          </>
        )}
        {behandling.type !== 'BT-003' && (
          <>
            <BodyShort as="dt" size="small">
              <FormattedMessage id="BehandlingPickerItemContent.Enhet" />
            </BodyShort>
            <BodyShort as="dd" size="small">
              {behandling.behandlendeEnhetId} - {behandling.behandlendeEnhetNavn}
            </BodyShort>
          </>
        )}
      </dl>
    </VStack>
  );
};

export const finnBehandlingNavn = (
  behandling: FagsakBehandlingDto,
  alleKodeverk: AlleKodeverk,
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving,
  klageTekst: string,
): Props['navn'] => {
  const erTilbakekreving = behandling.type === 'BT-007' || behandling.type === 'BT-009';
  const behandlingType = erTilbakekreving
    ? alleKodeverkTilbakekreving['BehandlingType']
    : alleKodeverk['BehandlingType'];
  const årsakKode = behandling.førsteÅrsak?.behandlingArsakType;
  let årsak: string | undefined;
  if ((behandling.type === 'BT-004' || behandling.type === 'BT-003') && årsakKode) {
    årsak = alleKodeverk['BehandlingÅrsakType'].find(bt => bt.kode === årsakKode)?.navn;
  } else if (behandling.type === 'BT-009' && (årsakKode === 'RE_KLAGE_KA' || årsakKode === 'RE_KLAGE_NFP')) {
    årsak = klageTekst;
  }
  return { type: behandlingType.find(bt => bt.kode === behandling.type)?.navn ?? '', årsak };
};
