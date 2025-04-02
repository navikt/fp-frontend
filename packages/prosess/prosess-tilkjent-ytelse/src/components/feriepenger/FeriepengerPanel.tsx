import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Accordion, Heading, VStack } from '@navikt/ds-react';

import type {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Feriepengegrunnlag,
  FeriepengegrunnlagAndel,
} from '@navikt/fp-types';

import { FeriepengerPrÅr } from './FeriepengerPrÅr';

interface Props {
  feriepengegrunnlag: Feriepengegrunnlag;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FeriepengerPanel = ({ feriepengegrunnlag, alleKodeverk, arbeidsgiverOpplysningerPerId }: Props) => {
  const [erPanelÅpent, setErPanelÅpent] = useState(false);

  const { andeler } = feriepengegrunnlag;

  if (!andeler || andeler.length < 1) {
    return null;
  }

  const opptjeningsår = finnListeMedOpptjeningsår(andeler);

  return (
    <Accordion>
      <Accordion.Item open={erPanelÅpent}>
        <Accordion.Header onClick={() => setErPanelÅpent(!erPanelÅpent)}>
          <Heading size="small">
            <FormattedMessage id="TilkjentYtelse.Feriepenger.Tittel" />
          </Heading>
        </Accordion.Header>
        <Accordion.Content>
          <VStack gap="4">
            {opptjeningsår.map(år => (
              <FeriepengerPrÅr
                key={`tabell_${år}`}
                alleAndeler={andeler}
                opptjeningsår={år}
                alleKodeverk={alleKodeverk}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              />
            ))}
          </VStack>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

const finnListeMedOpptjeningsår = (andeler: FeriepengegrunnlagAndel[]): number[] => {
  const årsliste = andeler.map(andel => andel.opptjeningsår).sort((a, b) => a - b);
  return [...new Set(årsliste)];
};
