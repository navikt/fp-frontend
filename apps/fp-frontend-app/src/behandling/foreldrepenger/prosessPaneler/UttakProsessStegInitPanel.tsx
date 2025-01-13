import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { UttakProsessIndex } from '@navikt/fp-prosess-uttak';
import { AksessRettigheter, ArbeidsgiverOpplysningerPerId, Behandling, Personoversikt } from '@navikt/fp-types';

import { BehandlingRel, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const getStatusFromUttakresultat = (behandling: Behandling): string => {
  const harLenke = behandling.links.some(link => link.rel === BehandlingRel.UTTAKSRESULTAT_PERIODER);
  if (!harLenke) {
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
  rettigheter: AksessRettigheter;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

export const UttakProsessStegInitPanel = ({
  rettigheter,
  arbeidsgiverOpplysningerPerId,
  personoversikt,
  ...props
}: Props & ProsessPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: uttaksresultatPerioder } = useQuery(api.uttaksresultatPerioderOptions(props.behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(props.behandling));
  const { data: søknad } = useQuery(api.søknadOptions(props.behandling));
  const { data: uttakStønadskontoer } = useQuery(api.uttakStønadskontoerOptions(props.behandling));
  const { data: ytelsefordeling } = useQuery(api.ytelsefordelingOptions(props.behandling));

  const { mutateAsync: oppdaterStønadskontoer } = useMutation({
    mutationFn: api.oppdaterStønadskontoer,
  });

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.UTTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Uttak' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={getStatusFromUttakresultat(props.behandling)}
    >
      {uttaksresultatPerioder && familiehendelse && søknad && uttakStønadskontoer && ytelsefordeling ? (
        <UttakProsessIndex
          kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          personoversikt={personoversikt}
          oppdaterStønadskontoer={oppdaterStønadskontoer}
          uttaksresultatPerioder={uttaksresultatPerioder}
          familiehendelse={familiehendelse}
          soknad={søknad}
          uttakStonadskontoer={uttakStønadskontoer}
          ytelsefordeling={ytelsefordeling}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
