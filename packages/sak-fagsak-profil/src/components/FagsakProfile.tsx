import React from 'react';
import { useIntl } from 'react-intl';

import { BodyShort, Heading, HStack, Tag, Tooltip, VStack } from '@navikt/ds-react';

import { SidePanelKnapp } from '@navikt/fp-frontend-app/src/fagsak/components/SidePanelKnapp';
import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';

const visSakDekningsgrad = (saksKode: string, dekningsgrad?: number): boolean => {
  const erForeldrepenger = saksKode === FagsakYtelseType.FORELDREPENGER;
  const gyldigDekningsGrad = dekningsgrad === 100 || dekningsgrad === 80;

  return erForeldrepenger && gyldigDekningsGrad;
};

interface Props {
  saksnummer: string;
  fagsakYtelseType: KodeverkMedNavn;
  fagsakStatus: KodeverkMedNavn;
  dekningsgrad?: number;
  fagsakMarkeringTekster?: string[];
  toggleSideMeny: () => void;
}

/**
 * FagsakProfile
 *
 * Viser fagsakinformasjon og knapper for å endre status eller lukke sak.
 */
export const FagsakProfile = ({
  saksnummer,
  fagsakYtelseType,
  fagsakStatus,
  dekningsgrad,
  fagsakMarkeringTekster,
  toggleSideMeny,
}: Props) => {
  const intl = useIntl();

  return (
    <VStack gap="4">
      <HStack gap="4">
        <SidePanelKnapp toggleSideMeny={toggleSideMeny} />
        <Heading size="medium">{fagsakYtelseType.navn}</Heading>
        {visSakDekningsgrad(fagsakYtelseType.kode, dekningsgrad) && (
          <Tooltip
            content={intl.formatMessage({ id: 'FagsakProfile.Dekningsgrad' }, { dekningsgrad })}
            placement="bottom"
          >
            <Tag variant="info">{`${dekningsgrad}%`}</Tag>
          </Tooltip>
        )}
      </HStack>
      <BodyShort size="small">{`${saksnummer} - ${fagsakStatus.navn}`}</BodyShort>
      {fagsakMarkeringTekster && fagsakMarkeringTekster.length > 0 && (
        <HStack gap="4">
          {fagsakMarkeringTekster.map(tekst => (
            <Tooltip
              key={tekst}
              content={intl.formatMessage({ id: 'FagsakProfile.FagsakMarkering' }, { tekst })}
              placement="bottom"
            >
              <Tag size="small" variant="alt1">
                {tekst}
              </Tag>
            </Tooltip>
          ))}
        </HStack>
      )}
    </VStack>
  );
};
