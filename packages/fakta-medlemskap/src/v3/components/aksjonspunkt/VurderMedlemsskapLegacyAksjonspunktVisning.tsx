import React, { FC, useCallback } from 'react';
import { BodyShort, Box, HStack, Label, VStack } from '@navikt/ds-react';

import { KodeverkType } from '@navikt/fp-kodeverk';

import { AlleKodeverk, LegacyManuellMedlemskapsBehandling, LegacyMedlemPeriode } from '@navikt/fp-types';
import { FormattedMessage } from 'react-intl';
import { AvsnittSkiller, DateLabel } from '@navikt/ft-ui-komponenter';
import { ReadOnlyField } from '@navikt/ft-form-hooks';

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
    <HStack gap="6">
      <BodyShort size="small" weight="semibold">
        <DateLabel dateString={medlemsperiode.vurderingsdato} />
      </BodyShort>

      <VStack gap="2">
        {medlemsperiode.erEosBorger !== undefined && (
          <HStack gap="2">
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
          <HStack gap="2">
            <Label size="small">
              <FormattedMessage id="StatusForBorgerFaktaPanel.Oppholdsrett" />
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
              <FormattedMessage id="StatusForBorgerFaktaPanel.LovligOpphold" />
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
        {medlemsperiode.begrunnelse && <ReadOnlyField value={medlemsperiode.begrunnelse} type="textarea" />}
      </VStack>
    </HStack>
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
          <>
            <MedlemskapPeriodeVisning key={p.vurderingsdato} medlemsperiode={p} alleKodeverk={alleKodeverk} />
            {index + 1 !== legacyManuellBehandling.perioder.length && <AvsnittSkiller dividerParagraf />}
          </>
        ))}
      </VStack>
    </Box>
  );
};

export default VurderMedlemsskapLegacyAksjonspunktVisning;
