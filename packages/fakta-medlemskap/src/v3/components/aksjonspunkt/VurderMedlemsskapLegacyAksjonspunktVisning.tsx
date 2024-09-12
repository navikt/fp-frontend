import React, { FC, useCallback } from 'react';
import { BodyShort, Box, Heading, HStack, Label, VStack } from '@navikt/ds-react';

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
}

const MedlemskapPeriodeVisning: FC<VurderingVisningProps> = ({ medlemsperiode, alleKodeverk }) => {
  const vurderingstyper = alleKodeverk[KodeverkType.MEDLEMSKAP_MANUELL_VURDERING_TYPE];
  const bTag = useCallback((chunks: any) => <b>{chunks}</b>, []);
  return (
    <Box key={medlemsperiode.vurderingsdato}>
      <Label>
        Vurdering fra og med <DateLabel dateString={medlemsperiode.vurderingsdato} />
      </Label>
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
              <FormattedMessage id="MedlemskapInfoPanel.ErSokerBosattINorge" />
              {'? '}
            </Label>
            <BodyShort size="small">
              {medlemsperiode.bosattVurdering ? (
                <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.ResidingInNorway" />
              ) : (
                <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.NotResidingInNorway" values={{ b: bTag }} />
              )}
            </BodyShort>
          </HStack>
        )}

        {medlemsperiode.medlemskapManuellVurderingType && (
          <HStack gap="2">
            <Label size="small">
              <FormattedMessage id="MedlemskapInfoPanel.GyldigMedlemFolketrygden" />
              {'? '}
            </Label>
            <BodyShort size="small">
              {vurderingstyper.find(type => type.kode === medlemsperiode.medlemskapManuellVurderingType)?.navn}
            </BodyShort>
          </HStack>
        )}
        {medlemsperiode.begrunnelse && (
          <HStack gap="2">
            <Label size="small">Begrunnelse: </Label>
            <BodyShort size="small">{medlemsperiode.begrunnelse}</BodyShort>
          </HStack>
        )}
      </Box>
    </Box>
  );
};

const VurderMedlemsskapLegacyAksjonspunktVisning: FC<Props> = ({ legacyManuellBehandling, alleKodeverk }) => {
  return (
    <Box background="bg-subtle" borderRadius="large" padding="4">
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage id="MedlemskapLegacy.TidligereVurdering" />
        </Heading>
        {legacyManuellBehandling?.perioder.map(p => (
          <MedlemskapPeriodeVisning key={p.vurderingsdato} medlemsperiode={p} alleKodeverk={alleKodeverk} />
        ))}
      </VStack>
    </Box>
  );
};

export default VurderMedlemsskapLegacyAksjonspunktVisning;
