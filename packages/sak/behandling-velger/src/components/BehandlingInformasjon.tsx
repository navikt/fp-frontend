import { FormattedMessage, useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon, StarFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, HStack, Label, Spacer, Tooltip, VStack } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';

import { BehandlingArsakType, BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';
import type { BehandlingAppKontekst, KodeverkMedNavn } from '@navikt/fp-types';

import styles from './behandlingInformasjon.module.css';

const tilbakekrevingÅrsakTyperKlage = [BehandlingArsakType.RE_KLAGE_KA, BehandlingArsakType.RE_KLAGE_NFP];

const erTilbakekrevingÅrsakKlage = (årsak?: string): boolean =>
  !!årsak && tilbakekrevingÅrsakTyperKlage.some(å => å === årsak);

interface Props {
  withChevronDown?: boolean;
  withChevronUp?: boolean;
  behandling: BehandlingAppKontekst;
  getKodeverkMedNavn: (kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined;
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
  getKodeverkMedNavn,
}: Props) => {
  const intl = useIntl();
  return (
    <Box borderWidth="2" borderColor="border-divider" borderRadius="large" padding="3">
      <VStack gap="1">
        <HStack gap="4">
          <div className={styles.arsakPadding}>
            <Label size="small">
              {getKodeverkMedNavn(behandling.type, KodeverkType.BEHANDLING_TYPE, behandling.type)?.navn ?? ''}
            </Label>
          </div>
          {(behandling.type === BehandlingType.REVURDERING || behandling.type === BehandlingType.KLAGE) &&
            behandling.førsteÅrsak?.behandlingArsakType && (
              <>
                -
                <BodyShort size="small">
                  {getKodeverkMedNavn(
                    behandling.førsteÅrsak.behandlingArsakType,
                    KodeverkType.BEHANDLING_AARSAK,
                    BehandlingType.REVURDERING,
                  )?.navn ?? ''}
                </BodyShort>
              </>
            )}
          {behandling.type === BehandlingType.TILBAKEKREVING_REVURDERING &&
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
        <VStack gap="1">
          <HStack gap="1">
            <div className={styles.firstColumnWidth}>
              <BodyShort size="small">
                <FormattedMessage id="BehandlingPickerItemContent.Behandlingstatus" />
              </BodyShort>
            </div>
            <div>
              <BodyShort size="small">
                {getKodeverkMedNavn(behandling.status, KodeverkType.BEHANDLING_STATUS, BehandlingType.FORSTEGANGSSOKNAD)
                  ?.navn ?? ''}
              </BodyShort>
            </div>
          </HStack>
          <VStack gap="4">
            <HStack gap="1">
              <div className={styles.firstColumnWidth}>
                <BodyShort size="small">
                  <FormattedMessage id="BehandlingPickerItemContent.Resultat" />
                </BodyShort>
              </div>
              <div>
                <BodyShort size="small">
                  {behandling.behandlingsresultat?.type
                    ? getKodeverkMedNavn(
                        behandling.behandlingsresultat.type,
                        KodeverkType.BEHANDLING_RESULTAT_TYPE,
                        behandling.type,
                      )?.navn
                    : '-'}
                </BodyShort>
              </div>
            </HStack>
            <HStack gap="1">
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
          <HStack gap="1">
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
    </Box>
  );
};
