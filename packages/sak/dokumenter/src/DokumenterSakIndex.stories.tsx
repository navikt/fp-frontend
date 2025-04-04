import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

import { Kommunikasjonsretning } from '@navikt/fp-kodeverk';
import type { Dokument } from '@navikt/fp-types';

import { DokumenterSakIndex } from './DokumenterSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';

const withStyleProvider: DecoratorFunction<ReactRenderer> = Story => (
  <div
    style={{
      width: '700px',
      margin: '50px',
      padding: '20px',
      backgroundColor: 'white',
    }}
  >
    <Story />
  </div>
);

const meta = {
  title: 'sak/sak-dokumenter',
  component: DokumenterSakIndex,
  decorators: [withStyleProvider],
  args: {
    saksnummer: '2',
    behandlingUuid: '1',
  },
} satisfies Meta<typeof DokumenterSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    documents: [
      {
        journalpostId: '1',
        dokumentId: '1',
        behandlingUuidList: ['1'],
        tittel: 'Dette er et dokument',
        tidspunkt: '2017-08-01T02:04:25.455',
        kommunikasjonsretning: Kommunikasjonsretning.INN,
        gjelderFor: 'test1',
      },
      {
        journalpostId: '2',
        dokumentId: '2',
        behandlingUuidList: [],
        tittel: 'Dette er et nytt dokument',
        tidspunkt: '2017-02-04T02:54:25.455',
        kommunikasjonsretning: Kommunikasjonsretning.UT,
        gjelderFor: 'test2',
      },
      {
        journalpostId: '3',
        dokumentId: '3',
        behandlingUuidList: [],
        tittel: 'Dette er et tredje dokument',
        tidspunkt: '2017-01-03T10:54:25.455',
        kommunikasjonsretning: Kommunikasjonsretning.NOTAT,
        gjelderFor: 'Dette er en lang tekst som ikke skal kuttes',
      },
      {
        journalpostId: '4',
        dokumentId: '4',
        behandlingUuidList: [],
        tittel: 'Dette er et fjerde dokument',
        tidspunkt: '2017-03-02T02:54:25.455',
        kommunikasjonsretning: Kommunikasjonsretning.UT,
        gjelderFor: 'test4',
      },
      {
        journalpostId: '5',
        dokumentId: '5',
        behandlingUuidList: [],
        tittel: 'Dette er et femte dokument',
        tidspunkt: '2017-04-01T02:54:25.455',
        kommunikasjonsretning: Kommunikasjonsretning.INN,
        gjelderFor: 'test5',
      },
    ] as Dokument[],
  },
};

export const IngenDokumenter: Story = {
  args: {
    documents: [],
  },
};
