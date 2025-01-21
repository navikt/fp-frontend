import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Fagsak, Medlemskap, Soknad, StandardFaktaPanelProps } from '@navikt/fp-types';

import MedlemskapInfoPanel from './components/MedlemskapInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  medlemskap: Medlemskap;
  soknad: Soknad;
  fagsak: Fagsak;
}

export type MedlemskapFaktaProps = Props & StandardFaktaPanelProps;

export const MedlemskapFaktaIndex = (props: MedlemskapFaktaProps) => (
  <RawIntlProvider value={intl}>
    <MedlemskapInfoPanel {...props} />
  </RawIntlProvider>
);
