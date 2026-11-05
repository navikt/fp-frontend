import { type ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Spacer, Tag, Tooltip, VStack } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import styles from './behandlingInformasjon.module.css';

const tilbakekrevingÅrsakTyperKlage = new Set<string>(['RE_KLAGE_KA', 'RE_KLAGE_NFP']);

interface Props {
  tittelId: string;
  behandling: FagsakBehandlingDto;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
  children?: ReactNode;
}

export const BehandlingInformasjon = ({
  tittelId,
  behandling,
  alleKodeverk,
  alleKodeverkTilbakekreving,
  children,
}: Props) => {
  const erTilbakekreving = behandling.type === 'BT-007' || behandling.type === 'BT-009';
  const behandlingType = erTilbakekreving
    ? alleKodeverkTilbakekreving['BehandlingType']
    : alleKodeverk['BehandlingType'];
  const behandlingResultatType = erTilbakekreving
    ? alleKodeverkTilbakekreving['BehandlingResultatType']
    : alleKodeverk['BehandlingResultatType'];

  return (
    <HStack gap="space-16" wrap={false}>
      <VStack gap="space-4" className={styles['innhold']}>
        <HStack gap="space-4 space-8" align="center">
          <BodyShort as="span" size="small" id={tittelId}>
            <Label as="span" size="small">
              {behandlingType.find(bt => bt.kode === behandling.type)?.navn ?? ''}
            </Label>
            {(behandling.type === 'BT-004' || behandling.type === 'BT-003') &&
              behandling.førsteÅrsak?.behandlingArsakType && (
                <>
                  {' - '}
                  {alleKodeverk['BehandlingÅrsakType'].find(
                    bt => bt.kode === behandling.førsteÅrsak?.behandlingArsakType,
                  )?.navn ?? ''}
                </>
              )}
            {behandling.type === 'BT-009' &&
              erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak?.behandlingArsakType) && (
                <>
                  {' - '}
                  <FormattedMessage id="Behandlingspunkt.Årsak.Klage" />
                </>
              )}
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
        </dl>
      </VStack>
      <Spacer />
      <VStack align="end">
        <div className={styles['tittelAvstand']} />
        {children}
        <Tooltip content={behandling.behandlendeEnhetNavn} placement="left">
          <BodyShort size="small" className={styles['enhet']}>
            <FormattedMessage
              id="BehandlingPickerItemContent.Enhet"
              values={{ enhetId: behandling.behandlendeEnhetId }}
            />
          </BodyShort>
        </Tooltip>
      </VStack>
    </HStack>
  );
};

const erTilbakekrevingÅrsakKlage = (årsak?: string): boolean => !!årsak && tilbakekrevingÅrsakTyperKlage.has(årsak);
