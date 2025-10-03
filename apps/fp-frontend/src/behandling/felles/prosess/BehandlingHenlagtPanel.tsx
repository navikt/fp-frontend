import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';

import { ProsessPanelWrapper } from './ProsessPanelWrapper';
import type { ProsessPanelMenyData } from './useProsessPanelMenyData';

const ID = 'henlagt';

type Props = {
  valgtProsessSteg: string | undefined;
  settProsessPanelMenyData: (data: ProsessPanelMenyData) => void;
};

export const BehandlingHenlagtPanel = ({ valgtProsessSteg, settProsessPanelMenyData }: Props) => {
  const intl = useIntl();

  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    const erValgt = valgtProsessSteg === ID || valgtProsessSteg === 'default';
    settProsessPanelMenyData({
      id: ID,
      tekst: intl.formatMessage({ id: 'BehandlingHenlagtPanel.Header' }),
      erAktiv: erValgt,
      harÅpentAksjonspunkt: false,
      status: 'IKKE_VURDERT',
      skalVisesIMeny: true,
    });
    setPanelValgt(erValgt);
  }, [valgtProsessSteg]);

  return (
    <ProsessPanelWrapper erPanelValgt={erPanelValgt} harÅpentAksjonspunkt={false} status="OPPFYLT">
      <BodyShort size="small">
        <FormattedMessage id="BehandlingHenlagtPanel.Henlagt" />
      </BodyShort>
    </ProsessPanelWrapper>
  );
};
