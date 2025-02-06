import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { ArbeidsgiverOpplysningerPerId, Opptjening } from '@navikt/fp-types';

import { OpptjeningFaktaPanel } from './components/OpptjeningFaktaPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  opptjening?: Opptjening;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const OpptjeningFaktaIndex = ({ opptjening, arbeidsgiverOpplysningerPerId }: Props) => {
  const fastsattOpptjening = opptjening ? opptjening.fastsattOpptjening : undefined;
  const opptjeningAktiviteter = opptjening ? opptjening.opptjeningAktivitetList : undefined;
  const ferdiglignetNæring = opptjening?.ferdiglignetNæring || [];
  return (
    <RawIntlProvider value={intl}>
      <OpptjeningFaktaPanel
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        opptjeningAktiviteter={opptjeningAktiviteter}
        fastsattOpptjening={fastsattOpptjening}
        ferdiglignetNæring={ferdiglignetNæring}
      />
    </RawIntlProvider>
  );
};
