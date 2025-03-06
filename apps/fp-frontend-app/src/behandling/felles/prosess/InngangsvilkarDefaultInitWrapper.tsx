import { createContext, type JSX, type MouseEvent, type ReactElement, use, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Link, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { Behandling } from '@navikt/fp-types';

import type { InngangsvilkarPanelData } from '../typer/inngangsvilkarPanelData';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { ProsessPanelWrapper } from './ProsessPanelWrapper';
import { useInngangsvilkårPanelData } from './useInngangsvilkårPanelData';
import { useProsessMenyRegistrerer } from './useProsessMenyRegistrerer';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
  children: ReactElement;
}

export const InngangsvilkarDefaultInitWrapper = ({ faktaPanelMedÅpentApInfo, children }: Props) => {
  const intl = useIntl();

  const { behandling, oppdaterProsessStegOgFaktaPanelIUrl } = use(BehandlingDataContext);

  const { inngangsvilkårPanelData, settIngangsvilkårPanelData } = useInngangsvilkårPanelData();

  const erIkkeFerdigbehandlet = inngangsvilkårPanelData.some(p => p.status === VilkarUtfallType.IKKE_VURDERT);

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

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={harÅpentInngangsvilkårAksjonspunkt}
      status={status}
      skalSkjulePanel={!erPanelValgt}
    >
      <VStack gap="8">
        {erPanelValgt && ((faktaPanelMedÅpentApInfo && erIkkeFerdigbehandlet) || aksjonspunktTekster.length > 0) && (
          <AksjonspunktHelpTextHTML>
            {faktaPanelMedÅpentApInfo && erIkkeFerdigbehandlet
              ? [
                  <HStack gap="1" key="1">
                    <FormattedMessage id="InngangsvilkarProsessStegPanelDef.AvventerAvklaringAv" />
                    <Link
                      onClick={(evt: MouseEvent) => {
                        oppdaterProsessStegOgFaktaPanelIUrl(undefined, faktaPanelMedÅpentApInfo?.urlCode);
                        evt.preventDefault();
                      }}
                    >
                      {faktaPanelMedÅpentApInfo.text}
                    </Link>
                  </HStack>,
                ]
              : aksjonspunktTekster.map(tekst => tekst)}
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

const harMinstEttDelPanelStatus = (paneler: InngangsvilkarPanelData[], vuType: string): boolean =>
  paneler.some(p => p.status === vuType);

const getStatus = (paneler: InngangsvilkarPanelData[]): string => {
  const harStatusIkkeVurdert = harMinstEttDelPanelStatus(paneler, VilkarUtfallType.IKKE_VURDERT);
  const harStatusOppfylt = harMinstEttDelPanelStatus(paneler, VilkarUtfallType.OPPFYLT);
  const tempStatus =
    harStatusOppfylt && !harStatusIkkeVurdert ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT;
  return harMinstEttDelPanelStatus(paneler, VilkarUtfallType.IKKE_OPPFYLT) ? VilkarUtfallType.IKKE_OPPFYLT : tempStatus;
};

const getErAksjonspunktOpen = (paneler: InngangsvilkarPanelData[], behandling: Behandling): boolean => {
  if (behandling.behandlingHenlagt) {
    return false;
  }
  if (paneler.some(p => p.harApentAksjonspunkt)) {
    return true;
  }
  if (paneler.some(p => p.status === VilkarUtfallType.IKKE_OPPFYLT)) {
    return false;
  }

  return !(
    paneler.every(p => p.status === VilkarUtfallType.IKKE_VURDERT) ||
    paneler.every(p => p.status === VilkarUtfallType.OPPFYLT)
  );
};
