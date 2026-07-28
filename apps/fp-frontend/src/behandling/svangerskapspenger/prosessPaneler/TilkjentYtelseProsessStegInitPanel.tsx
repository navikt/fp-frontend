import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { TilkjentYtelseProsessIndex } from '@navikt/fp-prosess-tilkjent-ytelse';
import type { ArbeidsgiverOpplysningerPerId, VilkårUtfallType } from '@navikt/fp-types';

import { BehandlingRel, getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { useProsessPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.UTGÅTT_5090];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const TilkjentYtelseProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);
  const intl = useIntl();
  const { behandling } = useBehandlingDataContext();

  const api = getBehandlingApi(behandling);

  const overstyrtStatus: VilkårUtfallType = behandling.links.some(
    link => link.rel === BehandlingRel.BEREGNINGRESULTAT_DAGYTELSE,
  )
    ? 'OPPFYLT'
    : 'IKKE_VURDERT';

  const skalHenteFamiliehendelseOgFeriepenger =
    standardPanelProps.harÅpentAksjonspunkt || overstyrtStatus !== 'IKKE_VURDERT';

  const prioriter = useProsessPanelPrioritet({
    panelKode: ProsessStegCode.TILKJENT_YTELSE,
    skalMarkeresSomAktiv: standardPanelProps.harÅpentAksjonspunkt,
  });

  const { data: beregningsresultatDagytelse } = useQuery(prioriter(api.beregningsresultatDagytelseOptions(behandling)));
  const { data: familiehendelse } = useQuery(
    prioriter(api.familiehendelseOptions(behandling, skalHenteFamiliehendelseOgFeriepenger)),
  );
  const { data: søknad } = useQuery(prioriter(api.søknadOptions(behandling)));
  const { data: feriepengegrunnlag } = useQuery(
    prioriter(api.feriepengegrunnlagOptions(behandling, skalHenteFamiliehendelseOgFeriepenger)),
  );
  const { data: personoversikt } = useQuery(prioriter(api.behandlingPersonoversiktOptions(behandling)));

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.TILKJENT_YTELSE}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' })}
      skalPanelVisesIMeny
      overstyrtStatus={overstyrtStatus}
    >
      {beregningsresultatDagytelse && familiehendelse && søknad && personoversikt ? (
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
