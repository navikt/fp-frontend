import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { SideMenu } from '@navikt/ft-plattform-komponenter';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import FaktaPanelMenyData from '../typer/faktaPanelMenyData';

interface OwnProps {
  menyData: FaktaPanelMenyData[];
  oppdaterFaktaPanelIUrl: (index: number) => void;
}

const FaktaMeny: FunctionComponent<OwnProps> = ({ menyData, oppdaterFaktaPanelIUrl }) => {
  const intl = useIntl();
  return (
    <SideMenu
      heading={intl.formatMessage({ id: 'FaktaPanel.FaktaOm' })}
      links={menyData.map(data => ({
        label: data.tekst || '',
        active: data.erAktiv,
        icon: data.harApneAksjonspunkter ? <ExclamationmarkTriangleFillIcon color="var(--a-orange-600)" /> : undefined,
      }))}
      onClick={oppdaterFaktaPanelIUrl}
    />
  );
};

export default FaktaMeny;
