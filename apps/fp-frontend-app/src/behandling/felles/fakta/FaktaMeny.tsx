import React from 'react';
import { useIntl } from 'react-intl';
import { SideMenu } from '@navikt/ft-plattform-komponenter';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import { FaktaPanelMenyData } from '../typer/faktaPanelMenyData';

interface Props {
  menyData: FaktaPanelMenyData[];
  oppdaterFaktaPanelIUrl: (index: number) => void;
}

export const FaktaMeny = ({ menyData, oppdaterFaktaPanelIUrl }: Props) => {
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
