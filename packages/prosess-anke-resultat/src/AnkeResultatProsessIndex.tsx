import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { AnkeVurdering } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';
import { AlleKodeverk } from '@navikt/ft-types';

import BehandleResultatForm from './components/BehandleResultatForm';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  previewCallback: (data: BrevData) => Promise<any>;
  alleKodeverk: AlleKodeverk;
}

const AnkeResultatProsessIndex: FunctionComponent<OwnProps> = ({
  ankeVurdering,
  previewCallback,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <BehandleResultatForm
      ankeVurderingResultat={ankeVurdering.ankeVurderingResultat}
      previewCallback={previewCallback}
      alleKodeverk={alleKodeverk}
      kabalisert={ankeVurdering.behandletAvKabal}
    />
  </RawIntlProvider>
);

export default AnkeResultatProsessIndex;
