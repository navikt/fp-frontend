import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';
import { AlleKodeverk, Personoversikt } from '@fpsak-frontend/types';
import AlleBarnPanel from './personer/AlleBarnPanel';
import ForelderPanel from './personer/ForelderPanel';

interface OwnProps {
  readOnly: boolean;
  personoversikt: Personoversikt;
  alleKodeverk: AlleKodeverk;
}

const OmsorgOgRettFaktaIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  personoversikt,
  alleKodeverk,
}) => {
  if (!readOnly) {
    return (
      <>
        <Undertittel><FormattedMessage id="OmsorgOgRettFaktaForm.Overskrift" /></Undertittel>
        <VerticalSpacer thirtyTwoPx />
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="OmsorgOgRettFaktaForm.VurderOmAleneomsorg" />
        </AksjonspunktHelpTextHTML>
        <VerticalSpacer thirtyTwoPx />
        <AlleBarnPanel alleBarn={personoversikt.barn} />
        <ForelderPanel forelder={personoversikt.bruker} erSøker alleKodeverk={alleKodeverk} />
        <ForelderPanel forelder={personoversikt.annenPart} erSøker={false} alleKodeverk={alleKodeverk} />
      </>
    );
  }
  return null;
};

export default OmsorgOgRettFaktaIndex;
