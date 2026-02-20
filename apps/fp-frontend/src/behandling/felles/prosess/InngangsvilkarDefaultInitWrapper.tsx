import { createContext, type JSX, type MouseEvent, type ReactElement, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Link, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { BehandlingFpSak, VilkårUtfallType } from '@navikt/fp-types';

import { useBehandlingDataContext } from '../context/BehandlingDataContext';
import { ProsessPanelWrapper } from './ProsessPanelWrapper';
import { type InngangsvilkarPanelData, useInngangsvilkårPanelData } from './useInngangsvilkårPanelData';
import { useProsessMenyRegistrerer } from './useProsessMenyRegistrerer';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
  children: ReactElement;
}

export const InngangsvilkarDefaultInitWrapper = ({ faktaPanelMedÅpentApInfo, children }: Props) => {
  const intl = useIntl();

  const { behandling, oppdaterProsessStegOgFaktaPanelIUrl } = useBehandlingDataContext<BehandlingFpSak>();

  const { inngangsvilkårPanelData, settIngangsvilkårPanelData } = useInngangsvilkårPanelData();

  const erIkkeFerdigbehandlet = inngangsvilkårPanelData.some(p => p.status === 'IKKE_VURDERT');

  const harÅpentInngangsvilkårAksjonspunkt = getErAksjonspunktOpen(inngangsvilkårPanelData, behandling);
  const status = getStatus(inngangsvilkårPanelData);

  const skalInngangsvilkårPanelVises = inngangsvilkårPanelData.length > 0;

  const erPanelValgt = useProsessMenyRegistrerer(
    ProsessStegCode.INNGANGSVILKAR,
    intl.formatMessage({ id: 'Behandlingspunkt.Inngangsvilkar' }),
    skalInngangsvilkårPanelVises,
    harÅpentInngangsvilkårAksjonspunkt,
    status,
    !faktaPanelMedÅpentApInfo && harÅpentInngangsvilkårAksjonspunkt,
  );

  const aksjonspunktTekster = inngangsvilkårPanelData.map(p => p.aksjonspunktTekst).filter(tekst => !!tekst);

  const harFaktaApOgIkkeFerdigBehandlet = faktaPanelMedÅpentApInfo && erIkkeFerdigbehandlet;

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      harÅpentAksjonspunkt={harÅpentInngangsvilkårAksjonspunkt}
      status={status}
      skalSkjulePanel={!erPanelValgt}
    >
      <VStack gap="space-32">
        {erPanelValgt && (harFaktaApOgIkkeFerdigBehandlet || aksjonspunktTekster.length > 0) && (
          <AksjonspunktHelpTextHTML>
            {harFaktaApOgIkkeFerdigBehandlet ? (
              <HStack gap="space-4">
                <FormattedMessage id="InngangsvilkarProsessStegPanelDef.AvventerAvklaringAv" />
                <Link
                  onClick={(evt: MouseEvent) => {
                    oppdaterProsessStegOgFaktaPanelIUrl(undefined, faktaPanelMedÅpentApInfo.urlCode);
                    evt.preventDefault();
                  }}
                >
                  {faktaPanelMedÅpentApInfo.text}
                </Link>
              </HStack>
            ) : (
              aksjonspunktTekster.map(tekst => tekst)
            )}
          </AksjonspunktHelpTextHTML>
        )}

        <InngangsvilkårPanelDataProvider
          settIngangsvilkårPanelData={settIngangsvilkårPanelData}
          erPanelValgt={erPanelValgt}
          harÅpentInngangsvilkårAksjonspunkt={harÅpentInngangsvilkårAksjonspunkt}
        >
          {children}
        </InngangsvilkårPanelDataProvider>
      </VStack>
    </ProsessPanelWrapper>
  );
};

type Context = {
  erPanelValgt: boolean;
  settIngangsvilkårPanelData: (data: InngangsvilkarPanelData) => void;
  harÅpentInngangsvilkårAksjonspunkt: boolean;
};

type PropsContext = {
  children: ReactElement;
} & Context;

export const InngangsvilkårPanelDataContext = createContext<Context>({} as Context);

const InngangsvilkårPanelDataProvider = (props: PropsContext): JSX.Element => {
  const { children, ...otherProps } = props;

  const values = useMemo(() => otherProps, [otherProps]);

  return <InngangsvilkårPanelDataContext.Provider value={values}>{children}</InngangsvilkårPanelDataContext.Provider>;
};

const harMinstEttDelPanelStatus = (paneler: InngangsvilkarPanelData[], vuType: VilkårUtfallType): boolean =>
  paneler.some(p => p.status === vuType);

const getStatus = (paneler: InngangsvilkarPanelData[]): VilkårUtfallType => {
  const harStatusIkkeVurdert = harMinstEttDelPanelStatus(paneler, 'IKKE_VURDERT');
  const harStatusOppfylt = harMinstEttDelPanelStatus(paneler, 'OPPFYLT');
  const tempStatus = harStatusOppfylt && !harStatusIkkeVurdert ? 'OPPFYLT' : 'IKKE_VURDERT';
  return harMinstEttDelPanelStatus(paneler, 'IKKE_OPPFYLT') ? 'IKKE_OPPFYLT' : tempStatus;
};

const getErAksjonspunktOpen = (paneler: InngangsvilkarPanelData[], behandling: BehandlingFpSak): boolean => {
  if (behandling.behandlingHenlagt) {
    return false;
  }
  if (paneler.some(p => p.harÅpentAksjonspunkt)) {
    return true;
  }
  if (paneler.some(p => p.status === 'IKKE_OPPFYLT')) {
    return false;
  }

  return !(paneler.every(p => p.status === 'IKKE_VURDERT') || paneler.every(p => p.status === 'OPPFYLT'));
};
