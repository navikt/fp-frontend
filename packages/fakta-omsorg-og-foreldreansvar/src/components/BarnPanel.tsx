import React, { FunctionComponent } from 'react';
import { FormattedMessage, WrappedComponentProps } from 'react-intl';
import moment from 'moment';
import { Label, BodyShort } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Soknad } from '@navikt/fp-types';

interface OwnProps {
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
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
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.OMSORGSOVERTAKELSE]}
    >
      {adopsjonFodelsedatoer &&
        Object.keys(adopsjonFodelsedatoer).map(key => (
          <React.Fragment key={`${key}`}>
            <Label size="small">
              <FormattedMessage id="BarnPanel.ChildNumberBornData" values={{ childNumber: key }} />
            </Label>
            <BodyShort size="small">
              {moment(adopsjonFodelsedatoer[parseInt(key, 10)]).format(DDMMYYYY_DATE_FORMAT)}
            </BodyShort>
            <VerticalSpacer eightPx />
          </React.Fragment>
        ))}
    </FaktaGruppe>
  );
};

export default BarnPanel;
