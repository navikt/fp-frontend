import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { UttakProsessIndex } from '@navikt/fp-prosess-uttak';
import type { ArbeidsgiverOpplysningerPerId, BehandlingFpSak, VilkårUtfallType } from '@navikt/fp-types';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { useProsessPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const getStatusFromUttakresultat = (behandling: BehandlingFpSak): VilkårUtfallType => {
  if (!harLenke(behandling, 'UTTAKSRESULTAT')) {
    return 'IKKE_VURDERT';
  }
  return behandling.alleUttaksperioderAvslått ? 'IKKE_OPPFYLT' : 'OPPFYLT';
};

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FASTSETT_UTTAKPERIODER,
  AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
  AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT,
  AksjonspunktKode.UTGÅTT_5069,
  AksjonspunktKode.UTGÅTT_5067,
  AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,
  AksjonspunktKode.UTGÅTT_5075,
  AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD,
  AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,
  AksjonspunktKode.UTGÅTT_5078,
  AksjonspunktKode.UTGÅTT_5079,
];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const UttakProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { rettigheter, behandling } = useBehandlingDataContext();

  const overstyrtStatus = getStatusFromUttakresultat(behandling);

  const skalHenteFamiliehendelse = standardPanelProps.harÅpentAksjonspunkt || overstyrtStatus !== 'IKKE_VURDERT';

  const prioriter = useProsessPanelPrioritet({
    panelKode: ProsessStegCode.UTTAK,
    skalMarkeresSomAktiv: standardPanelProps.harÅpentAksjonspunkt,
  });

  const api = getBehandlingApi(behandling);

  const { data: uttaksresultat } = useQuery(prioriter(api.uttaksresultatPerioderOptions(behandling)));
  const { data: søknad } = useQuery(prioriter(api.søknadOptions(behandling)));
  const { data: familieHendelse } = useQuery(
    prioriter(api.familiehendelseOptions(behandling, skalHenteFamiliehendelse)),
  );
  const { data: uttakStønadskontoer } = useQuery(prioriter(api.uttakStønadskontoerOptions(behandling)));
  const { data: annenForelderUttakEøs } = useQuery(prioriter(api.uttakAnnenpartEøsOptions(behandling)));
  const { data: personoversikt } = useQuery(prioriter(api.behandlingPersonoversiktOptions(behandling)));

  const { mutateAsync: oppdaterStønadskontoer } = useMutation({
    mutationFn: api.oppdaterStønadskontoer,
  });

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.UTTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Uttak' })}
      skalPanelVisesIMeny
      overstyrtStatus={overstyrtStatus}
    >
      {uttaksresultat && søknad && familieHendelse && uttakStønadskontoer && personoversikt ? (
        <UttakProsessIndex
          kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          personoversikt={personoversikt}
          oppdaterStønadskontoer={oppdaterStønadskontoer}
          uttaksresultat={uttaksresultat}
          familiehendelse={familieHendelse}
          soknad={søknad}
          uttakStonadskontoer={uttakStønadskontoer}
          annenForelderUttakEøs={annenForelderUttakEøs}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
