import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { TilkjentYtelseProsessIndex } from '@navikt/fp-prosess-tilkjent-ytelse';
import { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { BehandlingRel, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_TILBAKETREKK];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

export const TilkjentYtelseProsessStegInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  personoversikt,
  ...props
}: Props & ProsessPanelInitProps) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: beregningsresultatDagytelse } = useQuery(api.beregningsresultatDagytelseOptions(props.behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(props.behandling));
  const { data: søknad } = useQuery(api.søknadOptions(props.behandling));
  const { data: feriepengegrunnlag } = useQuery(api.feriepengegrunnlagOptions(props.behandling));

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.TILKJENT_YTELSE}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={
        props.behandling.links.find(link => link.rel === BehandlingRel.BEREGNINGRESULTAT_DAGYTELSE)
          ? VilkarUtfallType.OPPFYLT
          : VilkarUtfallType.IKKE_VURDERT
      }
    >
      {beregningsresultatDagytelse && familiehendelse && søknad ? (
        <TilkjentYtelseProsessIndex
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          personoversikt={personoversikt}
          beregningresultat={beregningsresultatDagytelse}
          familiehendelse={familiehendelse}
          soknad={søknad}
          feriepengegrunnlag={feriepengegrunnlag}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
