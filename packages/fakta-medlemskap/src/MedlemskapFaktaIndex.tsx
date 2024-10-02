import React, { FC } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Fagsak, Medlemskap, Soknad, StandardFaktaPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import MedlemskapInfoPanel from './components/MedlemskapInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  medlemskap: Medlemskap;
  soknad: Soknad;
  fagsak: Fagsak;
}

export type MedlemskapFaktaProps = Props & StandardFaktaPanelProps;

const MedlemskapFaktaIndex: FC<MedlemskapFaktaProps> = props => (
  <RawIntlProvider value={intl}>
    <MedlemskapInfoPanel {...props} />
  </RawIntlProvider>
);

export default MedlemskapFaktaIndex;
