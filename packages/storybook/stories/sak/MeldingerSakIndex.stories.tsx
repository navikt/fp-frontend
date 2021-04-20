import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import MeldingerSakIndex, { MessagesModalSakIndex } from '@fpsak-frontend/sak-meldinger';
import ugunstAarsakTyper from '@fpsak-frontend/kodeverk/src/ugunstAarsakTyper';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

const recipients = ['Søker'];
const templates = [{
  kode: dokumentMalType.INNHENT_DOK,
  navn: 'Innhent dokumentasjon',
  tilgjengelig: true,
}, {
  kode: dokumentMalType.REVURDERING_DOK,
  navn: 'Revurderingsdokumentasjon',
  tilgjengelig: true,
}];

const sprakKode = {
  kode: '',
  kodeverk: '',
};

export default {
  title: 'sak/sak-meldinger',
  component: MeldingerSakIndex,
  decorators: [withKnobs],
};

export const visMeldingerPanel = () => (
  <div style={{
    width: '600px', margin: '50px', padding: '20px', backgroundColor: 'white',
  }}
  >
    <MeldingerSakIndex
      submitCallback={action('button-click')}
      recipients={object('recipients', recipients)}
      templates={object('templates', templates)}
      sprakKode={object('sprakKode', sprakKode)}
      previewCallback={action('button-click')}
      isKontrollerRevurderingApOpen={false}
      kanVeilede={false}
      fagsakYtelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      }}
      revurderingVarslingArsak={[{
        kode: ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER,
        navn: 'Barn ikke registrert i folkeregisteret',
        kodeverk: 'UGUNST',
      }, {
        kode: ugunstAarsakTyper.ANNET,
        navn: 'Annet',
        kodeverk: 'UGUNST',
      }]}
    />
  </div>
);

export const visMeldingModal = () => (
  <MessagesModalSakIndex
    showModal
    closeEvent={action('button-click')}
  />
);
