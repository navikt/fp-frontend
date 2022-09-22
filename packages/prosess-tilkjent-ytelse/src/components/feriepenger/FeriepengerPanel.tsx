import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Accordion } from '@navikt/ds-react';

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

const FeriepengerPanel: FunctionComponent<OwnProps> = ({
  feriepengegrunnlag, alleKodeverk, arbeidsgiverOpplysningerPerId, erPanelÅpent, togglePanel,
}) => {
  const { andeler } = feriepengegrunnlag;
  if (!andeler || andeler.length < 1) {
    return null;
  }
  const opptjeningsår = useMemo(() => finnListeMedOpptjeningsår(andeler), [andeler]);
  return (
    <Accordion>
      <Accordion.Item open={erPanelÅpent}>
        <Accordion.Header onClick={togglePanel}>
          {hentTittel()}
        </Accordion.Header>
        <Accordion.Content>
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
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export default FeriepengerPanel;
