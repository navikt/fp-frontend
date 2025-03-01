import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { Accordion, Heading } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import type {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Feriepengegrunnlag,
  FeriepengegrunnlagAndel,
} from '@navikt/fp-types';

import { FeriepengerPrAar } from './FeriepengerPrAar';

const finnListeMedOpptjeningsår = (andeler: FeriepengegrunnlagAndel[]): number[] => {
  const årsliste = andeler.map(andel => andel.opptjeningsår).sort((a, b) => a - b);
  return [...new Set(årsliste)];
};

const hentTittel = (): React.ReactNode => (
  <Heading size="small">
    <FormattedMessage id="TilkjentYtelse.Feriepenger.Tittel" />
  </Heading>
);

interface Props {
  feriepengegrunnlag: Feriepengegrunnlag;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  erPanelÅpent: boolean;
  togglePanel: () => void;
}

export const FeriepengerPanel = ({
  feriepengegrunnlag,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  erPanelÅpent,
  togglePanel,
}: Props) => {
  const { andeler } = feriepengegrunnlag;
  const harIngenAndeler = !andeler || andeler.length < 1;
  const opptjeningsår = useMemo(() => (harIngenAndeler ? [] : finnListeMedOpptjeningsår(andeler)), [andeler]);

  if (harIngenAndeler) {
    return null;
  }

  return (
    <Accordion>
      <Accordion.Item open={erPanelÅpent}>
        <Accordion.Header onClick={togglePanel}>{hentTittel()}</Accordion.Header>
        <Accordion.Content>
          {opptjeningsår.map(år => (
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
