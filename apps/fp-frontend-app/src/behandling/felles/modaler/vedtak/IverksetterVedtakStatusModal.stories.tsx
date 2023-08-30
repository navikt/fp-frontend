import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { action } from '@storybook/addon-actions';
import { createIntl } from '@navikt/ft-utils';
import { BehandlingResultatType } from '@navikt/ft-kodeverk';

import IverksetterVedtakStatusModal from './IverksetterVedtakStatusModal';
import messages from '../../../../../i18n/nb_NO.json';

const intl = createIntl(messages);

export default {
  title: 'app/vedtak/IverksetterVedtakStatusModal',
  component: IverksetterVedtakStatusModal,
};

export const visIverksetterVedtakInnvilget = () => (
  <RawIntlProvider value={intl}>
    <IverksetterVedtakStatusModal visModal lukkModal={action('button-click')} />
  </RawIntlProvider>
);

export const visIverksetterVedtakAvslatt = () => (
  <RawIntlProvider value={intl}>
    <IverksetterVedtakStatusModal
      visModal
      lukkModal={action('button-click')}
      behandlingsresultat={{
        type: BehandlingResultatType.AVSLATT,
      }}
    />
  </RawIntlProvider>
);
