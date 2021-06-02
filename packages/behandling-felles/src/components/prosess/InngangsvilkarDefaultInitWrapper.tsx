import React, {
  FunctionComponent, ReactElement, useCallback, useState,
} from 'react';
import { Column, Row } from 'nav-frontend-grid';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  VerticalSpacer, AksjonspunktHelpTextHTML,
} from '@fpsak-frontend/shared-components';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { createIntl } from '@fpsak-frontend/utils';
import { Behandling } from '@fpsak-frontend/types';

import ProsessPanelWrapper from './ProsessPanelWrapper';
import useProsessMenyRegistrerer from '../../utils/prosess/useProsessMenyRegistrerer';
import InngangsvilkarPanelData from '../../types/inngangsvilkarPanelData';
import messages from '../../../i18n/nb_NO.json';
import ProsessPanelInitProps from '../../types/prosessPanelInitProps';
import InngangsvilkarPanelInitProps from '../../types/inngangsvilkarPanelInitProps';

import styles from './inngangsvilkarDefaultInitWrapper.less';

const intl = createIntl(messages);

const harMinstEttDelPanelStatus = (paneler: InngangsvilkarPanelData[], vuType: string): boolean => paneler.some((p) => p.status === vuType);

const getStatus = (paneler: InngangsvilkarPanelData[]): string => {
  const harStatusIkkeVurdert = harMinstEttDelPanelStatus(paneler, vilkarUtfallType.IKKE_VURDERT);
  const harStatusOppfylt = harMinstEttDelPanelStatus(paneler, vilkarUtfallType.OPPFYLT);
  const tempStatus = harStatusOppfylt && !harStatusIkkeVurdert ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT;
  return harMinstEttDelPanelStatus(paneler, vilkarUtfallType.IKKE_OPPFYLT) ? vilkarUtfallType.IKKE_OPPFYLT : tempStatus;
};

const getErAksjonspunktOpen = (paneler: InngangsvilkarPanelData[], behandling: Behandling): boolean => {
  if (behandling.behandlingHenlagt) {
    return false;
  }
  if (paneler.some((p) => p.harApentAksjonspunkt)) {
    return true;
  }
  if (paneler.some((p) => p.status === vilkarUtfallType.IKKE_OPPFYLT)) {
    return false;
  }

  return !(paneler.every((p) => p.status === vilkarUtfallType.IKKE_VURDERT)
    || paneler.every((p) => p.status === vilkarUtfallType.OPPFYLT));
};

interface OwnProps {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  leftPanels: (props: InngangsvilkarPanelInitProps) => ReactElement;
  rightPanels?: (props: InngangsvilkarPanelInitProps) => ReactElement;
}

const InngangsvilkarDefaultInitWrapper: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandling,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  leftPanels,
  rightPanels,
}) => {
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

  const erIkkeFerdigbehandlet = panelInfo.some((p) => p.status === vilkarUtfallType.IKKE_VURDERT);

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
              })}
            </div>
          </Column>
        )}
      </Row>
    </ProsessPanelWrapper>
  );
};

export default InngangsvilkarDefaultInitWrapper;
