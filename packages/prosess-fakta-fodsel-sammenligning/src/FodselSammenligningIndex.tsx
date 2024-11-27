import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AvklartBarn, FamilieHendelse, Soknad } from '@navikt/fp-types';

import FodselSammenligningPanel from './components/FodselSammenligningPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  behandlingsTypeKode: string;
  avklartBarn?: AvklartBarn[];
  termindato?: string;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
}

const FodselSammenligningIndex: FunctionComponent<OwnProps> = ({
  behandlingsTypeKode,
  avklartBarn = [],
  termindato,
  vedtaksDatoSomSvangerskapsuke,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
}) => {
  const nrOfDodfodteBarn = avklartBarn.reduce((ab, barn) => ab + (barn.dodsdato ? 1 : 0), 0);
  return (
    <RawIntlProvider value={intl}>
      <FodselSammenligningPanel
        avklartBarn={avklartBarn}
        termindato={termindato}
        vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
        nrOfDodfodteBarn={nrOfDodfodteBarn}
        behandlingsTypeKode={behandlingsTypeKode}
        soknad={soknad}
        soknadOriginalBehandling={soknadOriginalBehandling}
        familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
      />
    </RawIntlProvider>
  );
};

export default FodselSammenligningIndex;
