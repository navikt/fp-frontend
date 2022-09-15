import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import { Column, Row } from 'nav-frontend-grid';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';

import {
  ArbeidsgiverOpplysningerPerId,
  Feriepengegrunnlag,
  FeriepengegrunnlagAndel,
  AlleKodeverk,
} from '@fpsak-frontend/types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import FeriepengerPrAar from './FeriepengerPrAar';

const finnListeMedOpptjeningsår = (andeler: FeriepengegrunnlagAndel[]): number[] => {
  const årsliste = andeler.map((andel) => andel.opptjeningsår).sort((a, b) => a - b);
  return [...new Set(årsliste)];
};

const hentTittel = (): React.ReactNode => (
  <Heading size="small">
    <FormattedMessage id="TilkjentYtelse.Feriepenger.Tittel" />
  </Heading>
);

interface OwnProps {
  feriepengegrunnlag: Feriepengegrunnlag;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  erPanelÅpent: boolean;
  togglePanel: () => void;
}

export const FeriepengerPanel: FunctionComponent<OwnProps> = ({
  feriepengegrunnlag, alleKodeverk, arbeidsgiverOpplysningerPerId, erPanelÅpent, togglePanel,
}) => {
  const { andeler } = feriepengegrunnlag;
  if (!andeler || andeler.length < 1) {
    return null;
  }
  const opptjeningsår = useMemo(() => finnListeMedOpptjeningsår(andeler), [andeler]);
  return (
    <Row>
      <Column xs="6">
        <EkspanderbartpanelBase
          tittel={hentTittel()}
          apen={erPanelÅpent}
          onClick={togglePanel}
        >
          {opptjeningsår.map((år) => (
            <div key={`div_${år}`}>
              <VerticalSpacer sixteenPx key={`spacer_${år}`} />
              <FeriepengerPrAar
                key={`tabell_${år}`}
                alleAndeler={andeler}
                opptjeningsår={år}
                alleKodeverk={alleKodeverk}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              />
            </div>
          ))}
        </EkspanderbartpanelBase>
      </Column>
    </Row>
  );
};

export default FeriepengerPanel;
