import React, { FC } from 'react';
import { RawIntlProvider } from 'react-intl';

import { MedlemskapV3, Soknad, StandardFaktaPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  medlemskap: MedlemskapV3;
  soknad: Soknad;
}

export type MedlemskapFaktaProps = OwnProps & StandardFaktaPanelProps

const MedlemskapFaktaIndex: FC<MedlemskapFaktaProps> = () => (
  <RawIntlProvider value={intl}>
  </RawIntlProvider>
);

export default MedlemskapFaktaIndex;
