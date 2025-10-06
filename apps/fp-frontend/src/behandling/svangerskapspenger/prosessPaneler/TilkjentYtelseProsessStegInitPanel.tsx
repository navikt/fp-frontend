import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { TilkjentYtelseProsessIndex } from '@navikt/fp-prosess-tilkjent-ytelse';
import type {
  AksjonspunktKode,
  ArbeidsgiverOpplysningerPerId,
  Personoversikt,
  VilkarUtfallType,
} from '@navikt/fp-types';

import { BehandlingRel, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5090'];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

export const TilkjentYtelseProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId, personoversikt }: Props) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const overstyrtStatus: VilkarUtfallType = behandling.links.some(
    link => link.rel === BehandlingRel.BEREGNINGRESULTAT_DAGYTELSE,
  )
    ? 'OPPFYLT'
    : 'IKKE_VURDERT';

  const skalHenteData = standardPanelProps.harÅpentAksjonspunkt || overstyrtStatus !== 'IKKE_VURDERT';

  const { data: beregningsresultatDagytelse } = useQuery(api.beregningsresultatDagytelseOptions(behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, skalHenteData));
  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: feriepengegrunnlag } = useQuery(api.feriepengegrunnlagOptions(behandling, skalHenteData));

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.TILKJENT_YTELSE}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' })}
      skalPanelVisesIMeny
      overstyrtStatus={overstyrtStatus}
    >
      {beregningsresultatDagytelse && familiehendelse && søknad ? (
        <TilkjentYtelseProsessIndex
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          personoversikt={personoversikt}
          beregningresultat={beregningsresultatDagytelse}
          familiehendelse={familiehendelse}
          søknad={søknad}
          feriepengegrunnlag={feriepengegrunnlag}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
