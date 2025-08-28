import { FormattedMessage, useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon, StarFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, HStack, Label, Spacer, Tooltip, VStack } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';

import { BehandlingArsakType, BehandlingType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, AlleKodeverkTilbakekreving, BehandlingAppKontekst } from '@navikt/fp-types';

import styles from './behandlingInformasjon.module.css';

const tilbakekrevingÅrsakTyperKlage = [BehandlingArsakTypeEnum.RE_KLAGE_KA, BehandlingArsakTypeEnum.RE_KLAGE_NFP];

const erTilbakekrevingÅrsakKlage = (årsak?: string): boolean =>
  !!årsak && tilbakekrevingÅrsakTyperKlage.some(å => å === årsak);

interface Props {
  withChevronDown?: boolean;
  withChevronUp?: boolean;
  behandling: BehandlingAppKontekst;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

/**
 * BehandlingInformasjon
 *
 * Håndterer formatering av innholdet i den enkelte behandling i behandlingsvelgeren.
 */
export const BehandlingInformasjon = ({
  withChevronDown = false,
  withChevronUp = false,
  behandling,
  alleKodeverk,
  alleKodeverkTilbakekreving,
}: Props) => {
  const intl = useIntl();

  const erTilbakekreving =
    behandling.type === BehandlingTypeEnum.TILBAKEKREVING ||
    behandling.type === BehandlingTypeEnum.TILBAKEKREVING_REVURDERING;

  const behandlingType = erTilbakekreving
    ? alleKodeverkTilbakekreving['BehandlingType']
    : alleKodeverk['BehandlingType'];

  const behandlingResultatType = erTilbakekreving
    ? alleKodeverkTilbakekreving['BehandlingResultatType']
    : alleKodeverk['BehandlingResultatType'];

  return (
    <Box.New borderWidth="2" borderColor="neutral-subtle" borderRadius="large" padding="3">
      <VStack gap="space-4">
        <HStack gap="space-16">
          <div className={styles.arsakPadding}>
            <Label size="small">{behandlingType.find(bt => bt.kode === behandling.type)?.navn ?? ''}</Label>
          </div>
          {(behandling.type === BehandlingTypeEnum.REVURDERING || behandling.type === BehandlingTypeEnum.KLAGE) &&
            behandling.førsteÅrsak?.behandlingArsakType && (
              <>
                -
                <BodyShort size="small">
                  {alleKodeverk['BehandlingÅrsakType'].find(
                    bt => bt.kode === behandling.førsteÅrsak?.behandlingArsakType,
                  )?.navn ?? ''}
                </BodyShort>
              </>
            )}
          {behandling.type === BehandlingTypeEnum.TILBAKEKREVING_REVURDERING &&
            erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak?.behandlingArsakType) && (
              <>
                -
                <BodyShort size="small">
                  <FormattedMessage id="Behandlingspunkt.Årsak.Klage" />
                </BodyShort>
              </>
            )}
          <Spacer />
          {behandling.gjeldendeVedtak && (
            <StarFillIcon
              className={styles.starImage}
              title={intl.formatMessage({ id: 'BehandlingPickerItemContent.GjeldendeVedtak' })}
            />
          )}
          {withChevronDown && (
            <ChevronDownIcon
              title={intl.formatMessage({ id: 'BehandlingPickerItemContent.Open' })}
              className={styles.chevronImage}
            />
          )}
          {withChevronUp && (
            <ChevronUpIcon
              title={intl.formatMessage({ id: 'BehandlingPickerItemContent.Close' })}
              className={styles.chevronImage}
            />
          )}
        </HStack>
        <div>
          <hr className={styles.line} />
        </div>
        <VStack gap="space-4">
          <HStack gap="space-4">
            <div className={styles.firstColumnWidth}>
              <BodyShort size="small">
                <FormattedMessage id="BehandlingPickerItemContent.Behandlingstatus" />
              </BodyShort>
            </div>
            <div>
              <BodyShort size="small">
                {alleKodeverk['BehandlingStatus'].find(bs => bs.kode === behandling.status)?.navn ?? ''}
              </BodyShort>
            </div>
          </HStack>
          <VStack gap="space-16">
            <HStack gap="space-4">
              <div className={styles.firstColumnWidth}>
                <BodyShort size="small">
                  <FormattedMessage id="BehandlingPickerItemContent.Resultat" />
                </BodyShort>
              </div>
              <div>
                <BodyShort size="small">
                  {behandlingResultatType.find(brt => brt.kode === behandling.behandlingsresultat?.type)?.navn ?? '-'}
                </BodyShort>
              </div>
            </HStack>
            <HStack gap="space-4">
              <div className={styles.firstColumnWidth}>
                <BodyShort size="small">
                  <FormattedMessage id="BehandlingPickerItemContent.Opprettet" />
                </BodyShort>
              </div>
              <div>
                <BodyShort size="small">
                  <DateTimeLabel dateTimeString={behandling.opprettet} separator="kl" />
                </BodyShort>
              </div>
            </HStack>
          </VStack>
          <HStack gap="space-4">
            <div className={styles.firstColumnWidth}>
              <BodyShort size="small">
                <FormattedMessage id="BehandlingPickerItemContent.Avsluttet" />
              </BodyShort>
            </div>
            <div>
              {behandling.avsluttet && (
                <BodyShort size="small">
                  <DateTimeLabel dateTimeString={behandling.avsluttet} separator="kl" />
                </BodyShort>
              )}
            </div>
            <div className={styles.pushRightCorner}>
              <BodyShort size="small" className={styles.inline}>
                <FormattedMessage id="BehandlingPickerItemContent.Enhet" />
              </BodyShort>
              <Tooltip content={behandling.behandlendeEnhetNavn} placement="left">
                <BodyShort size="small" className={styles.inline}>
                  {behandling.behandlendeEnhetId}
                </BodyShort>
              </Tooltip>
            </div>
          </HStack>
        </VStack>
      </VStack>
    </Box.New>
  );
};
