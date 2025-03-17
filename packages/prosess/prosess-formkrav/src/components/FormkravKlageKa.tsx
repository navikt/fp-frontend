import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';
import { DATE_TIME_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { KodeverkType } from '@navikt/fp-kodeverk';
import type { KlageVurdering } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { AvsluttetBehandling } from '../types/avsluttetBehandlingTsType';

interface Props {
  klageVurdering: KlageVurdering;
  avsluttedeBehandlinger: AvsluttetBehandling[];
}

/**
 * FormkravKlageKa
 *
 * Readonly panel for formkrav klage (KA).
 */
export const FormkravKlageKa = ({ klageVurdering, avsluttedeBehandlinger }: Props) => {
  const intl = useIntl();

  const { alleKodeverk } = usePanelDataContext();

  const { klageFormkravResultatKA, underBehandlingKabal, behandletAvKabal } = klageVurdering;

  let vedtak = intl.formatMessage({ id: 'Klage.Formkrav.IkkePåklagdVedtak' });
  if (klageFormkravResultatKA?.paKlagdBehandlingUuid) {
    const behandling = avsluttedeBehandlinger.find(b => b.uuid === klageFormkravResultatKA.paKlagdBehandlingUuid);
    if (behandling) {
      const navn = alleKodeverk[KodeverkType.BEHANDLING_TYPE].find(k => k.kode === behandling.type)?.navn;
      vedtak = `${navn} ${dayjs(behandling.avsluttet).format(DATE_TIME_FORMAT)}`;
    }
  }

  return (
    <VStack gap="4">
      <Heading size="small">
        <FormattedMessage id="Klage.Formkrav.Title" />
      </Heading>
      {underBehandlingKabal && (
        <Heading size="small">
          <FormattedMessage id="Klage.Formkrav.SeKabalText" />
        </Heading>
      )}
      {!underBehandlingKabal && !behandletAvKabal && (
        <>
          <VStack gap="1">
            <Label size="small">
              <FormattedMessage id="Klage.Formkrav.VelgVedtak" />
            </Label>
            <BodyShort size="small">{vedtak}</BodyShort>
          </VStack>
          <VStack gap="1">
            <Label size="small">
              <FormattedMessage id="Klage.Formkrav.ErKlagerPart" />
            </Label>
            <BodyShort size="small">
              {klageFormkravResultatKA?.erKlagerPart ? (
                <FormattedMessage id="Klage.Formkrav.Ja" />
              ) : (
                <FormattedMessage id="Klage.Formkrav.Nei" />
              )}
            </BodyShort>
          </VStack>
          <VStack gap="1">
            <Label size="small">
              <FormattedMessage id="Klage.Formkrav.ErKonkret" />
            </Label>
            <BodyShort size="small">
              {klageFormkravResultatKA?.erKlageKonkret ? (
                <FormattedMessage id="Klage.Formkrav.Ja" />
              ) : (
                <FormattedMessage id="Klage.Formkrav.Nei" />
              )}
            </BodyShort>
          </VStack>
          <VStack gap="1">
            <Label size="small">
              <FormattedMessage id="Klage.Formkrav.ErFristOverholdt" />
            </Label>
            <BodyShort size="small">
              {klageFormkravResultatKA?.erKlagefirstOverholdt ? (
                <FormattedMessage id="Klage.Formkrav.Ja" />
              ) : (
                <FormattedMessage id="Klage.Formkrav.Nei" />
              )}
            </BodyShort>
          </VStack>
          <VStack gap="1">
            <Label size="small">
              <FormattedMessage id="Klage.Formkrav.ErSignert" />
            </Label>
            <BodyShort size="small">
              {klageFormkravResultatKA?.erSignert ? (
                <FormattedMessage id="Klage.Formkrav.Ja" />
              ) : (
                <FormattedMessage id="Klage.Formkrav.Nei" />
              )}
            </BodyShort>
          </VStack>
          <VStack gap="1">
            <Label size="small">
              <FormattedMessage id="Klage.Formkrav.Vurdering" />
            </Label>
            <BodyShort size="small">{klageFormkravResultatKA?.begrunnelse}</BodyShort>
          </VStack>
        </>
      )}
    </VStack>
  );
};
