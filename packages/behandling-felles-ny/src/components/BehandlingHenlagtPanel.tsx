import React, {
  FunctionComponent, useEffect, useState,
} from 'react';
import { injectIntl, FormattedMessage, WrappedComponentProps } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import ProsessPanelWrapper from './ProsessPanelWrapper';

interface OwnProps {
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void;
}

const ID = 'henlagt';

const BehandlingHenlagtPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  valgtProsessSteg,
  registrerFaktaPanel,
}) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    const erValgt = valgtProsessSteg === ID || valgtProsessSteg === 'default';
    registrerFaktaPanel({
      id: ID,
      tekst: intl.formatMessage({ id: 'BehandlingHenlagtPanel.Header' }),
      erAktiv: erValgt,
      harApentAksjonspunkt: false,
      status: vilkarUtfallType.IKKE_VURDERT,
    });
    setPanelValgt(erValgt);
  }, [valgtProsessSteg]);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={false}
      status={vilkarUtfallType.IKKE_VURDERT}
      loadingState={RestApiState.SUCCESS}
    >
      <Normaltekst>
        <FormattedMessage id="BehandlingHenlagtPanel.Henlagt" />
      </Normaltekst>
    </ProsessPanelWrapper>
  );
};

export default injectIntl(BehandlingHenlagtPanel);
