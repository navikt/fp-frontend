import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';

import {
  KlageVurdering as klageVurderingType,
  KlageVurderingOmgjoer as klageVurderingOmgjoerType,
} from '@navikt/fp-kodeverk';
import type { KlageVurdering } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  klageVurdering: KlageVurdering;
}

/**
 * BehandleklageformNfp
 *
 * Setter opp readonly-panel for behandling av klage (KA).
 */
export const BehandleKlageFormKa = ({ klageVurdering }: Props) => {
  const intl = useIntl();

  const { alleKodeverk } = usePanelDataContext();

  const {
    begrunnelse,
    fritekstTilBrev,
    klageVurdering: vurdering,
    klageMedholdArsak,
    klageVurderingOmgjoer,
  } = klageVurdering.klageVurderingResultatNK ?? {};

  const medholdReasons = alleKodeverk['KlageMedholdÅrsak'];

  return (
    <VStack gap="space-16">
      <Heading size="small" level="2">
        {intl.formatMessage({ id: 'Klage.ResolveKlage.Title' })}
      </Heading>
      <VStack gap="space-4">
        <Label size="small">
          <FormattedMessage id="KlageVurderingRadioOptionsKa.VurderingForKlage" />
        </Label>
        <BodyShort size="small">
          {vurdering === klageVurderingType.STADFESTE_YTELSESVEDTAK && (
            <FormattedMessage id="Klage.ResolveKlage.KeepVedtakNk" />
          )}
          {vurdering === klageVurderingType.MEDHOLD_I_KLAGE && (
            <FormattedMessage id="Klage.ResolveKlage.ChangeVedtak" />
          )}
          {vurdering === klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE && (
            <FormattedMessage id="Klage.Behandle.Hjemsendt" />
          )}
          {vurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK && (
            <FormattedMessage id="Klage.ResolveKlage.NullifyVedtak" />
          )}
        </BodyShort>
      </VStack>
      {vurdering === klageVurderingType.MEDHOLD_I_KLAGE && (
        <VStack gap="space-4">
          <Label size="small">
            <FormattedMessage id="Klage.ResolveKlage.Cause" />
          </Label>
          <BodyShort size="small">{medholdReasons.find(mo => mo.kode === klageMedholdArsak)?.navn}</BodyShort>
          <BodyShort size="small">
            {klageVurderingOmgjoer === klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE && (
              <FormattedMessage id="Klage.Behandle.Omgjort" />
            )}
            {klageVurderingOmgjoer === klageVurderingOmgjoerType.UGUNST_MEDHOLD_I_KLAGE && (
              <FormattedMessage id="Klage.Behandle.Ugunst" />
            )}
            {klageVurderingOmgjoer === klageVurderingOmgjoerType.DELVIS_MEDHOLD_I_KLAGE && (
              <FormattedMessage id="Klage.Behandle.DelvisOmgjort" />
            )}
          </BodyShort>
        </VStack>
      )}
      {(vurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK ||
        vurdering === klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE) && (
        <VStack gap="space-4">
          <Label size="small">
            <FormattedMessage id="Klage.ResolveKlage.Cause" />
          </Label>
          <BodyShort size="small">{medholdReasons.find(mo => mo.kode === klageMedholdArsak)?.navn}</BodyShort>
        </VStack>
      )}
      <VStack gap="space-4">
        <Label size="small">
          <FormattedMessage id="FritekstKlageBrevTextField.Fritekst" />
        </Label>
        <BodyShort size="small">{fritekstTilBrev}</BodyShort>
      </VStack>
      <VStack gap="space-4">
        <Label size="small">
          <FormattedMessage id="KlageVurderingRadioOptionsKa.Begrunnelse" />
        </Label>
        <BodyShort size="small">{begrunnelse}</BodyShort>
      </VStack>
    </VStack>
  );
};
