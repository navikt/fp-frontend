import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import SideMenu from '@navikt/nap-side-menu';

import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel_ny.svg';
import FaktaPanelMenyData from '../types/FaktaPanelMenyData';

interface OwnProps {
  menyData: FaktaPanelMenyData[];
  oppdaterFaktaPanelIUrl: (index: number) => void;
}

const FaktaMeny: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  menyData,
  oppdaterFaktaPanelIUrl,
}) => (
  <SideMenu
    heading={intl.formatMessage({ id: 'FaktaPanel.FaktaOm' })}
    links={menyData.map((data) => ({
      label: data.tekst,
      active: data.erAktiv,
      iconSrc: data.harAksjonspunkt ? advarselIkonUrl : undefined,
      iconAltText: data.harAksjonspunkt ? intl.formatMessage({ id: 'HelpText.Aksjonspunkt' }) : undefined,
    }))}
    onClick={oppdaterFaktaPanelIUrl}
  />
);

export default injectIntl(FaktaMeny);
