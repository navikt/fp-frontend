import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { dokumentMalType, fagsakYtelseType as FagsakYtelseType, ugunstAarsakTyper } from '@navikt/fp-kodeverk';

import MeldingerSakIndex from './MeldingerSakIndex';

export default {
  title: 'sak/sak-meldinger',
  component: MeldingerSakIndex,
};

const Template: Story<{
  templates: { kode: string, navn: string, tilgjengelig: boolean }[],
  sprakKode: string,
  fagsakYtelseType: string,
  lagre: () => Promise<any>,
  brukerManglerAdresse: boolean
}> = ({
  templates,
  sprakKode,
  fagsakYtelseType,
  lagre,
  brukerManglerAdresse,
}) => (
  <div style={{
    width: '600px', margin: '50px', padding: '20px', backgroundColor: 'white',
  }}
  >
    <MeldingerSakIndex
      submitCallback={lagre}
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
      brukerManglerAdresse={brukerManglerAdresse}
    />
  </div>
);

const innhentDokumentasjon = 'Innhent dokumentasjon';
const revurderingsdokumentasjon = 'Revurderingsdokumentasjon';

export const Default = Template.bind({});
Default.args = {
  templates: [{
    kode: dokumentMalType.INNHENTE_OPPLYSNINGER,
    navn: innhentDokumentasjon,
    tilgjengelig: true,
  }, {
    kode: dokumentMalType.VARSEL_OM_REVURDERING,
    navn: revurderingsdokumentasjon,
    tilgjengelig: true,
  }],
  sprakKode: 'NO',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  lagre: action('button-click') as () => Promise<any>,
  brukerManglerAdresse: false,
};

export const ForSvangerskapspenger = Template.bind({});
ForSvangerskapspenger.args = {
  templates: [{
    kode: dokumentMalType.INNHENTE_OPPLYSNINGER,
    navn: innhentDokumentasjon,
    tilgjengelig: true,
  }, {
    kode: dokumentMalType.VARSEL_OM_REVURDERING,
    navn: revurderingsdokumentasjon,
    tilgjengelig: true,
  }],
  sprakKode: 'NO',
  fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
  lagre: action('button-click') as () => Promise<any>,
  brukerManglerAdresse: false,
};

export const BrukerManglerAdresse = Template.bind({});
BrukerManglerAdresse.args = {
  templates: [{
    kode: dokumentMalType.INNHENTE_OPPLYSNINGER,
    navn: innhentDokumentasjon,
    tilgjengelig: true,
  }, {
    kode: dokumentMalType.VARSEL_OM_REVURDERING,
    navn: revurderingsdokumentasjon,
    tilgjengelig: true,
  }],
  sprakKode: 'NO',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  lagre: action('button-click') as () => Promise<any>,
  brukerManglerAdresse: true,
};
