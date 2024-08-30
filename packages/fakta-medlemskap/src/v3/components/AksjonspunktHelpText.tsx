import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { Aksjonspunkt } from '@navikt/fp-types';

interface Props {
  aksjonspunkter: Aksjonspunkt[];
}

// TODO: konstruer tekst basert på aksjonspunkt og årsaker
const AksjonspunktHelpText: FC<Props> = ({ aksjonspunkter }) => {
  return aksjonspunkter.length > 0 ? (
    <AksjonspunktHelpTextHTML>
      <FormattedMessage id="AksjonspunktHelpText.HarMedlemskap" />
    </AksjonspunktHelpTextHTML>
  ) : (
    <></>
  );
};

export default AksjonspunktHelpText;
