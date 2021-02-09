import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';

import { Column, Row } from 'nav-frontend-grid';
import {
  FadingPanel, VerticalSpacer, AksjonspunktHelpTextHTML,
} from '@fpsak-frontend/shared-components';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  Behandling,
} from '@fpsak-frontend/types';

interface OwnProps {
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harAksjonspunkt?: boolean;
    status?: string;
  }) => void;
  apentFaktaPanelInfo?: {urlCode: string, textCode: string };
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
}

const InngangsvilkarProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  registrerFaktaPanel,
  apentFaktaPanelInfo,
  oppdaterProsessStegOgFaktaPanelIUrl,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegCodes.INNGANGSVILKAR,
    });
  }, []);

  const erPanelValgt = valgtProsessSteg === prosessStegCodes.INNGANGSVILKAR;

  const [aksjonspunktTekstKoder, setAksjonspunktTekstKode] = useState([]);
  const [erIkkeFerdigbehandlet, setFerdigBehandlet] = useState(false);

  const oppdaterUrl = useCallback((evt) => {
    oppdaterProsessStegOgFaktaPanelIUrl(undefined, apentFaktaPanelInfo.urlCode);
    evt.preventDefault();
  }, [apentFaktaPanelInfo]);

  if (!erPanelValgt) {
    return null;
  }

  return (
    <FadingPanel>
      {((apentFaktaPanelInfo && erIkkeFerdigbehandlet) || aksjonspunktTekstKoder.length > 0) && (
        <>
          <AksjonspunktHelpTextHTML>
            {apentFaktaPanelInfo && erIkkeFerdigbehandlet
              ? [
                <React.Fragment key="1">
                  <FormattedMessage id="InngangsvilkarPanel.AvventerAvklaringAv" />
                  <a href="" onClick={oppdaterUrl}><FormattedMessage id={apentFaktaPanelInfo.textCode} /></a>
                </React.Fragment>,
              ]
              : aksjonspunktTekstKoder.map((kode) => <FormattedMessage key={kode} id={kode} />)}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <Row className="">
        <Column xs="6">
          test
        </Column>
        <Column xs="6">
          test
        </Column>
      </Row>
    </FadingPanel>
  );
};

export default InngangsvilkarProsessStegPanelDef;
