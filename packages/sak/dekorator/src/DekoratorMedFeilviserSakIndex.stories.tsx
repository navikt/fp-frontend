import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { DekoratorMedFeilviserSakIndex } from './DekoratorMedFeilviserSakIndex';

import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const meta = {
  title: 'sak/sak-dekoratør',
  component: DekoratorMedFeilviserSakIndex,
  args: {
    tittel: 'Svangerskap, fødsel og adopsjon',
    tittelLenke: '/fpsak',
    navAnsattNavn: 'Espen Utvikler',
    setSiteHeight: action('button-click'),
    fjernFeilmeldinger: action('button-click'),
    interneLenker: [],
    eksterneLenker: [
      {
        tekst: 'Nav',
      },
    ],
    theme: 'light',
    setTheme: action('setTheme'),
    nyVersjonTilgjengelig: false,
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const fjernFeilmeldinger = () => {
      args.fjernFeilmeldinger();
      setArgs(oldArgs => ({ ...oldArgs, feilmeldinger: [] }));
    };

    return (
      <div style={{ marginLeft: '-56px' }}>
        <DekoratorMedFeilviserSakIndex {...args} fjernFeilmeldinger={fjernFeilmeldinger} />
      </div>
    );
  },
} satisfies Meta<typeof DekoratorMedFeilviserSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const UtenFeilmeldinger: Story = {
  args: {
    feilmeldinger: [],
    interneLenker: [
      {
        tekst: 'Journal',
      },
    ],
  },
};

export const MedFeilmeldinger: Story = {
  args: {
    feilmeldinger: [
      {
        melding: 'Feilmelding 1',
      },
      {
        melding: 'Spesialtegn-test: Høna &amp; egget og &#34;test1&#34; og &#39;test2&#39;',
      },
    ],
  },
};

export const MedFeilmeldingDetaljer: Story = {
  args: {
    feilmeldinger: [
      {
        melding:
          'Noe feilet. Feilen kan være forbigående. Prøv og behandle saken litt senere. Om feilen oppstår igjen meld den inn via porten.',
        tilleggsInfo: {
          melding: 'test',
          ekstra: 'test2',
        },
      },
    ],
  },
};

export const NyAppVersjonErDetektert: Story = {
  args: {
    feilmeldinger: [],
    nyVersjonTilgjengelig: true,
  },
};
