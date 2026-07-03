import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';

import type { BeregnBeløpParams } from '@navikt/ft-prosess-tilbakekreving';
import {
  ForeldelseAksjonspunktCodes,
  ForeldelseProsessIndex,
  type ForeldelsesresultatActivity,
} from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { AlleKodeverkTilbakekreving, BehandlingFpTilbake } from '@navikt/fp-types';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

import '@navikt/ft-prosess-tilbakekreving-foreldelse/dist/style.css';

const AKSJONSPUNKT_KODER = [ForeldelseAksjonspunktCodes.VURDER_FORELDELSE];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const ForeldelseProsessInitPanel = ({ tilbakekrevingKodeverk }: Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, fagsak } = useBehandlingDataContext<BehandlingFpTilbake>();

  const erAktiv = useErProsessPanelAktiv(ProsessStegCode.FORELDELSE, true, standardPanelProps.harÅpentAksjonspunkt);
  const skalHenteData = useSkalHenteData(ProsessStegCode.FORELDELSE, erAktiv, 'prosess', true);

  const api = getBehandlingApi(behandling);

  const { data: perioderForeldelse } = useQuery(
    medPrioritet(api.tilbakekreving.perioderForeldelseOptions(behandling), skalHenteData),
  );

  const { mutateAsync: beregnBeløp } = useMutation({
    mutationFn: (values: BeregnBeløpParams) => api.tilbakekreving.beregneBeløp(values),
  });

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.FORELDELSE}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Foreldelse' })}
      skalPanelVisesIMeny
      overstyrtStatus={harLenke(behandling, 'PERIODER_FORELDELSE') ? 'OPPFYLT' : 'IKKE_VURDERT'}
    >
      {perioderForeldelse ? (
        <Wrapper
          perioderForeldelse={perioderForeldelse}
          kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
          beregnBelop={(data: BeregnBeløpParams) => beregnBeløp(data)}
          // @ts-expect-error K9 har ein verdi 'DELTAKER' som me ikkje har. Legg til?
          relasjonsRolleType={fagsak.relasjonsRolleType}
          // @ts-expect-error K9 har ein verdi 'DELTAKER' som me ikkje har. Legg til?
          relasjonsRolleTypeKodeverk={standardPanelProps.alleKodeverk['RelasjonsRolleType']}
          {...standardPanelProps}
          aksjonspunkter={standardPanelProps.aksjonspunkterForPanel}
          behandlingUuid={behandling.uuid}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};

const Wrapper = (props: ComponentProps<typeof ForeldelseProsessIndex>) => {
  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<ForeldelsesresultatActivity[]>();
  return <ForeldelseProsessIndex {...props} formData={mellomlagretFormData} setFormData={setMellomlagretFormData} />;
};
