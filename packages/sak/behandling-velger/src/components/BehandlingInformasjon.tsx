import { type ReactElement, type ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, HStack, Label, Spacer, Tag, Tooltip, VStack } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import styles from './behandlingInformasjon.module.css';

const tilbakekrevingÅrsakTyperKlage = new Set<string>(['RE_KLAGE_KA', 'RE_KLAGE_NFP']);

interface Props {
  skalFremheves: boolean;
  erInteraktiv: boolean;
  renderTittel: (tittel: ReactElement) => ReactElement;
  handling?: ReactNode;
  behandling: FagsakBehandlingDto;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

export const BehandlingInformasjon = ({
  skalFremheves,
  erInteraktiv,
  renderTittel,
  handling,
  behandling,
  alleKodeverk,
  alleKodeverkTilbakekreving,
}: Props) => {
  const erTilbakekreving = behandling.type === 'BT-007' || behandling.type === 'BT-009';
  const behandlingType = erTilbakekreving
    ? alleKodeverkTilbakekreving['BehandlingType']
    : alleKodeverk['BehandlingType'];
  const behandlingResultatType = erTilbakekreving
    ? alleKodeverkTilbakekreving['BehandlingResultatType']
    : alleKodeverk['BehandlingResultatType'];

  return (
    <Box
      data-color="neutral"
      background="raised"
      borderWidth="1"
      borderRadius="8"
      paddingBlock="space-8"
      paddingInline="space-16"
      data-interactive={erInteraktiv}
      data-pressed={skalFremheves || undefined}
      className={styles['behandling']}
    >
      <VStack gap="space-8">
        <HStack className={styles['header']} wrap={false}>
          {renderTittel(
            <BodyShort as="span" size="small">
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
            </BodyShort>,
          )}
          <Spacer />
          {handling}
        </HStack>
        <HStack gap="space-16">
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
          <Spacer />
          <VStack align="end">
            {'gjeldendeVedtak' in behandling && behandling.gjeldendeVedtak && (
              <Tag size="small" variant="moderate">
                <FormattedMessage id="BehandlingPickerItemContent.GjeldendeVedtak" />
              </Tag>
            )}
            <Spacer />
            <Tooltip content={behandling.behandlendeEnhetNavn} placement="left">
              <BodyShort size="small">
                <FormattedMessage
                  id="BehandlingPickerItemContent.Enhet"
                  values={{ enhetId: behandling.behandlendeEnhetId }}
                />
              </BodyShort>
            </Tooltip>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

const erTilbakekrevingÅrsakKlage = (årsak?: string): boolean => !!årsak && tilbakekrevingÅrsakTyperKlage.has(årsak);
