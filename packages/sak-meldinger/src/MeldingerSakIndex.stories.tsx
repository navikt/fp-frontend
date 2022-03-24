import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import ugunstAarsakTyper from '@fpsak-frontend/kodeverk/src/ugunstAarsakTyper';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import MeldingerSakIndex from './MeldingerSakIndex';

export default {
  title: 'sak/sak-meldinger',
  component: MeldingerSakIndex,
};

const Template: Story<{
  recipients: string[],
  templates: { kode: string, navn: string, tilgjengelig: boolean }[],
  sprakKode: string,
  fagsakYtelseType: string,
  lagre: () => Promise<any>,
}> = ({
  recipients,
  templates,
  sprakKode,
  fagsakYtelseType,
  lagre,
}) => (
  <div style={{
    width: '600px', margin: '50px', padding: '20px', backgroundColor: 'white',
  }}
  >
    <MeldingerSakIndex
      submitCallback={lagre}
      recipients={recipients}
      templates={templates}
      sprakKode={sprakKode}
      previewCallback={action('button-click')}
      isKontrollerRevurderingApOpen={false}
      kanVeilede={false}
      fagsakYtelseType={fagsakYtelseType}
      revurderingVarslingArsak={[{
        kode: ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER,
        navn: 'Barn ikke registrert i folkeregisteret',
        kodeverk: 'UGUNST',
      }, {
        kode: ugunstAarsakTyper.ANNET,
        navn: 'Annet',
        kodeverk: 'UGUNST',
      }]}
      setMeldingForData={() => undefined}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  recipients: ['Søker'],
  templates: [{
    kode: dokumentMalType.INNHENTE_OPPLYSNINGER,
    navn: 'Innhent dokumentasjon',
    tilgjengelig: true,
  }, {
    kode: dokumentMalType.VARSEL_OM_REVURDERING,
    navn: 'Revurderingsdokumentasjon',
    tilgjengelig: true,
  }],
  sprakKode: 'NO',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  lagre: action('button-click') as () => Promise<any>,
};

export const ForSvangerskapspenger = Template.bind({});
ForSvangerskapspenger.args = {
  recipients: ['Søker'],
  templates: [{
    kode: dokumentMalType.INNHENTE_OPPLYSNINGER,
    navn: 'Innhent dokumentasjon',
    tilgjengelig: true,
  }, {
    kode: dokumentMalType.VARSEL_OM_REVURDERING,
    navn: 'Revurderingsdokumentasjon',
    tilgjengelig: true,
  }],
  sprakKode: 'NO',
  fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
  lagre: action('button-click') as () => Promise<any>,
};
