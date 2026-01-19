import { useIntl } from 'react-intl';
import { useMediaQuery } from 'react-responsive';

import { BodyShort, Heading, HStack, Tag, Tooltip, VStack } from '@navikt/ds-react';

import type { KodeverkMedNavn } from '@navikt/fp-types';

import { SidePanelProfileKnapp } from './SidePanelProfileKnapp';

const visSakDekningsgrad = (saksKode: string, dekningsgrad?: number): boolean => {
  const erForeldrepenger = saksKode === 'FP';
  const gyldigDekningsGrad = dekningsgrad === 100 || dekningsgrad === 80;

  return erForeldrepenger && gyldigDekningsGrad;
};

interface Props {
  saksnummer: string;
  fagsakYtelseType: KodeverkMedNavn<'FagsakYtelseType'>;
  fagsakStatus: KodeverkMedNavn<'FagsakStatus'>;
  dekningsgrad?: number;
  fagsakMarkeringTekster?: string[];
  toggleSideMeny: () => void;
  visSideMeny: boolean;
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
  visSideMeny,
}: Props) => {
  const intl = useIntl();
  const isWrappedUnder = useMediaQuery({ maxWidth: 1408 });
  const sorterteFagsakMarkeringer =
    fagsakMarkeringTekster?.toSorted((markering1, markering2) => markering1.localeCompare(markering2)) ?? [];
  return (
    <VStack gap="space-16">
      <HStack gap="space-16">
        {!isWrappedUnder && <SidePanelProfileKnapp toggleSideMeny={toggleSideMeny} visSideMeny={visSideMeny} />}
        <Heading size="medium" level="3">
          {fagsakYtelseType.navn}
        </Heading>
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
      {sorterteFagsakMarkeringer.length > 0 && (
        <HStack gap="space-16">
          {sorterteFagsakMarkeringer.map(tekst => (
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
