import React, {
  FunctionComponent, useEffect, useState,
} from 'react';
import { injectIntl, FormattedMessage, WrappedComponentProps } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import ProsessPanelWrapper from './ProsessPanelWrapper';
import ProsessPanelInitProps from '../../types/prosessPanelInitProps';

const ID = 'henlagt';

const BehandlingHenlagtPanel: FunctionComponent<ProsessPanelInitProps & WrappedComponentProps> = ({
  intl,
  valgtProsessSteg,
  registrerProsessPanel,
}) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    const erValgt = valgtProsessSteg === ID || valgtProsessSteg === 'default';
    registrerProsessPanel({
      id: ID,
      tekst: intl.formatMessage({ id: 'BehandlingHenlagtPanel.Header' }),
      erAktiv: erValgt,
      harApentAksjonspunkt: false,
      status: vilkarUtfallType.IKKE_VURDERT,
      harHentetInitData: true,
    });
    setPanelValgt(erValgt);
  }, [valgtProsessSteg]);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={false}
      status={vilkarUtfallType.OPPFYLT}
      dataState={RestApiState.SUCCESS}
    >
      <Normaltekst>
        <FormattedMessage id="BehandlingHenlagtPanel.Henlagt" />
      </Normaltekst>
    </ProsessPanelWrapper>
  );
};

export default injectIntl(BehandlingHenlagtPanel);
