import React, {
  FunctionComponent, useEffect, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import ProsessPanelWrapper from './ProsessPanelWrapper';
import ProsessPanelMenyData from '../typer/prosessPanelMenyData';

const ID = 'henlagt';

type OwnProps = {
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
}

const BehandlingHenlagtPanel: FunctionComponent<OwnProps> = ({
  valgtProsessSteg,
  registrerProsessPanel,
}) => {
  const intl = useIntl();

  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    const erValgt = valgtProsessSteg === ID || valgtProsessSteg === 'default';
    registrerProsessPanel({
      id: ID,
      tekst: intl.formatMessage({ id: 'BehandlingHenlagtPanel.Header' }),
      erAktiv: erValgt,
      harApentAksjonspunkt: false,
      status: VilkarUtfallType.IKKE_VURDERT,
      harHentetInitData: true,
    });
    setPanelValgt(erValgt);
  }, [valgtProsessSteg]);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={false}
      status={VilkarUtfallType.OPPFYLT}
      dataState={RestApiState.SUCCESS}
    >
      <BodyShort size="small">
        <FormattedMessage id="BehandlingHenlagtPanel.Henlagt" />
      </BodyShort>
    </ProsessPanelWrapper>
  );
};

export default BehandlingHenlagtPanel;
