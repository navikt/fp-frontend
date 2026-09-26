import { FormattedMessage } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import type { BehandlingType, Fagsak } from '@navikt/fp-types';

import { useFagsakApi } from '../data/fagsakApi';

interface Props {
  fagsak: Fagsak;
  behandlingType?: BehandlingType;
}

export const FagsakSidetittel = ({ fagsak, behandlingType }: Props) => {
  const { kodeverkOptions } = useFagsakApi();
  const { data: alleKodeverk } = useQuery(kodeverkOptions());

  const ytelse = alleKodeverk?.FagsakYtelseType.find(k => k.kode === fagsak.fagsakYtelseType)?.navn;
  const behandlingstype = alleKodeverk?.BehandlingType.find(k => k.kode === behandlingType)?.navn;

  const sidetittelId = behandlingstype
    ? 'FagsakSidetittel.MedBehandling'
    : ytelse
      ? 'FagsakSidetittel.MedYtelse'
      : 'FagsakSidetittel';

  return (
    <Heading level="1" size="small" visuallyHidden>
      <FormattedMessage id={sidetittelId} values={{ navn: fagsak.bruker.navn, ytelse, behandlingstype }} />
    </Heading>
  );
};
