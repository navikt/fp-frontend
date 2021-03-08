import React, {
  FunctionComponent, ReactElement, useCallback, useState,
} from 'react';
import { Column, Row } from 'nav-frontend-grid';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  VerticalSpacer, AksjonspunktHelpTextHTML,
} from '@fpsak-frontend/shared-components';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import ProsessPanelWrapper from './ProsessPanelWrapper';
import useProsessMenyRegistrerer from '../../utils/prosess/useProsessMenyRegistrerer';
import InngangsvilkarPanelData from '../../types/inngangsvilkarPanelData';
import getPackageIntl from '../../../i18n/getPackageIntl';
import ProsessPanelInitProps from '../../types/prosessPanelInitProps';

import styles from './inngangsvilkarDefaultProsessStegPanel.less';

const harMinstEttDelPanelStatus = (paneler: InngangsvilkarPanelData[], vuType: string): boolean => paneler.some((p) => p.status === vuType);

const getStatus = (paneler: InngangsvilkarPanelData[]): string => {
  const harStatusIkkeVurdert = harMinstEttDelPanelStatus(paneler, vilkarUtfallType.IKKE_VURDERT);
  const harStatusOppfylt = harMinstEttDelPanelStatus(paneler, vilkarUtfallType.OPPFYLT);
  const tempStatus = harStatusOppfylt && !harStatusIkkeVurdert ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT;
  return harMinstEttDelPanelStatus(paneler, vilkarUtfallType.IKKE_OPPFYLT) ? vilkarUtfallType.IKKE_OPPFYLT : tempStatus;
};

const getErAksjonspunktOpen = (paneler: InngangsvilkarPanelData[]): boolean => {
  if (paneler.some((p) => p.harApentAksjonspunkt)) {
    return true;
  }
  if (paneler.some((p) => p.status === vilkarUtfallType.IKKE_OPPFYLT)) {
    return false;
  }

  return !(paneler.every((p) => p.status === vilkarUtfallType.IKKE_VURDERT)
    || paneler.every((p) => p.status === vilkarUtfallType.OPPFYLT));
};

type InngangsvilkarUnderpanelProps = {
  setPanelInfo: (data: InngangsvilkarPanelData) => void;
  erPanelValgt: boolean;
  harInngangsvilkarApentAksjonspunkt: boolean;
}

interface OwnProps {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  leftPanels: (props: InngangsvilkarUnderpanelProps) => ReactElement;
  rightPanels: (props: InngangsvilkarUnderpanelProps) => ReactElement;
}

const InngangsvilkarDefaultProsessStegPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  leftPanels,
  rightPanels,
}) => {
  const [panelInfo, setPanelInfo] = useState<InngangsvilkarPanelData[]>([]);
  const visProsessPanel = useCallback((nyData: InngangsvilkarPanelData) => {
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

  const harApentAksjonspunkt = getErAksjonspunktOpen(panelInfo);
  const status = getStatus(panelInfo);

  const skalVises = panelInfo.length > 0;

  const intl = getPackageIntl();

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    RestApiState.SUCCESS,
    prosessStegCodes.INNGANGSVILKAR,
    intl.formatMessage({ id: 'Behandlingspunkt.Inngangsvilkar' }),
    valgtProsessSteg,
    skalVises,
    harApentAksjonspunkt,
    status,
    !apentFaktaPanelInfo,
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
            {leftPanels({ setPanelInfo: visProsessPanel, erPanelValgt, harInngangsvilkarApentAksjonspunkt: harApentAksjonspunkt })}
          </div>
        </Column>
        <Column xs="6">
          <div className={styles.panelRight}>
            {rightPanels({ setPanelInfo: visProsessPanel, erPanelValgt, harInngangsvilkarApentAksjonspunkt: harApentAksjonspunkt })}
          </div>
        </Column>
      </Row>
    </ProsessPanelWrapper>
  );
};

export default InngangsvilkarDefaultProsessStegPanel;
