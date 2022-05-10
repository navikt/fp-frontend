import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { SideMenu } from '@navikt/ft-plattform-komponenter';

import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel_ny.svg';

export type MenyData = {
  id: string;
  label: string;
  erAktiv: boolean;
  harApneAksjonspunkter: boolean;
}

interface OwnProps {
  menyData: MenyData[];
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
        label: data.label,
        active: data.erAktiv,
        iconSrc: data.harApneAksjonspunkter ? advarselIkonUrl : undefined,
        iconAltText: data.harApneAksjonspunkter ? intl.formatMessage({ id: 'HelpText.Aksjonspunkt' }) : undefined,
      }))}
      onClick={oppdaterFaktaPanelIUrl}
    />
  );
};

export default FaktaMeny;
