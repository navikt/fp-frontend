import React, { FC } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Fagsak, MedlemskapV3, Soknad, StandardFaktaPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import MedlemskapInfoPanel from './components/MedlemskapInfoPanel';

const intl = createIntl(messages);

interface Props {
  medlemskap: MedlemskapV3;
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
