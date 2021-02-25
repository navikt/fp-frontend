import React, { FunctionComponent } from 'react';
import { FormattedMessage, WrappedComponentProps } from 'react-intl';
import moment from 'moment';
import { Normaltekst } from 'nav-frontend-typografi';

import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import { VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Soknad } from '@fpsak-frontend/types';

interface OwnProps {
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  soknad: Soknad;
}

/**
 * BarnPanel
 *
 * Presentasjonskomponent. Brukes i tilknytning til faktapanel for omsorg.
 * Viser barn fra søknad
 */
const BarnPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  alleMerknaderFraBeslutter,
  soknad,
}) => {
  const { adopsjonFodelsedatoer } = soknad;
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'BarnPanel.BarnDetSøkesOm' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OMSORGSOVERTAKELSE]}
    >
      {Object.keys(adopsjonFodelsedatoer).map((key) => (
        <React.Fragment key={`${key}`}>
          <FormattedMessage id="BarnPanel.ChildNumberBornData" values={{ childNumber: key }} />
          <Normaltekst>{moment(adopsjonFodelsedatoer[key]).format(DDMMYYYY_DATE_FORMAT)}</Normaltekst>
          <VerticalSpacer eightPx />
        </React.Fragment>
      ))}
    </FaktaGruppe>
  );
};

export default BarnPanel;
