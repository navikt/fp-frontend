import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { TilkjentYtelseProsessIndex } from '@navikt/fp-prosess-tilkjent-ytelse';
import type { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { BehandlingRel, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_TILBAKETREKK];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

export const TilkjentYtelseProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId, personoversikt }: Props) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const overstyrtStatus = behandling.links.find(link => link.rel === BehandlingRel.BEREGNINGRESULTAT_DAGYTELSE)
    ? VilkarUtfallType.OPPFYLT
    : VilkarUtfallType.IKKE_VURDERT;

  const skalHenteData = standardPanelProps.isAksjonspunktOpen || overstyrtStatus !== VilkarUtfallType.IKKE_VURDERT;

  const { data: beregningsresultatDagytelse } = useQuery(api.beregningsresultatDagytelseOptions(behandling, true));
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
