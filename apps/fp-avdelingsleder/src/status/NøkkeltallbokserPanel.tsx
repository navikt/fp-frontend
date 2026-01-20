import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Chips, Detail, Heading, HStack, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import type { BehandlingType, FagsakYtelseType } from '@navikt/fp-types';

import { oppgaverForAvdelingOptions } from '../data/fplosAvdelingslederApi';
import { getParsedValueFromLocalStorage, useStoreValuesInLocalStorage } from '../data/localStorageHelper';
import { useLosKodeverk } from '../data/useLosKodeverk';
import type { OppgaverForAvdeling } from '../typer/oppgaverForAvdelingTsType';

const STATE_KEY = 'nokkeltallbokser';
const fagsakYtelseTypeOrder = ['FP', 'ES', 'SVP', '-'] satisfies FagsakYtelseType[];

interface Props {
  valgtAvdelingEnhet: string;
  children: React.ReactNode;
}

export const NøkkeltallbokserPanel = ({ valgtAvdelingEnhet, children }: Props) => {
  const { data: alleOppgaverForAvdeling, dataUpdatedAt } = useQuery(oppgaverForAvdelingOptions(valgtAvdelingEnhet));

  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');

  const lagretFilter = getParsedValueFromLocalStorage<string[]>(STATE_KEY);

  const [valgteYtelseTyper, setValgteYtelseTyper] = useState<string[]>(
    lagretFilter ?? fagsakYtelseTyper.map(ytelse => ytelse.kode),
  );

  useStoreValuesInLocalStorage(STATE_KEY, valgteYtelseTyper);

  const oppgaverFiltrertPåYtelseType = alleOppgaverForAvdeling.filter(ofa =>
    valgteYtelseTyper.includes(ofa.fagsakYtelseType),
  );

  return (
    <Box padding="space-40">
      <VStack gap="space-16">
        <HStack justify="space-between">
          <Heading size="medium">
            <FormattedMessage id="NøkkeltallbokserPanel.Status" />
          </Heading>
          {children}
        </HStack>
        <HStack justify="space-between" align="center" style={{ maxWidth: '1100px' }}>
          <Detail>
            <FormattedMessage
              id="NøkkeltallbokserPanel.SistOppdatert"
              values={{ tid: dayjs(dataUpdatedAt).format('DD.MM.YYYY kl. HH:mm:ss') }}
            />
          </Detail>
          <Chips>
            {fagsakYtelseTyper
              .toSorted((a, b) => fagsakYtelseTypeOrder.indexOf(a.kode) - fagsakYtelseTypeOrder.indexOf(b.kode))
              .map(ytelseType => (
                <Chips.Toggle
                  key={ytelseType.kode}
                  selected={valgteYtelseTyper.includes(ytelseType.kode)}
                  onClick={() => {
                    if (valgteYtelseTyper.includes(ytelseType.kode)) {
                      setValgteYtelseTyper(valgteYtelseTyper.filter(ytelse => ytelse !== ytelseType.kode));
                    } else {
                      setValgteYtelseTyper([...valgteYtelseTyper, ytelseType.kode]);
                    }
                  }}
                >
                  {ytelseType.navn}
                </Chips.Toggle>
              ))}
          </Chips>
        </HStack>
        <HStack gap="space-32" style={{ maxWidth: '1200px' }}>
          <NøkkeltallBoks oppgaverForAvdeling={oppgaverFiltrertPåYtelseType} behandlingType="BT-002" />
          <NøkkeltallBoks oppgaverForAvdeling={oppgaverFiltrertPåYtelseType} behandlingType="BT-004" />
          <NøkkeltallBoks oppgaverForAvdeling={oppgaverFiltrertPåYtelseType} behandlingType="BT-003" />
          <NøkkeltallBoks oppgaverForAvdeling={oppgaverFiltrertPåYtelseType} behandlingType="BT-007" />
          <NøkkeltallBoks oppgaverForAvdeling={oppgaverFiltrertPåYtelseType} behandlingType={undefined} />
        </HStack>
      </VStack>
    </Box>
  );
};

const NøkkeltallBoks = ({
  oppgaverForAvdeling,
  behandlingType,
}: {
  oppgaverForAvdeling: OppgaverForAvdeling[];
  behandlingType: BehandlingType | undefined;
}) => {
  const oppgaverFiltrertPåBehandlingType = oppgaverForAvdeling.filter(ofa => ofa.behandlingType === behandlingType);

  const antall = oppgaverFiltrertPåBehandlingType.reduce((sum, ofa) => sum + ofa.antall, 0);
  const antallTilBeslutter = oppgaverFiltrertPåBehandlingType
    .filter(ofa => !ofa.tilBehandling)
    .reduce((sum, ofa) => sum + ofa.antall, 0);

  const behandlingTyper = useLosKodeverk('BehandlingType');
  const behandlingTypeKodeverk = behandlingTyper.find(bt => bt.kode === behandlingType);

  return (
    <Box background="neutral-moderate" borderRadius="large" padding="space-16" width="200px">
      <VStack
        gap="space-16"
        align="center"
        data-testid={'nokkeltallboks-' + (behandlingTypeKodeverk?.kode ?? 'resten')}
      >
        <BodyShort size="small">
          {behandlingTypeKodeverk?.navn ?? <FormattedMessage id="NøkkeltallbokserPanel.Resten" />}
        </BodyShort>
        <Heading size="medium">{antall}</Heading>
        <Detail>
          <FormattedMessage id="NøkkeltallbokserPanel.TilBeslutter" values={{ antall: antallTilBeslutter }} />
        </Detail>
      </VStack>
    </Box>
  );
};
