import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { UttakProsessIndex } from '@navikt/fp-prosess-uttak';
import type { ArbeidsgiverOpplysningerPerId, Behandling, Personoversikt } from '@navikt/fp-types';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const getStatusFromUttakresultat = (behandling: Behandling): string => {
  if (!harLenke(behandling, 'UTTAKSRESULTAT')) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  return behandling.alleUttaksperioderAvslått ? VilkarUtfallType.IKKE_OPPFYLT : VilkarUtfallType.OPPFYLT;
};

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FASTSETT_UTTAKPERIODER,
  AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
  AksjonspunktKode.TILKNYTTET_STORTINGET,
  AksjonspunktKode.ANNENPART_EØS,
  AksjonspunktKode.TETTE_SAKER,
  AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,
  AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN,
  AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD,
  AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,
  AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET,
  AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT,
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

  const skalHenteData = standardPanelProps.isAksjonspunktOpen || overstyrtStatus !== VilkarUtfallType.IKKE_VURDERT;

  const api = useBehandlingApi(behandling);

  const { data: uttaksresultat } = useQuery(api.uttaksresultatPerioderOptions(behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, skalHenteData));
  const { data: søknad } = useQuery(api.søknadOptions(behandling));
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
      {uttaksresultat && familiehendelse && søknad && uttakStønadskontoer ? (
        <UttakProsessIndex
          kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          personoversikt={personoversikt}
          oppdaterStønadskontoer={oppdaterStønadskontoer}
          uttaksresultat={uttaksresultat}
          familiehendelse={familiehendelse}
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
