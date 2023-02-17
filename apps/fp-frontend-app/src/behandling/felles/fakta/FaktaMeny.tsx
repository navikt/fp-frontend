import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { SideMenu } from '@navikt/ft-plattform-komponenter';

import advarselIkonUrl from '../../../images/advarsel_ny.svg';
import FaktaPanelMenyData from '../typer/faktaPanelMenyData';

interface OwnProps {
  menyData: FaktaPanelMenyData[];
  oppdaterFaktaPanelIUrl: (index: number) => void;
}

const FaktaMeny: FunctionComponent<OwnProps> = ({
  menyData,
  oppdaterFaktaPanelIUrl,
}) => {
  const intl = useIntl();
  return (
    <SideMenu
      heading={intl.formatMessage({ id: 'FaktaPanel.FaktaOm' })}
      links={menyData.map((data) => ({
        label: data.tekst,
        active: data.erAktiv,
        iconSrc: data.harApneAksjonspunkter ? advarselIkonUrl : undefined,
        iconAltText: data.harApneAksjonspunkter ? intl.formatMessage({ id: 'HelpText.Aksjonspunkt' }) : undefined,
      }))}
      onClick={oppdaterFaktaPanelIUrl}
    />
  );
};

export default FaktaMeny;
