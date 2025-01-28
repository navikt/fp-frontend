import React, { MouseEvent, ReactElement, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { HGrid, HStack, Link, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Behandling } from '@navikt/fp-types';

import { InngangsvilkarPanelData } from '../typer/inngangsvilkarPanelData';
import { InngangsvilkarPanelInitProps } from '../typer/inngangsvilkarPanelInitProps';
import { ProsessPanelInitProps } from '../typer/prosessPanelInitProps';
import { ProsessPanelWrapper } from './ProsessPanelWrapper';
import { useProsessMenyRegistrerer } from './useProsessMenyRegistrerer';

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

interface Props {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  leftPanels: (props: InngangsvilkarPanelInitProps) => ReactElement;
  rightPanels?: (props: InngangsvilkarPanelInitProps) => ReactElement;
}

export const InngangsvilkarDefaultInitWrapper = ({
  behandling,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  leftPanels,
  rightPanels,
}: Props & ProsessPanelInitProps) => {
  const intl = useIntl();

  const [panelInfo, setPanelInfo] = useState<InngangsvilkarPanelData[]>([]);
  const registrerInngangsvilkarPanel = useCallback((nyData: InngangsvilkarPanelData) => {
    setPanelInfo(oldData => {
      const newData = [...oldData];
      const index = newData.findIndex(d => d.id === nyData.id);
      if (index >= 0) {
        newData.splice(index, 1, nyData);
      } else {
        newData.push(nyData);
      }
      return newData;
    });
  }, []);

  const erIkkeFerdigbehandlet = panelInfo.some(p => p.status === VilkarUtfallType.IKKE_VURDERT);

  const oppdaterUrl = useCallback(
    (evt: MouseEvent) => {
      oppdaterProsessStegOgFaktaPanelIUrl(undefined, apentFaktaPanelInfo?.urlCode);
      evt.preventDefault();
    },
    [apentFaktaPanelInfo],
  );

  const harApentAksjonspunkt = getErAksjonspunktOpen(panelInfo, behandling);
  const status = getStatus(panelInfo);

  const skalVises = panelInfo.length > 0;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    ProsessStegCode.INNGANGSVILKAR,
    intl.formatMessage({ id: 'Behandlingspunkt.Inngangsvilkar' }),
    skalVises,
    harApentAksjonspunkt,
    status,
    !apentFaktaPanelInfo && harApentAksjonspunkt,
    valgtProsessSteg,
  );

  const aksjonspunktTekster = panelInfo.map(p => p.aksjonspunktTekst).filter(tekst => !!tekst);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={harApentAksjonspunkt}
      status={status}
      skalSkjulePanel={!erPanelValgt}
    >
      <VStack gap="8">
        {erPanelValgt && ((apentFaktaPanelInfo && erIkkeFerdigbehandlet) || aksjonspunktTekster.length > 0) && (
          <AksjonspunktHelpTextHTML>
            {apentFaktaPanelInfo && erIkkeFerdigbehandlet
              ? [
                  <HStack gap="1" key="1">
                    <FormattedMessage id="InngangsvilkarProsessStegPanelDef.AvventerAvklaringAv" />
                    <Link onClick={oppdaterUrl}>{apentFaktaPanelInfo.text}</Link>
                  </HStack>,
                ]
              : aksjonspunktTekster.map(tekst => tekst)}
          </AksjonspunktHelpTextHTML>
        )}
        <HGrid columns={2} gap="8">
          <VStack gap="8">
            {leftPanels({
              registrerInngangsvilkarPanel,
              erPanelValgt,
              harInngangsvilkarApentAksjonspunkt: harApentAksjonspunkt,
            })}
          </VStack>
          {rightPanels && (
            <VStack gap="8">
              {rightPanels({
                registrerInngangsvilkarPanel,
                erPanelValgt,
                harInngangsvilkarApentAksjonspunkt: harApentAksjonspunkt,
              })}
            </VStack>
          )}
        </HGrid>
      </VStack>
    </ProsessPanelWrapper>
  );
};
