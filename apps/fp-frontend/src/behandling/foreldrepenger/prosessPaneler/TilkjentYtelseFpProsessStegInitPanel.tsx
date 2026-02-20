import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { TilkjentYtelseProsessIndex } from '@navikt/fp-prosess-tilkjent-ytelse';
import type { ArbeidsgiverOpplysningerPerId, Personoversikt, VilkårUtfallType } from '@navikt/fp-types';

import { BehandlingRel, useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.UTGÅTT_5090];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

export const TilkjentYtelseFpProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId, personoversikt }: Props) => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);
  const { behandling } = useBehandlingDataContext();

  const overstyrtStatus: VilkårUtfallType = behandling.links.some(
    link => link.rel === BehandlingRel.BEREGNINGRESULTAT_DAGYTELSE,
  )
    ? 'OPPFYLT'
    : 'IKKE_VURDERT';

  const skalHenteData = standardPanelProps.harÅpentAksjonspunkt || overstyrtStatus !== 'IKKE_VURDERT';

  const api = useBehandlingApi(behandling);

  const { data: beregningsresultatDagytelse } = useQuery(api.beregningsresultatDagytelseOptions(behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, skalHenteData));
  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: feriepengegrunnlag } = useQuery(api.feriepengegrunnlagOptions(behandling, skalHenteData));

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.TILKJENT_YTELSE}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' })}
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
