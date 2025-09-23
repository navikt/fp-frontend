import React from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { AvsnittSkiller, DateLabel } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import type { AlleKodeverk, LegacyManuellMedlemskapsBehandling, LegacyMedlemPeriode } from '@navikt/fp-types';

interface Props {
  alleKodeverk: AlleKodeverk;
  legacyManuellBehandling: LegacyManuellMedlemskapsBehandling;
}

interface VurderingVisningProps {
  alleKodeverk: AlleKodeverk;
  medlemsperiode: LegacyMedlemPeriode;
  skalViseDato: boolean;
}

const MedlemskapPeriodeVisning = ({ medlemsperiode, alleKodeverk, skalViseDato }: VurderingVisningProps) => {
  const vurderingstyper = alleKodeverk['MedlemskapManuellVurderingType'];

  return (
    <VStack gap="space-16">
      {skalViseDato && (
        <Label>
          <FormattedMessage id="MedlemskapLegacy.Vurderingsdato.Label" />
          <DateLabel dateString={medlemsperiode.vurderingsdato} />
        </Label>
      )}

      <VStack gap="space-8">
        {medlemsperiode.erEosBorger !== undefined && (
          <HStack gap="space-8">
            <Label size="small">
              <FormattedMessage id="MedlemskapLegacy.ErSokerEOS.Label" />
            </Label>
            <BodyShort size="small">
              <FormattedMessage
                id={
                  medlemsperiode.erEosBorger
                    ? 'StatusForBorgerFaktaPanel.CitizenEEA'
                    : 'StatusForBorgerFaktaPanel.CitizenOutsideEEA'
                }
              />
            </BodyShort>
          </HStack>
        )}

        {medlemsperiode.oppholdsrettVurdering !== undefined && (
          <HStack gap="space-8">
            <Label size="small">
              <FormattedMessage id="StatusForBorgerFaktaPanel.Oppholdsrett" />
              {': '}
            </Label>
            <BodyShort size="small">
              {medlemsperiode.oppholdsrettVurdering ? (
                <FormattedMessage id="StatusForBorgerFaktaPanel.HarOppholdsrett" />
              ) : (
                <FormattedMessage id="StatusForBorgerFaktaPanel.HarIkkeOppholdsrett" values={{ b: BTag }} />
              )}
            </BodyShort>
          </HStack>
        )}
        {medlemsperiode.lovligOppholdVurdering !== undefined && (
          <HStack gap="space-8">
            <Label size="small">
              <FormattedMessage id="StatusForBorgerFaktaPanel.LovligOpphold" />
              {': '}
            </Label>
            <BodyShort size="small">
              {medlemsperiode.lovligOppholdVurdering ? (
                <FormattedMessage id="StatusForBorgerFaktaPanel.HarLovligOpphold" />
              ) : (
                <FormattedMessage id="StatusForBorgerFaktaPanel.HarIkkeLovligOpphold" values={{ b: BTag }} />
              )}
            </BodyShort>
          </HStack>
        )}
        {medlemsperiode.bosattVurdering !== undefined && (
          <HStack gap="space-8">
            <Label size="small">
              <FormattedMessage id="MedlemskapLegacy.ErSokerBosattINorge.Label" />
            </Label>
            <BodyShort size="small">
              {medlemsperiode.bosattVurdering ? (
                <FormattedMessage id="MedlemskapLegacy.ErSokerBosattINorge.True" />
              ) : (
                <FormattedMessage id="MedlemskapLegacy.ErSokerBosattINorge.False" />
              )}
            </BodyShort>
          </HStack>
        )}

        {medlemsperiode.medlemskapManuellVurderingType && (
          <HStack gap="space-8">
            <Label size="small">
              <FormattedMessage id="MedlemskapLegacy.MedlemskapManuell.Label" />
            </Label>
            <BodyShort size="small">
              {vurderingstyper.find(type => type.kode === medlemsperiode.medlemskapManuellVurderingType)?.navn}
            </BodyShort>
          </HStack>
        )}
        {medlemsperiode.begrunnelse && (
          <HStack gap="space-8">
            <Label size="small">
              <FormattedMessage id="MedlemskapLegacy.Begrunnelse.Label" />
            </Label>
            <BodyShort size="small">{medlemsperiode.begrunnelse}</BodyShort>
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};

export const VurderMedlemsskapLegacyAksjonspunktVisning = ({ legacyManuellBehandling, alleKodeverk }: Props) => {
  const skalViseDato = legacyManuellBehandling.perioder.length !== 1;

  return (
    <Box.New background="neutral-soft" borderWidth="2" borderRadius="large" borderColor="neutral-subtle" padding="4">
      <VStack gap="space-16">
        <Heading size="small" level="3">
          <FormattedMessage id="MedlemskapLegacy.TidligereVurdering" />
        </Heading>
        {legacyManuellBehandling.perioder.map((p, index) => (
          <React.Fragment key={p.vurderingsdato}>
            <MedlemskapPeriodeVisning medlemsperiode={p} alleKodeverk={alleKodeverk} skalViseDato={skalViseDato} />
            {index + 1 !== legacyManuellBehandling.perioder.length && <AvsnittSkiller dividerParagraf />}
          </React.Fragment>
        ))}
      </VStack>
    </Box.New>
  );
};
