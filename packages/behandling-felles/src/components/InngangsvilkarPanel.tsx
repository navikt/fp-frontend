import React, { FunctionComponent, useMemo, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import {
  FadingPanel, VerticalSpacer, AksjonspunktHelpTextHTML, LoadingPanel,
} from '@fpsak-frontend/shared-components';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import { ProsessStegPanelUtledet } from '../util/prosessSteg/ProsessStegUtledet';

import styles from './inngangsvilkarPanel.less';

interface OwnProps {
  behandling: Behandling;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  prosessStegData: ProsessStegPanelUtledet[];
  submitCallback: (data: any) => Promise<any>;
  apentFaktaPanelInfo?: { urlCode: string; textCode: string};
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
}

const InngangsvilkarPanel: FunctionComponent<OwnProps> = ({
  behandling,
  alleKodeverk,
  prosessStegData,
  submitCallback,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
  useMultipleRestApi,
}) => {
  const filteredPanels = prosessStegData.filter((stegData) => stegData.getKomponentData);

  const endepunkter = filteredPanels.flatMap((stegData) => stegData.getProsessStegDelPanelDef().getEndepunkter().map((e) => ({ key: e })));

  const { data, state } = useMultipleRestApi(endepunkter, { updateTriggers: [behandling.versjon] });

  const panels = filteredPanels.map((stegData) => stegData.getProsessStegDelPanelDef().getKomponent({
    ...data,
    behandling,
    alleKodeverk,
    submitCallback,
    ...stegData.getKomponentData(),
  }));

  const aksjonspunktTekstKoder = useMemo(() => filteredPanels
    .filter((p) => p.getErAksjonspunktOpen() && p.getAksjonspunktHjelpetekster().length > 0)
    .reduce((acc, p) => [...acc, p.getAksjonspunktHjelpetekster()], []),
  [filteredPanels]);

  const oppdaterUrl = useCallback((evt) => {
    oppdaterProsessStegOgFaktaPanelIUrl(undefined, apentFaktaPanelInfo.urlCode);
    evt.preventDefault();
  }, [apentFaktaPanelInfo]);

  const erIkkeFerdigbehandlet = useMemo(() => filteredPanels.some((p) => p.getStatus() === vilkarUtfallType.IKKE_VURDERT), [behandling.versjon]);

  if (state === RestApiState.NOT_STARTED || state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return (
    <FadingPanel>
      {((apentFaktaPanelInfo && erIkkeFerdigbehandlet) || aksjonspunktTekstKoder.length > 0) && (
        <>
          <AksjonspunktHelpTextHTML>
            {apentFaktaPanelInfo && erIkkeFerdigbehandlet
              ? [
                <>
                  <FormattedMessage id="InngangsvilkarPanel.AvventerAvklaringAv" />
                  <a href="" onClick={oppdaterUrl}><FormattedMessage id={apentFaktaPanelInfo.textCode} /></a>
                </>,
              ]
              : aksjonspunktTekstKoder.map((kode) => <FormattedMessage key={kode} id={kode} />)}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <Row className="">
        <Column xs="6">
          {panels.filter((_panel, index) => index < 2)
            .map((panel, index) => (
              <div key={panel.key} className={index === 0 ? styles.panelLeftTop : styles.panelLeftBottom}>
                {panel}
              </div>
            ))}
        </Column>
        <Column xs="6">
          {panels.filter((_panel, index) => index > 1)
            .map((panel, index) => (
              <div key={panel.key} className={index === 0 ? styles.panelRightTop : styles.panelRightBottom}>
                {panel}
              </div>
            ))}
        </Column>
      </Row>
    </FadingPanel>
  );
};

export default InngangsvilkarPanel;
