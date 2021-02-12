import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  FadingPanel, VerticalSpacer, AksjonspunktHelpTextHTML,
} from '@fpsak-frontend/shared-components';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter,
  Behandling,
} from '@fpsak-frontend/types';
import { MargMarkering, ProsessStegIkkeBehandletPanel } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import FodselPanelDef from './inngangsvilkarPaneler/FodselPanelDef';
import MedlemskapPanelDef from './inngangsvilkarPaneler/MedlemskapPanelDef';
import OpptjeningPanelDef from './inngangsvilkarPaneler/OpptjeningPanelDef';

import styles from './inngangsvilkarProsessStegPanelDef.less';

const harMinstEttDelPanelStatus = (paneler: PanelInfo[], vuType: string): boolean => paneler.some((p) => p.status === vuType);

const getStatus = (paneler: PanelInfo[]): string => {
  const harStatusIkkeVurdert = harMinstEttDelPanelStatus(paneler, vilkarUtfallType.IKKE_VURDERT);
  const harStatusOppfylt = harMinstEttDelPanelStatus(paneler, vilkarUtfallType.OPPFYLT);
  const tempStatus = harStatusOppfylt && !harStatusIkkeVurdert ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT;
  return harMinstEttDelPanelStatus(paneler, vilkarUtfallType.IKKE_OPPFYLT) ? vilkarUtfallType.IKKE_OPPFYLT : tempStatus;
};

const getErAksjonspunktOpen = (paneler: PanelInfo[]): boolean => {
  const harUlikeStatuserIPanelene = harMinstEttDelPanelStatus(paneler, vilkarUtfallType.IKKE_VURDERT)
    && harMinstEttDelPanelStatus(paneler, vilkarUtfallType.IKKE_OPPFYLT)
    && !harMinstEttDelPanelStatus(paneler, vilkarUtfallType.IKKE_OPPFYLT);
  return harUlikeStatuserIPanelene || paneler.some((p) => p.harApentAksjonspunkt);
};

interface OwnProps {
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  apentFaktaPanelInfo?: {urlCode: string, textCode: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  rettigheter: AksessRettigheter;
}

type PanelInfo = {
  id: string;
  aksjonspunktTekst: string;
  harApentAksjonspunkt: boolean;
  status: string;
}

const InngangsvilkarProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  registrerFaktaPanel,
  oppdaterBehandlingVersjon,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  rettigheter,
}) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegCodes.INNGANGSVILKAR,
    });
  }, []);

  useEffect(() => {
    oppdaterBehandlingVersjon(behandling.versjon);
  }, [behandling.versjon]);

  const [panelInfo, setPanelInfo] = useState<PanelInfo[]>([]);
  const visProsessPanel = useCallback((nyData: PanelInfo) => {
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

  const leftPanels = [
    <FodselPanelDef behandling={behandling} setPanelInfo={visProsessPanel} erPanelValgt={erPanelValgt} />,
    <MedlemskapPanelDef behandling={behandling} setPanelInfo={visProsessPanel} erPanelValgt={erPanelValgt} rettigheter={rettigheter} />,
  ];
  const rightPanels = [
    <OpptjeningPanelDef behandling={behandling} setPanelInfo={visProsessPanel} erPanelValgt={erPanelValgt} rettigheter={rettigheter} />,
  ];

  const harApentAksjonspunkt = getErAksjonspunktOpen(panelInfo);
  const status = getStatus(panelInfo);

  useEffect(() => {
    if (panelInfo.length > 0) {
      const erValgt = !apentFaktaPanelInfo
        && (valgtProsessSteg === prosessStegCodes.INNGANGSVILKAR || (harApentAksjonspunkt && valgtProsessSteg === 'default'));
      registrerFaktaPanel({
        id: prosessStegCodes.INNGANGSVILKAR,
        tekst: getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Inngangsvilkar' }),
        erAktiv: erValgt,
        harApentAksjonspunkt,
        status,
      });
      setPanelValgt(erValgt);
    }
  }, [panelInfo, valgtProsessSteg]);

  const aksjonspunktTekster = panelInfo.map((p) => p.aksjonspunktTekst);

  return (
    <>
      {!erPanelValgt && (
        <>
          {leftPanels}
          {rightPanels}
        </>
      )}
      {erPanelValgt && status === vilkarUtfallType.IKKE_VURDERT && !harApentAksjonspunkt && (
        <ProsessStegIkkeBehandletPanel />
      )}
      {erPanelValgt && (status !== vilkarUtfallType.IKKE_VURDERT || harApentAksjonspunkt) && (
        <MargMarkering
          aksjonspunkter={[]}
          isReadOnly={false}
          visAksjonspunktMarkering={false}
        >
          <FadingPanel>
            {((apentFaktaPanelInfo && erIkkeFerdigbehandlet) || aksjonspunktTekster.length > 0) && (
              <>
                <AksjonspunktHelpTextHTML>
                  {apentFaktaPanelInfo && erIkkeFerdigbehandlet
                    ? [
                      <React.Fragment key="1">
                        <FormattedMessage id="InngangsvilkarPanel.AvventerAvklaringAv" />
                        <a href="" onClick={oppdaterUrl}><FormattedMessage id={apentFaktaPanelInfo.textCode} /></a>
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
                  {leftPanels.map((p, index) => (
                    <>
                      {p}
                      {index + 1 !== leftPanels.length && (
                        <VerticalSpacer thirtyTwoPx />
                      )}
                    </>
                  ))}
                </div>
              </Column>
              <Column xs="6">
                <div className={styles.panelRight}>
                  {rightPanels.map((p, index) => (
                    <>
                      {p}
                      {index + 1 !== rightPanels.length && (
                      <VerticalSpacer thirtyTwoPx />
                      )}
                    </>
                  ))}
                </div>
              </Column>
            </Row>
          </FadingPanel>
        </MargMarkering>
      )}
    </>
  );
};

export default InngangsvilkarProsessStegPanelDef;
