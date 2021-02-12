import React, {
  FunctionComponent, useEffect, useState,
} from 'react';
import { injectIntl, FormattedMessage, WrappedComponentProps } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { FadingPanel } from '@fpsak-frontend/shared-components';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import MargMarkering from './MargMarkering';

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

const ID = 'HENLAGT';

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

  if (!erPanelValgt) {
    return null;
  }

  return (
    <MargMarkering
      aksjonspunkter={[]}
      isReadOnly
      visAksjonspunktMarkering={false}
    >
      <FadingPanel>
        <Normaltekst>
          <FormattedMessage id="BehandlingHenlagtPanel.Henlagt" />
        </Normaltekst>
      </FadingPanel>
    </MargMarkering>
  );
};

export default injectIntl(BehandlingHenlagtPanel);
