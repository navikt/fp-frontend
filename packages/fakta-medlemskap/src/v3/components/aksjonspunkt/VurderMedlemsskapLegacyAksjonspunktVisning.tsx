import React, { FC, useCallback } from 'react';
import { BodyLong, BodyShort, Box, HStack, Label, VStack } from '@navikt/ds-react';

import { KodeverkType } from '@navikt/fp-kodeverk';

import { AlleKodeverk, LegacyManuellMedlemskapsBehandling, LegacyMedlemPeriode } from '@navikt/fp-types';
import { FormattedMessage } from 'react-intl';
import { DateLabel } from '@navikt/ft-ui-komponenter';

interface Props {
  alleKodeverk: AlleKodeverk;
  legacyManuellBehandling: LegacyManuellMedlemskapsBehandling;
}

interface VurderingVisningProps {
  alleKodeverk: AlleKodeverk;
  medlemsperiode: LegacyMedlemPeriode;
  index: number;
}

const MedlemskapPeriodeVisning: FC<VurderingVisningProps> = ({ medlemsperiode, alleKodeverk, index }) => {
  const vurderingstyper = alleKodeverk[KodeverkType.MEDLEMSKAP_MANUELL_VURDERING_TYPE];
  const bTag = useCallback((chunks: any) => <b>{chunks}</b>, []);
  return (
    <Box key={medlemsperiode.vurderingsdato}>
      <HStack justify="space-between" align="start">
        <BodyShort size="small" weight="semibold">
          <FormattedMessage id="MedlemskapLegacy.Vurdering" values={{ index: index + 1 }} />
        </BodyShort>
        <BodyShort size="small" weight="semibold">
          <DateLabel dateString={medlemsperiode.vurderingsdato} />
        </BodyShort>
      </HStack>

      <Box paddingInline="2">
        {medlemsperiode.oppholdsrettVurdering !== undefined && (
          <HStack gap="2">
            <Label size="small">
              <FormattedMessage id="StatusForBorgerFaktaPanel.CitizenEEA" />
              {': '}
            </Label>
            <BodyShort size="small">
              {medlemsperiode.oppholdsrettVurdering ? (
                <FormattedMessage id="StatusForBorgerFaktaPanel.HarOppholdsrett" />
              ) : (
                <FormattedMessage id="StatusForBorgerFaktaPanel.HarIkkeOppholdsrett" values={{ b: bTag }} />
              )}
            </BodyShort>
          </HStack>
        )}
        {medlemsperiode.lovligOppholdVurdering !== undefined && (
          <HStack gap="2">
            <Label size="small">
              <FormattedMessage id="StatusForBorgerFaktaPanel.CitizenOutsideEEA" />
              {': '}
            </Label>
            <BodyShort size="small">
              {medlemsperiode.lovligOppholdVurdering ? (
                <FormattedMessage id="StatusForBorgerFaktaPanel.HarLovligOpphold" />
              ) : (
                <FormattedMessage id="StatusForBorgerFaktaPanel.HarIkkeLovligOpphold" values={{ b: bTag }} />
              )}
            </BodyShort>
          </HStack>
        )}
        {medlemsperiode.bosattVurdering !== undefined && (
          <HStack gap="2">
            <Label size="small">
              <FormattedMessage id="MedlemskapLegacy.ErSokerBosattINorge.Label" />
            </Label>
            <BodyShort size="small">
              {medlemsperiode.bosattVurdering ? (
                <FormattedMessage id="MedlemskapLegacy.ErSokerBosattINorge.True" />
              ) : (
                <FormattedMessage id="MedlemskapLegacy.ErSokerBosattINorge.False" values={{ b: bTag }} />
              )}
            </BodyShort>
          </HStack>
        )}

        {medlemsperiode.medlemskapManuellVurderingType && (
          <HStack gap="2">
            <Label size="small">
              <FormattedMessage id="MedlemskapLegacy.MedlemskapManuell.Label" />
            </Label>
            <BodyShort size="small">
              {vurderingstyper.find(type => type.kode === medlemsperiode.medlemskapManuellVurderingType)?.navn}
            </BodyShort>
          </HStack>
        )}
        {medlemsperiode.begrunnelse && <BodyLong size="small">{medlemsperiode.begrunnelse}</BodyLong>}
      </Box>
    </Box>
  );
};

const VurderMedlemsskapLegacyAksjonspunktVisning: FC<Props> = ({ legacyManuellBehandling, alleKodeverk }) => {
  return (
    <Box background="surface-subtle" borderWidth="2" borderRadius="large" borderColor="border-divider" padding="4">
      <VStack gap="4">
        <HStack>
          <BodyShort size="small" weight="semibold">
            <FormattedMessage id="MedlemskapLegacy.TidligereVurdering" />
          </BodyShort>
        </HStack>
        {legacyManuellBehandling?.perioder.map((p, index) => (
          <MedlemskapPeriodeVisning
            key={p.vurderingsdato}
            medlemsperiode={p}
            alleKodeverk={alleKodeverk}
            index={index}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default VurderMedlemsskapLegacyAksjonspunktVisning;
