import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { UttakProsessIndex } from '@navikt/fp-prosess-uttak';
import type {
  AksjonspunktKode,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  Personoversikt,
  VilkarUtfallType,
} from '@navikt/fp-types';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const getStatusFromUttakresultat = (behandling: Behandling): VilkarUtfallType => {
  if (!harLenke(behandling, 'UTTAKSRESULTAT')) {
    return 'IKKE_VURDERT';
  }
  return behandling.alleUttaksperioderAvslått ? 'IKKE_OPPFYLT' : 'OPPFYLT';
};

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = [
  '5071',
  '6008',
  '5072',
  '5069',
  '5067',
  '5073',
  '5075',
  '5076',
  '5077',
  '5078',
  '5079',
];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

export const UttakProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId, personoversikt }: Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { rettigheter, behandling } = use(BehandlingDataContext);

  const overstyrtStatus = getStatusFromUttakresultat(behandling);

  const skalHenteData = standardPanelProps.harÅpentAksjonspunkt || overstyrtStatus !== 'IKKE_VURDERT';

  const api = useBehandlingApi(behandling);

  const { data: uttaksresultat } = useQuery(api.uttaksresultatPerioderOptions(behandling));
  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: familieHendelse } = useQuery(api.familiehendelseOptions(behandling, skalHenteData));
  const { data: uttakStønadskontoer } = useQuery(api.uttakStønadskontoerOptions(behandling));
  const { data: annenForelderUttakEøs } = useQuery(api.uttakAnnenpartEøsOptions(behandling));

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
      {uttaksresultat && søknad && familieHendelse && uttakStønadskontoer ? (
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
