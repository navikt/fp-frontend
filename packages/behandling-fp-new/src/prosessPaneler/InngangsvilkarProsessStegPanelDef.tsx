import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { Column, Row } from 'nav-frontend-grid';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  VerticalSpacer, AksjonspunktHelpTextHTML,
} from '@fpsak-frontend/shared-components';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { AksessRettigheter } from '@fpsak-frontend/types';
import { ProsessPanelWrapper, prosessPanelHooks, ProsessPanelMenyData } from '@fpsak-frontend/behandling-felles-ny';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

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
  if (paneler.some((p) => p.harApentAksjonspunkt)) {
    return true;
  }

  return !(paneler.every((p) => p.status === vilkarUtfallType.IKKE_VURDERT)
   || paneler.every((p) => p.status === vilkarUtfallType.IKKE_OPPFYLT)
   || paneler.every((p) => p.status === vilkarUtfallType.OPPFYLT));
};

interface OwnProps {
  behandlingVersjon?: number;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
  apentFaktaPanelInfo?: {urlCode: string, text: string };
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
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  rettigheter,
}) => {
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

  const harApentAksjonspunkt = getErAksjonspunktOpen(panelInfo);
  const status = getStatus(panelInfo);

  const skalVises = panelInfo.length > 0;
  const erAktiv = valgtProsessSteg === prosessStegCodes.INNGANGSVILKAR
    || (!apentFaktaPanelInfo && harApentAksjonspunkt && valgtProsessSteg === 'default');

  const intl = getPackageIntl();

  const erPanelValgt = prosessPanelHooks.useMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.INNGANGSVILKAR,
    intl.formatMessage({ id: 'Behandlingspunkt.Inngangsvilkar' }),
    skalVises,
    erAktiv,
    harApentAksjonspunkt,
    status,
  );

  const aksjonspunktTekster = panelInfo.map((p) => p.aksjonspunktTekst).filter((tekst) => !!tekst);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={harApentAksjonspunkt}
      status={status}
      loadingState={RestApiState.SUCCESS}
      skalSkjulePanel={!erPanelValgt}
    >
      {((apentFaktaPanelInfo && erIkkeFerdigbehandlet) || aksjonspunktTekster.length > 0) && (
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
            <FodselPanelDef behandlingVersjon={behandlingVersjon} setPanelInfo={visProsessPanel} erPanelValgt={erPanelValgt} rettigheter={rettigheter} />
            <VerticalSpacer thirtyTwoPx />
            <MedlemskapPanelDef behandlingVersjon={behandlingVersjon} setPanelInfo={visProsessPanel} erPanelValgt={erPanelValgt} rettigheter={rettigheter} />
          </div>
        </Column>
        <Column xs="6">
          <div className={styles.panelRight}>
            <OpptjeningPanelDef behandlingVersjon={behandlingVersjon} setPanelInfo={visProsessPanel} erPanelValgt={erPanelValgt} rettigheter={rettigheter} />
          </div>
        </Column>
      </Row>
    </ProsessPanelWrapper>
  );
};

export default InngangsvilkarProsessStegPanelDef;
