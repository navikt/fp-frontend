import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { TilkjentYtelseProsessIndex } from '@navikt/fp-prosess-tilkjent-ytelse';
import type { ArbeidsgiverOpplysningerPerId, VilkårUtfallType } from '@navikt/fp-types';

import { BehandlingRel, getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
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

  const erAktiv = useErProsessPanelAktiv(
    ProsessStegCode.TILKJENT_YTELSE,
    true,
    standardPanelProps.harÅpentAksjonspunkt,
  );
  const skalHenteData = useSkalHenteData(ProsessStegCode.TILKJENT_YTELSE, erAktiv, 'prosess');

  const { data: beregningsresultatDagytelse } = useQuery(
    medPrioritet(api.beregningsresultatDagytelseOptions(behandling), skalHenteData),
  );
  const { data: familiehendelse } = useQuery(
    medPrioritet(api.familiehendelseOptions(behandling, skalHenteFamiliehendelseOgFeriepenger), skalHenteData),
  );
  const { data: søknad } = useQuery(medPrioritet(api.søknadOptions(behandling), skalHenteData));
  const { data: feriepengegrunnlag } = useQuery(
    medPrioritet(api.feriepengegrunnlagOptions(behandling, skalHenteFamiliehendelseOgFeriepenger), skalHenteData),
  );
  const { data: personoversikt } = useQuery(
    medPrioritet(api.behandlingPersonoversiktOptions(behandling), skalHenteData),
  );

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
