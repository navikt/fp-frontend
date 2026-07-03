import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { UttakProsessIndex } from '@navikt/fp-prosess-uttak';
import type { ArbeidsgiverOpplysningerPerId, BehandlingFpSak, VilkårUtfallType } from '@navikt/fp-types';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
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

  const erAktiv = useErProsessPanelAktiv(ProsessStegCode.UTTAK, true, standardPanelProps.harÅpentAksjonspunkt);
  const skalHenteData = useSkalHenteData(ProsessStegCode.UTTAK, erAktiv, 'prosess');

  const api = getBehandlingApi(behandling);

  const { data: uttaksresultat } = useQuery(medPrioritet(api.uttaksresultatPerioderOptions(behandling), skalHenteData));
  const { data: søknad } = useQuery(medPrioritet(api.søknadOptions(behandling), skalHenteData));
  const { data: familieHendelse } = useQuery(
    medPrioritet(api.familiehendelseOptions(behandling, skalHenteFamiliehendelse), skalHenteData),
  );
  const { data: uttakStønadskontoer } = useQuery(
    medPrioritet(api.uttakStønadskontoerOptions(behandling), skalHenteData),
  );
  const { data: annenForelderUttakEøs } = useQuery(
    medPrioritet(api.uttakAnnenpartEøsOptions(behandling), skalHenteData),
  );
  const { data: personoversikt } = useQuery(
    medPrioritet(api.behandlingPersonoversiktOptions(behandling), skalHenteData),
  );

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
