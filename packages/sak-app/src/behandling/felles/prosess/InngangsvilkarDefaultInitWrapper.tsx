import React, {
  FunctionComponent, ReactElement, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';
import {
  VerticalSpacer, AksjonspunktHelpTextHTML,
} from '@navikt/ft-ui-komponenter';
import { Behandling } from '@navikt/ft-types';

import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { RequestApi } from '@fpsak-frontend/rest-api';

import ProsessPanelWrapper from './ProsessPanelWrapper';
import useProsessMenyRegistrerer from './useProsessMenyRegistrerer';
import InngangsvilkarPanelData from '../typer/inngangsvilkarPanelData';
import ProsessPanelInitProps from '../typer/prosessPanelInitProps';
import InngangsvilkarPanelInitProps from '../typer/inngangsvilkarPanelInitProps';

import styles from './inngangsvilkarDefaultInitWrapper.less';

const harMinstEttDelPanelStatus = (paneler: InngangsvilkarPanelData[], vuType: string): boolean => paneler.some((p) => p.status === vuType);

const getStatus = (paneler: InngangsvilkarPanelData[]): string => {
  const harStatusIkkeVurdert = harMinstEttDelPanelStatus(paneler, VilkarUtfallType.IKKE_VURDERT);
  const harStatusOppfylt = harMinstEttDelPanelStatus(paneler, VilkarUtfallType.OPPFYLT);
  const tempStatus = harStatusOppfylt && !harStatusIkkeVurdert ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT;
  return harMinstEttDelPanelStatus(paneler, VilkarUtfallType.IKKE_OPPFYLT) ? VilkarUtfallType.IKKE_OPPFYLT : tempStatus;
};

const getErAksjonspunktOpen = (paneler: InngangsvilkarPanelData[], behandling: Behandling): boolean => {
  if (behandling.behandlingHenlagt) {
    return false;
  }
  if (paneler.some((p) => p.harApentAksjonspunkt)) {
    return true;
  }
  if (paneler.some((p) => p.status === VilkarUtfallType.IKKE_OPPFYLT)) {
    return false;
  }

  return !(paneler.every((p) => p.status === VilkarUtfallType.IKKE_VURDERT)
    || paneler.every((p) => p.status === VilkarUtfallType.OPPFYLT));
};

interface OwnProps {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  leftPanels: (props: InngangsvilkarPanelInitProps) => ReactElement;
  rightPanels?: (props: InngangsvilkarPanelInitProps) => ReactElement;
  requestApi: RequestApi;
}

const InngangsvilkarDefaultInitWrapper: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandling,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  leftPanels,
  rightPanels,
  requestApi,
}) => {
  const intl = useIntl();

  const [panelInfo, setPanelInfo] = useState<InngangsvilkarPanelData[]>([]);
  const registrerInngangsvilkarPanel = useCallback((nyData: InngangsvilkarPanelData) => {
    setPanelInfo((oldData) => {
      const newData = [...oldData];
      const index = newData.findIndex((d) => d.id === nyData.id);
      if (index >= 0) {
        newData.splice(index, 1, nyData);
      } else {
        newData.push(nyData);
      }
      return newData;
    });
  }, []);

  const erIkkeFerdigbehandlet = panelInfo.some((p) => p.status === VilkarUtfallType.IKKE_VURDERT);

  const oppdaterUrl = useCallback((evt) => {
    oppdaterProsessStegOgFaktaPanelIUrl(undefined, apentFaktaPanelInfo.urlCode);
    evt.preventDefault();
  }, [apentFaktaPanelInfo]);

  const harApentAksjonspunkt = getErAksjonspunktOpen(panelInfo, behandling);
  const status = getStatus(panelInfo);

  const skalVises = panelInfo.length > 0;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    RestApiState.SUCCESS,
    ProsessStegCode.INNGANGSVILKAR,
    intl.formatMessage({ id: 'Behandlingspunkt.Inngangsvilkar' }),
    valgtProsessSteg,
    skalVises,
    harApentAksjonspunkt,
    status,
    !apentFaktaPanelInfo && harApentAksjonspunkt,
  );

  const aksjonspunktTekster = panelInfo.map((p) => p.aksjonspunktTekst).filter((tekst) => !!tekst);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={harApentAksjonspunkt}
      status={status}
      dataState={RestApiState.SUCCESS}
      skalSkjulePanel={!erPanelValgt}
    >
      {(erPanelValgt && ((apentFaktaPanelInfo && erIkkeFerdigbehandlet) || aksjonspunktTekster.length > 0)) && (
        <>
          <AksjonspunktHelpTextHTML>
            {apentFaktaPanelInfo && erIkkeFerdigbehandlet
              ? [
                <React.Fragment key="1">
                  {intl.formatMessage({ id: 'InngangsvilkarProsessStegPanelDef.AvventerAvklaringAv' })}
                  <a href="" onClick={oppdaterUrl}>{apentFaktaPanelInfo.text}</a>
                </React.Fragment>,
              ]
              : aksjonspunktTekster.map((tekst) => tekst)}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <Row className="">
        <Column xs="6">
          <div className={styles.panelLeft}>
            {leftPanels({
              registrerInngangsvilkarPanel,
              erPanelValgt,
              harInngangsvilkarApentAksjonspunkt: harApentAksjonspunkt,
              requestApi,
            })}
          </div>
        </Column>
        {rightPanels && (
          <Column xs="6">
            <div className={styles.panelRight}>
              {rightPanels({
                registrerInngangsvilkarPanel,
                erPanelValgt,
                harInngangsvilkarApentAksjonspunkt: harApentAksjonspunkt,
                requestApi,
              })}
            </div>
          </Column>
        )}
      </Row>
    </ProsessPanelWrapper>
  );
};

export default InngangsvilkarDefaultInitWrapper;
