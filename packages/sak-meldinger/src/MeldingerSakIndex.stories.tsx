import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { DokumentMalType, FagsakYtelseType, UgunstAarsakType } from '@navikt/fp-kodeverk';

import MeldingerSakIndex from './MeldingerSakIndex';

export default {
  title: 'sak/sak-meldinger',
  component: MeldingerSakIndex,
};

const Template: StoryFn<{
  templates: { kode: string; navn: string; tilgjengelig: boolean }[];
  sprakKode: string;
  fagsakYtelseType: string;
  lagre: () => Promise<any>;
  brukerManglerAdresse: boolean;
}> = ({ templates, sprakKode, fagsakYtelseType, lagre, brukerManglerAdresse }) => (
  <div
    style={{
      width: '600px',
      margin: '50px',
      padding: '20px',
      backgroundColor: 'white',
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
      revurderingVarslingArsak={[
        {
          kode: UgunstAarsakType.BARN_IKKE_REGISTRERT_FOLKEREGISTER,
          navn: 'Barn ikke registrert i folkeregisteret',
          kodeverk: 'UGUNST',
        },
        {
          kode: UgunstAarsakType.ANNET,
          navn: 'Annet',
          kodeverk: 'UGUNST',
        },
      ]}
      setMeldingFormData={() => undefined}
      brukerManglerAdresse={brukerManglerAdresse}
    />
  </div>
);

const innhentDokumentasjon = 'Innhent dokumentasjon';
const revurderingsdokumentasjon = 'Revurderingsdokumentasjon';

export const Default = Template.bind({});
Default.args = {
  templates: [
    {
      kode: DokumentMalType.INNHENTE_OPPLYSNINGER,
      navn: innhentDokumentasjon,
      tilgjengelig: true,
    },
    {
      kode: DokumentMalType.VARSEL_OM_REVURDERING,
      navn: revurderingsdokumentasjon,
      tilgjengelig: true,
    },
  ],
  sprakKode: 'NO',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  lagre: action('button-click') as () => Promise<any>,
  brukerManglerAdresse: false,
};

export const ForSvangerskapspenger = Template.bind({});
ForSvangerskapspenger.args = {
  templates: [
    {
      kode: DokumentMalType.INNHENTE_OPPLYSNINGER,
      navn: innhentDokumentasjon,
      tilgjengelig: true,
    },
    {
      kode: DokumentMalType.VARSEL_OM_REVURDERING,
      navn: revurderingsdokumentasjon,
      tilgjengelig: true,
    },
  ],
  sprakKode: 'NO',
  fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
  lagre: action('button-click') as () => Promise<any>,
  brukerManglerAdresse: false,
};

export const BrukerManglerAdresse = Template.bind({});
BrukerManglerAdresse.args = {
  templates: [
    {
      kode: DokumentMalType.INNHENTE_OPPLYSNINGER,
      navn: innhentDokumentasjon,
      tilgjengelig: true,
    },
    {
      kode: DokumentMalType.VARSEL_OM_REVURDERING,
      navn: revurderingsdokumentasjon,
      tilgjengelig: true,
    },
  ],
  sprakKode: 'NO',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  lagre: action('button-click') as () => Promise<any>,
  brukerManglerAdresse: true,
};
